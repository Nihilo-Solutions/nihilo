import React from 'react';

export const metadata = {
  title: { absolute: 'Privacy Policy | Nihilo Solutions' },
  description: 'Privacy Policy for Nihilo Solutions LLC',
  alternates: { canonical: 'https://nihilosolutions.com/privacy' },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-24 text-zinc-400 font-light">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-white mb-8 tracking-widest uppercase">Privacy Policy</h1>
        <p className="mb-8 leading-relaxed">
          Last updated: June 2026
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 tracking-wide">Introduction</h2>
            <p className="leading-relaxed">
              At Nihilo Solutions LLC ("we", "our", or "us"), we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 tracking-wide">Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              We collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Information by which you may be personally identified, such as name, postal address, e-mail address, telephone number, etc.</li>
              <li><strong>Usage Data:</strong> Information about your internet connection, the equipment you use to access our website, and usage details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 tracking-wide">How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To present our website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To notify you about changes to our website or any products or services we offer or provide though it.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 tracking-wide">Data Security</h2>
            <p className="leading-relaxed">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 tracking-wide">Contact Information</h2>
            <p className="leading-relaxed">
              To ask questions or comment about this privacy policy and our privacy practices, contact us at:
              <br />
              <a href="mailto:sam@nihilosolutions.com" className="text-white hover:text-blue-400 transition-colors mt-2 inline-block font-mono">
                sam@nihilosolutions.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}