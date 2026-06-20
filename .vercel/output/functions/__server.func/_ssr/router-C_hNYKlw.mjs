import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as streamText, i as stepCountIs, r as convertToModelMessages } from "../_libs/@ai-sdk/react+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { t as Route$6 } from "./chat._conversationId-DW08OAAH.mjs";
import { H as tool, _t as arrayType, bt as objectType, vt as enumType, xt as stringType, yt as numberType } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Route$7 } from "./reports._id-CJnUO4zM.mjs";
import { t as google } from "../_libs/ai-sdk__google.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C_hNYKlw.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D8ebn1Va.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "AlphaQuant AI — Intelligent Market Analysis" },
			{
				name: "description",
				content: "AI-powered equity research dashboard. Track tickers, visualize trends, and generate institutional-grade reports."
			},
			{
				name: "author",
				content: "AlphaQuant"
			},
			{
				property: "og:title",
				content: "AlphaQuant AI"
			},
			{
				property: "og:description",
				content: "AI-powered equity research dashboard."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$3 = () => import("./settings-tCkzxVhV.mjs");
var Route$4 = createFileRoute("/settings")({
	head: () => ({ meta: [{ title: "AlphaQuant AI — Settings" }, {
		name: "description",
		content: "Configure API keys and server environment for AlphaQuant AI."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./routes-dIwhTHi_.mjs");
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "AlphaQuant AI — Live Market Intelligence" }, {
		name: "description",
		content: "Real-time stock dashboards powered by Polygon.io and an AI analyst agent. Charts, ROI, and saved research reports."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./reports.index-Du_HKX6T.mjs");
var Route$2 = createFileRoute("/reports/")({
	head: () => ({ meta: [{ title: "AlphaQuant AI — Saved Reports" }, {
		name: "description",
		content: "All AI-generated equity research reports saved from your AlphaQuant conversations."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./chat.index-6f9wi9Y8.mjs");
var Route$1 = createFileRoute("/chat/")({
	head: () => ({ meta: [{ title: "AlphaQuant AI Chat — Analyst Agent" }, {
		name: "description",
		content: "Chat with your AlphaQuant AI analyst. Ask about live market movers, ROI scenarios, and save reports."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SYSTEM_PROMPT = `You are AlphaQuant, a senior sell-side equity research analyst. You help users analyze US equities, build portfolio narratives, and answer market questions in clear, confident, professional English (or the language the user writes in).

You have live tools that call Polygon.io for real market data. ALWAYS use the tools to fetch fresh data — never invent prices, returns, or top movers. If the user asks an open-ended market question, plan which tools to call, call them, then summarize the findings.

Format your responses in Markdown. Use bullet points, tables, and headings where useful. When you produce a substantive analysis the user might want to keep, end by calling the saveReport tool with a clear title, the tickers covered, and a recommendation ("Strong Buy" | "Buy" | "Hold" | "Sell").

Be specific and data-driven. Avoid generic disclaimers. The app already shows "Not financial advice" in its footer.`;
var Route = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
	const body = await request.json();
	const messages = body.messages;
	const conversationId = body.conversationId;
	if (!Array.isArray(messages)) return new Response("messages required", { status: 400 });
	if (!process.env.GEMINI_API_KEY) return new Response("GEMINI_API_KEY missing", { status: 500 });
	if (!process.env.POLYGON_API_KEY) return new Response("POLYGON_API_KEY missing", { status: 500 });
	const model = google("gemini-1.5-flash");
	const tools = {
		getStockHistory: tool({
			description: "Fetch historical daily prices for a US stock ticker from Polygon.io. Returns OHLC summary plus per-day closes.",
			inputSchema: objectType({
				ticker: stringType().describe("Stock ticker, e.g. AAPL"),
				days: numberType().int().min(5).max(365).default(60)
			}),
			execute: async ({ ticker, days }) => {
				const { fetchAggregates } = await import("./polygon.server-Dk68SvKo.mjs");
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
					changePercent: +((end - start) / start * 100).toFixed(2),
					high: +Math.max(...closes).toFixed(2),
					low: +Math.min(...closes).toFixed(2),
					avgVolume: Math.round(bars.reduce((s, b) => s + b.v, 0) / bars.length),
					lastClose: +end.toFixed(2)
				};
			}
		}),
		getTickerSnapshot: tool({
			description: "Get the latest live snapshot (price, day change) for a US ticker.",
			inputSchema: objectType({ ticker: stringType() }),
			execute: async ({ ticker }) => {
				const { fetchTickerSnapshot } = await import("./polygon.server-Dk68SvKo.mjs");
				return await fetchTickerSnapshot(ticker);
			}
		}),
		getTopGainers: tool({
			description: "Get the top gaining US stocks for the current trading session, ranked by % change.",
			inputSchema: objectType({ limit: numberType().int().min(1).max(20).default(10) }),
			execute: async ({ limit }) => {
				const { fetchTopGainers } = await import("./polygon.server-Dk68SvKo.mjs");
				const tickers = await fetchTopGainers(limit);
				return {
					count: tickers.length,
					tickers
				};
			}
		}),
		calculateROI: tool({
			description: "Calculate the return on investing a dollar amount in a single stock over a given period (in trading days). Returns final value, profit, and percentage return.",
			inputSchema: objectType({
				ticker: stringType(),
				amount: numberType().positive().describe("USD invested at start of the period"),
				days: numberType().int().min(5).max(365).describe("Trading days lookback, e.g. 252 ≈ 1 year")
			}),
			execute: async ({ ticker, amount, days }) => {
				const { fetchAggregates } = await import("./polygon.server-Dk68SvKo.mjs");
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
					returnPercent: +((end - start) / start * 100).toFixed(2),
					periodDays: bars.length
				};
			}
		}),
		saveReport: tool({
			description: "Save a finalized analysis as a persistent report. Call this AFTER you've completed the analysis. The content should be full Markdown including all findings.",
			inputSchema: objectType({
				title: stringType().min(3).max(200),
				content: stringType().min(50).describe("Full analysis in Markdown"),
				tickers: arrayType(stringType()).default([]),
				recommendation: enumType([
					"Strong Buy",
					"Buy",
					"Hold",
					"Sell"
				]).optional()
			}),
			execute: async ({ title, content, tickers, recommendation }) => {
				const { getDb } = await import("./db.server-bXYhKQnF.mjs");
				const sql = await getDb();
				try {
					const [row] = await sql`
                  INSERT INTO reports (title, content_md, tickers, recommendation)
                  VALUES (${title}, ${content}, ${tickers.map((t) => t.toUpperCase())}, ${recommendation ?? null})
                  RETURNING id
                `;
					return {
						ok: true,
						id: row.id,
						url: `/reports/${row.id}`
					};
				} catch (error) {
					return {
						ok: false,
						error: error.message
					};
				}
			}
		})
	};
	return streamText({
		model,
		system: SYSTEM_PROMPT,
		messages: await convertToModelMessages(messages),
		tools,
		stopWhen: stepCountIs(50)
	}).toUIMessageStreamResponse({
		originalMessages: messages,
		onFinish: async ({ messages: finalMessages }) => {
			if (!conversationId) return;
			try {
				const { getDb } = await import("./db.server-bXYhKQnF.mjs");
				const sql = await getDb();
				await sql`DELETE FROM chat_messages WHERE conversation_id = ${conversationId}`;
				const rows = finalMessages.map((m) => ({
					conversation_id: conversationId,
					role: m.role,
					parts: JSON.stringify(m.parts)
				}));
				if (rows.length) await sql`INSERT INTO chat_messages ${sql(rows, "conversation_id", "role", "parts")}`;
				const firstUser = finalMessages.find((m) => m.role === "user");
				if (firstUser) {
					const text = firstUser.parts.filter((p) => p.type === "text").map((p) => p.text).join(" ").slice(0, 80);
					if (text) await sql`UPDATE conversations SET title = ${text}, updated_at = NOW() WHERE id = ${conversationId}`;
				}
			} catch (err) {
				console.error("Failed to persist chat:", err);
			}
		}
	});
} } } });
var SettingsRoute = Route$4.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => Route$5
});
var IndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var ReportsIndexRoute = Route$2.update({
	id: "/reports/",
	path: "/reports/",
	getParentRoute: () => Route$5
});
var ChatIndexRoute = Route$1.update({
	id: "/chat/",
	path: "/chat/",
	getParentRoute: () => Route$5
});
var ReportsIdRoute = Route$7.update({
	id: "/reports/$id",
	path: "/reports/$id",
	getParentRoute: () => Route$5
});
var ChatConversationIdRoute = Route$6.update({
	id: "/chat/$conversationId",
	path: "/chat/$conversationId",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute,
	SettingsRoute,
	ApiChatRoute: Route.update({
		id: "/api/chat",
		path: "/api/chat",
		getParentRoute: () => Route$5
	}),
	ChatConversationIdRoute,
	ReportsIdRoute,
	ChatIndexRoute,
	ReportsIndexRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
