import React from 'react';
import { Shield, Lock } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <section id="security" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <Shield className="text-blue-500" />
              <h2 className="text-3xl font-bold text-white">Security‑First Architecture</h2>
            </div>
            <p className="text-zinc-400 mb-6">
              We deploy into your tenant and enforce zero‑trust controls by default. Data residency, BYOK KMS integrations, and enterprise encryption are core to every engagement.
            </p>

            <ul className="text-zinc-400 space-y-3">
              <li><strong className="text-zinc-200">Tenant-Local Deployment:</strong> Production workloads run in your Azure/AWS account under your control.</li>
              <li><strong className="text-zinc-200">Zero‑Trust:</strong> Least-privilege IAM, microsegmentation, mTLS and ephemeral credentials.</li>
              <li><strong className="text-zinc-200">Encryption:</strong> AES‑256 at rest, TLS 1.3 in transit, and client-managed keys.</li>
              <li><strong className="text-zinc-200">Audit & Monitoring:</strong> Centralized logging to your SIEM, immutable retention, and EDR integrations.</li>
            </ul>

            <div className="mt-8">
              <a
                  href="/nihilo-security-whitepaper.pdf"
                  className="inline-flex items-center px-5 py-3 font-mono uppercase tracking-[0.1em] text-white rounded-sm border border-blue-400 bg-zinc-800 transition-all duration-300"
                  style={{ boxShadow: '2px 2px 0 rgba(0,0,0,1)' }}
                  download
                >
                  <span className="mr-2">[</span>
                  <span>Download Security Whitepaper</span>
                  <span className="ml-2">]</span>
                </a>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg">
            <h3 className="text-white font-bold mb-4">Security Checklist</h3>
            <ol className="text-zinc-400 list-decimal list-inside space-y-2">
              <li>Tenant-local deployments with role separation</li>
              <li>BYOK (Bring Your Own Key) and periodic rotation</li>
              <li>Zero‑Trust policies and conditional access</li>
              <li>Centralized SIEM forwarding and WORM storage</li>
              <li>Periodic pentests and SCA in CI</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
