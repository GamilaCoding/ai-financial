import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const TickerInput = z.object({
  ticker: z.string().min(1).max(8),
  days: z.number().int().min(5).max(120).default(60),
});

export interface StockSeries {
  ticker: string;
  data: Array<{ date: string; price: number }>;
  start: number;
  end: number;
  high: number;
  low: number;
  change: number; // percentage
}

export const fetchStockSeries = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => TickerInput.parse(input))
  .handler(async ({ data }): Promise<StockSeries> => {
    const { fetchAggregates } = await import("./polygon.server");
    const bars = await fetchAggregates(data.ticker, data.days);
    if (bars.length === 0) {
      throw new Error(`No price data returned for ${data.ticker}.`);
    }
    const series = bars.map((b) => ({
      date: new Date(b.t).toISOString().slice(5, 10),
      price: +b.c.toFixed(2),
    }));
    const prices = bars.map((b) => b.c);
    const start = prices[0];
    const end = prices[prices.length - 1];
    return {
      ticker: data.ticker.toUpperCase(),
      data: series,
      start: +start.toFixed(2),
      end: +end.toFixed(2),
      high: +Math.max(...prices).toFixed(2),
      low: +Math.min(...prices).toFixed(2),
      change: +(((end - start) / start) * 100).toFixed(2),
    };
  });
