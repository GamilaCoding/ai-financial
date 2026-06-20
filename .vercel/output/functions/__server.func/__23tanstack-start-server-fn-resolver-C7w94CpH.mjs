//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-C7w94CpH.js
var manifest = {
	"2938fc5f3b0f580e3cd6387f3d9503c67d7c8abf328ce27f2d963ccc80c350fc": {
		functionName: "deleteReport_createServerFn_handler",
		importer: () => import("./_ssr/reports.functions-Cvn9MGPW.mjs")
	},
	"4149bf3564f10621c0ab1f167d2a584b4392458ed2353b7842d8dc862ac93952": {
		functionName: "listReports_createServerFn_handler",
		importer: () => import("./_ssr/reports.functions-Cvn9MGPW.mjs")
	},
	"79eabef20931965ec2ed18c04be6fe85fcde58ed01d1ca42f3663802df12ee15": {
		functionName: "listConversations_createServerFn_handler",
		importer: () => import("./_ssr/conversations.functions-Dils6cHn.mjs")
	},
	"7d68271a0de1eb6fcbf8758349e0278aef6ddd679854e171c8e99b74861984e4": {
		functionName: "fetchStockSeries_createServerFn_handler",
		importer: () => import("./_ssr/stocks.functions-DAtFoAJh.mjs")
	},
	"81aef26fc21ff3262e1dc26a5dbc662660482abc50bcabea74c4e346c33dc5e0": {
		functionName: "checkEnvVars_createServerFn_handler",
		importer: () => import("./_ssr/settings.functions-B3AAEIlP.mjs")
	},
	"8b7956d0cfb46d48c87de4f7c817872b933afbc78b598fc0ef118f827847683c": {
		functionName: "deleteConversation_createServerFn_handler",
		importer: () => import("./_ssr/conversations.functions-Dils6cHn.mjs")
	},
	"9f3eefae40c1095c3a76ca57df4bd3cbb72dc89abffcd8f1c12f90a426acd238": {
		functionName: "loadMessages_createServerFn_handler",
		importer: () => import("./_ssr/conversations.functions-Dils6cHn.mjs")
	},
	"a0529407b4380d59c90760b1289fdf3d0150568f113b7cd308ab7252949e0065": {
		functionName: "createConversation_createServerFn_handler",
		importer: () => import("./_ssr/conversations.functions-Dils6cHn.mjs")
	},
	"f94af9ff2848f33902408ad62444f7a6c440f3877b3fc18040f0f190e1b42303": {
		functionName: "getReport_createServerFn_handler",
		importer: () => import("./_ssr/reports.functions-Cvn9MGPW.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
