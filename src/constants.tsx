
import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Custom AI Engineering',
    description: 'Bespoke LLM integration and RAG architectures deployed on enterprise-grade cloud infrastructure.',
    icon: 'Brain'
  },
  {
    id: '2',
    title: 'Workflow Automation',
    description: 'End-to-end operational automation using event-driven serverless patterns to eliminate manual overhead.',
    icon: 'Zap'
  },
  {
    id: '3',
    title: 'Cloud Architecture',
    description: 'Expert-level AWS and Azure infrastructure design with a focus on security, scalability, and high availability.',
    icon: 'Cloud'
  },
  {
    id: '4',
    title: 'Strategic Integration',
    description: 'Seamlessly bridging legacy systems with modern AI capabilities through robust API and data orchestration.',
    icon: 'Database'
  }
];

export const FOUNDERS = [
  {
    name: "A. Vance",
    role: "Principal Engineer / AI Strategy",
    initials: "AV",
    bio: "Focused on the intersection of distributed systems and cognitive computing. Previously leading technical strategy for cloud-native modernization projects across financial and logistics sectors.",
    experience: "12+ Years",
    specialization: "Neural Orchestration",
    focus: ["LLM Operations", "Azure Architecture", "System Resiliency", "RAG Design"]
  },
  {
    name: "E. Thorne",
    role: "Principal Architect / Cloud Ops",
    initials: "ET",
    bio: "Specializing in zero-trust architectures and high-throughput automation. Expert in migrating monolithic operational workflows into streamlined, serverless cloud ecosystems.",
    experience: "10+ Years",
    specialization: "Serverless Automation",
    focus: ["AWS Serverless", "Workflow Optimization", "Identity & Security", "Event-Driven Logic"]
  }
];

// Placeholders kept for type compatibility but not rendered in main flow as per user request
export const PROJECTS: Project[] = [];
export const PERFORMANCE_DATA = [];
