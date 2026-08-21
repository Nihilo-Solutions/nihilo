import React from 'react';
import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';

// NOTE: This is standard website Terms of Use boilerplate, not a services
// contract. The wording is AI-drafted and must be reviewed by Sam / counsel
// before this is merged to main and served on production.

export const metadata: Metadata = pageMeta({
  title: 'Terms of Service | Nihilo Solutions',
  description: 'Terms of Service governing use of the Nihilo Solutions website.',
  path: '/terms',
});

export default function TermsOfService() {
  return (
    <div className="pt-16 pb-20 text-muted">
      <div className="mx-auto w-[min(48rem,calc(100%-2.5rem))]">
        <h1 className="mb-8 font-serif text-4xl font-normal tracking-[-0.03em] text-fg sm:text-5xl">Terms of Service</h1>
        <p className="mb-8 leading-relaxed">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 font-serif text-xl font-medium text-fg">Acceptance of Terms</h2>
            <p className="leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of the website operated by Nihilo Solutions LLC ("we", "our", or "us") at nihilosolutions.com (the "Website"). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, do not use the Website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl font-medium text-fg">Use of the Website</h2>
            <p className="leading-relaxed mb-4">
              You may use the Website only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Website in any way that violates applicable law or regulation.</li>
              <li>Attempt to gain unauthorized access to, interfere with, or disrupt the Website or its underlying infrastructure.</li>
              <li>Use any automated means to access the Website in a manner that imposes an unreasonable load on our systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl font-medium text-fg">Intellectual Property</h2>
            <p className="leading-relaxed">
              The Website and its contents, including text, graphics, logos, and software, are the property of Nihilo Solutions LLC or its licensors and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl font-medium text-fg">No Professional Advice; Services Governed Separately</h2>
            <p className="leading-relaxed">
              Content on the Website is provided for general informational purposes only and does not constitute professional, technical, legal, or security advice. Any engagement for consulting or implementation services is governed by a separate written agreement between you and Nihilo Solutions LLC, not by these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl font-medium text-fg">Disclaimer of Warranties</h2>
            <p className="leading-relaxed">
              The Website is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Website will be uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl font-medium text-fg">Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, Nihilo Solutions LLC will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of, or inability to use, the Website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl font-medium text-fg">Third-Party Links</h2>
            <p className="leading-relaxed">
              The Website may contain links to third-party websites or services that we do not control. We are not responsible for the content, policies, or practices of any third-party sites. Accessing them is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl font-medium text-fg">Changes to These Terms</h2>
            <p className="leading-relaxed">
              We may revise these Terms from time to time. The most current version will always be posted on this page with an updated "Last updated" date. Your continued use of the Website after changes take effect constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl font-medium text-fg">Governing Law</h2>
            <p className="leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the State of Connecticut, without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl font-medium text-fg">Contact Information</h2>
            <p className="leading-relaxed">
              Questions about these Terms can be directed to:
              <br />
              <a href="mailto:sam@nihilosolutions.com" className="text-fg hover:text-blue-400 transition-colors mt-2 inline-block font-mono">
                sam@nihilosolutions.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
