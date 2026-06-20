import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import {
  Activity,
  ArrowLeft,
  CheckCircle2,
  Circle,
  ExternalLink,
  KeyRound,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { checkEnvVars } from "@/lib/settings.functions";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "AlphaQuant AI — Settings" },
      { name: "description", content: "Configure API keys and server environment for AlphaQuant AI." },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const checkEnv = useServerFn(checkEnvVars);
  const { data: env } = useQuery({
    queryKey: ["env-check"],
    queryFn: () => checkEnv(),
  });

  return (
    <main className="min-h-screen px-6 py-10 md:px-12">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 glow-ring">
            <Activity className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-tight">
              Alpha<span className="text-gradient">Quant</span> AI
            </h1>
            <p className="text-xs text-muted-foreground">Settings & Environment</p>
          </div>
        </header>

        <Link to="/">
          <Button variant="ghost" size="sm" className="mb-6 gap-2 text-muted-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to dashboard
          </Button>
        </Link>

        <div className="space-y-6">
          <Card className="glass-panel border-0">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                  <Server className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-display text-lg">Environment variables</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Server-only. Never exposed to the browser.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <EnvVarRow
                label="POLYGON_API_KEY"
                description="Required. Powers live stock data, snapshots, and top-gainers from Polygon.io."
                present={env?.polygon ?? false}
                docsUrl="https://polygon.io/dashboard/api-keys"
              />

              <EnvVarRow
                label="GEMINI_API_KEY"
                description="Required. Powers the AI analyst agent."
                present={env?.gemini ?? false}
                docsUrl="https://aistudio.google.com/apikey"
              />
              <EnvVarRow
                label="OPENAI_API_KEY"
                description="Optional. Reserved for future OpenAI fallback."
                present={env?.openai ?? false}
                docsUrl="https://platform.openai.com/api-keys"
              />

              <div className="rounded-lg border border-border/40 bg-card/40 p-4">
                <div className="flex items-start gap-3">
                  {env?.ready ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  ) : (
                    <Circle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  )}
                  <div>
                    <p className="text-sm font-medium">
                      {env?.ready ? "All systems ready." : "Missing required keys."}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {env?.ready
                        ? "You can fetch market data and chat with the analyst agent."
                        : "POLYGON_API_KEY and GEMINI_API_KEY are both required."}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-panel border-0">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15">
                  <KeyRound className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <CardTitle className="font-display text-lg">How keys are managed</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Local + Vercel deployments
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 text-sm text-foreground/85">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-medium text-primary">1</span>
                  <span>
                    <strong className="text-foreground">Get a Polygon key.</strong>{" "}
                    <a href="https://polygon.io/dashboard/api-keys" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                      polygon.io/dashboard/api-keys <ExternalLink className="h-3 w-3" />
                    </a>{" "}
                    — the free tier (5 req/min) is enough; we cache responses 5 minutes server-side.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-medium text-primary">2</span>
                  <span>
                    <strong className="text-foreground">Gemini.</strong> Get a key from{" "}
                    <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                      Google AI Studio <ExternalLink className="h-3 w-3" />
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-medium text-primary">3</span>
                  <span>
                    <strong className="text-foreground">Vercel.</strong> In your project settings, add both{" "}
                    <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">POLYGON_API_KEY</code> and{" "}
                    <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">GEMINI_API_KEY</code> as environment variables, then redeploy.
                  </span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-16 text-center text-xs text-muted-foreground">
          AlphaQuant AI · Live Polygon data · Not financial advice.
        </footer>
      </div>
    </main>
  );
}

function EnvVarRow({ label, description, present, docsUrl }: { label: string; description: string; present: boolean; docsUrl: string }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-border/40 bg-card/30 p-4">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">{label}</code>
          {present ? (
            <span className="flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">
              <CheckCircle2 className="h-3 w-3" /> Configured
            </span>
          ) : (
            <span className="flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
              <Circle className="h-3 w-3" /> Missing
            </span>
          )}
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground">{description}</p>
      </div>
      <a href={docsUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs text-primary hover:underline">
        Get key
      </a>
    </div>
  );
}
