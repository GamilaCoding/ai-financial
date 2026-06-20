import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useMemo, useRef } from "react";
import {
  Activity,
  ArrowLeft,
  BrainCircuit,
  FileText,
  Loader2,
  MessageSquarePlus,
  Search,
  Settings,
  TrendingUp,
} from "lucide-react";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Tool, ToolContent, ToolHeader, ToolInput, ToolOutput } from "@/components/ai-elements/tool";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { loadMessages, listConversations, createConversation } from "@/lib/conversations.functions";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/chat/$conversationId")({
  head: () => ({
    meta: [
      { title: "AlphaQuant AI — Conversation" },
      { name: "description", content: "Live conversation with the AlphaQuant AI analyst." },
    ],
  }),
  component: ChatPage,
});

const SUGGESTIONS = [
  { icon: TrendingUp, text: "What are today's top gaining US stocks?" },
  { icon: Search, text: "Analyze MSFT vs META over the last 60 days." },
  {
    icon: FileText,
    text: "Calculate ROI for $1000 invested in NVDA one year ago, then save it as a report.",
  },
];

function ChatPage() {
  const { conversationId } = Route.useParams();
  const load = useServerFn(loadMessages);

  const { data: initial, isLoading } = useQuery({
    queryKey: ["chat-messages", conversationId],
    queryFn: () => load({ conversationId }),
    staleTime: 0,
  });

  if (isLoading || !initial) {
    return (
      <ChatShell conversationId={conversationId}>
        <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading conversation…
        </div>
      </ChatShell>
    );
  }

  return (
    <ChatShell conversationId={conversationId}>
      <ChatWindow key={conversationId} conversationId={conversationId} initial={initial} />
    </ChatShell>
  );
}

function ChatWindow({
  conversationId,
  initial,
}: {
  conversationId: string;
  initial: Array<{ id: string; role: string; partsJson: string }>;
}) {
  const initialMessages = useMemo<UIMessage[]>(
    () =>
      initial.map((m) => ({
        id: m.id,
        role: m.role as UIMessage["role"],
        parts: JSON.parse(m.partsJson),
      })),
    [initial],
  );

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: { conversationId },
      }),
    [conversationId],
  );

  const { messages, sendMessage, status, error } = useChat({
    id: conversationId,
    messages: initialMessages,
    transport,
  });

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    textareaRef.current?.focus();
  }, [conversationId, status]);

  const onSubmit = async (msg: { text: string }) => {
    if (!msg.text.trim()) return;
    await sendMessage({ text: msg.text.trim() });
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <Conversation className="flex-1">
        <ConversationContent className="mx-auto w-full max-w-3xl">
          {isEmpty ? (
            <ConversationEmptyState
              icon={<BrainCircuit className="h-10 w-10 text-primary" />}
              title="Ask your AlphaQuant analyst"
              description="Real-time market data via Polygon. Multi-tool reasoning. Save reports for later."
            >
              <div className="mt-6 grid w-full max-w-xl gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s.text}
                    onClick={() => sendMessage({ text: s.text })}
                    className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card/30 p-3 text-left text-sm text-foreground/80 transition hover:border-primary/40 hover:bg-card/50"
                  >
                    <s.icon className="h-4 w-4 shrink-0 text-primary" />
                    <span>{s.text}</span>
                  </button>
                ))}
              </div>
            </ConversationEmptyState>
          ) : (
            messages.map((m) => <MessageView key={m.id} message={m} />)
          )}

          {status === "submitted" && (
            <Message from="assistant">
              <MessageContent>
                <Shimmer>Thinking…</Shimmer>
              </MessageContent>
            </Message>
          )}

          {error && (
            <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
              {error.message || "Something went wrong."}
            </div>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="mx-auto w-full max-w-3xl px-4 pb-4">
        <PromptInput
          onSubmit={(msg, e) => {
            e.preventDefault();
            void onSubmit(msg);
          }}
          className="rounded-2xl border-border/50 bg-card/40 backdrop-blur"
        >
          <PromptInputTextarea
            ref={textareaRef}
            placeholder="Ask about a ticker, ROI, top movers…"
          />
          <PromptInputFooter className="justify-end">
            <PromptInputSubmit status={status} disabled={status === "submitted" || status === "streaming"} />
          </PromptInputFooter>
        </PromptInput>
        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          AlphaQuant AI · Live Polygon data · Not financial advice.
        </p>
      </div>
    </div>
  );
}

function MessageView({ message }: { message: UIMessage }) {
  return (
    <Message from={message.role}>
      <MessageContent>
        {message.parts.map((part, idx) => {
          if (part.type === "text") {
            return message.role === "assistant" ? (
              <MessageResponse key={idx}>{part.text}</MessageResponse>
            ) : (
              <div key={idx} className="whitespace-pre-wrap text-sm">
                {part.text}
              </div>
            );
          }
          if (part.type.startsWith("tool-")) {
            const tp = part as {
              type: `tool-${string}`;
              state: "input-streaming" | "input-available" | "output-available" | "output-error" | string;
              input?: unknown;
              output?: unknown;
              errorText?: string;
            };
            const toolName = part.type.replace(/^tool-/, "");
            return (
              <Tool key={idx} defaultOpen={false}>
                <ToolHeader
                  type={part.type as `tool-${string}`}
                  state={tp.state as never}
                  title={prettyToolName(toolName)}
                />
                <ToolContent>
                  <ToolInput input={tp.input} />
                  <ToolOutput output={renderToolOutput(toolName, tp.output)} errorText={tp.errorText} />
                </ToolContent>
              </Tool>
            );
          }
          return null;
        })}
      </MessageContent>
    </Message>
  );
}

function prettyToolName(name: string) {
  const map: Record<string, string> = {
    getStockHistory: "📈 Stock History",
    getTickerSnapshot: "🎯 Live Snapshot",
    getTopGainers: "🚀 Top Gainers",
    calculateROI: "💰 ROI Calculator",
    saveReport: "💾 Save Report",
  };
  return map[name] ?? name;
}

function renderToolOutput(name: string, output: unknown) {
  if (!output) return null;
  if (name === "saveReport" && typeof output === "object" && output && "id" in output && "url" in output) {
    const o = output as { id: string; url: string };
    return (
      <div className="rounded-md bg-primary/10 p-3 text-sm">
        ✅ Report saved.{" "}
        <Link to="/reports/$id" params={{ id: o.id }} className="font-medium text-primary underline">
          View report →
        </Link>
      </div>
    );
  }
  return <pre className="overflow-x-auto rounded-md bg-muted/40 p-3 text-xs">{JSON.stringify(output, null, 2)}</pre>;
}

function ChatShell({ conversationId, children }: { conversationId: string; children: React.ReactNode }) {
  const list = useServerFn(listConversations);
  const create = useServerFn(createConversation);
  const navigate = useNavigate();

  const { data: convs } = useQuery({
    queryKey: ["conversations"],
    queryFn: () => list(),
    refetchInterval: 10_000,
  });

  const newChat = async () => {
    const c = await create();
    navigate({ to: "/chat/$conversationId", params: { conversationId: c.id } });
  };

  return (
    <main className="flex h-screen flex-col">
      <header className="flex items-center justify-between gap-3 border-b border-border/50 bg-card/30 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
            <Activity className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-sm font-semibold">
              Alpha<span className="text-gradient">Quant</span> Analyst
            </h1>
            <p className="text-[11px] text-muted-foreground">Live market AI agent</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/reports">
            <Button variant="ghost" size="sm" className="gap-2">
              <FileText className="h-3.5 w-3.5" /> Reports
            </Button>
          </Link>
          <Link to="/settings">
            <Button variant="ghost" size="sm" className="gap-2">
              <Settings className="h-3.5 w-3.5" />
            </Button>
          </Link>
          <Button onClick={newChat} variant="secondary" size="sm" className="gap-2">
            <MessageSquarePlus className="h-3.5 w-3.5" /> New
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden w-64 shrink-0 flex-col gap-1 overflow-y-auto border-r border-border/50 bg-card/20 p-3 md:flex">
          <p className="px-2 pb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Conversations
          </p>
          {(convs ?? []).map((c) => (
            <Link
              key={c.id}
              to="/chat/$conversationId"
              params={{ conversationId: c.id }}
              className={`truncate rounded-md px-2.5 py-2 text-xs transition hover:bg-card/60 ${
                c.id === conversationId ? "bg-card/60 text-foreground" : "text-muted-foreground"
              }`}
            >
              {c.title}
            </Link>
          ))}
          {!convs?.length && (
            <p className="px-2 text-xs text-muted-foreground/70 italic">No conversations yet.</p>
          )}
        </aside>
        {children}
      </div>
    </main>
  );
}

