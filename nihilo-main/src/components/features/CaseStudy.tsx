import React from 'react';
import { ArrowRight, BarChart, CheckCircle2 } from 'lucide-react';

const CaseStudy: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden border-t border-zinc-900 border-b">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-zinc-950 to-zinc-950"></div>
            
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="mb-12 text-center">
                    <span className="text-cyan-DEFAULT font-mono text-xs uppercase tracking-widest font-semibold">Client Success</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 font-heading tracking-tight">
                        Proven Automation in Production
                    </h2>
                </div>

                <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Lettini Brothers Landscaping
                            </h3>
                            <p className="text-cyan-light font-medium mb-6">
                                Automated Azure-Native Lead Pipeline
                            </p>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                How we built an Azure-native lead pipeline for a prominent NJ landscaping company that eliminated manual intake data entry and significantly reduced response times. The automated system reliably qualifies, scores, and routes inbound leads.
                            </p>
                            
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
                                    <span>Eliminated manual data entry for 100% of inbound web leads.</span>
                                </li>
                                <li className="flex items-start text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
                                    <span>Azure serverless architecture reduced hosting costs.</span>
                                </li>
                                <li className="flex items-start text-slate-300">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
                                    <span>Automated follow-up sequences improved lead engagement rates.</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="relative z-10">
                            <div className="grid grid-cols-1 gap-4">
                                <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl text-center">
                                    <div className="text-4xl font-bold text-white mb-2">100%</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest">Automation Rate</div>
                                </div>
                                <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl text-center">
                                    <div className="text-4xl font-bold text-white mb-2">&lt; 1 min</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest">Response Time</div>
                                </div>
                                <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl text-center">
                                    <div className="text-4xl font-bold text-white mb-2">Zero</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest">Manual Server Mgmt</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
