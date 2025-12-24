import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Add this import

const Security: React.FC = () => {
  return (
    <section id="security" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <Shield className="text-blue-500" />
              <h2 className="text-3xl font-bold text-white">Security First Architecture</h2>
            </div>
            {/* ... keep your existing text and list ... */}

            <div className="mt-8">
              {/* 2. Update this button to a Link */}
              <Link
                  to="/security"
                  className="inline-flex items-center px-5 py-3 font-mono uppercase tracking-[0.1em] text-white rounded-sm border border-blue-400 bg-zinc-800 transition-all duration-300 hover:bg-blue-400 hover:text-black"
                  style={{ boxShadow: '2px 2px 0 rgba(0,0,0,1)' }}
                >
                  <span>Read Security Whitepaper</span>
                </Link>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg">
             {/* ... keep your existing checklist ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;