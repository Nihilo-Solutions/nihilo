'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  {
    label: 'Solutions',
    children: [
      {
        label: 'Website Modernization',
        href: '/solutions/website-modernization',
        description: 'Modern, fast, conversion-optimized websites',
      },
      {
        label: 'SEO Growth System',
        href: '/solutions/seo-growth-system',
        description: 'Rank for the searches your buyers make',
      },
      {
        label: 'AI Automation System',
        href: '/solutions/ai-automation-system',
        description: 'Replace manual work with AI-driven workflows',
      },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'Professional Services', href: '/industries/professional-services' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Home Services', href: '/industries/home-services' },
      { label: 'Retail & E-commerce', href: '/industries/retail-ecommerce' },
      { label: 'Financial Services', href: '/industries/financial-services' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'About', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

interface DropdownProps {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function Dropdown({ item, isOpen, onToggle, onClose }: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={onToggle}
        className="nav-link text-[11px] font-bold mono uppercase tracking-[0.35em] flex items-center gap-1.5"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && item.children && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-zinc-950/98 backdrop-blur-xl border border-zinc-800 py-2 z-50">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="block px-4 py-3 hover:bg-zinc-900 transition-colors"
            >
              <span className="block text-[12px] font-medium text-white">{child.label}</span>
              {child.description && (
                <span className="block text-[10px] text-zinc-500 mt-0.5 leading-relaxed">
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-8'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12">
        <div
          className={`flex items-center justify-between px-4 md:px-8 py-3 rounded-full border transition-all duration-500
            ${
              isScrolled
                ? 'bg-zinc-950/90 backdrop-blur-xl border-zinc-800 shadow-[0_0_30px_rgba(0,0,0,0.5)]'
                : 'bg-zinc-950/70 backdrop-blur-sm border-zinc-800/50 md:bg-transparent md:border-transparent'
            }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-2 h-2 bg-white rounded-full group-hover:shadow-[0_0_8px_#fff] transition-all duration-500" />
              <span className="text-sm font-black tracking-[0.2em] md:tracking-[0.3em] text-white uppercase italic">
                Nihilo
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex justify-center items-center space-x-8 lg:space-x-12">
            {navItems.map((item) =>
              item.children ? (
                <Dropdown
                  key={item.label}
                  item={item}
                  isOpen={openDropdown === item.label}
                  onToggle={() => toggleDropdown(item.label)}
                  onClose={() => setOpenDropdown(null)}
                />
              ) : (
                <Link
                  key={item.label}
                  href={item.href ?? '#'}
                  className="nav-link text-[11px] font-bold mono uppercase tracking-[0.35em]"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA pill + mobile toggle */}
          <div className="flex items-center space-x-3">
            <Link
              href="/tools/growth-assessment"
              className="hidden sm:inline-flex items-center gap-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.15em] px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
            >
              Check your score
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 mx-2 p-4 bg-zinc-950/98 backdrop-blur-xl border border-zinc-800 rounded-2xl">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenMobileItem((prev) => (prev === item.label ? null : item.label))
                        }
                        className="w-full flex items-center justify-between text-base font-bold text-white uppercase tracking-widest py-3 border-b border-zinc-900 hover:text-blue-400 transition-colors"
                        aria-expanded={openMobileItem === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            openMobileItem === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openMobileItem === item.label && (
                        <div className="pl-4 py-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setOpenMobileItem(null);
                              }}
                              className="block text-sm text-zinc-400 py-2 hover:text-white transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href ?? '#'}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-base font-bold text-white uppercase tracking-widest py-3 border-b border-zinc-900 hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/tools/growth-assessment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center bg-white text-black font-bold text-sm uppercase tracking-[0.15em] px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Check your score
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
