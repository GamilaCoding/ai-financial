import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { bt as objectType, xt as stringType } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports.functions-Cvn9MGPW.js
var listReports_createServerFn_handler = createServerRpc({
	id: "4149bf3564f10621c0ab1f167d2a584b4392458ed2353b7842d8dc862ac93952",
	name: "listReports",
	filename: "src/lib/reports.functions.ts"
}, (opts) => listReports.__executeServer(opts));
var listReports = createServerFn({ method: "GET" }).handler(listReports_createServerFn_handler, async () => {
	const { getDb } = await import("./db.server-bXYhKQnF.mjs");
	return await (await getDb())`SELECT * FROM reports ORDER BY created_at DESC LIMIT 100`;
});
var getReport_createServerFn_handler = createServerRpc({
	id: "f94af9ff2848f33902408ad62444f7a6c440f3877b3fc18040f0f190e1b42303",
	name: "getReport",
	filename: "src/lib/reports.functions.ts"
}, (opts) => getReport.__executeServer(opts));
var getReport = createServerFn({ method: "POST" }).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(getReport_createServerFn_handler, async ({ data }) => {
	const { getDb } = await import("./db.server-bXYhKQnF.mjs");
	return (await (await getDb())`SELECT * FROM reports WHERE id = ${data.id}`)[0] ?? null;
});
var deleteReport_createServerFn_handler = createServerRpc({
	id: "2938fc5f3b0f580e3cd6387f3d9503c67d7c8abf328ce27f2d963ccc80c350fc",
	name: "deleteReport",
	filename: "src/lib/reports.functions.ts"
}, (opts) => deleteReport.__executeServer(opts));
var deleteReport = createServerFn({ method: "POST" }).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(deleteReport_createServerFn_handler, async ({ data }) => {
	const { getDb } = await import("./db.server-bXYhKQnF.mjs");
	await (await getDb())`DELETE FROM reports WHERE id = ${data.id}`;
	return { ok: true };
});
//#endregion
export { deleteReport_createServerFn_handler, getReport_createServerFn_handler, listReports_createServerFn_handler };
