import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export function pageHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const image = `${SITE_URL}/og.jpg`;
  return {
    meta: [
      { title },
      { name: "description", content: description },

      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Nihilo Solutions. Give your team their week back.",
      },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: SITE_NAME,
  url: SITE_URL,
  email: SITE_EMAIL,
  image: `${SITE_URL}/og.jpg`,
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
