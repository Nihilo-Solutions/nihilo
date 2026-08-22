#!/usr/bin/env node
/**
 * Copy guard. Runs before every build, so anything it catches fails the deploy
 * rather than shipping.
 *
 * Two classes of problem, both of which have actually reached production here:
 *
 *   1. Em dashes, en dashes and non-breaking spaces. House style is to avoid
 *      them in user-facing copy.
 *   2. The ownership claim. The site used to say the client owns the system,
 *      which is not how the work is delivered. It was corrected, and the
 *      archived brief still contains the old wording, so it is one careless
 *      copy-paste away from coming back.
 *
 * `docs/archive/` is excluded on purpose: it is a historical record of what the
 * site used to say, and rewriting history to satisfy a linter would defeat the
 * point of keeping it.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");

const SEARCH = ["src", "public", "docs", "scripts"];
const FILES = [
  "CLAUDE.md",
  "README.md",
  "next.config.ts",
  "package.json",
];
const SKIP_DIRS = new Set(["node_modules", ".next", ".vercel", "archive"]);
const TEXT_EXT = /\.(tsx?|jsx?|mjs|cjs|css|md|txt|json|xml|html)$/;

/** Characters we do not want anywhere in the repo's own copy. */
// Escapes, not literals, so this file does not trip its own check and needs no
// exemption from it.
const CHARS = [
  { re: /\u2014/g, name: "em dash" },
  { re: /\u2013/g, name: "en dash" },
  { re: /\u00a0/g, name: "non-breaking space" },
];

/**
 * The ownership claim, in every phrasing it has appeared in. Checked only
 * against files that can reach a visitor, so prose in this file and in the
 * instructions that *documents* the ban does not trip it.
 */
const CLAIMS = [
  "you own it",
  "you own the",
  "yours when we are done",
  "the workflow is yours",
  "own what we built",
  "keep the lights on",
  "hand it over",
  "no black box subscription",
];
const CLAIM_SCOPE = /^(src|public)[\\/]/;
const CLAIM_EXEMPT = /check-copy\.mjs$/;

function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (TEXT_EXT.test(entry)) out.push(full);
  }
  return out;
}

const targets = [
  ...SEARCH.flatMap((d) => walk(join(ROOT, d))),
  ...FILES.map((f) => join(ROOT, f)),
];

const problems = [];

for (const file of targets) {
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  const rel = relative(ROOT, file).split(sep).join("/");

  for (const { re, name } of CHARS) {
    for (const m of text.matchAll(re)) {
      const line = text.slice(0, m.index).split("\n").length;
      problems.push(`${rel}:${line} contains a ${name}`);
    }
  }

  if (CLAIM_SCOPE.test(rel) && !CLAIM_EXEMPT.test(rel)) {
    const lower = text.toLowerCase();
    for (const claim of CLAIMS) {
      let i = lower.indexOf(claim);
      while (i !== -1) {
        const line = text.slice(0, i).split("\n").length;
        problems.push(`${rel}:${line} asserts client ownership: "${claim}"`);
        i = lower.indexOf(claim, i + claim.length);
      }
    }
  }
}

// llms-full.txt is a committed build artifact (see CLAUDE.md). Catch it going
// missing or losing a page; content drift is a documented manual step.
const LLMS_FULL = join(ROOT, "public", "llms-full.txt");
const LLMS_PAGES = [
  "/", "/what-we-build", "/use-cases", "/how-we-work", "/who-we-work-with",
  "/about", "/faq", "/contact", "/privacy", "/terms",
];
try {
  const full = readFileSync(LLMS_FULL, "utf8");
  for (const path of LLMS_PAGES) {
    const url = path === "/" ? "https://nihilosolutions.com/" : `https://nihilosolutions.com${path}`;
    if (!full.includes(url)) {
      problems.push(`public/llms-full.txt is missing ${url}, run: npm run build:llms`);
    }
  }
} catch {
  problems.push("public/llms-full.txt is missing, run: npm run build && npm run build:llms");
}

if (problems.length) {
  console.error(`check-copy: ${problems.length} problem(s)\n`);
  for (const p of problems) console.error(`  ${p}`);
  console.error(
    "\nSee the forbidden-wording section of CLAUDE.md. If a dash is genuinely\n" +
      "needed in non-visitor-facing text, rephrase rather than adding an exception.",
  );
  process.exit(1);
}

console.log(`check-copy: ${targets.length} files clean`);
