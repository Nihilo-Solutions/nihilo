import React from 'react';
import { Search, PenTool, Zap } from 'lucide-react';

const ProcessVisual: React.FC = () => {
    const steps = [
        {
            id: "01",
            title: "Audit",
            description: "We analyze your current workflows to identify high-impact automation opportunities.",
            icon: <Search className="w-6 h-6 text-blue-400" />
        },
        {
            id: "02",
            title: "Build",
            description: "Custom engineering of secure, private AI agents tailored to your infrastructure.",
            icon: <PenTool className="w-6 h-6 text-lime-400" />
        },
        {
            id: "03",
            title: "Automate",
            description: "Deploy and monitor autonomous agents that handle complex tasks 24/7.",
            icon: <Zap className="w-6 h-6 text-blue-400" />
        }
    ];

    return (
        <section className="py-24 bg-navy-950 border-t border-navy-900 relative overflow-hidden">
            {/* Background Decor - Cleaned */}
            <div className="absolute inset-0 bg-navy-950">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-DEFAULT/20 to-transparent"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-cyan-DEFAULT font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Methodology</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-heading">From Analysis to <span className="text-cyan-DEFAULT">Autonomy</span></h2>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-cyan-DEFAULT/50 via-accent/50 to-cyan-DEFAULT/50 border-t border-dashed border-navy-700 z-0 opacity-40" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center group">

                            {/* Step Circle */}
                            <div className="w-24 h-24 bg-navy-950 border border-navy-700 rounded-full flex items-center justify-center mb-8 relative group-hover:border-cyan-DEFAULT/50 transition-colors duration-500 shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)]">
                                <div className="absolute inset-0 rounded-full bg-navy-900/80 m-2 flex items-center justify-center border border-navy-800">
                                    {React.cloneElement(step.icon as React.ReactElement, { className: "w-6 h-6 text-cyan-DEFAULT" })}
                                </div>
                                {/* Orbiting dot animation could go here */}
                                <div className="absolute -inset-1 rounded-full border border-cyan-DEFAULT/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                            </div>

                            {/* Step Number */}
                            <div className="text-slate-400 font-mono text-sm mb-4 tracking-widest">{step.id}</div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-light transition-colors font-heading">
                                {step.title}
                            </h3>

                            <p className="text-slate-300 text-sm leading-relaxed max-w-xs mx-auto font-medium">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessVisual;
