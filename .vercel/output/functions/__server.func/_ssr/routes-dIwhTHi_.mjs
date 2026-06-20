import { o as __toESM } from "../_runtime.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { o as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { n as useServerFn, t as createSsrRpc } from "./createSsrRpc-C6mtSl4V.mjs";
import { t as Button } from "./button-mXyZaY3O.mjs";
import { n as Input, t as Badge } from "./badge-B7BG74Lm.mjs";
import { bt as objectType, xt as stringType, yt as numberType } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { O as Activity, T as ArrowUpRight, c as Settings, d as Plus, f as MessageSquarePlus, h as FileText, i as TriangleAlert, p as LoaderCircle, r as TrendingUp, s as Sparkles, t as X, w as BrainCircuit } from "../_libs/lucide-react.mjs";
import { a as CartesianGrid, c as Legend, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-dIwhTHi_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TickerInput = objectType({
	ticker: stringType().min(1).max(8),
	days: numberType().int().min(5).max(120).default(60)
});
var fetchStockSeries = createServerFn({ method: "POST" }).inputValidator((input) => TickerInput.parse(input)).handler(createSsrRpc("7d68271a0de1eb6fcbf8758349e0278aef6ddd679854e171c8e99b74861984e4"));
var CHART_COLORS = [
	"var(--chart-1)",
	"var(--chart-2)",
	"var(--chart-3)",
	"var(--chart-4)",
	"var(--chart-5)"
];
function AlphaQuantDashboard() {
	const [tickers, setTickers] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [stage, setStage] = (0, import_react.useState)("idle");
	const [series, setSeries] = (0, import_react.useState)([]);
	const [apiError, setApiError] = (0, import_react.useState)(null);
	const fetchSeries = useServerFn(fetchStockSeries);
	const navigate = useNavigate();
	const addTicker = (e) => {
		e.preventDefault();
		const v = input.trim().toUpperCase();
		if (v.length < 3) return setError("Tickers must be at least 3 characters (e.g. AAPL, TSLA).");
		if (tickers.includes(v)) return setError(`${v} is already in your watchlist.`);
		if (tickers.length >= 5) return setError("Maximum of 5 tickers per report.");
		setTickers([...tickers, v]);
		setInput("");
		setError("");
	};
	const remove = (t) => setTickers(tickers.filter((x) => x !== t));
	const generate = async () => {
		if (!tickers.length) return;
		setStage("loading");
		setApiError(null);
		try {
			setSeries(await Promise.all(tickers.map((t) => fetchSeries({ data: {
				ticker: t,
				days: 60
			} }))));
			setStage("report");
		} catch (err) {
			console.error(err);
			setApiError(err instanceof Error ? err.message : "Failed to fetch market data.");
			setStage("idle");
		}
	};
	const reset = () => {
		setStage("idle");
		setSeries([]);
		setApiError(null);
	};
	const askAnalyst = () => {
		navigate({ to: "/chat" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "relative min-h-screen px-6 py-10 md:px-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				stage === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					apiError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-start gap-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: "Data request failed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-destructive/80",
							children: apiError
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionPanel, {
						tickers,
						input,
						error,
						onInput: setInput,
						onSubmit: addTicker,
						onRemove: remove,
						onGenerate: generate
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentTeaser, {})
				] }),
				stage === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingPanel, { tickers }),
				stage === "report" && series.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportPanel, {
					series,
					onReset: reset,
					onAskAnalyst: askAnalyst
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "mt-16 text-center text-xs text-muted-foreground",
					children: "AlphaQuant AI · Live data from Polygon.io · Not financial advice."
				})
			]
		})
	});
}
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 glow-ring",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-5 w-5 text-primary" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-2xl font-semibold tracking-tight",
				children: [
					"Alpha",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Quant"
					}),
					" AI"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Live market intelligence · Powered by Polygon + AI agent"
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/chat",
					className: "flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur transition-colors hover:bg-primary/15",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-3.5 w-3.5" }), " Ask AI Analyst"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/reports",
					className: "flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur transition-colors hover:bg-card/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }), " Reports"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/settings",
					className: "flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur transition-colors hover:bg-card/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-3.5 w-3.5" }), " Settings"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 animate-pulse rounded-full bg-primary" }), "Live"]
				})
			]
		})]
	});
}
function AgentTeaser() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mt-6 grid gap-3 md:grid-cols-3",
		children: [
			{
				icon: TrendingUp,
				title: "Today's top gainers",
				q: "What are today's top gaining US stocks?"
			},
			{
				icon: BrainCircuit,
				title: "Compare two tickers",
				q: "Compare MSFT and META over 60 days."
			},
			{
				icon: FileText,
				title: "Run an ROI scenario",
				q: "Calculate ROI for $1000 in NVDA over the last year and save a report."
			}
		].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/chat",
			className: "glass-panel group flex items-start gap-3 rounded-xl p-4 transition hover:border-primary/40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium group-hover:text-primary",
					children: s.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 truncate text-xs text-muted-foreground",
					children: s.q
				})]
			})]
		}, s.title))
	});
}
function ActionPanel({ tickers, input, error, onInput, onSubmit, onRemove, onGenerate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "glass-panel rounded-2xl p-8 md:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Build your watchlist"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Add up to 5 tickers. We'll pull 60 days of live daily closes from Polygon.io."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: input,
					onChange: (e) => onInput(e.target.value.toUpperCase()),
					placeholder: "e.g. AAPL, TSLA, NVDA",
					maxLength: 6,
					className: "h-12 flex-1 border-border/60 bg-background/40 font-mono uppercase tracking-widest placeholder:tracking-normal placeholder:text-muted-foreground/60"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					size: "lg",
					variant: "secondary",
					className: "h-12 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add ticker"]
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-destructive",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 min-h-[3rem]",
				children: tickers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm italic text-muted-foreground/70",
					children: "Your tickers will appear here…"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: tickers.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						className: "group cursor-default border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-sm text-primary hover:bg-primary/15",
						children: [t, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onRemove(t),
							className: "ml-2 rounded-full opacity-60 transition hover:opacity-100",
							"aria-label": `Remove ${t}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
						})]
					}, t))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col items-start justify-between gap-4 border-t border-border/50 pt-6 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), "Real Polygon.io aggregates · 5 min cache to respect free tier"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: onGenerate,
					disabled: tickers.length === 0,
					size: "lg",
					className: "h-12 gap-2 bg-primary px-6 font-semibold text-primary-foreground glow-ring transition hover:brightness-110 disabled:opacity-40 disabled:glow-ring",
					children: ["Load market data ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})]
			})
		]
	});
}
function LoadingPanel({ tickers }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "glass-panel flex flex-col items-center justify-center rounded-2xl p-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 animate-ping rounded-full bg-primary/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 glow-ring",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-7 w-7 animate-spin text-primary" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: "Fetching live data from Polygon.io…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-md text-sm text-muted-foreground",
				children: [
					"Pulling 60 trading days of daily aggregates for ",
					tickers.join(", "),
					"."
				]
			})
		]
	});
}
function ReportPanel({ series, onReset, onAskAnalyst }) {
	const chartData = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		series.forEach((s) => {
			s.data.forEach((p) => {
				const row = map.get(p.date) ?? { date: p.date };
				row[s.ticker] = p.price;
				map.set(p.date, row);
			});
		});
		return Array.from(map.values());
	}, [series]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: series.slice(0, 4).map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-panel rounded-xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm text-muted-foreground",
							children: s.ticker
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-display text-2xl font-semibold",
							children: ["$", s.end.toFixed(2)]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-8 w-8 rounded-full",
							style: {
								background: CHART_COLORS[i % CHART_COLORS.length],
								opacity: .25
							}
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: `mt-3 flex items-center gap-1 text-sm font-medium ${s.change >= 0 ? "text-primary" : "text-destructive"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: `h-4 w-4 ${s.change < 0 ? "rotate-180" : ""}` }),
							s.change >= 0 ? "+" : "",
							s.change.toFixed(2),
							"% · 60d"
						]
					})]
				}, s.ticker))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass-panel rounded-2xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 flex items-center justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Price performance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "60-day daily close · live from Polygon"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-80 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data: chartData,
						margin: {
							left: -10,
							right: 10,
							top: 10,
							bottom: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "var(--border)",
								opacity: .4
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "date",
								stroke: "var(--muted-foreground)",
								fontSize: 11,
								tickLine: false,
								axisLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								stroke: "var(--muted-foreground)",
								fontSize: 11,
								tickLine: false,
								axisLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
								background: "var(--popover)",
								border: "1px solid var(--border)",
								borderRadius: 12,
								fontSize: 12
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
								fontSize: 12,
								paddingTop: 12
							} }),
							series.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: s.ticker,
								stroke: CHART_COLORS[i % CHART_COLORS.length],
								strokeWidth: 2.2,
								dot: false,
								activeDot: { r: 5 }
							}, s.ticker))
						]
					}) })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "glass-panel relative overflow-hidden rounded-2xl p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-5 w-5 text-primary" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold",
							children: "Want a deep analysis?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Ask the AlphaQuant analyst to compare these tickers, calculate ROI, or save a full report."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: onReset,
							variant: "secondary",
							className: "gap-2",
							children: "New watchlist"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: onAskAnalyst,
							className: "gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquarePlus, { className: "h-4 w-4" }), " Open analyst chat"]
						})]
					})]
				})]
			})
		]
	});
}
//#endregion
export { AlphaQuantDashboard as component };
