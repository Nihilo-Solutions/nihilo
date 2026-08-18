import Link from 'next/link';

const navLinks: { label: string; href: string }[] = [
  { label: 'Services',    href: '/#services' },
  { label: 'Assessment',  href: '/tools/growth-assessment' },
  { label: 'About',       href: '/about' },
  { label: 'Contact',     href: '/contact' },
  { label: 'Privacy',     href: '/privacy' },
  { label: 'Terms',       href: '/terms' },
];

const Footer: React.FC = () => (
  <footer style={{ background: '#111111', color: '#F5F5F5' }}>
    <div className="max-w-screen-xl mx-auto px-6 lg:px-16 pt-16 pb-10">

      {/* Top row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">

        {/* Left: wordmark + tagline */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-[13px] font-bold tracking-[0.28em] uppercase"
              style={{ fontFamily: 'var(--font-space-grotesk)', color: '#F5F5F5' }}
            >
              Nihilo
            </span>
            <span
              className="text-[10px] tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: '#555555' }}
            >
              Solutions
            </span>
          </div>
          <p
            className="text-[10px] tracking-[0.2em] uppercase leading-relaxed"
            style={{ fontFamily: 'var(--font-mono)', color: '#555555' }}
          >
            Website · SEO · AI Automation
            <br />
            Principal-led delivery
          </p>
        </div>

        {/* Center: navigation */}
        <nav aria-label="Footer navigation">
          <ul className="space-y-3">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[13px] transition-colors"
                  style={{ color: '#888888', fontFamily: 'var(--font-sans)' }}
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
            className="block text-[13px] transition-colors"
            style={{ color: '#E8610A', fontFamily: 'var(--font-sans)' }}
          >
            sam@nihilosolutions.com
          </a>
          <p className="text-[13px]" style={{ fontFamily: 'var(--font-sans)', color: '#888888' }}>
            Microsoft Azure Partner · ISC2 CC
          </p>
          <p className="text-[13px]" style={{ fontFamily: 'var(--font-sans)', color: '#555555' }}>
            Connecticut, USA
          </p>
        </div>
      </div>

      {/* Bottom rule + copyright */}
      <div className="pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <p
          className="text-[9px] tracking-[0.28em] uppercase"
          style={{ fontFamily: 'var(--font-mono)', color: '#444444' }}
        >
          &copy; 2026 · Nihilo Solutions LLC · Connecticut
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
