import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { createConversation } from "@/lib/conversations.functions";

export const Route = createFileRoute("/chat/")({
  head: () => ({
    meta: [
      { title: "AlphaQuant AI Chat — Analyst Agent" },
      { name: "description", content: "Chat with your AlphaQuant AI analyst. Ask about live market movers, ROI scenarios, and save reports." },
    ],
  }),
  component: NewChatRedirect,
});

function NewChatRedirect() {
  const navigate = useNavigate();
  const create = useServerFn(createConversation);
  useEffect(() => {
    let cancelled = false;
    create().then((conv) => {
      if (!cancelled) navigate({ to: "/chat/$conversationId", params: { conversationId: conv.id }, replace: true });
    });
    return () => { cancelled = true; };
  }, [create, navigate]);
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex items-center gap-3 text-muted-foreground text-sm">
        <Loader2 className="h-4 w-4 animate-spin" /> Starting new conversation…
      </div>
    </main>
  );
}
