"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, Server, Building2, Shield } from "lucide-react";
import { getSolutionsByCategory } from "@/lib/data/pages";
import { SolutionCategory } from "@/lib/data/types";
import { Footer } from "@/components/shared";

const categories: { key: SolutionCategory; label: string; icon: React.ReactNode; color: string }[] = [
  { key: "Azure", label: "Azure Solutions", icon: <Cloud className="w-6 h-6" />, color: "text-blue-400 border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10" },
  { key: "AWS", label: "AWS Solutions", icon: <Server className="w-6 h-6" />, color: "text-orange-400 border-orange-500/30 bg-orange-500/5 hover:bg-orange-500/10" },
  { key: "Industry", label: "Industry Solutions", icon: <Building2 className="w-6 h-6" />, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10" },
  { key: "Security", label: "Security & Compliance", icon: <Shield className="w-6 h-6" />, color: "text-purple-400 border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10" },
];

export default function SolutionsContent() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]"></div>

      <main className="relative max-w-screen-2xl mx-auto px-6 lg:px-12 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 border border-blue-500/30 rounded-full bg-blue-500/5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400">Enterprise AI Solutions</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Solutions Portfolio
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive suite of enterprise AI solutions spanning cloud platforms, industry verticals, and security compliance frameworks.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => {
            const solutions = getSolutionsByCategory(category.key);
            return (
              <motion.section
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-lg border ${category.color}`}>
                    {category.icon}
                    <h2 className="text-xl font-bold uppercase tracking-wide">{category.label}</h2>
                  </div>
                  <span className="text-zinc-500 text-sm font-mono">{solutions.length} solutions</span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={solution.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.03 }}
                    >
                      <Link
                        href={`/solutions/${solution.slug}`}
                        className="group block bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300"
                      >
                        <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-2 leading-snug">
                          {solution.title}
                        </h3>
                        <p className="text-sm text-zinc-500 line-clamp-2 mb-3">
                          {solution.description.split('.')[0]}.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-blue-400 font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Learn More</span>
                          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            Our team specializes in building bespoke AI solutions tailored to your unique business requirements. Let&apos;s discuss your specific needs.
          </p>
          <Link
            href="/intake"
            className="btn-primary"
          >
            Talk to a principal
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
