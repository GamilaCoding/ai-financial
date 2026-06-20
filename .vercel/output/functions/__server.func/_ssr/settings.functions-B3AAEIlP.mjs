import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings.functions-B3AAEIlP.js
var checkEnvVars_createServerFn_handler = createServerRpc({
	id: "81aef26fc21ff3262e1dc26a5dbc662660482abc50bcabea74c4e346c33dc5e0",
	name: "checkEnvVars",
	filename: "src/lib/settings.functions.ts"
}, (opts) => checkEnvVars.__executeServer(opts));
var checkEnvVars = createServerFn({ method: "GET" }).handler(checkEnvVars_createServerFn_handler, async () => {
	const polygon = !!process.env.POLYGON_API_KEY;
	const gemini = !!process.env.GEMINI_API_KEY;
	return {
		polygon,
		gemini,
		openai: !!process.env.OPENAI_API_KEY,
		ready: polygon && gemini
	};
});
//#endregion
export { checkEnvVars_createServerFn_handler };
