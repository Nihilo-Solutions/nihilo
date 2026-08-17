import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, MapPin, Users, Building2, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'About Nihilo Solutions | Tenant-Local AI Engineering',
  },
  description:
    'Nihilo Solutions is a principal-led AI engineering firm building tenant-local RAG and agentic automation inside your own Azure or AWS cloud. Founded by Sam Oakes and Jake Ice, serving the Northeast US (CT, NY, MA).',
  alternates: {
    canonical: 'https://nihilosolutions.com/about',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sam = {
  initials: 'SO',
  name: 'Sam Oakes',
  title: 'Co-Founder & AI Lead',
  linkedin: 'https://linkedin.com/in/samoakes',
  bio: 'Sam designs and ships the systems. Lead AI Architect at LDI, an MSP, where he builds AI and security platforms for regulated industries. ISC2 Certified in Cybersecurity. Published researcher on risk management of emergent technology. Briefed Travelers Insurance on quantum integration. B.S. Cybersecurity from Sacred Heart University, D1 athlete. Writes the code on day one of every engagement.',
  domains: ['Cloud Security', 'Tenant-Local Architecture', 'RAG Implementation', 'Agentic Systems'],
};

const jake = {
  initials: 'JI',
  name: 'Jake Ice',
  title: 'Co-Founder & Head of Business Operations',
  linkedin: 'https://linkedin.com/in/jake-ice-nihilo',
  bio: 'Jake runs delivery and commercial strategy. Over a decade scaling B2B enterprise sales and operations at SaaS and cloud consultancies. Translates technical capability into business outcomes and runs the client side end-to-end. Owns commercial structure, partnerships, and ensuring engagements stay on time and on scope.',
  domains: ['Client Strategy', 'Commercial Operations', 'Partnerships', 'Engagement Management'],
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Nihilo Solutions',
  url: 'https://nihilosolutions.com/about',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'Nihilo Solutions',
    alternateName: 'Nihilo Solutions LLC',
    url: 'https://nihilosolutions.com',
    email: 'sam@nihilosolutions.com',
    description:
      'Principal-led AI engineering firm building production-grade, tenant-local RAG and agentic automation deployed inside the client’s own Azure or AWS cloud tenancy. SOC 2 / ISO 27001 aligned.',
    areaServed: [
      { '@type': 'State', name: 'Connecticut' },
      { '@type': 'State', name: 'New York' },
      { '@type': 'State', name: 'Massachusetts' },
    ],
    serviceType: [
      'Enterprise RAG Implementation',
      'Agentic Process Automation',
      'Cloud-Native AI Infrastructure',
      'Tenant-Local AI Consulting',
    ],
    founder: [
      {
        '@type': 'Person',
        name: 'Sam Oakes',
        jobTitle: 'Co-Founder & AI Lead',
        sameAs: 'https://linkedin.com/in/samoakes',
        alumniOf: 'Sacred Heart University',
        knowsAbout: [
          'Tenant-Local AI Architecture',
          'Retrieval-Augmented Generation',
          'Cloud Security',
          'Agentic Systems',
        ],
      },
      {
        '@type': 'Person',
        name: 'Jake Ice',
        jobTitle: 'Co-Founder & Head of Business Operations',
        sameAs: 'https://linkedin.com/in/jake-ice-nihilo',
        knowsAbout: [
          'Commercial Operations',
          'B2B Enterprise Sales',
          'Engagement Management',
        ],
      },
    ],
  },
};

function ProfileCard({
  person,
}: {
  person: typeof sam;
}) {
  return (
    <div className="border border-white/10 p-8 rounded-lg bg-[#0a0a0a]">
      <div className="flex items-start space-x-6">
        <div className="w-20 h-20 overflow-hidden rounded-md border border-white/10 bg-transparent relative flex-shrink-0">
          <Image
            src={`/headshots/${person.initials}.jpg`}
            alt={`${person.name} - ${person.title} at Nihilo Solutions`}
            fill
            sizes="80px"
            className="object-cover"
            style={{ objectPosition: '50% 20%' }}
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-white uppercase italic tracking-tighter">
              {person.name}
            </h3>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-[#0077b5] transition-colors p-2"
              aria-label={`${person.name} on LinkedIn`}
            >
              <Linkedin size={20} />
            </a>
          </div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mt-2">
            {person.title}
          </div>
          <div className="border-t border-white/5 mt-4 pt-4">
            <p className="text-zinc-400 text-sm leading-relaxed font-light">{person.bio}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {person.domains.map((d) => (
          <div
            key={d}
            className="border border-white/10 p-3 rounded-md flex items-center gap-3 bg-white/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]" />
            <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-300">{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200 antialiased pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Hero */}
      <header className="max-w-4xl mx-auto">
        <span className="text-[10px] mono uppercase tracking-[0.4em] text-zinc-600 mb-4 block">
          About // Nihilo Solutions
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase italic leading-tight">
          AI you own, deployed where your data already lives.
        </h1>
        <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed">
          Nihilo Solutions is a principal-led AI engineering firm. We build production-grade
          AI automation, tenant-local RAG, agentic workflows, and cloud-native AI
          infrastructure, deployed inside your own Azure or AWS tenancy. Your documents,
          your keys, your data residency. Nothing crosses your boundary, and when we are
          done you own the platform outright.
        </p>
      </header>

      {/* What we do / how we are different */}
      <section className="max-w-4xl mx-auto mt-20 grid gap-12 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Building2 size={18} className="text-blue-500" />
            <h2 className="text-xl font-bold text-white uppercase italic tracking-tight">What we build</h2>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Production AI automation deployed inside your cloud tenancy, not ours. Three
            service lines: enterprise RAG implementation, agentic process automation, and
            cloud-native AI infrastructure. Each is built with security and governance from
            day one, with BYOK encryption and a full, replayable audit trail.
          </p>
          <Link
            href="/#services"
            className="inline-block mt-4 text-sm text-blue-400 underline hover:text-blue-300"
          >
            See our capabilities →
          </Link>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Shield size={18} className="text-blue-500" />
            <h2 className="text-xl font-bold text-white uppercase italic tracking-tight">Why tenant-local</h2>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Most AI vendors ask you to send sensitive data into their environment and trust
            the contract. We deploy AI inside your own Azure or AWS tenancy, so customer
            data, regulated information, and privileged content never leave. That keeps you
            aligned with SOC 2 and ISO 27001 evidence requirements without adding a new
            vendor to your compliance scope.
          </p>
          <Link
            href="/security"
            className="inline-block mt-4 text-sm text-blue-400 underline hover:text-blue-300"
          >
            Read our security posture →
          </Link>
        </div>
      </section>

      {/* Founders */}
      <section className="max-w-4xl mx-auto mt-20">
        <div className="flex items-center gap-3 mb-8">
          <Users size={18} className="text-blue-500" />
          <h2 className="text-xl font-bold text-white uppercase italic tracking-tight">The principals</h2>
        </div>
        <div className="space-y-6">
          <ProfileCard person={sam} />
          <ProfileCard person={jake} />
        </div>
        <div className="mt-8 border-l-2 border-blue-500/50 pl-6">
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            <span className="font-bold text-white">Direct-access model.</span> When you
            engage Nihilo, you talk to the engineer who builds it and the operator who runs
            delivery. No account managers between you and the work. Two phone calls, one
            chain of accountability.
          </p>
        </div>
      </section>

      {/* Where we work */}
      <section className="max-w-4xl mx-auto mt-20">
        <div className="flex items-center gap-3 mb-4">
          <MapPin size={18} className="text-blue-500" />
          <h2 className="text-xl font-bold text-white uppercase italic tracking-tight">Where we work</h2>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
          Nihilo Solutions is based in the Northeast US and works with organizations across
          Connecticut, New York, and Massachusetts, as well as remote engagements nationwide.
          Because every deployment lives inside the client&apos;s own cloud tenancy, we deliver
          the same tenant-local architecture regardless of location. We are a Microsoft Azure
          Partner Network member.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto mt-20 border-t border-zinc-800 pt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Talk to the people who build it.
        </h2>
        <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
          No pitch, no pressure. Tell us what you are dealing with and we will tell you if
          we can help.
        </p>
        <div className="mt-8">
          <Link
            href="/intake"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-black font-bold px-6 py-3 rounded-md uppercase text-xs tracking-widest transition-colors"
          >
            Talk to a principal →
          </Link>
        </div>
      </section>
    </main>
  );
}
