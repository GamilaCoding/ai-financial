
-- Conversations table (shared, no auth)
CREATE TABLE public.conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL DEFAULT 'New conversation',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.conversations TO anon, authenticated;
GRANT ALL ON public.conversations TO service_role;
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read conversations" ON public.conversations FOR SELECT USING (true);
CREATE POLICY "Anyone can insert conversations" ON public.conversations FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update conversations" ON public.conversations FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Anyone can delete conversations" ON public.conversations FOR DELETE USING (true);

-- Chat messages (AI SDK UIMessage[] persisted)
CREATE TABLE public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  role TEXT NOT NULL,
  parts JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_chat_messages_conv ON public.chat_messages(conversation_id, created_at);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.chat_messages TO anon, authenticated;
GRANT ALL ON public.chat_messages TO service_role;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read messages" ON public.chat_messages FOR SELECT USING (true);
CREATE POLICY "Anyone can insert messages" ON public.chat_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can delete messages" ON public.chat_messages FOR DELETE USING (true);

-- Saved analyst reports
CREATE TABLE public.reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  tickers TEXT[] NOT NULL DEFAULT '{}',
  recommendation TEXT,
  content_md TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_reports_created ON public.reports(created_at DESC);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.reports TO anon, authenticated;
GRANT ALL ON public.reports TO service_role;
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read reports" ON public.reports FOR SELECT USING (true);
CREATE POLICY "Anyone can insert reports" ON public.reports FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can delete reports" ON public.reports FOR DELETE USING (true);
