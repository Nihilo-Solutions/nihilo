export type SolutionCategory = "Azure" | "AWS" | "Industry" | "Security";

export interface SolutionContent {
  intro: string;
  approach: string;
  outcomes: string;
}

export interface SolutionPage {
  slug: string;
  title: string;
  category: SolutionCategory;
  description: string;
  content: SolutionContent;
  features: string[];
}
