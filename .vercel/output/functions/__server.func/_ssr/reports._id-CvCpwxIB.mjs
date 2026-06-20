import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { n as useServerFn } from "./createSsrRpc-C6mtSl4V.mjs";
import { t as Button } from "./button-mXyZaY3O.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { E as ArrowLeft, a as Trash2, r as TrendingUp } from "../_libs/lucide-react.mjs";
import { t as Markdown } from "../_libs/react-markdown+[...].mjs";
import { t as Route } from "./reports._id-CJnUO4zM.mjs";
import { n as getReport, t as deleteReport } from "./reports.functions-CuzDBa8T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports._id-CvCpwxIB.js
var import_jsx_runtime = require_jsx_runtime();
function ReportPage() {
	const { id } = Route.useParams();
	const get = useServerFn(getReport);
	const del = useServerFn(deleteReport);
	const navigate = useNavigate();
	const qc = useQueryClient();
	const { data: report, isLoading } = useQuery({
		queryKey: ["report", id],
		queryFn: () => get({ data: { id } })
	});
	const remove = useMutation({
		mutationFn: () => del({ data: { id } }),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["reports"] });
			navigate({ to: "/reports" });
		}
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "p-10 text-sm text-muted-foreground",
		children: "Loading…"
	});
	if (!report) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Report not found."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/reports",
			className: "mt-3 inline-block text-sm text-primary underline",
			children: "← Back to reports"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-6 py-10 md:px-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/reports",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					className: "mb-6 gap-2 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " All reports"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "glass-panel rounded-2xl p-8 md:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-border/40 pb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-2xl font-semibold",
							children: report.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: new Date(report.created_at).toLocaleString() }), report.tickers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: report.tickers.join(", ")
							})] })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [report.recommendation && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1.5 text-sm font-semibold text-primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3.5 w-3.5" }),
								" ",
								report.recommendation
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							className: "gap-1.5 text-destructive hover:text-destructive",
							onClick: () => {
								if (confirm("Delete this report?")) remove.mutate();
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Delete"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "prose prose-invert prose-sm max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-foreground/85 prose-strong:text-foreground prose-li:text-foreground/85 prose-a:text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { children: report.content_md })
				})]
			})]
		})
	});
}
//#endregion
export { ReportPage as component };
