import React from 'react';
import { Cloud, Server, Cpu } from 'lucide-react';

const TechStackFooter: React.FC = () => {
    // using icons for now as placeholders for actual logos to avoid broken images if assets aren't present.
    // In a real scenario, you'd replace these Lucide icons with SVGs of the actual brand logos.
    return (
        <section className="py-12 bg-navy-950 border-t border-navy-900/50">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">

                <span className="text-xs font-semibold uppercase tracking-widest text-navy-400 hidden md:block">
                    Trusted Infrastructure
                </span>

                <div className="flex items-center gap-12 justify-center">
                    {/* AWS Representation */}
                    <div className="flex items-center gap-3 group cursor-default">
                        <Cloud size={24} className="text-navy-200 group-hover:text-[#FF9900] transition-colors" />
                        <span className="font-bold text-lg text-navy-200 group-hover:text-white transition-colors">AWS</span>
                    </div>

                    {/* Azure Representation */}
                    <div className="flex items-center gap-3 group cursor-default">
                        <Server size={24} className="text-navy-200 group-hover:text-[#0078D4] transition-colors" />
                        <span className="font-bold text-lg text-navy-200 group-hover:text-white transition-colors">Microsoft Azure</span>
                    </div>

                    {/* NVIDIA Representation */}
                    <div className="flex items-center gap-3 group cursor-default">
                        <Cpu size={24} className="text-navy-200 group-hover:text-[#76B900] transition-colors" />
                        <span className="font-bold text-lg text-navy-200 group-hover:text-white transition-colors">NVIDIA</span>
                    </div>
                </div>

                <span className="text-xs font-semibold uppercase tracking-widest text-navy-400 hidden md:block">
                    Enterprise Grade
                </span>
            </div>
        </section>
    );
};

export default TechStackFooter;
