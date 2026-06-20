import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";


export interface ConversationRow {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export const listConversations = createServerFn({ method: "GET" }).handler(async (): Promise<ConversationRow[]> => {
  const { getDb } = await import("@/lib/db.server");
  const sql = await getDb();
  const data = await sql<ConversationRow[]>`SELECT * FROM conversations ORDER BY updated_at DESC LIMIT 50`;
  return data;
});

export const createConversation = createServerFn({ method: "POST" }).handler(async (): Promise<ConversationRow> => {
  const { getDb } = await import("@/lib/db.server");
  const sql = await getDb();
  const data = await sql<ConversationRow[]>`INSERT INTO conversations (title) VALUES ('New conversation') RETURNING *`;
  return data[0];
});

export const deleteConversation = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data }) => {
    const { getDb } = await import("@/lib/db.server");
    const sql = await getDb();
    await sql`DELETE FROM conversations WHERE id = ${data.id}`;
    return { ok: true };
  });

export interface StoredMessage {
  id: string;
  role: string;
  partsJson: string;
}

export const loadMessages = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => z.object({ conversationId: z.string().uuid() }).parse(input))
  .handler(async ({ data }): Promise<StoredMessage[]> => {
    const { getDb } = await import("@/lib/db.server");
    const sql = await getDb();
    const rows = await sql`
      SELECT id, role, parts 
      FROM chat_messages 
      WHERE conversation_id = ${data.conversationId} 
      ORDER BY created_at ASC
    `;
    return rows.map((r: any) => ({
      id: r.id as string,
      role: r.role as string,
      partsJson: typeof r.parts === 'string' ? r.parts : JSON.stringify(r.parts ?? []),
    }));
  });
