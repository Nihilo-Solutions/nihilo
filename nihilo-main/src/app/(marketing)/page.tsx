import Link from 'next/link';
import { Activity, ArrowUpRight } from 'lucide-react';
import { Hero, Services, Security, About, Booking, CaseStudy, WhyTenantLocal } from '@/components/features';
import { Footer } from '@/components/shared';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-200 selection:bg-blue-500/30">
      <main>
        <Hero />
        <Services />
        <CaseStudy />
        <WhyTenantLocal />

        <section id="assessment" className="py-24 bg-zinc-950">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 text-center">
             <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 border border-blue-500/30 rounded-full bg-blue-500/5">
                <Activity size={14} className="text-blue-400" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400">System Diagnostic Available</span>
             </div>
             <h2 id="ready-for-ai-implementation" className="text-4xl font-bold text-white mb-8 italic uppercase tracking-tighter">Ready for AI implementation?</h2>
             <Link
               href="/assessment"
               className="inline-flex items-center space-x-4 px-10 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase text-[10px] tracking-[0.3em] hover:border-blue-500 transition-all group"
             >
               <span>Start Readiness Protocol</span>
               <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </Link>
          </div>
        </section>

        <Security />
        <About />
        <Booking />
      </main>

      <Footer />
    </div>
  );
}
