import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-C6mtSl4V.mjs";
import { bt as objectType, xt as stringType } from "../_libs/@ai-sdk/gateway+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/conversations.functions-BwGA1z62.js
var listConversations = createServerFn({ method: "GET" }).handler(createSsrRpc("79eabef20931965ec2ed18c04be6fe85fcde58ed01d1ca42f3663802df12ee15"));
var createConversation = createServerFn({ method: "POST" }).handler(createSsrRpc("a0529407b4380d59c90760b1289fdf3d0150568f113b7cd308ab7252949e0065"));
createServerFn({ method: "POST" }).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(createSsrRpc("8b7956d0cfb46d48c87de4f7c817872b933afbc78b598fc0ef118f827847683c"));
var loadMessages = createServerFn({ method: "POST" }).inputValidator((input) => objectType({ conversationId: stringType().uuid() }).parse(input)).handler(createSsrRpc("9f3eefae40c1095c3a76ca57df4bd3cbb72dc89abffcd8f1c12f90a426acd238"));
//#endregion
export { listConversations as n, loadMessages as r, createConversation as t };
