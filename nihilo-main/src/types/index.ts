export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface StatItem {
  name: string;
  value: number;
}

export interface AssessmentQuestion {
  id: string;
  phase: string;
  question: string;
  options: string[];
}

export interface Founder {
  name: string;
  role: string;
  initials: string;
  bio: string;
  experience: string;
  specialization: string;
  focus: string[];
}
