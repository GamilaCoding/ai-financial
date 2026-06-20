import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports._id-CJnUO4zM.js
var $$splitComponentImporter = () => import("./reports._id-CvCpwxIB.mjs");
var Route = createFileRoute("/reports/$id")({
	head: () => ({ meta: [{ title: "AlphaQuant AI — Report" }, {
		name: "description",
		content: "An AI-generated equity research report from AlphaQuant."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
