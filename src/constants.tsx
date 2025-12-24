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
    description: 'Expert level AWS and Azure infrastructure design with a focus on security, scalability, and high availability.',
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

// Placeholders kept for type compatibility
export const PROJECTS: Project[] = [];
export const PERFORMANCE_DATA = [];

// --- ASSESSMENT DATA START ---
export const ASSESSMENT_QUESTIONS = [
  // PHASE 1: ORGANIZATIONAL SCALE
  { id: 'q1', phase: 'Business Scale', question: "What is your total company headcount?", options: ["1-20", "21-100", "101-500", "500+"] },
  { id: 'q2', phase: 'Business Scale', question: "Which department currently has the highest manual workload?", options: ["Operations/Logistics", "Customer Support", "Sales/Marketing", "Finance/HR"] },
  { id: 'q3', phase: 'Business Scale', question: "How would you describe your company's digital maturity?", options: ["Cloud-Native", "Transitioning to Cloud", "Legacy/On-Prem", "Manual/Paper-based"] },
  { id: 'q4', phase: 'Business Scale', question: "What is the primary goal for AI in your business?", options: ["Cost Reduction", "Revenue Growth", "Competitive Advantage", "Employee Efficiency"] },
  { id: 'q5', phase: 'Business Scale', question: "Who is driving the AI initiative?", options: ["Executive Leadership", "Department Heads", "IT/Engineering", "Exploratory Phase"] },
  
  // PHASE 2: DATA ASSETS & QUALITY
  { id: 'q6', phase: 'Data Assets', question: "Where is your most valuable business knowledge stored?", options: ["Centralized Cloud Storage", "Siloed in Departments", "Internal Wikis/Docs", "Employee Heads/Emails"] },
  { id: 'q7', phase: 'Data Assets', question: "How often is your business data updated?", options: ["Real-time", "Daily", "Weekly", "Ad-hoc"] },
  { id: 'q8', phase: 'Data Assets', question: "Do you have a clear map of your customer journey data?", options: ["Fully Documented", "Partially Mapped", "Informal Understanding", "No"] },
  { id: 'q9', phase: 'Data Assets', question: "What is the biggest barrier to accessing company data?", options: ["Technical Silos", "Security/Permissions", "Data is Unstructured", "No Central Search"] },
  { id: 'q10', phase: 'Data Assets', question: "Does your company use a CRM or ERP system?", options: ["Yes, fully integrated", "Multiple disconnected tools", "Basic spreadsheets", "No"] },

  // PHASE 3: OPERATIONAL PAIN POINTS
  { id: 'q11', phase: 'Operations', question: "How much time is spent on repetitive data entry?", options: ["Significant (20+ hrs/wk)", "Moderate (10-20 hrs/wk)", "Low (<10 hrs/wk)", "Unknown"] },
  { id: 'q12', phase: 'Operations', question: "What is your biggest operational bottleneck?", options: ["Information Retrieval", "Workflow Approval Chains", "Customer Response Time", "Data Analysis"] },
  { id: 'q13', phase: 'Operations', question: "How do you currently handle customer inquiries?", options: ["Dedicated Support Team", "Shared across staff", "Automated Chatbots", "No formal system"] },
  { id: 'q14', phase: 'Operations', question: "How consistent is decision-making across the team?", options: ["Standardized SOPs", "Varies by Manager", "Highly Subjective", "No standard process"] },

  // PHASE 4: AI STRATEGY & ROI
  { id: 'q15', phase: 'Strategy', question: "What is your timeframe for seeing AI results?", options: ["Immediate (<3 mo)", "Short-term (3-6 mo)", "Long-term (1 year+)", "Flexible"] },
  { id: 'q16', phase: 'Strategy', question: "Have you allocated a specific budget for AI?", options: ["Dedicated Budget", "Project-by-project", "Exploratory only", "None yet"] },
  { id: 'q17', phase: 'Strategy', question: "What is the biggest fear regarding AI adoption?", options: ["Data Security", "Accuracy/Reliability", "Cost of Implementation", "Employee Displacement"] },
  { id: 'q18', phase: 'Strategy', question: "Are your competitors already using AI?", options: ["Yes, aggressively", "Starting to experiment", "No", "Unsure"] },

  // ... [Additional 17 questions focusing on Compliance, Culture, and Specific Use Cases]
];