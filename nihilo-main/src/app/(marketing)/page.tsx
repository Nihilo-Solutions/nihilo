import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero, Services, HowWeWork } from '@/components/features';
import { Footer } from '@/components/shared';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Website Modernization, SEO & AI Automation for Small Business | Nihilo Solutions',
  },
  description:
    'Nihilo Solutions helps small and mid-size businesses grow with modern websites, search-engine SEO programs, and AI automation. Free growth assessment. Principal-led delivery from Connecticut.',
  alternates: {
    canonical: 'https://nihilosolutions.com',
  },
  openGraph: {
    title: 'Website Modernization, SEO & AI Automation for Small Business | Nihilo Solutions',
    description:
      'Modern websites, SEO growth, and AI automation for SMBs. Free assessment. Principal-led delivery.',
    url: 'https://nihilosolutions.com',
    images: [{ url: 'https://nihilosolutions.com/og-image.png' }],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Nihilo Solutions',
  alternateName: 'Nihilo Solutions LLC',
  url: 'https://nihilosolutions.com',
  email: 'sam@nihilosolutions.com',
  description:
    'Website modernization, SEO growth, and AI automation for small and mid-size businesses. Principal-led delivery. Free growth assessment.',
  areaServed: [
    { '@type': 'State', name: 'Connecticut' },
    { '@type': 'State', name: 'New York' },
    { '@type': 'State', name: 'Massachusetts' },
    { '@type': 'Country', name: 'United States' },
  ],
  serviceType: [
    'Website Modernization',
    'SEO Growth System',
    'AI Automation System',
    'Small Business Growth Services',
  ],
  founder: [
    { '@type': 'Person', name: 'Sam Oakes', jobTitle: 'Co-Founder & AI Lead' },
    { '@type': 'Person', name: 'Jake Ice', jobTitle: 'Co-Founder & Head of Business Operations' },
  ],
  sameAs: [
    'https://www.linkedin.com/in/samoakes',
    'https://www.linkedin.com/in/jake-ice-nihilo',
  ],
};

const painCards = [
  {
    num: '01',
    headline: 'You can\'t be found.',
    body: 'Potential customers search for exactly what you offer every day. They find your competitors and never know you exist. A website no one visits cannot generate leads.',
  },
  {
    num: '02',
    headline: 'Your site doesn\'t convert.',
    body: 'Visitors land and leave. No clear offer, slow load times, and a contact form buried at the bottom. You\'re paying to drive traffic to a page that does nothing with it.',
  },
  {
    num: '03',
    headline: 'Manual work kills growth.',
    body: 'Follow-up emails, scheduling, reporting, data entry — your team spends 10-20 hours a week on work that should run on autopilot. That time is not going back into growing the business.',
  },
];

const industryItems = [
  { name: 'Professional Services', slug: 'professional-services' },
  { name: 'Healthcare', slug: 'healthcare' },
  { name: 'Real Estate', slug: 'real-estate' },
  { name: 'Home Services', slug: 'home-services' },
  { name: 'Retail & E-commerce', slug: 'retail-ecommerce' },
  { name: 'Financial Services', slug: 'financial-services' },
];

const stats = [
  { value: '93%', label: 'of online experiences begin with search' },
  { value: '53%', label: 'of mobile visitors leave if a page takes more than 3 seconds to load' },
  { value: '46%', label: 'of all Google searches have local intent' },
  { value: '45%', label: 'of small businesses have no SEO strategy' },
];

const resources = [
  {
    tag: 'Guide',
    title: 'Why your website isn\'t generating leads (and how to fix it)',
    description: 'The most common conversion killers on small business websites, ranked by impact.',
  },
  {
    tag: 'Checklist',
    title: 'Technical SEO checklist for small businesses',
    description: '15 technical issues that prevent your site from ranking, with step-by-step fixes.',
  },
  {
    tag: 'Framework',
    title: 'The high-leverage automation audit',
    description: 'How to identify the manual workflows in your business that AI can replace in under 30 days.',
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-200 selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main>
        <Hero />

        {/* Problem section */}
        <section id="problem" className="py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12">
            <div className="mb-16 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4 block">
                The problem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Three things stopping your business from growing online.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {painCards.map((card) => (
                <div
                  key={card.num}
                  className="bg-[#111] border border-white/8 p-8 hover:border-white/20 transition-colors"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-white/30 mb-4 block">
                    {card.num}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-4">{card.headline}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm text-white/40 italic">
              If any of these sound familiar, you are not alone. 45% of small businesses have no SEO strategy. Most have a website that was built to check a box, not to grow a business.
            </p>
          </div>
        </section>

        {/* Solutions overview (Services component) */}
        <Services />

        {/* How we work (NGS 4-phase timeline) */}
        <section id="how-it-works">
          <HowWeWork />
        </section>

        {/* Industries */}
        <section id="industries" className="py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12">
            <div className="mb-16 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4 block">
                Industries we serve
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Built for businesses that compete on reputation.
              </h2>
              <p className="mt-4 text-white/60 text-base leading-relaxed">
                We specialize in industries where trust, local presence, and consistent follow-up are the difference between winning and losing business.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industryItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/industries/${item.slug}`}
                  className="group bg-[#111] border border-white/8 p-6 hover:border-white/20 transition-colors flex items-center justify-between"
                >
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-white/60 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment teaser */}
        <section id="assessment" className="py-20 md:py-32 bg-white border-t border-zinc-100">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-4">
                Free · No obligation
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight mb-4"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                See how your business scores.
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed mb-8 max-w-xl">
                Enter your website URL and get a free speed, SEO, and mobile score in under 60 seconds.
                We will tell you exactly what is costing you traffic and leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/tools/growth-assessment"
                  className="inline-flex items-center justify-center gap-2 bg-[#0B0D14] text-white px-8 py-3 text-sm font-medium hover:bg-[#1a1d27] transition-colors"
                >
                  Get my free assessment
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/intake"
                  className="inline-flex items-center justify-center gap-2 border border-zinc-300 text-zinc-900 px-8 py-3 text-sm font-medium hover:border-zinc-400 transition-colors"
                >
                  Talk to a principal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section id="statistics" className="py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50 mb-12 block">
              Why this matters
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.value} className="space-y-3">
                  <p className="text-4xl md:text-5xl font-black text-white">{stat.value}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources preview */}
        <section id="resources" className="py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4 block">
                  Resources
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Practical guides, free.
                </h2>
              </div>
              <span className="text-sm text-white/40 hidden md:block">Coming soon</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div
                  key={resource.title}
                  className="bg-[#111] border border-white/8 p-6 space-y-4"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                    {resource.tag}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">{resource.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{resource.description}</p>
                  <span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                    Available soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="py-24 md:py-40 bg-zinc-950 border-t border-white/5">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50 mb-6 block">
              Ready to start
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Ready to build from nothing?
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Start with a free growth assessment. See exactly where your business stands and what to fix first.
              No pitch, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/tools/growth-assessment"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Get free assessment
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/intake"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3 text-sm font-medium hover:border-white/40 transition-colors"
              >
                Talk to a principal
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
