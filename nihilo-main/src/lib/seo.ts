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
    "Custom operational automations for growing companies. Recurring reports, readings, lookups, and other repeating work. Built by our team. Yours when we are done.",
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
