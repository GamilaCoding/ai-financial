import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-C6mtSl4V.mjs";
import { bt as objectType, xt as stringType } from "../_libs/@ai-sdk/gateway+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports.functions-CuzDBa8T.js
var listReports = createServerFn({ method: "GET" }).handler(createSsrRpc("4149bf3564f10621c0ab1f167d2a584b4392458ed2353b7842d8dc862ac93952"));
var getReport = createServerFn({ method: "POST" }).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(createSsrRpc("f94af9ff2848f33902408ad62444f7a6c440f3877b3fc18040f0f190e1b42303"));
var deleteReport = createServerFn({ method: "POST" }).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(createSsrRpc("2938fc5f3b0f580e3cd6387f3d9503c67d7c8abf328ce27f2d963ccc80c350fc"));
//#endregion
export { getReport as n, listReports as r, deleteReport as t };
