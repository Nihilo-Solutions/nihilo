# Nihilo Solutions

## Overview

Nihilo Solutions is an enterprise AI consulting website built with Next.js 16+ using the App Router architecture. The site showcases services around secure, tenant-local RAG (Retrieval-Augmented Generation) pipelines and agentic automation on Azure and AWS cloud platforms.

The application serves as a marketing and lead generation platform featuring:
- Service descriptions for AI engineering, workflow automation, and cloud architecture
- An interactive AI readiness assessment tool
- Security documentation and whitepapers
- Booking integration for discovery calls via Microsoft Outlook
- **50 programmatic SEO pages** for solutions across Azure, AWS, Industry verticals, and Security compliance

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 16+ with App Router**: The project uses the modern App Router pattern with route groups for organizing marketing pages under `(marketing)/`
- **React 19**: Latest React version with server components support
- **TypeScript**: Full type safety with strict mode enabled
- **Framer Motion**: Animation library for entrance effects on solution pages

### Styling
- **Tailwind CSS 4**: Utility-first CSS framework configured via PostCSS
- **Custom CSS**: Additional styles in `src/styles.css` for button effects and base overrides
- **Dark theme**: Fixed dark color scheme with zinc/blue accent palette

### Project Structure
```
src/
├── app/
│   ├── (marketing)/      # Route group for public pages
│   │   ├── page.tsx      # Home page
│   │   ├── assessment/   # AI readiness assessment
│   │   ├── security/     # Security documentation
│   │   └── use-cases/    # Use case examples
│   ├── solutions/        # Programmatic SEO pages
│   │   ├── page.tsx      # Solutions index (all 50 grouped by category)
│   │   └── [slug]/       # Dynamic route for individual solutions
│   ├── layout.tsx        # Root layout with metadata and fonts
│   └── sitemap.ts        # Auto-generated sitemap for all pages
├── components/
│   ├── features/         # Domain-specific (Hero, Services, Booking, etc.)
│   ├── shared/           # Reusable (Navbar with Solutions dropdown, Footer)
│   └── ui/               # Atomic components
├── lib/
│   ├── data/
│   │   ├── pages.ts      # 50 solution page definitions (Data Engine)
│   │   └── types.ts      # TypeScript types for solutions
│   ├── seo.ts            # Metadata construction helpers
│   └── utils.ts          # General utilities (cn, slugify)
├── types/                # TypeScript interfaces
└── constants.tsx         # Static data (services, founders, assessment questions)
```

### Programmatic SEO System

The site implements a programmatic SEO strategy with 50 pre-rendered solution pages:

**Categories:**
- **Azure (13 pages)**: Fabric Automation, OpenAI Integration, Cognitive Services, Synapse Analytics, Data Factory, ML Ops, Functions AI, Logic Apps, Bot Service, Form Recognizer, Speech Services, Cosmos DB Vector Search, Container Apps ML
- **AWS (13 pages)**: Bedrock Agents, SageMaker Pipelines, Lambda AI, Step Functions ML, Comprehend NLP, Textract, Lex Chatbots, Polly Voice AI, Rekognition, Personalize, Kendra Search, Glue Data Prep, Neptune Graph AI
- **Industry (12 pages)**: Finance, Healthcare, Legal, Manufacturing, Retail, Insurance, Real Estate, Logistics, Energy, Telecommunications, Government, Education
- **Security (12 pages)**: Zero Trust AI, SOC 2, HIPAA, PCI DSS, GDPR, FedRAMP, ISO 27001, Data Residency, Audit Trails, Secure RAG, Private LLM, Access Control

**Technical Implementation:**
- `generateStaticParams()` pre-renders all 50 pages at build time
- `generateMetadata()` creates unique SEO titles/descriptions per page
- JSON-LD ProfessionalService schema on each solution page
- Automatic sitemap generation via `src/app/sitemap.ts`

### Key Design Decisions

1. **Route Groups**: Marketing pages are grouped under `(marketing)/` to share layouts without affecting URL structure

2. **Component Organization**: Split between `features/` (business logic components) and `shared/` (reusable UI) with barrel exports via `index.ts`

3. **SEO-First Approach**: Comprehensive metadata in `layout.tsx`, JSON-LD structured data on solution pages, and auto-generated sitemap

4. **Path Aliases**: Uses `@/*` alias pointing to `src/*` for clean imports

5. **Solutions Dropdown**: Navbar includes mega-menu dropdown organizing 50 solutions by category

## External Dependencies

### Analytics & Tracking
- **Vercel Analytics**: `@vercel/analytics` for production analytics

### Email Services
- **EmailJS**: `@emailjs/browser` for assessment form submissions
- Environment variables required:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### UI Libraries
- **Lucide React**: Icon library
- **Framer Motion**: Animation library
- **MUI Material**: Material UI components with Emotion styling
- **Recharts**: Data visualization for stats/performance charts

### Booking Integration
- **Microsoft Outlook Bookings**: External link to `outlook.office.com/book/NihiloSolutions1@nihilosolutions.com/`

### Deployment
- **Vercel**: Configured via `vercel.json` with caching headers and SPA rewrites
- Dev server runs on port 5000 with `0.0.0.0` host binding for Replit compatibility
- Allowed dev origins include `*.riker.replit.dev`

### Fonts
- **Google Fonts**: Inter (400, 700) and JetBrains Mono (400, 500) loaded via `next/font/google`

## Recent Changes

- **January 2026**: Migrated from Vite/React to Next.js 16+ App Router
- **January 2026**: Implemented Programmatic SEO system with 50 solution pages
- **January 2026**: Added Solutions mega-menu dropdown to Navbar
- **January 2026**: Created auto-generated sitemap.ts
- **January 2026**: Fixed hydration errors by using next/font/google
