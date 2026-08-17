import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { getIndustryBySlug, industries } from '@/lib/data/industries';

interface PageProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return { title: 'Industry Not Found', robots: { index: false, follow: true } };
  }

  return {
    title: `${industry.name} — Website, SEO & AI Automation`,
    description: industry.description.slice(0, 155),
    alternates: {
      canonical: `https://nihilosolutions.com/industries/${slug}`,
    },
    openGraph: {
      title: `${industry.name} — Nihilo Solutions`,
      description: industry.tagline,
      type: 'website',
      url: `https://nihilosolutions.com/industries/${slug}`,
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4 block">
            Industry
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            {industry.name}
          </h1>
          <p className="text-xl text-white/60 mb-4">{industry.tagline}</p>
          <p className="text-white/50 text-base leading-relaxed max-w-2xl">
            {industry.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {industry.stats.map((stat) => (
            <div key={stat.label} className="bg-[#111] border border-white/8 p-6">
              <p className="text-3xl font-black text-white mb-2">{stat.value}</p>
              <p className="text-xs font-mono uppercase tracking-widest text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Pain points and solutions */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-6">
              What we hear from {industry.name.toLowerCase()} clients
            </h2>
            <ul className="space-y-4">
              {industry.painPoints.map((point, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-white/20 font-mono text-xs mt-1 shrink-0">0{i + 1}</span>
                  <p className="text-white/70 text-sm leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-6">
              How we help
            </h2>
            <ul className="space-y-4">
              {industry.solutions.map((solution, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-white mt-1 shrink-0">-</span>
                  <p className="text-white/70 text-sm leading-relaxed">{solution}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-white/8 pt-16">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Ready to see what we can do for your {industry.name.toLowerCase()} business?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl">
            Start with a free growth assessment. Get your speed, SEO, and mobile score in under 60 seconds.
            No pitch, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/tools/growth-assessment"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 text-sm font-bold uppercase tracking-[0.1em] hover:bg-white/90 transition-colors"
            >
              Get free assessment
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/intake"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3 text-sm font-bold uppercase tracking-[0.1em] hover:border-white/40 transition-colors"
            >
              Talk to a principal
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
