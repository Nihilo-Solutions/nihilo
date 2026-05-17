import { Lock, ShieldCheck, KeyRound } from 'lucide-react';

const TrustMarker: React.FC<{
  icon: React.ReactNode;
  title: string;
  body: string;
}> = ({ icon, title, body }) => (
  <div className="flex items-start gap-3 p-4 border border-zinc-800 rounded-lg bg-zinc-900/40">
    <div className="flex-shrink-0 mt-0.5 text-[#5B8BFF]">{icon}</div>
    <div>
      <div className="text-white text-sm font-semibold leading-tight">{title}</div>
      <div className="text-zinc-500 text-xs mt-1 leading-relaxed">{body}</div>
    </div>
  </div>
);

const WhyTenantLocal: React.FC = () => {
  return (
    <section id="why-tenant-local" className="py-16 md:py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-3xl mb-10 md:mb-16">
          <span className="text-[9px] md:text-[10px] mono uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-600 mb-3 md:mb-4 block">
            02 // Trust posture
          </span>
          <h2 id="why-tenant-local-headline" className="text-2xl md:text-4xl font-bold text-white tracking-tighter italic uppercase leading-tight">
            Your data stays in <em className="text-[#5B8BFF]">your</em> cloud.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-2 text-zinc-300 text-base leading-relaxed font-light space-y-4">
            <p>
              Most AI vendors ask you to send sensitive data into their environment and trust the contract. We deploy AI inside your own Azure or AWS tenancy, so customer data, regulated information, and proprietary content never leave.
            </p>
            <p>
              That keeps you aligned with SOC 2 and ISO 27001 evidence requirements without adding a new vendor to your compliance scope. A breach involving an external AI vendor is a board-level event. Our architecture removes that risk vector by design.
            </p>
          </div>

          <div className="space-y-3">
            <TrustMarker
              icon={<Lock size={18} aria-hidden="true" />}
              title="Data never leaves your tenancy"
              body="No external egress on retrieval or inference."
            />
            <TrustMarker
              icon={<ShieldCheck size={18} aria-hidden="true" />}
              title="SOC 2 and ISO 27001 aligned"
              body="Evidence collection stays inside your existing scope."
            />
            <TrustMarker
              icon={<KeyRound size={18} aria-hidden="true" />}
              title="BYOK encryption"
              body="Your keys, your control, default for every deployment."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTenantLocal;
