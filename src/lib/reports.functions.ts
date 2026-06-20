import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export interface ReportRow {
  id: string;
  title: string;
  tickers: string[];
  recommendation: string | null;
  content_md: string;
  created_at: string;
}

export const listReports = createServerFn({ method: "GET" }).handler(async (): Promise<ReportRow[]> => {
  const { getDb } = await import("@/lib/db.server");
  const sql = await getDb();
  const data = await sql<ReportRow[]>`SELECT * FROM reports ORDER BY created_at DESC LIMIT 100`;
  return data;
});

export const getReport = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data }): Promise<ReportRow | null> => {
    const { getDb } = await import("@/lib/db.server");
    const sql = await getDb();
    const rows = await sql<ReportRow[]>`SELECT * FROM reports WHERE id = ${data.id}`;
    return rows[0] ?? null;
  });

export const deleteReport = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data }) => {
    const { getDb } = await import("@/lib/db.server");
    const sql = await getDb();
    await sql`DELETE FROM reports WHERE id = ${data.id}`;
    return { ok: true };
  });
