
import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-zinc-950">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="mb-24 flex items-end justify-between">
          <div>
            <span className="text-[10px] mono uppercase tracking-[0.4em] text-zinc-600 mb-4 block">02 // Index</span>
            <h2 className="text-4xl font-bold text-white tracking-tighter italic uppercase">Selected Works</h2>
          </div>
          <div className="hidden md:block h-[1px] flex-1 mx-12 bg-zinc-900"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-4 md:px-0">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="relative group border border-zinc-900 overflow-hidden bg-zinc-900">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="p-8 flex justify-between items-end border-t border-zinc-900">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-[9px] mono text-zinc-500 uppercase px-2 py-0.5 border border-zinc-800 rounded">2024</span>
                    <span className="text-[9px] mono text-zinc-500 uppercase tracking-widest">{project.category}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">{project.title}</h4>
                </div>
                <div className="text-[10px] mono text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  VIEW_PROJECT_MANIFEST
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
