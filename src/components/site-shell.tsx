import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { organizationJsonLd } from "@/lib/seo";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    const id = hash.replace(/^#/, "");
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash]);

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <JsonLd data={organizationJsonLd} />
      <a
        href="#main"
        className="absolute left-3 top-[-100px] z-100 rounded-md bg-fg px-4 py-3 text-sm text-primary-fg transition-[top] focus:top-3"
      >
        Skip to content
      </a>
      <SiteHeader />
      <div className="flex-1" id="main">
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
