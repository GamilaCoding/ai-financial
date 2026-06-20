import { createFileRoute } from "@tanstack/react-router";
import {
  streamText,
  convertToModelMessages,
  stepCountIs,
  tool,
  type UIMessage,
} from "ai";
import { z } from "zod";
import { google } from "@ai-sdk/google";

interface ChatRequestBody {
  messages?: UIMessage[];
  conversationId?: string;
}

const SYSTEM_PROMPT = `You are AlphaQuant, a senior sell-side equity research analyst. You help users analyze US equities, build portfolio narratives, and answer market questions in clear, confident, professional English (or the language the user writes in).

You have live tools that call Polygon.io for real market data. ALWAYS use the tools to fetch fresh data — never invent prices, returns, or top movers. If the user asks an open-ended market question, plan which tools to call, call them, then summarize the findings.

Format your responses in Markdown. Use bullet points, tables, and headings where useful. When you produce a substantive analysis the user might want to keep, end by calling the saveReport tool with a clear title, the tickers covered, and a recommendation ("Strong Buy" | "Buy" | "Hold" | "Sell").

Be specific and data-driven. Avoid generic disclaimers. The app already shows "Not financial advice" in its footer.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }: any) => {
        const body = (await request.json()) as ChatRequestBody;
        const messages = body.messages;
        const conversationId = body.conversationId;
        if (!Array.isArray(messages)) {
          return new Response("messages required", { status: 400 });
        }

        const key = process.env.GEMINI_API_KEY;
        if (!key) return new Response("GEMINI_API_KEY missing", { status: 500 });
        if (!process.env.POLYGON_API_KEY) {
          return new Response("POLYGON_API_KEY missing", { status: 500 });
        }

        const model = google("gemini-1.5-flash");

        const tools = {
          getStockHistory: tool({
            description:
              "Fetch historical daily prices for a US stock ticker from Polygon.io. Returns OHLC summary plus per-day closes.",
            inputSchema: z.object({
              ticker: z.string().describe("Stock ticker, e.g. AAPL"),
              days: z.number().int().min(5).max(365).default(60),
            }),
            execute: async ({ ticker, days }) => {
              const { fetchAggregates } = await import("@/lib/polygon.server");
              const bars = await fetchAggregates(ticker, days);
              if (!bars.length) return { error: `No data for ${ticker}` };
              const closes = bars.map((b) => b.c);
              const start = closes[0];
              const end = closes[closes.length - 1];
              return {
                ticker: ticker.toUpperCase(),
                days: bars.length,
                start: +start.toFixed(2),
                end: +end.toFixed(2),
                changePercent: +(((end - start) / start) * 100).toFixed(2),
                high: +Math.max(...closes).toFixed(2),
                low: +Math.min(...closes).toFixed(2),
                avgVolume: Math.round(bars.reduce((s, b) => s + b.v, 0) / bars.length),
                lastClose: +end.toFixed(2),
              };
            },
          }),
          getTickerSnapshot: tool({
            description: "Get the latest live snapshot (price, day change) for a US ticker.",
            inputSchema: z.object({ ticker: z.string() }),
            execute: async ({ ticker }) => {
              const { fetchTickerSnapshot } = await import("@/lib/polygon.server");
              return await fetchTickerSnapshot(ticker);
            },
          }),
          getTopGainers: tool({
            description:
              "Get the top gaining US stocks for the current trading session, ranked by % change.",
            inputSchema: z.object({ limit: z.number().int().min(1).max(20).default(10) }),
            execute: async ({ limit }) => {
              const { fetchTopGainers } = await import("@/lib/polygon.server");
              const tickers = await fetchTopGainers(limit);
              return { count: tickers.length, tickers };
            },
          }),
          calculateROI: tool({
            description:
              "Calculate the return on investing a dollar amount in a single stock over a given period (in trading days). Returns final value, profit, and percentage return.",
            inputSchema: z.object({
              ticker: z.string(),
              amount: z.number().positive().describe("USD invested at start of the period"),
              days: z.number().int().min(5).max(365).describe("Trading days lookback, e.g. 252 ≈ 1 year"),
            }),
            execute: async ({ ticker, amount, days }) => {
              const { fetchAggregates } = await import("@/lib/polygon.server");
              const bars = await fetchAggregates(ticker, days);
              if (!bars.length) return { error: `No data for ${ticker}` };
              const start = bars[0].c;
              const end = bars[bars.length - 1].c;
              const shares = amount / start;
              const finalValue = shares * end;
              return {
                ticker: ticker.toUpperCase(),
                amountInvested: amount,
                startPrice: +start.toFixed(2),
                endPrice: +end.toFixed(2),
                shares: +shares.toFixed(4),
                finalValue: +finalValue.toFixed(2),
                profit: +(finalValue - amount).toFixed(2),
                returnPercent: +(((end - start) / start) * 100).toFixed(2),
                periodDays: bars.length,
              };
            },
          }),
          saveReport: tool({
            description:
              "Save a finalized analysis as a persistent report. Call this AFTER you've completed the analysis. The content should be full Markdown including all findings.",
            inputSchema: z.object({
              title: z.string().min(3).max(200),
              content: z.string().min(50).describe("Full analysis in Markdown"),
              tickers: z.array(z.string()).default([]),
              recommendation: z.enum(["Strong Buy", "Buy", "Hold", "Sell"]).optional(),
            }),
            execute: async ({ title, content, tickers, recommendation }) => {
              const { getDb } = await import("@/lib/db.server");
              const sql = await getDb();
              try {
                const [row] = await sql`
                  INSERT INTO reports (title, content_md, tickers, recommendation)
                  VALUES (${title}, ${content}, ${tickers.map((t) => t.toUpperCase())}, ${recommendation ?? null})
                  RETURNING id
                `;
                return { ok: true, id: row.id, url: `/reports/${row.id}` };
              } catch (error: any) {
                return { ok: false, error: error.message };
              }
            },
          }),
        };

        const result = streamText({
          model,
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
          tools,
          stopWhen: stepCountIs(50),
        });

        return result.toUIMessageStreamResponse({
          originalMessages: messages,
          onFinish: async ({ messages: finalMessages }) => {
            if (!conversationId) return;
            try {
              const { getDb } = await import("@/lib/db.server");
              const sql = await getDb();
              // Replace messages for this conversation (simplest: delete + insert all)
              await sql`DELETE FROM chat_messages WHERE conversation_id = ${conversationId}`;
              
              const rows = finalMessages.map((m) => ({
                conversation_id: conversationId,
                role: m.role,
                parts: JSON.stringify(m.parts),
              }));
              if (rows.length) {
                await sql`INSERT INTO chat_messages ${sql(rows, 'conversation_id', 'role', 'parts')}`;
              }
              // Update conversation title from first user message
              const firstUser = finalMessages.find((m) => m.role === "user");
              if (firstUser) {
                const text = firstUser.parts
                  .filter((p) => p.type === "text")
                  .map((p) => (p as { text: string }).text)
                  .join(" ")
                  .slice(0, 80);
                if (text) {
                  await sql`UPDATE conversations SET title = ${text}, updated_at = NOW() WHERE id = ${conversationId}`;
                }
              }
            } catch (err) {
              console.error("Failed to persist chat:", err);
            }
          },
        });
      },
    },
  },
});
