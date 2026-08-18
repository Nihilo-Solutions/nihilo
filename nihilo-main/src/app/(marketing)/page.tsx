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
    headline: "You can't be found.",
    body: "Potential customers search for exactly what you offer every day. They find your competitors and never know you exist. A website no one visits cannot generate leads.",
  },
  {
    num: '02',
    headline: "Your site doesn't convert.",
    body: "Visitors land and leave. No clear offer, slow load times, and a contact form buried at the bottom. You're paying to drive traffic to a page that does nothing with it.",
  },
  {
    num: '03',
    headline: 'Manual work kills growth.',
    body: "Follow-up emails, scheduling, reporting, data entry — your team spends 10-20 hours a week on work that should run on autopilot. That time is not going back into growing the business.",
  },
];

const industryItems = [
  { name: 'Professional Services', slug: 'professional-services' },
  { name: 'Healthcare',            slug: 'healthcare' },
  { name: 'Real Estate',           slug: 'real-estate' },
  { name: 'Home Services',         slug: 'home-services' },
  { name: 'Retail & E-commerce',   slug: 'retail-ecommerce' },
  { name: 'Financial Services',    slug: 'financial-services' },
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
    title: "Why your website isn't generating leads (and how to fix it)",
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
    <div style={{ background: '#FFFFFF' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main>
        <Hero />

        {/* Problem section */}
        <section
          id="problem"
          className="border-t"
          style={{ borderColor: 'rgba(0,0,0,0.08)', background: '#F7F6F4' }}
        >
          <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-24 md:py-36">
            <div className="mb-16 max-w-2xl">
              <p className="label mb-4">The problem</p>
              <h2
                className="text-[#0F0F0F] tracking-tight leading-tight"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 600,
                }}
              >
                Three things stopping your business from growing online.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {painCards.map((card) => (
                <div
                  key={card.num}
                  className="p-8 bg-white"
                  style={{ border: '1px solid rgba(0,0,0,0.08)' }}
                >
                  <span
                    className="block font-mono text-[11px] tracking-[0.25em] mb-4"
                    style={{ color: '#A1A1AA' }}
                  >
                    {card.num}
                  </span>
                  <h3
                    className="text-[#0F0F0F] mb-4 leading-snug"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '17px', fontWeight: 600 }}
                  >
                    {card.headline}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: '#52525B' }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-[13px] leading-relaxed" style={{ color: '#A1A1AA' }}>
              If any of these sound familiar, you are not alone. 45% of small businesses have no SEO strategy. Most have a website that was built to check a box, not to grow a business.
            </p>
          </div>
        </section>

        {/* Services */}
        <Services />

        {/* How we work */}
        <section id="how-it-works">
          <HowWeWork />
        </section>

        {/* Industries */}
        <section
          id="industries"
          className="border-t"
          style={{ borderColor: 'rgba(0,0,0,0.08)', background: '#FFFFFF' }}
        >
          <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-24 md:py-36">
            <div className="mb-16 max-w-2xl">
              <p className="label mb-4">Industries we serve</p>
              <h2
                className="text-[#0F0F0F] tracking-tight leading-tight"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 600,
                }}
              >
                Built for businesses that compete on reputation.
              </h2>
              <p className="text-[#52525B] text-[15px] leading-relaxed mt-4">
                We specialize in industries where trust, local presence, and consistent follow-up are the difference between winning and losing business.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: 'rgba(0,0,0,0.08)' }}>
              {industryItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/industries/${item.slug}`}
                  className="group flex items-center justify-between p-6 bg-white hover:bg-[#F7F6F4] transition-colors"
                >
                  <span
                    className="text-[13px] font-medium text-[#0F0F0F] group-hover:text-[#E8610A] transition-colors"
                  >
                    {item.name}
                  </span>
                  <ArrowRight
                    size={13}
                    strokeWidth={1.5}
                    className="text-[#A1A1AA] group-hover:text-[#E8610A] transition-colors transition-transform duration-150 group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment teaser */}
        <section
          id="assessment"
          className="border-t"
          style={{ borderColor: 'rgba(0,0,0,0.08)', background: '#F7F6F4' }}
        >
          <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-24 md:py-36">
            <div className="max-w-2xl">
              <p className="label mb-4">Free · No obligation</p>
              <h2
                className="text-[#0F0F0F] tracking-tight leading-tight mb-4"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 600,
                }}
              >
                See how your business scores.
              </h2>
              <p className="text-[#52525B] text-[15px] leading-relaxed mb-10 max-w-lg">
                Enter your website URL and get a free speed, SEO, and mobile score in under 60 seconds.
                We will tell you exactly what is costing you traffic and leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/tools/growth-assessment" className="btn-primary">
                  Get my free assessment
                  <ArrowRight size={14} strokeWidth={2} />
                </Link>
                <Link href="/intake" className="btn-secondary">
                  Talk to a principal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section
          id="statistics"
          className="border-t"
          style={{ borderColor: 'rgba(0,0,0,0.08)', background: '#FFFFFF' }}
        >
          <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-24 md:py-36">
            <p className="label mb-16">Why this matters</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {stats.map((stat) => (
                <div key={stat.value} className="space-y-3">
                  <p
                    className="font-bold leading-none"
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: 'clamp(36px, 4vw, 52px)',
                      color: '#E8610A',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[13px] leading-relaxed" style={{ color: '#52525B' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources preview */}
        <section
          id="resources"
          className="border-t"
          style={{ borderColor: 'rgba(0,0,0,0.08)', background: '#F7F6F4' }}
        >
          <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-24 md:py-36">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="label mb-4">Resources</p>
                <h2
                  className="text-[#0F0F0F] tracking-tight leading-tight"
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: 'clamp(24px, 2.5vw, 36px)',
                    fontWeight: 600,
                  }}
                >
                  Practical guides, free.
                </h2>
              </div>
              <span
                className="hidden md:block text-[12px] tracking-[0.15em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: '#A1A1AA' }}
              >
                Coming soon
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div
                  key={resource.title}
                  className="p-6 bg-white space-y-4"
                  style={{ border: '1px solid rgba(0,0,0,0.08)' }}
                >
                  <span className="label">{resource.tag}</span>
                  <h3
                    className="text-[#0F0F0F] leading-snug"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '15px', fontWeight: 600 }}
                  >
                    {resource.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: '#52525B' }}>
                    {resource.description}
                  </p>
                  <span className="label" style={{ color: '#A1A1AA' }}>Available soon</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA — dark section */}
        <section id="cta" style={{ background: '#111111' }}>
          <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-24 md:py-40 text-center">
            <p
              className="label mb-6"
              style={{ color: '#555555' }}
            >
              Ready to start
            </p>
            <h2
              className="tracking-tight leading-tight mb-6 max-w-2xl mx-auto"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: 'clamp(32px, 4.5vw, 60px)',
                fontWeight: 600,
                color: '#F5F5F5',
              }}
            >
              Ready to build from nothing?
            </h2>
            <p
              className="text-[15px] leading-relaxed mb-10 max-w-lg mx-auto"
              style={{ color: '#888888' }}
            >
              Start with a free growth assessment. See exactly where your business stands and what to fix first.
              No pitch, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/tools/growth-assessment" className="btn-primary">
                Get free assessment
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
              <Link
                href="/intake"
                className="btn-secondary"
                style={{ color: '#888888', borderColor: 'rgba(255,255,255,0.15)' }}
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
