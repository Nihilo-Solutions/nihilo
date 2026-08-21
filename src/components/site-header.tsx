import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/what-we-build", label: "What we build" },
  { to: "/how-we-work", label: "How we work" },
  { to: "/use-cases", label: "Use cases" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 h-18 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-full w-[min(70rem,calc(100%-2.5rem))] items-center justify-between gap-3 lg:gap-6">
        <Link
          to="/"
          className="flex shrink-0 items-baseline gap-2 text-[0.8125rem] font-semibold tracking-[0.16em] text-fg whitespace-nowrap"
          onClick={() => setOpen(false)}
        >
          NIHILO{" "}
          <span className="font-medium tracking-[0.18em] text-muted max-[359px]:hidden">
            SOLUTIONS
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-fg",
                pathname === item.to && "text-fg",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <Button asChild>
            <Link to="/contact" hash="book">
              Book a call
            </Link>
          </Button>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="absolute inset-x-0 top-18 flex flex-col gap-3 border-b border-border bg-bg-elev px-5 py-5 lg:hidden"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "min-h-11 py-2 text-base text-muted",
                pathname === item.to && "text-fg",
              )}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            hash="book"
            className="min-h-11 py-2 text-base text-fg"
            onClick={() => setOpen(false)}
          >
            Book a call
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
