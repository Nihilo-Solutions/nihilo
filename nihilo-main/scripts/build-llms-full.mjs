#!/usr/bin/env node
/**
 * Writes public/llms-full.txt: the readable text of every page in one file.
 *
 * `llms.txt` is a summary with links, which still asks an agent to crawl ten
 * URLs and run JavaScript to read the site. This gives it everything in a single
 * plain-text fetch.
 *
 * Runs against the built output, so it needs `next build` to have produced the
 * prerendered HTML first. It reads the static HTML rather than re-deriving text
 * from the TSX, so what it publishes is what a visitor actually sees.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const SERVER_APP = join(ROOT, ".next", "server", "app");

const PAGES = [
  ["/", "Home"],
  ["/what-we-build", "What we build"],
  ["/use-cases", "Use cases"],
  ["/how-we-work", "How we work"],
  ["/who-we-work-with", "Who we work with"],
  ["/about", "About"],
  ["/faq", "FAQ"],
  ["/contact", "Contact"],
  ["/privacy", "Privacy"],
  ["/terms", "Terms of Service"],
];

/** Turn prerendered HTML into readable text, preserving heading structure. */
function extract(html) {
  // Body only. Without this the <title> and <meta> contents leak into the text.
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let s = body ? body[1] : html;
  s = s.replace(/<script[\s\S]*?<\/script>/gi, " ");
  s = s.replace(/<style[\s\S]*?<\/style>/gi, " ");
  s = s.replace(/<header[\s\S]*?<\/header>/gi, " ");
  s = s.replace(/<footer[\s\S]*?<\/footer>/gi, " ");
  s = s.replace(/<a[^>]*href="#main"[^>]*>[\s\S]*?<\/a>/gi, " ");
  s = s.replace(/<span[^>]*aria-hidden[^>]*>[\s\S]*?<\/span>/gi, " ");
  // sr-only text is for assistive tech, not for a text dump
  s = s.replace(/<h2[^>]*class="[^"]*sr-only[^"]*"[^>]*>[\s\S]*?<\/h2>/gi, " ");
  s = s.replace(/<\/(h[1-6]|p|li|section|article|div|tr|summary|details)>/gi, "\n");
  s = s.replace(/<h([1-6])[^>]*>/gi, (_m, n) => "\n" + "#".repeat(Number(n)) + " ");
  s = s.replace(/<li(?=[\s>])[^>]*>/gi, "- ");
  s = s.replace(/<[^>]+>/g, " ");
  s = s
    .replace(/&nbsp;/g, " ")
    .replace(/&middot;/g, "·")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&#x2F;/g, "/");
  s = s.replace(/[ \t]+/g, " ");
  s = s.replace(/ *\n */g, "\n");
  s = s.replace(/\n{3,}/g, "\n\n");
  return s.trim();
}

function htmlFor(path) {
  const rel = path === "/" ? "index.html" : `${path.slice(1)}.html`;
  for (const candidate of [join(SERVER_APP, rel), join(SERVER_APP, "(marketing)", rel)]) {
    if (existsSync(candidate)) return readFileSync(candidate, "utf8");
  }
  return null;
}

const parts = [
  "# Nihilo Solutions: full site text",
  "",
  "Every page of https://nihilosolutions.com as plain text, so an agent can read",
  "the whole site in one fetch. See /llms.txt for the summary version.",
  "",
  "Nihilo Solutions builds custom operational automations for growing companies:",
  "recurring reports, meter and usage capture, client and record lookup, and",
  "similar repeating operational work. Built against the tools a client already",
  "uses, and kept running once live. Connecticut, remote nationwide.",
  "",
  "Contact: sam@nihilosolutions.com",
  "",
];

let missing = 0;
for (const [path, label] of PAGES) {
  const html = htmlFor(path);
  if (!html) {
    console.error(`build-llms-full: no prerendered HTML for ${path}`);
    missing += 1;
    continue;
  }
  const url = path === "/" ? "https://nihilosolutions.com/" : `https://nihilosolutions.com${path}`;
  parts.push("=".repeat(72), `# ${label}`, url, "", extract(html), "");
}

if (missing) {
  console.error(`build-llms-full: ${missing} page(s) missing, not writing a partial file`);
  process.exit(1);
}

const text = parts.join("\n").replace(/\n{3,}/g, "\n\n") + "\n";

// Same house rule as the rest of the copy. If a dash reached a page, it would
// reach this file too, so fail here rather than publish it.
for (const [re, name] of [[/\u2014/, "em dash"], [/\u2013/, "en dash"]]) {
  if (re.test(text)) {
    console.error(`build-llms-full: extracted text contains a ${name}, not writing`);
    process.exit(1);
  }
}

const out = join(ROOT, "public", "llms-full.txt");
writeFileSync(out, text);
console.log(`build-llms-full: wrote public/llms-full.txt from ${PAGES.length} pages`);
