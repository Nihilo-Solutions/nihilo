#!/usr/bin/env node
/**
 * Ping IndexNow so Bing, Yandex and Seznam crawl new or changed URLs in hours
 * rather than whenever they next come round. Google does not participate.
 *
 * The key is a file in public/ named after the key itself; IndexNow fetches it
 * to prove the submitter controls the host. Find it with:
 *   ls public/*.txt | grep -E '[0-9a-f]{32}'
 *
 * Run it by hand after a content deploy: npm run indexnow
 */

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { PATHS } from "./pages.mjs";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const HOST = "nihilosolutions.com";

const PAGES = PATHS;

const keyFile = readdirSync(join(ROOT, "public")).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) {
  console.error("indexnow: no key file in public/ matching <32 hex>.txt");
  process.exit(1);
}
const key = readFileSync(join(ROOT, "public", keyFile), "utf8").trim();

const body = {
  host: HOST,
  key,
  keyLocation: `https://${HOST}/${keyFile}`,
  urlList: PAGES.map((p) => (p === "/" ? `https://${HOST}/` : `https://${HOST}${p}`)),
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

// 200 and 202 both mean accepted. 422 usually means the key file is not
// reachable yet, which happens if you ping before the deploy finishes.
console.log(`indexnow: ${res.status} ${res.statusText} for ${body.urlList.length} urls`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
