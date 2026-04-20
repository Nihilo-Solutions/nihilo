import React from 'react';
import { X, Check } from 'lucide-react';

const SolutionComparison: React.FC = () => {
    return (
        <section className="py-24 bg-navy-950 border-t border-navy-900 relative">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-cyan-DEFAULT font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">The Market Gap</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-heading">Why <span className="text-slate-500 line-through decoration-cyan-DEFAULT/50">Generic</span> Fails at Scale</h2>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">
                        Off-the-shelf tools handle the easy 80%. We engineer the strategic 20% that actually drives your business forward.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

                    {/* Generic Column */}
                    <div className="p-8 rounded-2xl border border-navy-700/60 bg-navy-900/20 backdrop-blur-sm opacity-85 hover:opacity-100 transition-opacity">
                        <h3 className="text-xl font-bold text-slate-400 mb-2 font-heading">Off-the-Shelf SaaS</h3>
                        <p className="text-sm text-slate-500 mb-8 border-b border-navy-700 pb-6">
                            Good for simple tasks, but limited by design.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <X size={18} className="text-red-500 mt-1 shrink-0" />
                                <span className="text-slate-400 text-sm">Can't talk to your old systems</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X size={18} className="text-red-500 mt-1 shrink-0" />
                                <span className="text-slate-400 text-sm">Sends your data to the cloud (Risk)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X size={18} className="text-red-500 mt-1 shrink-0" />
                                <span className="text-slate-400 text-sm">One-size-fits-all logic</span>
                            </li>
                        </ul>
                    </div>

                    {/* Nihilo Column */}
                    <div className="p-8 rounded-2xl border border-cyan-DEFAULT/40 bg-cyan-DEFAULT/5 backdrop-blur-sm relative overflow-hidden shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)]">
                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 -m-10 w-32 h-32 bg-cyan-DEFAULT/20 blur-3xl rounded-full pointer-events-none"></div>

                        <h3 className="text-xl font-bold text-white mb-2 font-heading">Nihilo Custom Engineering</h3>
                        <p className="text-sm text-cyan-200 mb-8 border-b border-cyan-DEFAULT/20 pb-6">
                            Built for your specific infrastructure and goals.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check size={18} className="text-cyan-DEFAULT mt-1 shrink-0" />
                                <span className="text-slate-100 text-sm font-medium">Deep integration with ERPs, CRMs, & SQL</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={18} className="text-cyan-DEFAULT mt-1 shrink-0" />
                                <span className="text-slate-100 text-sm font-medium">Local LLMs: 100% Data Sovereignty</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={18} className="text-cyan-DEFAULT mt-1 shrink-0" />
                                <span className="text-slate-100 text-sm font-medium">Fine-tuned on YOUR data for 99% accuracy</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionComparison;
