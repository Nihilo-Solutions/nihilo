import React from 'react';
import { Database, ShieldCheck, TrendingUp } from 'lucide-react';

const OutcomeGrid: React.FC = () => {
    const cards = [
        {
            title: "Bridge the Legacy Gap",
            description: "Seamlessly connect modern AI agents with your existing ERPs, CRMs, and databases. We solve the 'disconnect' generic tools can't touch.",
            icon: <Database size={32} className="text-accent" />, // Keeping standard accent for fallback or updated via clone
            gradient: "from-accent/10 to-transparent",
            colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
        },
        {
            title: "Total Data Sovereignty",
            description: "Deploy private local LLMs within your own cloud perimeter. Your proprietary IP never trains public models.",
            icon: <ShieldCheck size={32} className="text-accent-light" />,
            gradient: "from-accent-light/10 to-transparent",
            colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
        },
        {
            title: "Engineered for ROI",
            description: "Move beyond 'pilot purgatory'. We build autonomous workflows that target your specific cost centers for measurable financial impact.",
            icon: <TrendingUp size={32} className="text-white" />,
            gradient: "from-white/5 to-transparent",
            colSpan: "col-span-1 md:col-span-4 lg:col-span-1"
        }
    ];

    return (
        <section className="py-24 px-6 bg-navy-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-navy-900/30 skew-y-3 transform origin-bottom-left" />

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-3xl font-bold text-white mb-16 text-center tracking-tight font-heading drop-shadow-md">
                    Solving the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-DEFAULT to-white">Strategic 20%</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className={`group relative p-8 rounded-2xl border border-navy-700 bg-navy-900/80 backdrop-blur-md overflow-hidden hover:border-cyan-DEFAULT/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] ${card.colSpan}`}
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 p-3 bg-navy-950 rounded-lg w-fit border border-navy-800 group-hover:border-cyan-DEFAULT/40 transition-colors shadow-lg">
                                    {React.cloneElement(card.icon as React.ReactElement, { className: "text-cyan-DEFAULT w-8 h-8" })}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-light transition-colors font-heading tracking-tight">
                                    {card.title}
                                </h3>

                                <p className="text-slate-200 text-sm leading-relaxed font-medium">
                                    {card.description}
                                </p>

                                {/* Decorative corner accent */}
                                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-navy-800 group-hover:bg-cyan-DEFAULT transition-colors shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OutcomeGrid;
