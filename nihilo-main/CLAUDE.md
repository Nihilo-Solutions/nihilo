# Nihilo Solutions — Claude Code instructions

Project-level instructions for the Nihilo marketing site repo. Layers on top of `~/.claude/CLAUDE.md` and the `~/context/sam-*.md` library. If anything here conflicts with the global rules, this file wins for this repo, but flag the conflict so I know.

## Required reading at session start

In this order, before touching anything:

1. Global rules: already loaded via `~/.claude/CLAUDE.md`. Confirm you've loaded the sam-* library.
2. **This file** (you're reading it).
3. **`~/context/nihilo.md`** — what Nihilo is, who buys it, the offer, the voice.
4. **`./docs/positioning.md`** in this repo — the locked positioning and copy bank.
5. **`./docs/seo-strategy.md`** in this repo — keyword targets, content plan, technical SEO checklist.
6. **`./docs/conversion-playbook.md`** in this repo — what we know about how visitors actually convert.
7. **`./docs/site-architecture.md`** in this repo — repo layout, stack, conventions, gotchas.
8. **`./README.md`** if it has content beyond a one-liner.

Acknowledge in one line that everything is loaded. Then wait.

## What this project is

The Nihilo Solutions marketing website at https://nihilosolutions.com. It exists for one purpose: convert qualified enterprise buyers into discovery calls. Not for traffic, not for brand, not for awards. Discovery calls.

Everything we do on this site is judged against that goal. Pretty visuals that don't move that needle are decoration. SEO content that doesn't bring buyers in is busywork. Features that don't shorten time-to-discovery-call are noise.

## Operating principles for this repo

1. **One positioning, repeated.** The site says one thing about who we are, who we serve, and what we deliver. Every page, every meta tag, every CTA reinforces it. If you find yourself writing copy that pulls in a different direction, stop and check `docs/positioning.md`.

2. **Specificity beats polish.** "Tenant-local RAG on Azure for SOC 2 environments" beats "secure enterprise AI solutions." Numbers beat adjectives. Real client names beat "Fortune 500 enterprise." Always.

3. **Every change is judged by conversion impact, then SEO impact, then aesthetics.** In that order. A change that makes the site prettier but harder to convert is a downgrade.

4. **Speed and accessibility are non-negotiable.** This is a security-and-engineering brand. A site that loads slowly or fails basic a11y is self-discrediting. Lighthouse 90+ across the board is the floor, not the goal.

5. **Treat the site as a product, not a brochure.** It has users (visitors), a job-to-be-done (decide whether to book a call), and metrics (conversion rate, qualified leads). Iterate accordingly.

6. **Markdown as content source — aspirational, not current.** The intent is for long-form copy (case studies, articles, service descriptions) to live as markdown in `/content/`, rendered by Next.js. Today, that copy is still inlined in TSX components. Don't add new inlined copy reflexively — if a migration to a content layer is on the table, ask first. See ADR-003 in `docs/site-architecture.md`.

## Working style

- **Small changes**: just make them and show me the diff.
- **Medium changes (a page rewrite, new component, more than ~80 lines)**: describe the plan first, then execute.
- **Big changes (new section, IA restructure, dependency add, infra change)**: discuss before touching anything.
- **Never commit, push, or deploy without explicit say-so.** Vercel auto-deploys on push to main, so a push *is* a deploy.
- **Never bypass the lint/typecheck/test gates.** If they're failing, fix the underlying issue, don't disable the rule. (Note: lint/test/format scripts don't exist in `package.json` yet; adding them is on the to-do list.)

## What to never touch without explicit instruction

- `vercel.json`, `next.config.*`, `postcss.config.*`, `tailwind.config.*`, or other deploy/build config.
- The Vercel project configuration (project settings, environment variables, domains).
- `package.json` dependencies. Don't add or upgrade without asking.
- Analytics wiring (`@vercel/analytics` in `layout.tsx`; GA4 if/when it's added). Don't remove or modify.
- Anything that touches the intake form on `intake.nihilosolutions.com` (separate concern).
- Privacy policy or legal pages without me reviewing the wording.

## Convention quick-reference

The full set is in `docs/site-architecture.md`. The short version:

- **Framework**: Next.js 16 (App Router). React 19 + TypeScript (strict).
- **Styling**: hybrid — Tailwind utilities + CSS custom properties in `src/styles.css` + inline `style={{}}` props. Reuse existing design tokens; don't introduce new ones without reason.
- **Content**: currently inlined in TSX. A markdown content layer is aspirational (ADR-003).
- **Components**: one per file. Homepage sections in `src/components/features/`, layout chrome in `src/components/shared/`. Server components by default; `"use client"` only when needed.
- **No new dependencies** without explicit approval. The site has fewer moving parts than most Next.js apps and we want to keep it that way.
- **Accessibility is a build gate.** Use semantic HTML. Real headings (`<h1>`/`<h2>`/`<h3>`), real buttons (`<button>`), real links (`<a href>`). No `<div onClick>`.

## Useful commands

Run from `nihilo-main/`:

```bash
npm install
npm run dev      # next dev -p 5000 -H 0.0.0.0
npm run build    # next build
npm run start    # next start
```

Local URL: `http://localhost:5000`.

No `lint`, `test`, or `format` scripts are defined in `package.json` yet. Adding them is on the to-do list.

## Domain glossary

- **ICP** = ideal customer profile. For Nihilo this is defined in `docs/positioning.md`.
- **Tenant-local**: deployed inside the customer's own Azure / AWS account, not ours. Our core differentiator.
- **Readiness Protocol / Readiness Assessment**: the entry-point engagement. A paid (or anchor-priced) 30-min to 2-hour audit that converts to a real engagement at high rate.
- **Principal**: a founder. Sam (engineering) and Jake (BD/ops). Direct-access model means no AEs, no junior consultants between buyer and principal.
- **Discovery call**: the conversion event. Our entire site exists to produce these.

## When in doubt

Re-read `docs/positioning.md`. If the answer isn't there, ask me before guessing.

## Obsidian vault access

Claude Code has access to the personal Obsidian vault via the `obsidian-nihilo` MCP server.

- **Vault path**: `/Users/samoakes/Desktop/knowledge-vault-project/knowledge-vault`
- **Nihilo subfolder**: `/nihilo` — read and write only within this folder
- **Do not read or write outside `/nihilo`** unless explicitly instructed
- At session start, after loading required docs, check `/nihilo` for any planning notes or open decisions relevant to the current task
- If you find notes that conflict with `docs/positioning.md` or `docs/site-architecture.md`, flag the conflict before acting

### What lives in the vault vs the repo

| Vault `/nihilo` | Repo `docs/` |
|---|---|
| Planning notes, open questions, ideas | Locked decisions, copy bank, SEO strategy |
| Client context, meeting notes | Architecture decisions (ADRs) |
| In-progress thinking | Source of truth for conventions |

The vault is working memory. The repo docs are locked reference. When something graduates from idea to decision, it moves to the repo.

## Vault logging

At the end of every session, write a session log to:
/Users/samoakes/Desktop/knowledge-vault-project/knowledge-vault/nihilo/sessions/YYYY-MM-DD-[topic].md

Use the obsidian-nihilo MCP if available. If not, write directly 
to the filesystem path above — Obsidian watches the filesystem 
and picks up new files automatically.

Log format:
- Decisions made this session
- Branches applied and their status
- Open items carried forward
- Next steps

Do this before ending any session, without being asked.
