import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { bt as objectType, xt as stringType } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/conversations.functions-Dils6cHn.js
var listConversations_createServerFn_handler = createServerRpc({
	id: "79eabef20931965ec2ed18c04be6fe85fcde58ed01d1ca42f3663802df12ee15",
	name: "listConversations",
	filename: "src/lib/conversations.functions.ts"
}, (opts) => listConversations.__executeServer(opts));
var listConversations = createServerFn({ method: "GET" }).handler(listConversations_createServerFn_handler, async () => {
	const { getDb } = await import("./db.server-bXYhKQnF.mjs");
	return await (await getDb())`SELECT * FROM conversations ORDER BY updated_at DESC LIMIT 50`;
});
var createConversation_createServerFn_handler = createServerRpc({
	id: "a0529407b4380d59c90760b1289fdf3d0150568f113b7cd308ab7252949e0065",
	name: "createConversation",
	filename: "src/lib/conversations.functions.ts"
}, (opts) => createConversation.__executeServer(opts));
var createConversation = createServerFn({ method: "POST" }).handler(createConversation_createServerFn_handler, async () => {
	const { getDb } = await import("./db.server-bXYhKQnF.mjs");
	return (await (await getDb())`INSERT INTO conversations (title) VALUES ('New conversation') RETURNING *`)[0];
});
var deleteConversation_createServerFn_handler = createServerRpc({
	id: "8b7956d0cfb46d48c87de4f7c817872b933afbc78b598fc0ef118f827847683c",
	name: "deleteConversation",
	filename: "src/lib/conversations.functions.ts"
}, (opts) => deleteConversation.__executeServer(opts));
var deleteConversation = createServerFn({ method: "POST" }).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(deleteConversation_createServerFn_handler, async ({ data }) => {
	const { getDb } = await import("./db.server-bXYhKQnF.mjs");
	await (await getDb())`DELETE FROM conversations WHERE id = ${data.id}`;
	return { ok: true };
});
var loadMessages_createServerFn_handler = createServerRpc({
	id: "9f3eefae40c1095c3a76ca57df4bd3cbb72dc89abffcd8f1c12f90a426acd238",
	name: "loadMessages",
	filename: "src/lib/conversations.functions.ts"
}, (opts) => loadMessages.__executeServer(opts));
var loadMessages = createServerFn({ method: "POST" }).inputValidator((input) => objectType({ conversationId: stringType().uuid() }).parse(input)).handler(loadMessages_createServerFn_handler, async ({ data }) => {
	const { getDb } = await import("./db.server-bXYhKQnF.mjs");
	return (await (await getDb())`
      SELECT id, role, parts 
      FROM chat_messages 
      WHERE conversation_id = ${data.conversationId} 
      ORDER BY created_at ASC
    `).map((r) => ({
		id: r.id,
		role: r.role,
		partsJson: typeof r.parts === "string" ? r.parts : JSON.stringify(r.parts ?? [])
	}));
});
//#endregion
export { createConversation_createServerFn_handler, deleteConversation_createServerFn_handler, listConversations_createServerFn_handler, loadMessages_createServerFn_handler };
