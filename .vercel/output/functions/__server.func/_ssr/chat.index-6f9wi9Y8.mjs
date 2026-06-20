import { o as __toESM } from "../_runtime.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { n as useServerFn } from "./createSsrRpc-C6mtSl4V.mjs";
import { t as createConversation } from "./conversations.functions-BwGA1z62.mjs";
import { p as LoaderCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat.index-6f9wi9Y8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewChatRedirect() {
	const navigate = useNavigate();
	const create = useServerFn(createConversation);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		create().then((conv) => {
			if (!cancelled) navigate({
				to: "/chat/$conversationId",
				params: { conversationId: conv.id },
				replace: true
			});
		});
		return () => {
			cancelled = true;
		};
	}, [create, navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-screen items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 text-muted-foreground text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Starting new conversation…"]
		})
	});
}
//#endregion
export { NewChatRedirect as component };
