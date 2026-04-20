import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

// Simple animation variants (simulated without framer-motion for now to keep things lightweight, 
// or could add framer-motion if desired. The prompt mentioned "Framer Motion-style interactions", 
// which often implies the *feel*. I'll use standard CSS transitions or simple keyframes if framer-motion isn't installed.
// Checking package.json... it wasn't in the list I saw earlier. 
// I'll stick to Tailwind + CSS animations for "Framer-like" feel unless I start adding the lib.)
// Actually, I can use 'animate-in' classes from tailwindcss-animate if configured, or just custom classes.
// The user asked for "Framer Motion-style interaction cues". I'll add hover states that feel like it.

const NewHero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-navy-950">

            {/* Background Ambience - Cleaned up to remove "squares" */}
            <div className="absolute inset-0 bg-navy-950">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-DEFAULT/30 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
                {/* Smooth Radial Gradient for Depth */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy-900/40 via-navy-950 to-navy-950"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">

                {/* Badge / Pill */}
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-cyan-DEFAULT/30 bg-cyan-DEFAULT/10 backdrop-blur-sm mb-4 shadow-[0_0_15px_-3px_rgba(6,182,212,0.2)]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-light opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-DEFAULT"></span>
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-light">
                        Systems Operational
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] font-heading drop-shadow-sm">
                    AI Automations That Cut <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-light via-white to-accent-light animate-gradient-x">
                        Ops Costs 30–60%
                    </span>
                </h1>

                {/* Sub-headline - High Contrast */}
                <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
                    Deployed inside your cloud, not ours. Azure-native. <br className="hidden md:block" />
                    Production in 4–6 weeks.
                </p>

                {/* CTA */}
                <div className="pt-8">
                    <a
                        href="https://intake.nihilosolutions.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_-5px_rgba(59,130,246,0.6)] hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.8)] hover:-translate-y-0.5"
                    >
                        <span>Start Readiness Protocol</span>
                        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />

                        {/* Button Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-20" />
                    </a>

                    <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium tracking-wide">
                        <span className="flex items-center gap-1">
                            <ChevronRight size={14} className="text-cyan-DEFAULT" />
                            No Commitment Required
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewHero;
