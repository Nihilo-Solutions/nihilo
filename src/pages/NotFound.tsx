import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, ArrowLeft, Hash } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-6 text-center">
      {/* Background Decor */}
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none"></div>
      
      <div className="relative">
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-sm">
            <Terminal size={40} className="text-blue-500" />
          </div>
        </div>

        <h1 className="text-8xl font-black text-white italic tracking-tighter mb-4 opacity-20">
          404
        </h1>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white uppercase tracking-[0.3em] mb-4">
            Route_Not_Found
          </h2>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest max-w-md mx-auto leading-relaxed">
            The requested protocol address does not exist on this sovereign tenant. Access has been restricted or the path has been decommissioned.
          </p>
        </div>

        <Link 
          to="/" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-black font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all"
        >
          <ArrowLeft size={14} /> Return to Home Base
        </Link>
        
        <div className="mt-16 flex items-center justify-center gap-4 text-zinc-800 font-mono text-[10px] tracking-[0.5em]">
          <Hash size={10} /> <span>SYSTEM_ID: NULL_PTR</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;