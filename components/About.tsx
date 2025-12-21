import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter uppercase italic">About Nihilo</h2>
          <p className="text-zinc-400 text-lg mb-8 font-light leading-relaxed">
            Nihilo is a principals-led engineering studio specializing in AI systems,
            cloud automation, and secure, scalable architectures. We partner with
            product teams to design pragmatic, production-ready solutions that
            balance performance, cost, and long-term operability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="glass-panel p-6 rounded-lg">
              <h3 className="text-sm mono uppercase tracking-widest text-zinc-400 mb-3">Our Focus</h3>
              <p className="text-zinc-300 text-sm">LLMs & RAG, automation, and cloud-native engineering.</p>
            </div>

            <div className="glass-panel p-6 rounded-lg">
              <h3 className="text-sm mono uppercase tracking-widest text-zinc-400 mb-3">How We Work</h3>
              <p className="text-zinc-300 text-sm">Small cross-functional teams, short iterations, and clear SLAs.</p>
            </div>

            <div className="glass-panel p-6 rounded-lg">
              <h3 className="text-sm mono uppercase tracking-widest text-zinc-400 mb-3">Contact</h3>
              <p className="text-zinc-300 text-sm">Request an audit or schedule a discovery call via the Book Call CTA.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
