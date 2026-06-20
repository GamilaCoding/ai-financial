/**
 * Direct SQL backend.
 *
 * This file is server-only (`.server.ts`) — it will never ship to the client bundle.
 * Use this to run raw SQL (e.g. complex joins, stored procedures, bulk operations)
 * using the Node.js backend.
 *
 * Setup:
 *   1. Install a Postgres driver:  bun add postgres
 *   2. Set DATABASE_URL in Vercel → Environment Variables (use the **pooled**
 *      connection string on port 6543, never the direct one in serverless).
 *   3. Import `getDb()` inside a server function handler — never at module scope
 *      of a file imported by the client.
 *
 * Example:
 *   import { createServerFn } from "@tanstack/react-start";
 *   export const listTrades = createServerFn({ method: "GET" }).handler(async () => {
 *     const { getDb } = await import("@/lib/db.server");
 *     const sql = await getDb();
 *     return sql`SELECT * FROM trades ORDER BY created_at DESC LIMIT 50`;
 *   });
 */

type SqlClient = any;
let cached: SqlClient | null = null;

// Simple in-memory storage for local dev without Postgres
const mockDb = {
  conversations: [] as any[],
  chat_messages: [] as any[],
  reports: [] as any[],
};

export async function getDb() {
  if (cached) return cached as any;

  const url = process.env.DATABASE_URL;
  if (!url) {
    console.warn("DATABASE_URL is not set. Using IN-MEMORY mock database. Data will be lost on restart.");
    
    // Mock the `postgres` tagged template function
    const mockSql: any = async (strings: TemplateStringsArray | any[], ...values: any[]) => {
      // Handle sql(rows, cols) bulk insert helper
      if (!Array.isArray(strings)) {
         return ""; 
      }
      
      const query = strings.join("?").trim().toLowerCase();
      
      if (query.includes("insert into conversations")) {
        const title = values[0] || 'New conversation';
        const newConv = { 
          id: crypto.randomUUID(), 
          title, 
          created_at: new Date().toISOString(), 
          updated_at: new Date().toISOString() 
        };
        mockDb.conversations.push(newConv);
        return [newConv];
      }
      
      if (query.includes("select * from conversations")) {
        return [...mockDb.conversations].sort((a, b) => b.updated_at.localeCompare(a.updated_at)).slice(0, 50);
      }
      
      if (query.includes("delete from conversations")) {
        const id = values[0];
        mockDb.conversations = mockDb.conversations.filter(c => c.id !== id);
        return [];
      }
      
      if (query.includes("select id, role, parts from chat_messages")) {
        const id = values[0];
        return mockDb.chat_messages.filter(m => m.conversation_id === id).sort((a, b) => a.created_at.localeCompare(b.created_at));
      }
      
      if (query.includes("delete from chat_messages")) {
        const id = values[0];
        mockDb.chat_messages = mockDb.chat_messages.filter(m => m.conversation_id !== id);
        return [];
      }
      
      if (query.includes("insert into chat_messages")) {
        // Values are passed as the result of the `sql(rows)` helper
        // Since we mocked `sql(rows)` to return nothing, we must extract the actual values from somewhere.
        // Wait, the bulk insert passes the rows to `mockSql` as the helper. 
        // We actually need to intercept the `sql(rows)` helper itself.
        return [];
      }
      
      if (query.includes("update conversations set title")) {
        const title = values[0];
        const id = values[1];
        const conv = mockDb.conversations.find(c => c.id === id);
        if (conv) {
          conv.title = title;
          conv.updated_at = new Date().toISOString();
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
           created_at: new Date().toISOString()
         };
         mockDb.reports.push(newReport);
         return [newReport];
      }
      
      return [];
    };
    
    // Mock the bulk insert helper: sql(rows, 'col1', 'col2')
    const mockSqlHelper = (...args: any[]) => {
      if (Array.isArray(args[0]) && typeof args[1] === 'string') {
        const rows = args[0];
        // Just store them directly in the mockDB since this helper is only used for chat_messages right now
        rows.forEach((row: any) => {
          mockDb.chat_messages.push({
            id: crypto.randomUUID(),
            ...row,
            created_at: new Date().toISOString()
          });
        });
        return ""; // The template string will receive this
      }
      return mockSql(...args);
    };
    
    Object.assign(mockSqlHelper, mockSql);
    cached = mockSqlHelper;
    return cached as any;
  }

  let postgres: (url: string, opts?: Record<string, unknown>) => any;
  try {
    postgres = (await import("postgres")).default;
  } catch {
    throw new Error(
      "Postgres driver not installed. Run: bun add postgres",
    );
  }

  cached = postgres(url, {
    ssl: "require",
    max: 1, // serverless: one connection per invocation
    idle_timeout: 20,
    connect_timeout: 10,
    prepare: false, // required for pgBouncer transaction pooling
  });

  return cached as any;
}
