"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/site/ui/button";
import { BOOKING_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/what-we-build", label: "What we build" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Escape closes the drawer, and a route change must not leave it open behind
  // the new page.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 h-18 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-full w-[min(70rem,calc(100%-2.5rem))] items-center justify-between gap-3 lg:gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-baseline gap-2 whitespace-nowrap text-[0.8125rem] font-semibold tracking-[0.16em] text-fg"
        >
          NIHILO{" "}
          <span className="font-medium tracking-[0.18em] text-muted max-[359px]:hidden">
            SOLUTIONS
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-fg",
                pathname === item.href && "text-fg",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <Button asChild>
            <a href={BOOKING_URL} target="_blank" rel="noopener">
              Book a call
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-nav-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="primary-nav-mobile"
          className="absolute inset-x-0 top-18 flex flex-col gap-3 border-b border-border bg-bg-elev px-5 py-5 lg:hidden"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "flex min-h-11 items-center text-base text-muted",
                pathname === item.href && "text-fg",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="flex min-h-11 items-center text-base font-medium text-fg"
          >
            Book a call
          </a>
        </nav>
      ) : null}
    </header>
  );
}
