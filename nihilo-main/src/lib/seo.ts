import type { Metadata } from "next";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

const OG_IMAGE = `${SITE_URL}/og.jpg`;
const OG_ALT = "Nihilo Solutions. Give your team their week back.";

/**
 * Title, description, canonical and social cards for one page. Every route
 * calls this rather than hand-writing meta tags, so the four never drift apart.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    // The redesign's titles already carry the brand, so bypass the layout's
    // "%s | Nihilo Solutions" template rather than appending it twice.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: SITE_NAME,
  url: SITE_URL,
  email: SITE_EMAIL,
  image: OG_IMAGE,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    "Custom operational automations for growing companies. Recurring reports, readings, lookups, and other repeating work. Built by our team, and kept running so yours does not have to.",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Connecticut" },
    { "@type": "Country", name: "United States" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "CT",
    addressCountry: "US",
  },
  knowsAbout: [
    "operational automation",
    "custom workflow automation",
    "service reporting automation",
    "meter and usage capture",
    "client and record lookup",
  ],
};

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/**
 * Breadcrumb trail for an inner page. This is what makes search results show
 * "nihilosolutions.com > Use cases" instead of a bare URL, and it gives an agent
 * an explicit statement of where a page sits in the site.
 *
 * Home needs none: a single-item trail is noise.
 */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * The classes of system we build, stated as machine-readable services rather
 * than left implicit in the prose.
 */
export function serviceJsonLd(services: { name: string; description: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "What Nihilo Solutions builds",
    itemListElement: services.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        serviceType: "Custom operational automation",
        provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Connecticut" },
          { "@type": "Country", name: "United States" },
        ],
      },
    })),
  };
}
