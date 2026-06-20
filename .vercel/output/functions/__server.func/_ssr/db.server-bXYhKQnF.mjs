//#region node_modules/.nitro/vite/services/ssr/assets/db.server-bXYhKQnF.js
var cached = null;
var mockDb = {
	conversations: [],
	chat_messages: [],
	reports: []
};
async function getDb() {
	if (cached) return cached;
	const url = process.env.DATABASE_URL;
	if (!url) {
		console.warn("DATABASE_URL is not set. Using IN-MEMORY mock database. Data will be lost on restart.");
		const mockSql = async (strings, ...values) => {
			if (!Array.isArray(strings)) return "";
			const query = strings.join("?").trim().toLowerCase();
			if (query.includes("insert into conversations")) {
				const title = values[0] || "New conversation";
				const newConv = {
					id: crypto.randomUUID(),
					title,
					created_at: (/* @__PURE__ */ new Date()).toISOString(),
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				};
				mockDb.conversations.push(newConv);
				return [newConv];
			}
			if (query.includes("select * from conversations")) return [...mockDb.conversations].sort((a, b) => b.updated_at.localeCompare(a.updated_at)).slice(0, 50);
			if (query.includes("delete from conversations")) {
				const id = values[0];
				mockDb.conversations = mockDb.conversations.filter((c) => c.id !== id);
				return [];
			}
			if (query.includes("select id, role, parts from chat_messages")) {
				const id = values[0];
				return mockDb.chat_messages.filter((m) => m.conversation_id === id).sort((a, b) => a.created_at.localeCompare(b.created_at));
			}
			if (query.includes("delete from chat_messages")) {
				const id = values[0];
				mockDb.chat_messages = mockDb.chat_messages.filter((m) => m.conversation_id !== id);
				return [];
			}
			if (query.includes("insert into chat_messages")) return [];
			if (query.includes("update conversations set title")) {
				const title = values[0];
				const id = values[1];
				const conv = mockDb.conversations.find((c) => c.id === id);
				if (conv) {
					conv.title = title;
					conv.updated_at = (/* @__PURE__ */ new Date()).toISOString();
				}
				return [];
			}
			if (query.includes("insert into reports")) {
				const newReport = {
					id: crypto.randomUUID(),
					title: values[0],
					content_md: values[1],
					tickers: values[2],
					recommendation: values[3],
					created_at: (/* @__PURE__ */ new Date()).toISOString()
				};
				mockDb.reports.push(newReport);
				return [newReport];
			}
			return [];
		};
		const mockSqlHelper = (...args) => {
			if (Array.isArray(args[0]) && typeof args[1] === "string") {
				args[0].forEach((row) => {
					mockDb.chat_messages.push({
						id: crypto.randomUUID(),
						...row,
						created_at: (/* @__PURE__ */ new Date()).toISOString()
					});
				});
				return "";
			}
			return mockSql(...args);
		};
		Object.assign(mockSqlHelper, mockSql);
		cached = mockSqlHelper;
		return cached;
	}
	let postgres;
	try {
		postgres = (await import("../_libs/postgres.mjs").then((n) => n.t)).default;
	} catch {
		throw new Error("Postgres driver not installed. Run: bun add postgres");
	}
	cached = postgres(url, {
		ssl: "require",
		max: 1,
		idle_timeout: 20,
		connect_timeout: 10,
		prepare: false
	});
	return cached;
}
//#endregion
export { getDb };
