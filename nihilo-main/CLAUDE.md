# Nihilo Solutions — Claude Code instructions

Project-level instructions for the Nihilo marketing site repo. Layers on top of `~/.claude/CLAUDE.md` and the `~/context/sam-*.md` library. If anything here conflicts with the global rules, this file wins for this repo, but flag the conflict so I know.

## Required reading at session start

In this order, before touching anything:

1. Global rules: already loaded via `~/.claude/CLAUDE.md`. Confirm you've loaded the sam-* library.
2. **This file** (you're reading it).
3. **`~/context/nihilo.md`** — what Nihilo is, who buys it, the offer, the voice.
4. **`./docs/positioning.md`** in this repo — the locked positioning, IA, tokens, and build notes.
5. **`./README.md`** if it has content beyond a one-liner.

`docs/archive/` holds superseded briefs. Read them only for history; they are not
current.

Acknowledge in one line that everything is loaded. Then wait.

## What this project is

The Nihilo Solutions marketing website at https://nihilosolutions.com. It exists for one purpose: convert visitors into discovery calls. Not for traffic, not for brand, not for awards. Discovery calls.

What Nihilo sells is **custom operational automations for growing companies**: recurring reports, meter and usage capture, client and record lookup, and similar repeating operational work, built against the tools the client already uses. It does not sell SEO, website modernization, chatbots as a product, ERP replacement, or staffed marketing. The site was fully replaced in August 2026; if you find copy pointing the other way, it is a leftover and should go.

Everything we do on this site is judged against that goal. Pretty visuals that don't move that needle are decoration. SEO content that doesn't bring buyers in is busywork. Features that don't shorten time-to-discovery-call are noise.

## Operating principles for this repo

1. **One positioning, repeated.** The site says one thing about who we are, who we serve, and what we deliver. Every page, every meta tag, every CTA reinforces it. If you find yourself writing copy that pulls in a different direction, stop and check `docs/positioning.md`.

2. **Specificity beats polish.** "The weekly service report someone still builds by hand" beats "operational inefficiencies." Concrete beats abstract. But never invent: no case studies, no client names, no performance metrics we cannot stand behind.

3. **Every change is judged by conversion impact, then SEO impact, then aesthetics.** In that order. A change that makes the site prettier but harder to convert is a downgrade.

4. **Speed and accessibility are non-negotiable.** This is a security-and-engineering brand. A site that loads slowly or fails basic a11y is self-discrediting. Lighthouse 90+ across the board is the floor, not the goal.

5. **Treat the site as a product, not a brochure.** It has users (visitors), a job-to-be-done (decide whether to book a call), and metrics (conversion rate, qualified leads). Iterate accordingly.

6. **Copy is locked.** The wording came from the redesign and is deliberate. Do not rewrite it into agency-speak, do not add unsourced stats, and do not reintroduce an employee-count cap. No em dashes in user-facing copy. Discovery calls are 30 minutes everywhere. CTAs say "Book a call with our team" or "Book a discovery call", never "talk to Sam or Jake".

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

The full set is in `docs/positioning.md`. The short version:

- **Framework**: Next.js 16 (App Router). React 19 + TypeScript (strict).
- **Content**: inlined in TSX. Copy is the redesign's and should not be rewritten into agency-speak.
- **Components**: one per file. Shared site chrome in `src/components/site/`. Server components by default; `"use client"` only when there is state or an event handler (today: the header drawer and the contact form).
- **Styling**: design tokens are the `@theme` block at the top of `src/styles.css`. Change a colour there, not in a component.
- **No new dependencies** without explicit approval. The site has fewer moving parts than most Next.js apps and we want to keep it that way.
- **Accessibility is a build gate.** Use semantic HTML. Real headings (`<h1>`/`<h2>`/`<h3>`), real buttons (`<button>`), real links (`<a href>`). No `<div onClick>`.

## Useful commands

Run from `nihilo-main/`:

```bash
npm install
npm run dev      # next dev -p 5000 -H 0.0.0.0
npm run typecheck
npm run build    # next build
npm run start    # next start
```

Local URL: `http://localhost:5000`.

`npm run typecheck` runs `tsc --noEmit`. No `lint`, `test`, or `format` scripts are
defined yet; adding them is on the to-do list.

## Domain glossary

- **ICP**: operations, service, dispatch, billing and office teams that still do
  the same work by hand every week, with data already in sheets, portals or a few
  disconnected tools.
- **Discovery call**: the conversion event, 30 minutes. Our entire site exists to
  produce these. Every CTA opens the Microsoft Bookings calendar.
- **Principal-led**: the people who scope the work stay on it through handoff. No
  account managers. CTAs say "Book a call with our team", never "talk to Sam or
  Jake".
- **Handoff**: the client owns the workflow when we are done. Not a subscription
  to a black box.


## When in doubt

Re-read `docs/positioning.md`. If the answer isn't there, ask me before guessing.

## Obsidian vault access

Claude Code has access to the personal Obsidian vault via the `obsidian-nihilo` MCP server.

- **Vault path**: `/Users/samoakes/Desktop/knowledge-vault-project/knowledge-vault`
- **Nihilo subfolder**: `/nihilo` — read and write only within this folder
- **Do not read or write outside `/nihilo`** unless explicitly instructed
- At session start, after loading required docs, check `/nihilo` for any planning notes or open decisions relevant to the current task
- If you find notes that conflict with `docs/positioning.md`, flag the conflict before acting

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
