import Link from 'next/link';
import { Shield, Lock } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <section id="security" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <Shield className="text-blue-500" />
              <h2 id="security-first-architecture" className="text-3xl font-bold text-white uppercase italic tracking-tighter">
                Security First Architecture
              </h2>
            </div>
            
            <p className="text-zinc-400 mb-6 font-mono text-xs uppercase tracking-widest leading-relaxed">
              We deploy into your tenant and enforce zero‑trust controls by default. Data residency, BYOK KMS integrations, and enterprise encryption are core to every engagement.
            </p>

            <ul className="text-zinc-500 space-y-4 font-mono text-[10px] uppercase tracking-[0.15em]">
              <li>
                <strong className="text-zinc-200">Tenant-Local Deployment:</strong> 
                <br />Production workloads run in your Azure/AWS account under your control.
              </li>
              <li>
                <strong className="text-zinc-200">Zero‑Trust:</strong> 
                <br />Least-privilege IAM, microsegmentation, mTLS and ephemeral credentials.
              </li>
              <li>
                <strong className="text-zinc-200">Encryption:</strong> 
                <br />AES‑256 at rest, TLS 1.3 in transit, and client-managed keys.
              </li>
              <li>
                <strong className="text-zinc-200">Audit & Monitoring:</strong> 
                <br />Centralized logging to your SIEM, immutable retention, and EDR integrations.
              </li>
            </ul>

            <div className="mt-10">
              <Link
                href="/security"
                className="relative inline-flex items-center px-8 py-4 font-mono uppercase tracking-[0.2em] text-white rounded-sm border border-blue-400 bg-zinc-800 transition-all duration-300 hover:bg-blue-400 hover:text-black group"
                style={{ boxShadow: '2px 2px 0 rgba(0,0,0,1)' }}
              >
                <span className="text-xs font-bold flex items-center gap-2">
                  Read Security Whitepaper <Lock size={12} className="group-hover:animate-pulse" />
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-sm">
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs italic border-b border-zinc-800 pb-4">
              Operational Security Checklist
            </h3>
            <ol className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-500">01</span>
                <span>Tenant-local deployments with role separation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500">02</span>
                <span>BYOK (Bring Your Own Key) and periodic rotation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500">03</span>
                <span>Zero‑Trust policies and conditional access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500">04</span>
                <span>Centralized SIEM forwarding and WORM storage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500">05</span>
                <span>Periodic pentests and SCA in CI pipelines</span>
              </li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Security;
