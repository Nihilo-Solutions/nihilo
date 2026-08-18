'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, X, Menu } from 'lucide-react';

interface NavChild {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

const NAV: NavItem[] = [
  {
    label: 'Solutions',
    children: [
      { label: 'Website Modernization', href: '/solutions/website-modernization', description: 'Fast, conversion-optimized websites' },
      { label: 'SEO Growth System',      href: '/solutions/seo-growth-system',      description: 'Rank for the searches that matter' },
      { label: 'AI Automation System',   href: '/solutions/ai-automation-system',   description: 'Replace manual work with AI workflows' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'Professional Services', href: '/industries/professional-services' },
      { label: 'Healthcare',            href: '/industries/healthcare' },
      { label: 'Real Estate',           href: '/industries/real-estate' },
      { label: 'Home Services',         href: '/industries/home-services' },
      { label: 'Retail & E-commerce',   href: '/industries/retail-ecommerce' },
      { label: 'Financial Services',    href: '/industries/financial-services' },
    ],
  },
  { label: 'About',   href: '/about' },
  { label: 'Contact', href: '/contact' },
];

function DropdownMenu({
  item,
  isOpen,
  onToggle,
  onClose,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="nav-link flex items-center gap-1"
      >
        {item.label}
        <ChevronDown
          size={12}
          strokeWidth={2}
          className={`text-[#A1A1AA] transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && item.children && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-1 z-50"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.1)',
            width: item.children.length > 3 ? '220px' : '260px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          }}
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="block px-4 py-3 hover:bg-black/4 transition-colors"
            >
              <span className="block text-[13px] font-medium text-[#0F0F0F]">
                {child.label}
              </span>
              {child.description && (
                <span className="block text-[11px] text-[#A1A1AA] mt-0.5 leading-snug">
                  {child.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobile, setOpenMobile]     = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDropdown = (label: string) =>
    setOpenDropdown((prev) => (prev === label ? null : label));

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-16">

            {/* Wordmark */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Nihilo Solutions — home"
            >
              <span
                className="text-[13px] font-bold tracking-[0.28em] text-[#0F0F0F] uppercase"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Nihilo
              </span>
              <span
                className="hidden sm:block text-[10px] tracking-[0.15em] text-[#A1A1AA] uppercase"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Solutions
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV.map((item) =>
                item.children ? (
                  <DropdownMenu
                    key={item.label}
                    item={item}
                    isOpen={openDropdown === item.label}
                    onToggle={() => toggleDropdown(item.label)}
                    onClose={() => setOpenDropdown(null)}
                  />
                ) : (
                  <Link key={item.label} href={item.href ?? '#'} className="nav-link">
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Right CTA + mobile toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/tools/growth-assessment"
                className="hidden sm:inline-flex btn-primary"
                style={{ padding: '8px 18px', fontSize: '13px' }}
              >
                Free Assessment
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-[#52525B] hover:text-[#0F0F0F] transition-colors p-1"
                aria-label="Toggle navigation"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-16 overflow-y-auto md:hidden bg-white"
          style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}
        >
          <div className="flex-1 px-6 py-6 space-y-1">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenMobile((p) => (p === item.label ? null : item.label))}
                    className="w-full flex items-center justify-between py-4 text-[14px] font-medium text-[#52525B] border-b border-black/6"
                    aria-expanded={openMobile === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      strokeWidth={1.5}
                      className={`transition-transform duration-150 ${openMobile === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openMobile === item.label && (
                    <div className="py-2 pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => { setMobileOpen(false); setOpenMobile(null); }}
                          className="block py-3 text-[13px] text-[#A1A1AA] hover:text-[#0F0F0F] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href ?? '#'}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-[14px] font-medium text-[#52525B] border-b border-black/6 hover:text-[#0F0F0F] transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile CTA */}
          <div className="px-6 py-8 border-t border-black/6">
            <Link
              href="/tools/growth-assessment"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Get Free Assessment
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
