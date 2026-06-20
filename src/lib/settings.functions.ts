import { createServerFn } from "@tanstack/react-start";

export const checkEnvVars = createServerFn({ method: "GET" }).handler(async () => {
  const polygon = !!process.env.POLYGON_API_KEY;
  const lovable = !!process.env.LOVABLE_API_KEY;
  const gemini = !!process.env.GEMINI_API_KEY;
  const openai = !!process.env.OPENAI_API_KEY;
  return {
    polygon,
    lovable,
    gemini,
    openai,
    ready: polygon && (lovable || gemini),
  };
});
