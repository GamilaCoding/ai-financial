import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { bt as objectType, xt as stringType, yt as numberType } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stocks.functions-DAtFoAJh.js
var TickerInput = objectType({
	ticker: stringType().min(1).max(8),
	days: numberType().int().min(5).max(120).default(60)
});
var fetchStockSeries_createServerFn_handler = createServerRpc({
	id: "7d68271a0de1eb6fcbf8758349e0278aef6ddd679854e171c8e99b74861984e4",
	name: "fetchStockSeries",
	filename: "src/lib/stocks.functions.ts"
}, (opts) => fetchStockSeries.__executeServer(opts));
var fetchStockSeries = createServerFn({ method: "POST" }).inputValidator((input) => TickerInput.parse(input)).handler(fetchStockSeries_createServerFn_handler, async ({ data }) => {
	const { fetchAggregates } = await import("./polygon.server-Dk68SvKo.mjs");
	const bars = await fetchAggregates(data.ticker, data.days);
	if (bars.length === 0) throw new Error(`No price data returned for ${data.ticker}.`);
	const series = bars.map((b) => ({
		date: new Date(b.t).toISOString().slice(5, 10),
		price: +b.c.toFixed(2)
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
		change: +((end - start) / start * 100).toFixed(2)
	};
});
//#endregion
export { fetchStockSeries_createServerFn_handler };
