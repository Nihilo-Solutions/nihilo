# Nihilo Solutions

Monorepo-ish: one deployable site plus the design system.

| Directory | What it is |
| --- | --- |
| `nihilo-main/` | **The site.** nihilosolutions.com, Next.js 16 App Router, deployed to Vercel. All development happens here. |
| `design/` | Brand assets and the design-system kit. Not built or deployed. |

The repo root is not a deployable project. Everything for the site, including its
`README`, `CLAUDE.md`, `docs/` and `package.json`, lives in `nihilo-main/`.

```sh
cd nihilo-main
npm install
npm run dev        # http://localhost:5000
```

The site sells custom operational automations for growing companies: recurring
reports, meter and usage capture, client and record lookup, and similar repeating
operational work. See `nihilo-main/docs/positioning.md` for the framing, IA and
build notes.
