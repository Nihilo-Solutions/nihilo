import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Answer engines and model crawlers, listed explicitly.
 *
 * Being straight about what this does: the wildcard rule below already allows
 * every one of them, so naming them changes nothing about what they may fetch
 * today. It is worth writing down because the permission is then deliberate
 * rather than incidental, and because this is the single place to disallow one
 * later without touching anything else.
 */
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
  "Amazonbot",
  "meta-externalagent",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_AGENTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
