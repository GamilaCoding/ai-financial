import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Trash2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getReport, deleteReport } from "@/lib/reports.functions";

export const Route = createFileRoute("/reports/$id")({
  head: () => ({
    meta: [
      { title: "AlphaQuant AI — Report" },
      { name: "description", content: "An AI-generated equity research report from AlphaQuant." },
    ],
  }),
  component: ReportPage,
});

function ReportPage() {
  const { id } = Route.useParams();
  const get = useServerFn(getReport);
  const del = useServerFn(deleteReport);
  const navigate = useNavigate();
  const qc = useQueryClient();

  const { data: report, isLoading } = useQuery({
    queryKey: ["report", id],
    queryFn: () => get({ data: { id } }),
  });

  const remove = useMutation({
    mutationFn: () => del({ data: { id } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["reports"] });
      navigate({ to: "/reports" });
    },
  });

  if (isLoading) {
    return <main className="p-10 text-sm text-muted-foreground">Loading…</main>;
  }
  if (!report) {
    return (
      <main className="p-10">
        <p className="text-sm text-muted-foreground">Report not found.</p>
        <Link to="/reports" className="mt-3 inline-block text-sm text-primary underline">
          ← Back to reports
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-10 md:px-12">
      <div className="mx-auto max-w-3xl">
        <Link to="/reports">
          <Button variant="ghost" size="sm" className="mb-6 gap-2 text-muted-foreground">
            <ArrowLeft className="h-4 w-4" /> All reports
          </Button>
        </Link>

        <article className="glass-panel rounded-2xl p-8 md:p-10">
          <header className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-border/40 pb-6">
            <div className="min-w-0">
              <h1 className="font-display text-2xl font-semibold">{report.title}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span>{new Date(report.created_at).toLocaleString()}</span>
                {report.tickers.length > 0 && (
                  <>
                    <span>•</span>
                    <span className="font-mono">{report.tickers.join(", ")}</span>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {report.recommendation && (
                <span className="flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1.5 text-sm font-semibold text-primary">
                  <TrendingUp className="h-3.5 w-3.5" /> {report.recommendation}
                </span>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="gap-1.5 text-destructive hover:text-destructive"
                onClick={() => {
                  if (confirm("Delete this report?")) remove.mutate();
                }}
              >
                <Trash2 className="h-3.5 w-3.5" /> Delete
              </Button>
            </div>
          </header>

          <div className="prose prose-invert prose-sm max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-foreground/85 prose-strong:text-foreground prose-li:text-foreground/85 prose-a:text-primary">
            <ReactMarkdown>{report.content_md}</ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  );
}
