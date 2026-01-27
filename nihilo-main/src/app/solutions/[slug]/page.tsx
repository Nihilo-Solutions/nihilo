import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSolutionBySlug, solutionPages } from "@/lib/data/pages";
import SolutionContent from "./SolutionContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutionPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: "Solution Not Found",
    };
  }

  return {
    title: solution.title,
    description: solution.description,
    openGraph: {
      title: solution.title,
      description: solution.description,
      type: "website",
      url: `https://nihilosolutions.com/solutions/${solution.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: solution.title,
      description: solution.description,
    },
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: solution.title,
    description: solution.description,
    provider: {
      "@type": "Organization",
      name: "Nihilo Solutions",
      url: "https://nihilosolutions.com",
    },
    areaServed: "Worldwide",
    serviceType: `${solution.category} AI Solutions`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SolutionContent solution={solution} />
    </>
  );
}
