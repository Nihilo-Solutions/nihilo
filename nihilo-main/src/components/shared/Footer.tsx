import Link from 'next/link';
import Logo from './Logo';

const navLinks: { label: string; href: string }[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Assessment', href: '/assessment' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

const Footer: React.FC = () => (
  <footer className="bg-zinc-950 pt-24 pb-12">
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">

      {/* Top row: three columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">

        {/* Left: logo lockup + tagline */}
        <div>
          <Logo className="text-white mb-6" width="180px" />
          <p
            className="uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--n-400)',
              letterSpacing: '0.28em',
              lineHeight: 1.8,
            }}
          >
            WEBSITE · SEO · AI AUTOMATION · PRINCIPAL-LED
          </p>
        </div>

        {/* Center: navigation */}
        <nav aria-label="Footer navigation">
          <ul className="space-y-3">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-zinc-300 hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: contact + credentials */}
        <div className="space-y-3">
          <a
            href="mailto:sam@nihilosolutions.com"
            className="block text-sm text-zinc-300 hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            sam@nihilosolutions.com
          </a>
          <p
            className="text-sm"
            style={{ fontFamily: 'var(--font-sans)', color: 'var(--n-300)' }}
          >
            Microsoft Azure Partner · ISC2 CC
          </p>
          <p
            className="text-sm"
            style={{ fontFamily: 'var(--font-sans)', color: 'var(--n-400)' }}
          >
            Connecticut, USA
          </p>
        </div>
      </div>

      {/* Bottom rule + copyright */}
      <div className="pt-8" style={{ borderTop: '1px solid var(--n-700)' }}>
        <p
          className="uppercase"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            color: 'var(--n-600)',
            letterSpacing: '0.28em',
          }}
        >
          &copy; 2026 · NIHILO SOLUTIONS LLC · CONNECTICUT
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
