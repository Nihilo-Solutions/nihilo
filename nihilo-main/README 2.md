# Nihilo project context bundle

The set of context files Claude Code should load when working on the Nihilo Solutions marketing site. Drawn from ICM principles (filesystem-as-architecture, plain markdown over databases, layered context) and tailored to this specific project.

## The bundle

```
projects/nihilo/
├── README.md                    ← you are here
├── nihilo.md                    ← goes in ~/context/ (project-level personal context)
├── CLAUDE.md                    ← goes in the repo root
├── positioning.md               ← goes in the repo at docs/positioning.md
├── seo-strategy.md              ← goes in the repo at docs/seo-strategy.md
├── conversion-playbook.md       ← goes in the repo at docs/conversion-playbook.md
└── site-architecture.md         ← goes in the repo at docs/site-architecture.md
```

Two layers:

**Layer 1 — Personal context** (lives outside the repo, in `~/context/`):
- `nihilo.md` — who Nihilo is, what we sell, who buys it, how we sound. This is *your* context as the operator. It travels with you across machines. Not committed to the repo.

**Layer 2 — Repo context** (lives inside the repo, committed to git):
- `CLAUDE.md` — repo root. Tells Claude Code how to behave in this repo.
- `docs/positioning.md` — locked positioning + copy bank.
- `docs/seo-strategy.md` — keyword targets, content roadmap, technical SEO checklist.
- `docs/conversion-playbook.md` — funnel diagnostics, CTA hierarchy, optimization plan.
- `docs/site-architecture.md` — repo conventions, stack details, ADRs.

The repo-level files are committed because they belong to the project, not to you specifically. Anyone working on the site (you, a future contractor, Jake if he ever touches the repo) needs them.

## Install plan

### Step 1: Personal context

Drop `nihilo.md` into `~/context/`:

```bash
cp nihilo.md ~/context/nihilo.md
```

Your global `~/.claude/CLAUDE.md` already references this file (as a load-on-demand file for Nihilo work). Done.

### Step 2: Repo context

In the Nihilo site repo:

```bash
cd /path/to/nihilo-site

# Drop the root CLAUDE.md
cp /path/to/projects/nihilo/CLAUDE.md ./CLAUDE.md

# Make docs/ if it doesn't exist, drop the docs
mkdir -p docs
cp /path/to/projects/nihilo/positioning.md ./docs/positioning.md
cp /path/to/projects/nihilo/seo-strategy.md ./docs/seo-strategy.md
cp /path/to/projects/nihilo/conversion-playbook.md ./docs/conversion-playbook.md
cp /path/to/projects/nihilo/site-architecture.md ./docs/site-architecture.md

# Commit
git add CLAUDE.md docs/
git commit -m "Add Claude Code project context"
```

Then from inside the repo, fire up Claude Code:

```bash
claude
```

Ask: *"What context files have you loaded for this session?"*

You should see:
- `~/.claude/CLAUDE.md` (global)
- `~/context/sam-about.md`, `sam-voice.md`, `sam-claude-rules.md`, `sam-coding-conventions.md`, `sam-verification-checklist.md`
- `~/context/nihilo.md`
- `./CLAUDE.md` (project)
- `./docs/positioning.md`, `seo-strategy.md`, `conversion-playbook.md`, `site-architecture.md`
- `./README.md` (if it has substantive content)

That's the full context load. ~30-50K tokens, well within budget.

### Step 3: Customize where needed

A few files have `# TODO:` markers in `site-architecture.md` where I made assumptions about your stack. After the first session, ask Claude Code to:

1. Read `package.json` and update `site-architecture.md` with the exact stack and versions.
2. Read the actual repo structure and tighten the layout section.
3. Update the ADRs with real dates and confirm the decisions match what's actually deployed.

### Step 4: First real task

After context is loaded and the architecture file is tightened, the highest-leverage first task is **the critical fixes from the audit**:

1. Add per-page meta tags (each route exports unique `metadata`).
2. Add structured data (JSON-LD): `Organization`, `LocalBusiness`, `Person` (×2), `Service` (×3).
3. Build a real OG image (1200×630) and wire it up site-wide.
4. Tighten the H1 + subtitle based on `positioning.md`.
5. Update the meta description to include the 30-60% cost claim.

These are all small, high-impact, and Claude Code can knock them out in one session each.

## The ICM influence (for context)

These files are structured following the ICM (Interpretable Context Methodology) principles from the Skool community:

- **Filesystem-as-architecture**: each file has one responsibility. Positioning is in `positioning.md`. SEO is in `seo-strategy.md`. They don't cross-contaminate.
- **Plain markdown over databases**: every piece of content (copy, strategy, conventions) is markdown. Editable, reviewable, versionable.
- **Layered context**: personal layer (`~/context/`) on top of repo layer (`./docs/`) on top of code. Each layer has a different lifecycle and a different audience.
- **Single source of truth per concern**: positioning lives in one file. If a decision conflicts across files, the rule is to fix it at the source, not paper over it downstream.
- **CLAUDE.md as the routing layer**: the repo's `CLAUDE.md` doesn't contain the content; it tells Claude Code where the content lives. The pattern scales — adding a new doc means adding one line to `CLAUDE.md` and one new file in `docs/`.

The Skool community calls this approach "your folder system IS your AI architecture." For our purposes: the docs folder is the briefing room. Every time Claude Code starts a session, it walks the briefing room before touching the code.

## Maintenance

- **Update the docs as we learn.** This is the whole point of the layered model. When a conversion test produces an insight, update `conversion-playbook.md`. When a keyword starts ranking, update `seo-strategy.md`.
- **Commit doc changes with code changes.** A pull request that tightens the H1 should include the corresponding update to `positioning.md`. Otherwise the docs drift from reality.
- **Don't let TODOs rot.** The `# TODO:` markers in `site-architecture.md` should disappear within the first week of using this bundle. After that, every TODO is a signal that someone (probably you, probably me) needs to look at it.

## What this bundle is not

- It is not the website code. The site itself lives in your existing repo.
- It is not the content of articles. Articles live in `/content/articles/*.md` once written.
- It is not the company plan. Long-term strategic decisions live elsewhere.
- It is not a substitute for actually doing the work. It is the scaffolding that makes the work cheaper and more consistent.
