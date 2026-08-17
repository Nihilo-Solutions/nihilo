import Link from 'next/link';
import { Monitor, TrendingUp, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  iconColor: string;
  number: string;
  headline: string;
  tagline: string;
  body: string;
  bullets: string[];
  ctaHref: string;
  ctaLabel: string;
}

const services: Service[] = [
  {
    icon: Monitor,
    iconColor: 'text-blue-400',
    number: '01',
    headline: 'Website Modernization',
    tagline: 'A site that actually converts.',
    body: 'Most small business websites are slow, hard to find, and impossible to update. We redesign and rebuild on a modern stack, tuned for speed, mobile, and search from day one.',
    bullets: [
      'Performance-first build on Next.js (90+ Lighthouse across the board)',
      'Mobile-first responsive design that works on every screen',
      'Clean CMS integration so you can update copy without a developer',
      'On-page SEO baked in: structured data, meta tags, canonical URLs',
    ],
    ctaHref: '/assessment',
    ctaLabel: 'Score my current site',
  },
  {
    icon: TrendingUp,
    iconColor: 'text-emerald-400',
    number: '02',
    headline: 'SEO Growth System',
    tagline: 'Rank for the searches that bring buyers.',
    body: 'We build a keyword-grounded content and technical SEO program targeting the terms your buyers actually search. Not vanity traffic, not generic articles. Qualified visitors who are ready to spend.',
    bullets: [
      'Keyword research tied to buyer intent, not search volume alone',
      'Technical SEO audit and remediation (Core Web Vitals, indexing, schema)',
      'Monthly content production targeting high-value, low-competition terms',
      'Local SEO for businesses that serve a specific geography',
    ],
    ctaHref: '/assessment',
    ctaLabel: 'See my SEO score',
  },
  {
    icon: Cpu,
    iconColor: 'text-purple-400',
    number: '03',
    headline: 'AI Automation System',
    tagline: 'Automate the work that eats your week.',
    body: 'We identify the repetitive manual tasks in your business, lead follow-up, scheduling, reporting, data entry, and replace them with AI-driven workflows that run without you touching them.',
    bullets: [
      'Process audit to find the highest-leverage automation targets',
      'AI-powered lead response and follow-up sequences',
      'Automated reporting, scheduling, and data pipelines',
      'Human-in-the-loop for exceptions; fully autonomous on routine work',
    ],
    ctaHref: '/intake',
    ctaLabel: 'Tell us what to automate',
  },
];

interface ServiceIconProps {
  icon: LucideIcon;
  colorClass: string;
}

const ServiceIcon = ({ icon: Icon, colorClass }: ServiceIconProps) => (
  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 mb-6">
    <Icon size={22} strokeWidth={1.5} className={colorClass} />
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-2xl">
          <span className="text-[10px] mono uppercase tracking-[0.4em] text-zinc-600 mb-4 block">
            01 // What we do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Three ways we grow your business.
          </h2>
          <p className="mt-4 text-zinc-400 text-base leading-relaxed">
            Built for small and mid-size businesses that are done leaving growth on the table.
            Each service is scoped, priced, and delivered by the principals who design it.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.number}
                className="group p-8 md:p-10 bg-zinc-900/40 border border-zinc-800/50 rounded-xl hover:bg-zinc-900/70 hover:border-zinc-700 transition-all duration-300 flex flex-col"
              >
                <ServiceIcon icon={Icon} colorClass={service.iconColor} />

                <span
                  className="text-[10px] mono uppercase tracking-[0.3em] text-zinc-600 mb-3"
                >
                  {service.number}
                </span>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {service.headline}
                </h3>

                <p className="text-sm text-zinc-400 italic mb-5">
                  {service.tagline}
                </p>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {service.body}
                </p>

                <ul className="text-zinc-500 text-[13px] space-y-2 mb-8 flex-1">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-zinc-700 mt-0.5 shrink-0">-</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.ctaHref}
                  className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] text-blue-400 hover:text-blue-300 border border-blue-500/30 hover:border-blue-400/60 px-4 py-2.5 rounded-sm transition-all duration-200 text-center"
                >
                  {service.ctaLabel}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
