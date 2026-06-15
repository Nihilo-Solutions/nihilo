"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Cloud, Shield, Building2, Server } from "lucide-react";
import { SolutionPage, SolutionCategory } from "@/lib/data/types";
import { Footer } from "@/components/shared";

const categoryIcons: Record<SolutionCategory, React.ReactNode> = {
  Azure: <Cloud className="w-5 h-5" />,
  AWS: <Server className="w-5 h-5" />,
  Industry: <Building2 className="w-5 h-5" />,
  Security: <Shield className="w-5 h-5" />,
};

const categoryColors: Record<SolutionCategory, string> = {
  Azure: "text-blue-400 border-blue-500/30 bg-blue-500/5",
  AWS: "text-orange-400 border-orange-500/30 bg-orange-500/5",
  Industry: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
  Security: "text-purple-400 border-purple-500/30 bg-purple-500/5",
};

interface SolutionContentProps {
  solution: SolutionPage;
}

export default function SolutionContent({ solution }: SolutionContentProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]"></div>

      <main className="relative max-w-screen-xl mx-auto px-6 lg:px-12 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-mono uppercase tracking-wider">Back to Solutions</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 ${categoryColors[solution.category]}`}>
            {categoryIcons[solution.category]}
            <span className="text-xs font-mono uppercase tracking-wider">{solution.category}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            {solution.title}
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            {solution.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8">
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Overview</h2>
              <p className="text-zinc-400 leading-relaxed">{solution.content.intro}</p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8">
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Our Approach</h2>
              <p className="text-zinc-400 leading-relaxed">{solution.content.approach}</p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8">
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Expected Outcomes</h2>
              <p className="text-zinc-400 leading-relaxed">{solution.content.outcomes}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Key Capabilities</h2>
              <ul className="space-y-4">
                {solution.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <Link
                  href="/intake"
                  className="btn-primary w-full justify-center"
                >
                  Talk to a principal
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            Our team of enterprise AI specialists is ready to help you implement {solution.title.toLowerCase()} that delivers measurable business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/intake"
              className="btn-primary"
            >
              Talk to a principal
              <ArrowRight size={14} />
            </Link>
            <Link href="/solutions" className="btn-secondary">
              Explore More Solutions
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
