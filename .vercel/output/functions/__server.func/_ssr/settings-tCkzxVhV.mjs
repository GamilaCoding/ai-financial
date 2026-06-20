import { o as __toESM } from "../_runtime.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { o as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { n as useServerFn, t as createSsrRpc } from "./createSsrRpc-C6mtSl4V.mjs";
import { n as cn, t as Button } from "./button-mXyZaY3O.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { E as ArrowLeft, O as Activity, g as ExternalLink, l as Server, m as KeyRound, x as CircleCheck, y as Circle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-tCkzxVhV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var checkEnvVars = createServerFn({ method: "GET" }).handler(createSsrRpc("81aef26fc21ff3262e1dc26a5dbc662660482abc50bcabea74c4e346c33dc5e0"));
function SettingsPage() {
	const checkEnv = useServerFn(checkEnvVars);
	const { data: env } = useQuery({
		queryKey: ["env-check"],
		queryFn: () => checkEnv()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-6 py-10 md:px-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-10 flex items-center gap-3",
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
						children: "Settings & Environment"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						className: "mb-6 gap-2 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to dashboard"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "glass-panel border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "h-4 w-4 text-primary" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "font-display text-lg",
								children: "Environment variables"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
								className: "text-sm text-muted-foreground",
								children: "Server-only. Never exposed to the browser."
							})] })]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvVarRow, {
									label: "POLYGON_API_KEY",
									description: "Required. Powers live stock data, snapshots, and top-gainers from Polygon.io.",
									present: env?.polygon ?? false,
									docsUrl: "https://polygon.io/dashboard/api-keys"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvVarRow, {
									label: "GEMINI_API_KEY",
									description: "Required. Powers the AI analyst agent.",
									present: env?.gemini ?? false,
									docsUrl: "https://aistudio.google.com/apikey"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvVarRow, {
									label: "OPENAI_API_KEY",
									description: "Optional. Reserved for future OpenAI fallback.",
									present: env?.openai ?? false,
									docsUrl: "https://platform.openai.com/api-keys"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg border border-border/40 bg-card/40 p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										children: [env?.ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium",
											children: env?.ready ? "All systems ready." : "Missing required keys."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: env?.ready ? "You can fetch market data and chat with the analyst agent." : "POLYGON_API_KEY and GEMINI_API_KEY are both required."
										})] })]
									})
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "glass-panel border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "h-4 w-4 text-accent" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
								className: "font-display text-lg",
								children: "How keys are managed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
								className: "text-sm text-muted-foreground",
								children: "Local + Vercel deployments"
							})] })]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "space-y-4 text-sm text-foreground/85",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-medium text-primary",
										children: "1"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Get a Polygon key."
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "https://polygon.io/dashboard/api-keys",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center gap-1 text-primary hover:underline",
											children: ["polygon.io/dashboard/api-keys ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
										}),
										" ",
										"— the free tier (5 req/min) is enough; we cache responses 5 minutes server-side."
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-medium text-primary",
										children: "2"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Gemini."
										}),
										" Get a key from",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "https://aistudio.google.com/apikey",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center gap-1 text-primary hover:underline",
											children: ["Google AI Studio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
										})
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-medium text-primary",
										children: "3"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Vercel."
										}),
										" In your project settings, add both",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
											className: "rounded bg-muted px-1 py-0.5 font-mono text-xs",
											children: "POLYGON_API_KEY"
										}),
										" and",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
											className: "rounded bg-muted px-1 py-0.5 font-mono text-xs",
											children: "GEMINI_API_KEY"
										}),
										" as environment variables, then redeploy."
									] })]
								})
							]
						}) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "mt-16 text-center text-xs text-muted-foreground",
					children: "AlphaQuant AI · Live Polygon data · Not financial advice."
				})
			]
		})
	});
}
function EnvVarRow({ label, description, present, docsUrl }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-4 rounded-lg border border-border/40 bg-card/30 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "rounded bg-muted px-1.5 py-0.5 font-mono text-xs",
					children: label
				}), present ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), " Configured"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3 w-3" }), " Missing"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs text-muted-foreground",
				children: description
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: docsUrl,
			target: "_blank",
			rel: "noopener noreferrer",
			className: "shrink-0 text-xs text-primary hover:underline",
			children: "Get key"
		})]
	});
}
//#endregion
export { SettingsPage as component };
