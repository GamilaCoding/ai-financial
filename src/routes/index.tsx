import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  BrainCircuit,
  FileText,
  Loader2,
  MessageSquarePlus,
  Plus,
  Settings,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { fetchStockSeries, type StockSeries } from "@/lib/stocks.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AlphaQuant AI — Live Market Intelligence" },
      {
        name: "description",
        content:
          "Real-time stock dashboards powered by Polygon.io and an AI analyst agent. Charts, ROI, and saved research reports.",
      },
    ],
  }),
  component: AlphaQuantDashboard,
});

type Stage = "idle" | "loading" | "report";

const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

function AlphaQuantDashboard() {
  const [tickers, setTickers] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [stage, setStage] = useState<Stage>("idle");
  const [series, setSeries] = useState<StockSeries[]>([]);
  const [apiError, setApiError] = useState<string | null>(null);

  const fetchSeries = useServerFn(fetchStockSeries);
  const navigate = useNavigate();

  const addTicker = (e: React.FormEvent) => {
    e.preventDefault();
    const v = input.trim().toUpperCase();
    if (v.length < 3) return setError("Tickers must be at least 3 characters (e.g. AAPL, TSLA).");
    if (tickers.includes(v)) return setError(`${v} is already in your watchlist.`);
    if (tickers.length >= 5) return setError("Maximum of 5 tickers per report.");
    setTickers([...tickers, v]);
    setInput("");
    setError("");
  };

  const remove = (t: string) => setTickers(tickers.filter((x) => x !== t));

  const generate = async () => {
    if (!tickers.length) return;
    setStage("loading");
    setApiError(null);
    try {
      const results = await Promise.all(
        tickers.map((t) => fetchSeries({ data: { ticker: t, days: 60 } })),
      );
      setSeries(results);
      setStage("report");
    } catch (err) {
      console.error(err);
      setApiError(err instanceof Error ? err.message : "Failed to fetch market data.");
      setStage("idle");
    }
  };

  const reset = () => {
    setStage("idle");
    setSeries([]);
    setApiError(null);
  };

  const askAnalyst = () => {
    // open chat — user can paste the watchlist into the agent
    navigate({ to: "/chat" });
  };

  return (
    <main className="relative min-h-screen px-6 py-10 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Header />
        {stage === "idle" && (
          <>
            {apiError && (
              <div className="mb-4 flex items-start gap-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p className="font-medium">Data request failed</p>
                  <p className="mt-0.5 text-destructive/80">{apiError}</p>
                </div>
              </div>
            )}
            <ActionPanel
              tickers={tickers}
              input={input}
              error={error}
              onInput={setInput}
              onSubmit={addTicker}
              onRemove={remove}
              onGenerate={generate}
            />
            <AgentTeaser />
          </>
        )}
        {stage === "loading" && <LoadingPanel tickers={tickers} />}
        {stage === "report" && series.length > 0 && (
          <ReportPanel series={series} onReset={reset} onAskAnalyst={askAnalyst} />
        )}
        <footer className="mt-16 text-center text-xs text-muted-foreground">
          AlphaQuant AI · Live data from Polygon.io · Not financial advice.
        </footer>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 glow-ring">
          <Activity className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight">
            Alpha<span className="text-gradient">Quant</span> AI
          </h1>
          <p className="text-xs text-muted-foreground">Live market intelligence · Powered by Polygon + AI agent</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Link to="/chat" className="flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur transition-colors hover:bg-primary/15">
          <BrainCircuit className="h-3.5 w-3.5" /> Ask AI Analyst
        </Link>
        <Link to="/reports" className="flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur transition-colors hover:bg-card/60">
          <FileText className="h-3.5 w-3.5" /> Reports
        </Link>
        <Link to="/settings" className="flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur transition-colors hover:bg-card/60">
          <Settings className="h-3.5 w-3.5" /> Settings
        </Link>
        <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          Live
        </div>
      </div>
    </header>
  );
}

function AgentTeaser() {
  return (
    <section className="mt-6 grid gap-3 md:grid-cols-3">
      {[
        { icon: TrendingUp, title: "Today's top gainers", q: "What are today's top gaining US stocks?" },
        { icon: BrainCircuit, title: "Compare two tickers", q: "Compare MSFT and META over 60 days." },
        { icon: FileText, title: "Run an ROI scenario", q: "Calculate ROI for $1000 in NVDA over the last year and save a report." },
      ].map((s) => (
        <Link
          key={s.title}
          to="/chat"
          className="glass-panel group flex items-start gap-3 rounded-xl p-4 transition hover:border-primary/40"
        >
          <s.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <div className="min-w-0">
            <p className="text-sm font-medium group-hover:text-primary">{s.title}</p>
            <p className="mt-0.5 truncate text-xs text-muted-foreground">{s.q}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}

function ActionPanel({
  tickers,
  input,
  error,
  onInput,
  onSubmit,
  onRemove,
  onGenerate,
}: {
  tickers: string[];
  input: string;
  error: string;
  onInput: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onRemove: (t: string) => void;
  onGenerate: () => void;
}) {
  return (
    <section className="glass-panel rounded-2xl p-8 md:p-10">
      <div className="mb-6">
        <h2 className="font-display text-xl font-semibold">Build your watchlist</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Add up to 5 tickers. We'll pull 60 days of live daily closes from Polygon.io.
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <Input
          value={input}
          onChange={(e) => onInput(e.target.value.toUpperCase())}
          placeholder="e.g. AAPL, TSLA, NVDA"
          maxLength={6}
          className="h-12 flex-1 border-border/60 bg-background/40 font-mono uppercase tracking-widest placeholder:tracking-normal placeholder:text-muted-foreground/60"
        />
        <Button type="submit" size="lg" variant="secondary" className="h-12 gap-2">
          <Plus className="h-4 w-4" /> Add ticker
        </Button>
      </form>

      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

      <div className="mt-6 min-h-[3rem]">
        {tickers.length === 0 ? (
          <p className="text-sm italic text-muted-foreground/70">Your tickers will appear here…</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {tickers.map((t) => (
              <Badge
                key={t}
                className="group cursor-default border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-sm text-primary hover:bg-primary/15"
              >
                {t}
                <button
                  onClick={() => onRemove(t)}
                  className="ml-2 rounded-full opacity-60 transition hover:opacity-100"
                  aria-label={`Remove ${t}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border/50 pt-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Real Polygon.io aggregates · 5 min cache to respect free tier
        </div>
        <Button
          onClick={onGenerate}
          disabled={tickers.length === 0}
          size="lg"
          className="h-12 gap-2 bg-primary px-6 font-semibold text-primary-foreground glow-ring transition hover:brightness-110 disabled:opacity-40 disabled:glow-ring"
        >
          Load market data <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}

function LoadingPanel({ tickers }: { tickers: string[] }) {
  return (
    <section className="glass-panel flex flex-col items-center justify-center rounded-2xl p-16 text-center">
      <div className="relative mb-6">
        <div className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 glow-ring">
          <Loader2 className="h-7 w-7 animate-spin text-primary" />
        </div>
      </div>
      <h2 className="font-display text-xl font-semibold">Fetching live data from Polygon.io…</h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        Pulling 60 trading days of daily aggregates for {tickers.join(", ")}.
      </p>
    </section>
  );
}

function ReportPanel({
  series,
  onReset,
  onAskAnalyst,
}: {
  series: StockSeries[];
  onReset: () => void;
  onAskAnalyst: () => void;
}) {
  const chartData = useMemo(() => {
    const map = new Map<string, Record<string, number | string>>();
    series.forEach((s) => {
      s.data.forEach((p) => {
        const row = map.get(p.date) ?? { date: p.date };
        row[s.ticker] = p.price;
        map.set(p.date, row);
      });
    });
    return Array.from(map.values());
  }, [series]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {series.slice(0, 4).map((s, i) => (
          <div key={s.ticker} className="glass-panel rounded-xl p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-sm text-muted-foreground">{s.ticker}</p>
                <p className="mt-1 font-display text-2xl font-semibold">${s.end.toFixed(2)}</p>
              </div>
              <div
                className="h-8 w-8 rounded-full"
                style={{ background: CHART_COLORS[i % CHART_COLORS.length], opacity: 0.25 }}
              />
            </div>
            <p
              className={`mt-3 flex items-center gap-1 text-sm font-medium ${
                s.change >= 0 ? "text-primary" : "text-destructive"
              }`}
            >
              <TrendingUp className={`h-4 w-4 ${s.change < 0 ? "rotate-180" : ""}`} />
              {s.change >= 0 ? "+" : ""}
              {s.change.toFixed(2)}% · 60d
            </p>
          </div>
        ))}
      </div>

      <section className="glass-panel rounded-2xl p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold">Price performance</h2>
            <p className="text-xs text-muted-foreground">60-day daily close · live from Polygon</p>
          </div>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer>
            <LineChart data={chartData} margin={{ left: -10, right: 10, top: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.4} />
              <XAxis dataKey="date" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "var(--popover)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  fontSize: 12,
                }}
              />
              <Legend wrapperStyle={{ fontSize: 12, paddingTop: 12 }} />
              {series.map((s, i) => (
                <Line
                  key={s.ticker}
                  type="monotone"
                  dataKey={s.ticker}
                  stroke={CHART_COLORS[i % CHART_COLORS.length]}
                  strokeWidth={2.2}
                  dot={false}
                  activeDot={{ r: 5 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="glass-panel relative overflow-hidden rounded-2xl p-8">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
              <BrainCircuit className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold">Want a deep analysis?</h2>
              <p className="text-sm text-muted-foreground">
                Ask the AlphaQuant analyst to compare these tickers, calculate ROI, or save a full report.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={onReset} variant="secondary" className="gap-2">
              New watchlist
            </Button>
            <Button onClick={onAskAnalyst} className="gap-2">
              <MessageSquarePlus className="h-4 w-4" /> Open analyst chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
