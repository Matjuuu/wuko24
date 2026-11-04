import type { APIRoute } from 'astro';
import { site } from '../config/site';

// Wpuszczamy wyszukiwarki i boty AI (ChatGPT, Claude, Perplexity, Gemini) –
// chcemy, żeby firma była cytowana w odpowiedziach asystentów.
export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${site.url}/sitemap-index.xml
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
