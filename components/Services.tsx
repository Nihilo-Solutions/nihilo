
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 space-y-8 md:space-y-0">
          <div className="max-w-md">
            <span className="text-[10px] mono uppercase tracking-[0.4em] text-zinc-600 mb-4 block">01 // Capabilities</span>
            <h2 className="text-4xl font-bold text-white tracking-tighter italic uppercase">Foundational Expertise</h2>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm leading-relaxed mono">
            We operate at the intersection of high-fidelity design and deep system architecture.
          </p>
        </div>

        <div className="space-y-0">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className="group relative py-12 border-b border-zinc-900 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-zinc-900/30 px-4 transition-all duration-500"
            >
              <div className="flex items-center space-x-12 mb-6 md:mb-0">
                <span className="text-xs mono text-zinc-700">0{index + 1}</span>
                <h3 className="text-2xl md:text-4xl font-bold text-zinc-400 group-hover:text-white transition-colors duration-500 tracking-tight">
                  {service.title}
                </h3>
              </div>
              
              <div className="max-w-md md:text-right">
                <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Reveal Line */}
              <div className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-700 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
