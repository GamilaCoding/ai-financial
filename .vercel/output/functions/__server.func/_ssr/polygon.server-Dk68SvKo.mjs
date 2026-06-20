//#region node_modules/.nitro/vite/services/ssr/assets/polygon.server-Dk68SvKo.js
var BASE = "https://api.polygon.io";
var cache = /* @__PURE__ */ new Map();
var TTL = 300 * 1e3;
async function pget(path) {
	const apiKey = process.env.POLYGON_API_KEY;
	if (!apiKey) return null;
	const url = `${BASE}${path}${path.includes("?") ? "&" : "?"}apiKey=${apiKey}`;
	const cacheKey = path;
	const cached = cache.get(cacheKey);
	if (cached && Date.now() - cached.at < TTL) return cached.value;
	const res = await fetch(url);
	if (!res.ok) {
		const text = await res.text();
		throw new Error(`Polygon API error (${res.status}): ${text.slice(0, 200)}`);
	}
	const json = await res.json();
	cache.set(cacheKey, {
		at: Date.now(),
		value: json
	});
	return json;
}
async function fetchAggregates(ticker, days = 60) {
	const to = /* @__PURE__ */ new Date();
	const from = /* @__PURE__ */ new Date();
	from.setDate(to.getDate() - days - 7);
	const fmt = (d) => d.toISOString().slice(0, 10);
	const data = await pget(`/v2/aggs/ticker/${encodeURIComponent(ticker.toUpperCase())}/range/1/day/${fmt(from)}/${fmt(to)}?adjusted=true&sort=asc&limit=${days + 20}`);
	if (!data) return Array.from({ length: days }).map((_, i) => {
		const date = new Date(from);
		date.setDate(date.getDate() + i);
		const basePrice = 150 + Math.sin(i / 5) * 20;
		return {
			t: date.getTime(),
			o: basePrice,
			c: basePrice + Math.random() * 5 - 2.5,
			h: basePrice + 5,
			l: basePrice - 5,
			v: Math.floor(Math.random() * 1e7)
		};
	});
	return (data.results ?? []).slice(-days);
}
async function fetchTickerSnapshot(ticker) {
	const data = await pget(`/v2/snapshot/locale/us/markets/stocks/tickers/${encodeURIComponent(ticker.toUpperCase())}`);
	if (!data) return {
		ticker: ticker.toUpperCase(),
		price: 150.25,
		change: 2.5,
		changePercent: 1.69,
		open: 148,
		high: 151,
		low: 147,
		volume: 12e5,
		prevClose: 147.75
	};
	const t = data.ticker;
	if (!t) throw new Error(`No snapshot for ${ticker}`);
	const price = t.lastTrade?.p ?? t.day?.c ?? t.prevDay?.c ?? 0;
	return {
		ticker: t.ticker,
		price,
		change: t.todaysChange ?? 0,
		changePercent: t.todaysChangePerc ?? 0,
		open: t.day?.o ?? 0,
		high: t.day?.h ?? 0,
		low: t.day?.l ?? 0,
		volume: t.day?.v ?? 0,
		prevClose: t.prevDay?.c ?? 0
	};
}
async function fetchTopGainers(limit = 10) {
	const data = await pget(`/v2/snapshot/locale/us/markets/stocks/gainers`);
	if (!data) return [
		{
			ticker: "AAPL",
			price: 155,
			changePercent: 2.5,
			change: 3.5,
			volume: 55e6
		},
		{
			ticker: "MSFT",
			price: 290,
			changePercent: 1.5,
			change: 4.2,
			volume: 22e6
		},
		{
			ticker: "GOOG",
			price: 2750,
			changePercent: 1.2,
			change: 33.5,
			volume: 15e5
		},
		{
			ticker: "TSLA",
			price: 720,
			changePercent: 5.5,
			change: 35.5,
			volume: 3e7
		},
		{
			ticker: "AMZN",
			price: 3450,
			changePercent: .8,
			change: 27.5,
			volume: 35e5
		},
		{
			ticker: "NVDA",
			price: 450,
			changePercent: 4.2,
			change: 18,
			volume: 45e6
		},
		{
			ticker: "META",
			price: 310,
			changePercent: 3.1,
			change: 9.5,
			volume: 18e6
		}
	].slice(0, limit);
	return (data.tickers ?? []).slice(0, limit).map((t) => ({
		ticker: t.ticker,
		price: t.lastTrade?.p ?? t.day?.c ?? 0,
		changePercent: t.todaysChangePerc ?? 0,
		change: t.todaysChange ?? 0,
		volume: t.day?.v ?? 0
	}));
}
//#endregion
export { fetchAggregates, fetchTickerSnapshot, fetchTopGainers };
