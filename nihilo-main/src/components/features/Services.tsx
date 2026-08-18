import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    number: '01',
    headline: 'Website Modernization',
    tagline: 'A site that earns its keep.',
    body: 'Most small business websites are slow, invisible, and impossible to update. We rebuild on a modern stack — performance-first, mobile-first, conversion-first — so your site works as hard as you do.',
    bullets: [
      '90+ Lighthouse score across performance, SEO, and accessibility',
      'Mobile-first responsive design, tested on real devices',
      'On-page SEO built in: structured data, meta tags, canonical URLs',
      'CMS integration so your team can update copy without a developer',
    ],
    href: '/solutions/website-modernization',
    cta: 'Learn more',
  },
  {
    number: '02',
    headline: 'SEO Growth System',
    tagline: 'Rank for searches that bring buyers, not browsers.',
    body: 'We build a keyword-grounded program targeting terms your buyers actually search. Monthly content, technical remediation, and local SEO for businesses that serve a geography.',
    bullets: [
      'Keyword research anchored to buyer intent, not vanity volume',
      'Technical SEO audit and remediation — Core Web Vitals, indexing, schema',
      'Monthly content targeting high-value, low-competition terms',
      'Local SEO: Google Business Profile, citations, location pages',
    ],
    href: '/solutions/seo-growth-system',
    cta: 'Learn more',
  },
  {
    number: '03',
    headline: 'AI Automation System',
    tagline: 'Automate the work that eats your week.',
    body: 'We identify the manual tasks costing your team the most time — lead follow-up, scheduling, reporting, data entry — and replace them with AI-driven workflows that run without you.',
    bullets: [
      'Process audit to identify the highest-leverage automation targets',
      'AI-powered lead response and follow-up sequences',
      'Automated scheduling, reporting, and data pipelines',
      'Human-in-the-loop for exceptions; fully autonomous on routine tasks',
    ],
    href: '/solutions/ai-automation-system',
    cta: 'Learn more',
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="border-t"
      style={{ borderColor: 'rgba(0,0,0,0.08)', background: '#FFFFFF' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-24 md:py-36">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="label mb-4">What we build</p>
            <h2
              className="text-[#0F0F0F] tracking-tight leading-tight"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 600,
              }}
            >
              Three systems.
              <br />
              One outcome: growth.
            </h2>
          </div>
          <p className="text-[#52525B] text-[15px] leading-relaxed max-w-sm">
            Each service is scoped, priced, and delivered by the principals who design it. No hand-offs to junior staff.
          </p>
        </div>

        {/* Service rows */}
        <div className="space-y-0">
          {services.map((service, i) => (
            <div
              key={service.number}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16"
              style={{ borderTop: i > 0 ? '1px solid rgba(0,0,0,0.08)' : undefined }}
            >
              {/* Number + headline */}
              <div className="md:col-span-4">
                <span
                  className="block font-mono text-[11px] tracking-[0.25em] mb-4"
                  style={{ color: '#A1A1AA' }}
                >
                  {service.number}
                </span>
                <h3
                  className="text-[#0F0F0F] leading-snug mb-3"
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: 'clamp(20px, 2vw, 26px)',
                    fontWeight: 600,
                  }}
                >
                  {service.headline}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: '#A1A1AA' }}>
                  {service.tagline}
                </p>
              </div>

              {/* Body + bullets */}
              <div className="md:col-span-5">
                <p className="text-[#52525B] text-[15px] leading-relaxed mb-6">
                  {service.body}
                </p>
                <ul className="space-y-3">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span
                        className="mt-[7px] shrink-0 w-1 h-1 rounded-full"
                        style={{ background: '#A1A1AA' }}
                        aria-hidden="true"
                      />
                      <span className="text-[13px] leading-relaxed" style={{ color: '#52525B' }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="md:col-span-3 flex md:justify-end md:items-start">
                <Link href={service.href} className="btn-ghost group">
                  {service.cta}
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-150 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
