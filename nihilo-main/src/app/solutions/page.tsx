import { Metadata } from "next";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions",
  description: "Explore our comprehensive suite of enterprise AI solutions spanning Azure, AWS, industry verticals, and security compliance frameworks. 50+ specialized AI implementation services.",
  openGraph: {
    title: "Enterprise AI Solutions | Nihilo Solutions",
    description: "Comprehensive enterprise AI solutions for Azure, AWS, industry-specific implementations, and security compliance.",
    type: "website",
    url: "https://nihilosolutions.com/solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI Solutions | Nihilo Solutions",
    description: "Comprehensive enterprise AI solutions for Azure, AWS, industry-specific implementations, and security compliance.",
  },
};

export default function SolutionsIndexPage() {
  return <SolutionsContent />;
}
