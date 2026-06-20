import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat._conversationId-DW08OAAH.js
var $$splitComponentImporter = () => import("./chat._conversationId-_dpFKxbC.mjs");
var Route = createFileRoute("/chat/$conversationId")({
	head: () => ({ meta: [{ title: "AlphaQuant AI — Conversation" }, {
		name: "description",
		content: "Live conversation with the AlphaQuant AI analyst."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
