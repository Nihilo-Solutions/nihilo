(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/constants.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ASSESSMENT_QUESTIONS",
    ()=>ASSESSMENT_QUESTIONS,
    "FOUNDERS",
    ()=>FOUNDERS,
    "PERFORMANCE_DATA",
    ()=>PERFORMANCE_DATA,
    "PROJECTS",
    ()=>PROJECTS,
    "SERVICES",
    ()=>SERVICES
]);
const SERVICES = [
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
const FOUNDERS = [
    {
        name: "A. Vance",
        role: "Principal Engineer / AI Strategy",
        initials: "AV",
        bio: "Focused on the intersection of distributed systems and cognitive computing. Previously leading technical strategy for cloud-native modernization projects across financial and logistics sectors.",
        experience: "12+ Years",
        specialization: "Neural Orchestration",
        focus: [
            "LLM Operations",
            "Azure Architecture",
            "System Resiliency",
            "RAG Design"
        ]
    },
    {
        name: "E. Thorne",
        role: "Principal Architect / Cloud Ops",
        initials: "ET",
        bio: "Specializing in zero-trust architectures and high-throughput automation. Expert in migrating monolithic operational workflows into streamlined, serverless cloud ecosystems.",
        experience: "10+ Years",
        specialization: "Serverless Automation",
        focus: [
            "AWS Serverless",
            "Workflow Optimization",
            "Identity & Security",
            "Event-Driven Logic"
        ]
    }
];
const PROJECTS = [];
const PERFORMANCE_DATA = [];
const ASSESSMENT_QUESTIONS = [
    // PHASE 1: ORGANIZATIONAL SCALE
    {
        id: 'q1',
        phase: 'Business Scale',
        question: "What is your total company headcount?",
        options: [
            "1-20",
            "21-100",
            "101-500",
            "500+"
        ]
    },
    {
        id: 'q2',
        phase: 'Business Scale',
        question: "Which department currently has the highest manual workload?",
        options: [
            "Operations/Logistics",
            "Customer Support",
            "Sales/Marketing",
            "Finance/HR"
        ]
    },
    {
        id: 'q3',
        phase: 'Business Scale',
        question: "How would you describe your company's digital maturity?",
        options: [
            "Cloud-Native",
            "Transitioning to Cloud",
            "Legacy/On-Prem",
            "Manual/Paper-based"
        ]
    },
    {
        id: 'q4',
        phase: 'Business Scale',
        question: "What is the primary goal for AI in your business?",
        options: [
            "Cost Reduction",
            "Revenue Growth",
            "Competitive Advantage",
            "Employee Efficiency"
        ]
    },
    {
        id: 'q5',
        phase: 'Business Scale',
        question: "Who is driving the AI initiative?",
        options: [
            "Executive Leadership",
            "Department Heads",
            "IT/Engineering",
            "Exploratory Phase"
        ]
    },
    // PHASE 2: DATA ASSETS & QUALITY
    {
        id: 'q6',
        phase: 'Data Assets',
        question: "Where is your most valuable business knowledge stored?",
        options: [
            "Centralized Cloud Storage",
            "Siloed in Departments",
            "Internal Wikis/Docs",
            "Employee Heads/Emails"
        ]
    },
    {
        id: 'q7',
        phase: 'Data Assets',
        question: "How often is your business data updated?",
        options: [
            "Real-time",
            "Daily",
            "Weekly",
            "Ad-hoc"
        ]
    },
    {
        id: 'q8',
        phase: 'Data Assets',
        question: "Do you have a clear map of your customer journey data?",
        options: [
            "Fully Documented",
            "Partially Mapped",
            "Informal Understanding",
            "No"
        ]
    },
    {
        id: 'q9',
        phase: 'Data Assets',
        question: "What is the biggest barrier to accessing company data?",
        options: [
            "Technical Silos",
            "Security/Permissions",
            "Data is Unstructured",
            "No Central Search"
        ]
    },
    {
        id: 'q10',
        phase: 'Data Assets',
        question: "Does your company use a CRM or ERP system?",
        options: [
            "Yes, fully integrated",
            "Multiple disconnected tools",
            "Basic spreadsheets",
            "No"
        ]
    },
    // PHASE 3: OPERATIONAL PAIN POINTS
    {
        id: 'q11',
        phase: 'Operations',
        question: "How much time is spent on repetitive data entry?",
        options: [
            "Significant (20+ hrs/wk)",
            "Moderate (10-20 hrs/wk)",
            "Low (<10 hrs/wk)",
            "Unknown"
        ]
    },
    {
        id: 'q12',
        phase: 'Operations',
        question: "What is your biggest operational bottleneck?",
        options: [
            "Information Retrieval",
            "Workflow Approval Chains",
            "Customer Response Time",
            "Data Analysis"
        ]
    },
    {
        id: 'q13',
        phase: 'Operations',
        question: "How do you currently handle customer inquiries?",
        options: [
            "Dedicated Support Team",
            "Shared across staff",
            "Automated Chatbots",
            "No formal system"
        ]
    },
    {
        id: 'q14',
        phase: 'Operations',
        question: "How consistent is decision-making across the team?",
        options: [
            "Standardized SOPs",
            "Varies by Manager",
            "Highly Subjective",
            "No standard process"
        ]
    },
    // PHASE 4: AI STRATEGY & ROI
    {
        id: 'q15',
        phase: 'Strategy',
        question: "What is your timeframe for seeing AI results?",
        options: [
            "Immediate (<3 mo)",
            "Short-term (3-6 mo)",
            "Long-term (1 year+)",
            "Flexible"
        ]
    },
    {
        id: 'q16',
        phase: 'Strategy',
        question: "Have you allocated a specific budget for AI?",
        options: [
            "Dedicated Budget",
            "Project-by-project",
            "Exploratory only",
            "None yet"
        ]
    },
    {
        id: 'q17',
        phase: 'Strategy',
        question: "What is the biggest fear regarding AI adoption?",
        options: [
            "Data Security",
            "Accuracy/Reliability",
            "Cost of Implementation",
            "Employee Displacement"
        ]
    },
    {
        id: 'q18',
        phase: 'Strategy',
        question: "Are your competitors already using AI?",
        options: [
            "Yes, aggressively",
            "Starting to experiment",
            "No",
            "Unsure"
        ]
    },
    // PHASE 5: COMPLIANCE & RISK
    {
        id: 'q19',
        phase: 'Risk',
        question: "How sensitive is the data you plan to process with AI?",
        options: [
            "Public/General",
            "Internal/Operational",
            "Sensitive PII",
            "Highly Regulated/Legal"
        ]
    },
    {
        id: 'q20',
        phase: 'Risk',
        question: "What is your current level of data encryption?",
        options: [
            "Enterprise Standard",
            "Basic/Standard",
            "Minimal",
            "Unknown"
        ]
    },
    {
        id: 'q21',
        phase: 'Risk',
        question: "Do you have an existing AI usage policy for employees?",
        options: [
            "Yes, strict policy",
            "General guidelines",
            "No policy",
            "AI is currently banned"
        ]
    },
    // PHASE 6: USE CASE IDENTIFICATION
    {
        id: 'q22',
        phase: 'Use Case',
        question: "Which would provide the most value today?",
        options: [
            "Instant Internal Search",
            "Automated Client Reporting",
            "Lead Qualification",
            "Predictive Logistics"
        ]
    },
    {
        id: 'q23',
        phase: 'Use Case',
        question: "How do you generate your primary business reports?",
        options: [
            "Automated Dashboards",
            "Manual Export/Excel",
            "Requested from IT",
            "Ad-hoc/Manual"
        ]
    },
    {
        id: 'q24',
        phase: 'Use Case',
        question: "How long does it take to onboard a new employee?",
        options: [
            "< 1 Week",
            "1-4 Weeks",
            "1 Month+",
            "Highly Variable"
        ]
    },
    {
        id: 'q25',
        phase: 'Use Case',
        question: "What is the primary source of 'human error' in your ops?",
        options: [
            "Data Entry",
            "Communication Gaps",
            "Missing Documentation",
            "Complex Calculations"
        ]
    },
    // PHASE 7: ADOPTION & CULTURE
    {
        id: 'q26',
        phase: 'Culture',
        question: "How open is your staff to new technical tools?",
        options: [
            "Early Adopters",
            "Pragmatic",
            "Late Majority",
            "Resistance to Change"
        ]
    },
    {
        id: 'q27',
        phase: 'Culture',
        question: "How do you measure employee productivity?",
        options: [
            "Output-Based Metrics",
            "Time-Tracking",
            "Qualitative Reviews",
            "No formal measurement"
        ]
    },
    {
        id: 'q28',
        phase: 'Culture',
        question: "Is there a budget for ongoing staff training?",
        options: [
            "Significant",
            "Modest",
            "Rare",
            "None"
        ]
    },
    // PHASE 8: TECHNICAL ENVIRONMENT
    {
        id: 'q29',
        phase: 'Environment',
        question: "What is your primary communication tool?",
        options: [
            "Slack/Teams",
            "Email Only",
            "Project Management (Jira/Asana)",
            "Phone/In-person"
        ]
    },
    {
        id: 'q30',
        phase: 'Environment',
        question: "How many 'source of truth' databases do you have?",
        options: [
            "One Centralized",
            "2-3 Systems",
            "Many Disconnected",
            "None"
        ]
    },
    {
        id: 'q31',
        phase: 'Environment',
        question: "Do you have internal engineering resources?",
        options: [
            "Full In-house Team",
            "Skeleton/Maintenance Team",
            "Fully Outsourced",
            "None"
        ]
    },
    // PHASE 9: STRATEGIC OUTLOOK
    {
        id: 'q32',
        phase: 'Outlook',
        question: "Where do you want the company in 24 months?",
        options: [
            "Market Leader",
            "Scaling Efficiently",
            "Stable/Optimized",
            "Exit/Acquisition"
        ]
    },
    {
        id: 'q33',
        phase: 'Outlook',
        question: "What is the #1 goal for this AI Assessment?",
        options: [
            "Immediate Roadmap",
            "Feasibility Study",
            "Internal Buy-in",
            "Competitive Research"
        ]
    },
    {
        id: 'q34',
        phase: 'Outlook',
        question: "How involved should Nihilo be in the build?",
        options: [
            "Full Implementation",
            "Strategic Advisory",
            "Training/Enablement",
            "Unsure"
        ]
    },
    {
        id: 'q35',
        phase: 'Outlook',
        question: "If we found a 20% efficiency gain, how fast would you move?",
        options: [
            "Immediately",
            "Next Quarter",
            "Next Fiscal Year",
            "Need more proof"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/Stats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const Stats = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 bg-zinc-950 border-t border-zinc-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-screen-2xl mx-auto px-6 lg:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-24 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] mono uppercase tracking-[0.4em] text-zinc-600 mb-6 block",
                                children: "02 // Optimization Metrics"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/Stats.tsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "measurable-operational-gains",
                                className: "text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter",
                                children: "Measurable Operational Gains"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/Stats.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-500 text-lg mb-12 leading-relaxed font-light",
                                children: "Our engineering approach prioritizes reduction in manual cycle times and significant latency optimization. We don't just build; we optimize for scale and cost-efficiency."
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/Stats.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 border border-zinc-900 bg-zinc-900/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-4xl font-bold text-white mb-2",
                                                children: "85%"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/Stats.tsx",
                                                lineNumber: 20,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-600 text-[10px] mono uppercase tracking-widest font-bold",
                                                children: "Manual Task Reduction"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/Stats.tsx",
                                                lineNumber: 21,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/Stats.tsx",
                                        lineNumber: 19,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 border border-zinc-900 bg-zinc-900/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-4xl font-bold text-white mb-2",
                                                children: "4.2x"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/Stats.tsx",
                                                lineNumber: 24,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-600 text-[10px] mono uppercase tracking-widest font-bold",
                                                children: "Data Processing Speed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/Stats.tsx",
                                                lineNumber: 25,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/Stats.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 border border-zinc-900 bg-zinc-900/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-4xl font-bold text-white mb-2",
                                                children: "0.03%"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/Stats.tsx",
                                                lineNumber: 28,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-600 text-[10px] mono uppercase tracking-widest font-bold",
                                                children: "Workflow Error Rate"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/Stats.tsx",
                                                lineNumber: 29,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/Stats.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 border border-zinc-900 bg-zinc-900/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-4xl font-bold text-white mb-2",
                                                children: "30%"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/Stats.tsx",
                                                lineNumber: 32,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-600 text-[10px] mono uppercase tracking-widest font-bold",
                                                children: "Cloud Cost Savings"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/Stats.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/Stats.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/Stats.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/Stats.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-zinc-900/40 border border-zinc-800 p-10 rounded-xl h-[450px] w-full relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs mono uppercase tracking-widest text-zinc-400",
                                        children: "Automation Performance Index"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/Stats.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] mono text-emerald-500 font-bold px-2 py-0.5 border border-emerald-900/30 rounded bg-emerald-950/20",
                                        children: "ACTIVE_TELEMETRY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/Stats.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/Stats.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: "75%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                                    data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PERFORMANCE_DATA"],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "colorEff",
                                                x1: "0",
                                                y1: "0",
                                                x2: "0",
                                                y2: "1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "5%",
                                                        stopColor: "#d4d4d8",
                                                        stopOpacity: 0.1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/Stats.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "95%",
                                                        stopColor: "#d4d4d8",
                                                        stopOpacity: 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/Stats.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/Stats.tsx",
                                                lineNumber: 47,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/Stats.tsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            strokeDasharray: "3 3",
                                            stroke: "#18181b",
                                            vertical: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/Stats.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "name",
                                            stroke: "#3f3f46",
                                            fontSize: 10,
                                            tickLine: false,
                                            axisLine: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/Stats.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            stroke: "#3f3f46",
                                            fontSize: 10,
                                            tickLine: false,
                                            axisLine: false
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/Stats.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: {
                                                backgroundColor: '#09090b',
                                                border: '1px solid #27272a',
                                                borderRadius: '4px',
                                                fontSize: '10px'
                                            },
                                            itemStyle: {
                                                color: '#fff',
                                                fontFamily: 'JetBrains Mono'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/Stats.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                            type: "monotone",
                                            dataKey: "efficiency",
                                            stroke: "#fff",
                                            fillOpacity: 1,
                                            fill: "url(#colorEff)",
                                            strokeWidth: 2,
                                            animationDuration: 2000
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/Stats.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/Stats.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/Stats.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 pt-6 border-t border-zinc-800 flex justify-between items-center text-[10px] mono text-zinc-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Y-AXIS: OPERATIONAL_YIELD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/Stats.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "X-AXIS: DEPLOYMENT_WEEKS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/Stats.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/Stats.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/Stats.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/Stats.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/features/Stats.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/features/Stats.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Stats;
const __TURBOPACK__default__export__ = Stats;
var _c;
__turbopack_context__.k.register(_c, "Stats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/Diagnostic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Diagnostic = ()=>{
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isFinished, setIsFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleChoice = (choice)=>{
        setAnswers({
            ...answers,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSESSMENT_QUESTIONS"][step].id]: choice
        });
        if (step < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSESSMENT_QUESTIONS"].length - 1) {
            setStep(step + 1);
        } else {
            setIsFinished(true);
        }
    };
    if (isFinished) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-32 bg-zinc-950 flex justify-center px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl w-full bg-zinc-900/50 border border-zinc-800 p-12 rounded-2xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                        className: "text-blue-500 mx-auto mb-6",
                        size: 48
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/Diagnostic.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "protocol-complete",
                        className: "text-3xl font-bold text-white mb-4 italic uppercase",
                        children: "Protocol Complete"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/Diagnostic.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-400 mb-10 font-mono text-xs tracking-widest uppercase",
                        children: "Analysis ready. Enter email to receive readiness report & engineering feedback."
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/Diagnostic.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        placeholder: "eng_lead@enterprise.com",
                        className: "w-full bg-zinc-950 border border-zinc-800 p-4 text-white mb-6 font-mono outline-none focus:border-blue-500 transition-colors",
                        onChange: (e)=>setEmail(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/Diagnostic.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full py-5 bg-blue-500 text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]",
                        children: "Send Technical Report"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/Diagnostic.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/Diagnostic.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/features/Diagnostic.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "assessment",
        className: "py-32 bg-zinc-950 border-t border-zinc-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-screen-2xl mx-auto px-6 lg:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-end mb-8 font-mono text-[10px] tracking-[0.4em] uppercase text-zinc-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/Diagnostic.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Phase: ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSESSMENT_QUESTIONS"][step].phase
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/Diagnostic.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/Diagnostic.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    Math.round((step + 1) / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSESSMENT_QUESTIONS"].length * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/Diagnostic.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/Diagnostic.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[1px] w-full bg-zinc-900 mb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-blue-500 shadow-[0_0_10px_#3b82f6] transition-all duration-500",
                            style: {
                                width: `${(step + 1) / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSESSMENT_QUESTIONS"].length * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/Diagnostic.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/Diagnostic.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold text-white mb-12 tracking-tighter italic uppercase",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSESSMENT_QUESTIONS"][step].question
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/Diagnostic.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ASSESSMENT_QUESTIONS"][step].options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleChoice(opt),
                                className: "group flex justify-between items-center p-6 border border-zinc-900 bg-zinc-900/20 hover:border-blue-500/50 hover:bg-zinc-900/50 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[11px] tracking-widest text-zinc-400 group-hover:text-white transition-colors",
                                        children: opt
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/Diagnostic.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 16,
                                        className: "text-zinc-800 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/Diagnostic.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, opt, true, {
                                fileName: "[project]/src/components/features/Diagnostic.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/Diagnostic.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/Diagnostic.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/features/Diagnostic.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/features/Diagnostic.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Diagnostic, "KhzFHFXaKAQ6elmCw/XjtR6h5xs=");
_c = Diagnostic;
const __TURBOPACK__default__export__ = Diagnostic;
var _c;
__turbopack_context__.k.register(_c, "Diagnostic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e56fb707._.js.map