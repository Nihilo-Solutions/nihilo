# Nihilo Solutions

## Overview

Nihilo Solutions is an enterprise AI consulting website built with Next.js 16+ using the App Router architecture. The site showcases services around secure, tenant-local RAG (Retrieval-Augmented Generation) pipelines and agentic automation on Azure and AWS cloud platforms.

The application serves as a marketing and lead generation platform featuring:
- Service descriptions for AI engineering, workflow automation, and cloud architecture
- An interactive AI readiness assessment tool
- Security documentation and whitepapers
- Booking integration for discovery calls via Microsoft Outlook

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 16+ with App Router**: The project uses the modern App Router pattern with route groups for organizing marketing pages under `(marketing)/`
- **React 19**: Latest React version with server components support
- **TypeScript**: Full type safety with strict mode enabled

### Styling
- **Tailwind CSS 4**: Utility-first CSS framework configured via PostCSS
- **Custom CSS**: Additional styles in `src/styles.css` for button effects and base overrides
- **Dark theme**: Fixed dark color scheme with zinc/blue accent palette

### Project Structure
```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── (marketing)/  # Route group for public pages (home, assessment, security, use-cases)
│   └── layout.tsx    # Root layout with metadata and global providers
├── components/
│   ├── features/     # Domain-specific components (Hero, Services, Booking, etc.)
│   ├── shared/       # Reusable components (Navbar, Footer, TableOfContents)
│   └── ui/           # Atomic components (empty, available for future use)
├── lib/              # Utilities and helpers
│   ├── seo.ts        # Metadata construction helpers
│   └── utils.ts      # General utilities (cn, slugify, formatDate)
├── types/            # TypeScript interfaces
└── constants.tsx     # Static data (services, founders, assessment questions)
```

### Key Design Decisions

1. **Route Groups**: Marketing pages are grouped under `(marketing)/` to share layouts without affecting URL structure

2. **Component Organization**: Split between `features/` (business logic components) and `shared/` (reusable UI) with barrel exports via `index.ts`

3. **SEO-First Approach**: Comprehensive metadata in `layout.tsx`, JSON-LD structured data in the legacy `index.html`, and helper functions in `lib/seo.ts`

4. **Path Aliases**: Uses `@/*` alias pointing to `src/*` for clean imports

## External Dependencies

### Analytics & Tracking
- **Vercel Analytics**: `@vercel/analytics` for production analytics
- **Google Analytics**: GA4 tag (G-HTNV61D4K4) in index.html

### Email Services
- **EmailJS**: `@emailjs/browser` for assessment form submissions
- Environment variables required:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### UI Libraries
- **Lucide React**: Icon library
- **MUI Material**: Material UI components with Emotion styling
- **Recharts**: Data visualization for stats/performance charts

### Booking Integration
- **Microsoft Outlook Bookings**: External link to `outlook.office.com/book/NihiloSolutions1@nihilosolutions.com/`

### Deployment
- **Vercel**: Configured via `vercel.json` with caching headers and SPA rewrites
- Dev server runs on port 5000 with `0.0.0.0` host binding for Replit compatibility
- Allowed dev origins include `*.riker.replit.dev`

### Fonts
- **Google Fonts**: Inter (400, 700) and JetBrains Mono (400, 500) loaded via preconnect