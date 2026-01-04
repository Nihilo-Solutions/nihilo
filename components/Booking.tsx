
import React from 'react';
import { Calendar, Video, ArrowRight } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-zinc-950 border-t border-zinc-900 overflow-hidden relative">
      {/* Background decoration - Wireframe style */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-zinc-900/50 hidden lg:block"></div>
      
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] mono uppercase tracking-[0.4em] text-zinc-600 mb-6 block">03 // Discovery</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter uppercase italic">
              Sync with <br />Engineering.
            </h2>
            <p className="text-zinc-500 text-xl font-light leading-relaxed mb-12">
              We operate on a direct-access model. No account managers, no gatekeepers. Book a discovery session directly with the principals to discuss your cloud automation or AI roadmap via Microsoft Teams.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 p-2 bg-zinc-900 border border-zinc-800 rounded">
                  <Video size={18} className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Teams Virtual Session</h4>
                  <p className="text-zinc-500 text-xs mt-1">30-minute technical alignment & initial audit.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-1 p-2 bg-zinc-900 border border-zinc-800 rounded">
                  <Calendar size={18} className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Direct Availability</h4>
                  <p className="text-zinc-500 text-xs mt-1">Real-time scheduling for current project cycle.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-zinc-800 rounded-lg pointer-events-none"></div>
            <div className="bg-zinc-900 p-10 md:p-16 border border-zinc-700 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Discovery Call</h3>
              <p className="text-zinc-500 text-sm mb-10 mono">ESTABLISHING_ENCRYPTED_LINK...</p>
              
              <a 
                href="https://teams.microsoft.com/l/meetup-join/..." // Replace with your actual MS Bookings / Teams link
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-4 w-full py-6 bg-white text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <span>Initialize Meeting</span>
                <ArrowRight size={16} />
              </a>
              
              <p className="mt-8 text-[10px] mono text-zinc-600 uppercase tracking-widest">
                Secured by Microsoft Teams
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
