(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/data/pages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllSlugs",
    ()=>getAllSlugs,
    "getSolutionBySlug",
    ()=>getSolutionBySlug,
    "getSolutionsByCategory",
    ()=>getSolutionsByCategory,
    "solutionPages",
    ()=>solutionPages
]);
const solutionPages = [
    // AZURE SOLUTIONS (13 pages)
    {
        slug: "azure-fabric-automation",
        title: "Azure Fabric Automation Solutions",
        category: "Azure",
        description: "Enterprise-grade automation for Microsoft Fabric data pipelines. We implement intelligent orchestration, automated data processing, and seamless integration across your entire Azure data estate. Transform raw data into actionable insights with production-ready Fabric automation.",
        content: {
            intro: "Microsoft Fabric represents the future of unified data analytics. Our Azure Fabric Automation solutions help enterprises harness the full power of this platform through intelligent automation, reducing manual intervention while maximizing data throughput and reliability.",
            approach: "We design and implement end-to-end Fabric automation architectures that integrate with your existing Azure infrastructure. Our approach includes automated data ingestion, transformation pipelines, and intelligent scheduling based on data availability and business priorities.",
            outcomes: "Clients achieve 70% reduction in manual data processing, real-time analytics capabilities, and unified governance across all data assets. Our Fabric automation implementations typically deliver ROI within 90 days of deployment."
        },
        features: [
            "Automated Lakehouse ingestion pipelines",
            "Real-time data transformation workflows",
            "Intelligent pipeline scheduling and orchestration",
            "Cross-workspace data governance automation",
            "Power BI semantic model refresh automation"
        ]
    },
    {
        slug: "azure-openai-integration",
        title: "Azure OpenAI Integration Services",
        category: "Azure",
        description: "Secure, enterprise-grade Azure OpenAI implementations for RAG, agents, and intelligent automation. We deploy production-ready GPT-4 and embedding solutions within your Azure tenant with full data sovereignty and compliance.",
        content: {
            intro: "Azure OpenAI Service provides enterprise access to powerful language models within Microsoft's secure cloud infrastructure. Our integration services ensure you leverage these capabilities while maintaining compliance, security, and operational excellence.",
            approach: "We architect Azure OpenAI solutions that integrate seamlessly with your existing systems. This includes custom prompt engineering, fine-tuning strategies, embedding pipelines for RAG, and agentic workflows that automate complex business processes.",
            outcomes: "Organizations achieve intelligent document processing, automated customer interactions, and knowledge synthesis at scale. Our implementations include comprehensive monitoring, cost optimization, and responsible AI guardrails."
        },
        features: [
            "GPT-4 Turbo deployment and optimization",
            "Custom embedding pipelines for enterprise RAG",
            "Prompt engineering and template management",
            "Token optimization and cost management",
            "Content filtering and responsible AI integration"
        ]
    },
    {
        slug: "azure-cognitive-services",
        title: "Azure Cognitive Services Implementation",
        category: "Azure",
        description: "Deploy enterprise AI capabilities with Azure Cognitive Services. From vision and speech to language understanding, we implement production-ready cognitive solutions that integrate with your business workflows and data systems.",
        content: {
            intro: "Azure Cognitive Services provides pre-built AI capabilities that accelerate time-to-value for enterprise AI initiatives. Our implementation services ensure these powerful APIs are deployed securely and integrated effectively with your business processes.",
            approach: "We assess your specific use cases and design cognitive service architectures that combine multiple APIs for comprehensive solutions. Our implementations include custom model training where needed, failover configurations, and performance optimization.",
            outcomes: "Clients achieve automated document processing, intelligent customer service, and enhanced accessibility. Our cognitive service implementations typically reduce manual processing by 80% while improving accuracy."
        },
        features: [
            "Custom Vision model training and deployment",
            "Speech-to-text with custom vocabulary",
            "Language understanding for domain-specific intents",
            "Translator with custom terminology",
            "Content moderator with business-specific policies"
        ]
    },
    {
        slug: "azure-synapse-analytics",
        title: "Azure Synapse Analytics Solutions",
        category: "Azure",
        description: "Unified analytics platform implementation with Azure Synapse. We architect data warehousing, big data analytics, and machine learning solutions that deliver enterprise-scale insights with governance and security built-in.",
        content: {
            intro: "Azure Synapse Analytics unifies data integration, enterprise data warehousing, and big data analytics. Our solutions leverage this unified platform to deliver comprehensive analytics capabilities that scale with your business needs.",
            approach: "We design Synapse architectures that optimize for your specific workloads, whether SQL-based analytics, Spark processing, or hybrid scenarios. Our implementations include data modeling, performance tuning, and integration with downstream visualization tools.",
            outcomes: "Organizations achieve sub-second query performance on petabyte-scale data, unified data governance, and seamless integration with Power BI and other visualization tools. Our Synapse implementations deliver predictable costs with autoscaling capabilities."
        },
        features: [
            "Dedicated SQL pool optimization",
            "Serverless SQL for ad-hoc analytics",
            "Spark pool configuration for ML workloads",
            "Data integration pipeline design",
            "Synapse Link for operational analytics"
        ]
    },
    {
        slug: "azure-data-factory-pipelines",
        title: "Azure Data Factory Pipeline Development",
        category: "Azure",
        description: "Enterprise ETL/ELT orchestration with Azure Data Factory. We design and implement scalable data pipelines that move and transform data across hybrid environments with built-in governance and monitoring.",
        content: {
            intro: "Azure Data Factory is the backbone of modern data integration on Azure. Our pipeline development services create robust, maintainable data flows that handle complex transformation logic while maintaining data quality and lineage.",
            approach: "We implement Data Factory solutions using infrastructure-as-code, enabling version control and repeatable deployments. Our pipelines incorporate error handling, retry logic, and comprehensive logging for production reliability.",
            outcomes: "Clients achieve automated data movement across 90+ connectors, reduced data latency, and complete visibility into data lineage. Our Data Factory implementations typically reduce development time by 60% through reusable patterns."
        },
        features: [
            "Parameterized pipeline templates",
            "Mapping data flow optimization",
            "Self-hosted integration runtime deployment",
            "CI/CD pipeline integration",
            "Data quality validation workflows"
        ]
    },
    {
        slug: "azure-machine-learning-ops",
        title: "Azure Machine Learning Operations",
        category: "Azure",
        description: "Production MLOps on Azure Machine Learning. We implement end-to-end machine learning pipelines with automated training, validation, deployment, and monitoring for enterprise AI at scale.",
        content: {
            intro: "Azure Machine Learning provides enterprise-grade infrastructure for the complete ML lifecycle. Our MLOps implementations ensure models move efficiently from experimentation to production with proper governance and continuous improvement.",
            approach: "We establish MLOps practices including automated training pipelines, model versioning, A/B testing deployment patterns, and drift detection. Our approach integrates with existing DevOps tooling and security requirements.",
            outcomes: "Organizations achieve faster model deployment cycles, reduced model degradation, and clear audit trails for regulatory compliance. Our MLOps implementations typically reduce time-to-production for new models by 75%."
        },
        features: [
            "Automated ML pipeline orchestration",
            "Model registry and versioning",
            "Managed online/batch endpoints",
            "Data and model drift monitoring",
            "Responsible AI dashboard integration"
        ]
    },
    {
        slug: "azure-functions-ai-triggers",
        title: "Azure Functions AI Triggers",
        category: "Azure",
        description: "Event-driven AI processing with Azure Functions. We implement serverless AI triggers that respond to data events, process documents, and orchestrate intelligent workflows without infrastructure management.",
        content: {
            intro: "Azure Functions provides the perfect platform for event-driven AI processing. Our AI trigger implementations create responsive, cost-effective solutions that process data exactly when and where it's needed.",
            approach: "We design serverless architectures that combine Azure Functions with cognitive services, OpenAI, and custom models. Our implementations handle cold start optimization, concurrent execution, and graceful degradation.",
            outcomes: "Clients achieve real-time AI processing with pay-per-execution pricing, automatic scaling, and zero infrastructure management. Our Function-based AI solutions typically reduce processing costs by 50% compared to always-on alternatives."
        },
        features: [
            "Blob trigger document processing",
            "Event Grid AI event handling",
            "Queue-based async AI workflows",
            "Durable Functions for long-running AI",
            "Custom binding extensions for ML models"
        ]
    },
    {
        slug: "azure-logic-apps-automation",
        title: "Azure Logic Apps AI Automation",
        category: "Azure",
        description: "Low-code AI workflow automation with Azure Logic Apps. We design intelligent business process automation that connects enterprise systems with AI capabilities for seamless operations.",
        content: {
            intro: "Azure Logic Apps enables rapid development of enterprise integration workflows. Our AI automation solutions combine Logic Apps with cognitive services and custom APIs to create intelligent processes accessible to both developers and business users.",
            approach: "We implement Logic Apps solutions that bridge the gap between technical AI capabilities and business processes. Our designs emphasize maintainability, monitoring, and graceful error handling for production reliability.",
            outcomes: "Organizations achieve rapid automation of complex business processes, reduced integration development time, and empowered business users who can modify workflows. Our Logic Apps implementations typically deliver new automations 10x faster than custom code."
        },
        features: [
            "AI-enhanced approval workflows",
            "Document processing automations",
            "Intelligent email routing and response",
            "CRM and ERP AI integration",
            "Custom connector development"
        ]
    },
    {
        slug: "azure-bot-service",
        title: "Azure Bot Service Solutions",
        category: "Azure",
        description: "Enterprise conversational AI with Azure Bot Service. We build intelligent chatbots and virtual assistants that understand context, integrate with business systems, and deliver exceptional user experiences.",
        content: {
            intro: "Azure Bot Service provides the foundation for enterprise-grade conversational AI. Our solutions leverage the Bot Framework, LUIS, and Azure OpenAI to create intelligent assistants that truly understand user intent and deliver value.",
            approach: "We design conversational experiences that feel natural while solving real business problems. Our implementations include multi-turn dialog management, entity extraction, and seamless handoff to human agents when needed.",
            outcomes: "Clients achieve 40% reduction in support ticket volume, 24/7 customer assistance, and improved employee productivity. Our bot implementations include comprehensive analytics for continuous improvement."
        },
        features: [
            "Multi-channel deployment (Teams, Web, etc.)",
            "LUIS and CLU intent recognition",
            "Azure OpenAI conversational responses",
            "Adaptive Cards rich interactions",
            "Human handoff with context preservation"
        ]
    },
    {
        slug: "azure-form-recognizer",
        title: "Azure Form Recognizer Implementation",
        category: "Azure",
        description: "Intelligent document processing with Azure Form Recognizer. We implement automated data extraction from invoices, receipts, contracts, and custom forms with high accuracy and enterprise-grade reliability.",
        content: {
            intro: "Azure Form Recognizer transforms document processing from a manual bottleneck into an automated pipeline. Our implementations extract structured data from unstructured documents with accuracy that exceeds manual processing.",
            approach: "We assess your document landscape and design extraction pipelines tailored to your specific forms and formats. Our solutions include pre-built models where applicable and custom model training for unique document types.",
            outcomes: "Organizations achieve 95%+ extraction accuracy, 90% reduction in manual data entry, and real-time document processing. Our Form Recognizer implementations typically pay for themselves within 6 months."
        },
        features: [
            "Custom model training for proprietary forms",
            "Pre-built invoice and receipt processing",
            "Layout analysis for complex documents",
            "Confidence scoring and human-in-the-loop",
            "Batch processing pipeline integration"
        ]
    },
    {
        slug: "azure-speech-services",
        title: "Azure Speech Services Integration",
        category: "Azure",
        description: "Enterprise speech AI with Azure Speech Services. We implement speech-to-text, text-to-speech, and real-time translation solutions for customer service, accessibility, and intelligent automation.",
        content: {
            intro: "Azure Speech Services provides industry-leading voice AI capabilities. Our integration services deploy these capabilities within your enterprise architecture for customer interactions, meeting transcription, and voice-enabled applications.",
            approach: "We design speech solutions optimized for your specific domain, including custom vocabulary training, accent adaptation, and noise handling. Our implementations include real-time and batch processing options based on your requirements.",
            outcomes: "Clients achieve automated call transcription, voice-enabled applications, and enhanced accessibility. Our Speech Services implementations typically achieve 95%+ accuracy with custom models trained on domain-specific terminology."
        },
        features: [
            "Custom speech model training",
            "Real-time transcription with speaker diarization",
            "Neural text-to-speech with custom voices",
            "Speech translation for global operations",
            "Pronunciation assessment and coaching"
        ]
    },
    {
        slug: "azure-cosmos-db-vector-search",
        title: "Azure Cosmos DB Vector Search",
        category: "Azure",
        description: "Enterprise vector search with Azure Cosmos DB. We implement semantic search and RAG solutions using Cosmos DB's native vector capabilities for globally distributed, low-latency AI applications.",
        content: {
            intro: "Azure Cosmos DB's vector search capabilities enable semantic search and RAG at global scale. Our implementations leverage this technology for enterprise knowledge bases, product discovery, and intelligent document retrieval.",
            approach: "We design vector search architectures that combine Cosmos DB's global distribution with efficient embedding strategies. Our solutions include hybrid search combining vector similarity with traditional filtering for optimal results.",
            outcomes: "Organizations achieve sub-10ms semantic search globally, unified data and vector storage, and seamless integration with Azure OpenAI for RAG. Our Cosmos DB vector implementations scale to billions of vectors with consistent performance."
        },
        features: [
            "DiskANN index optimization",
            "Hybrid vector and property filtering",
            "Multi-region vector replication",
            "Embedding pipeline integration",
            "Change feed for real-time vector updates"
        ]
    },
    {
        slug: "azure-container-apps-ml",
        title: "Azure Container Apps ML Deployment",
        category: "Azure",
        description: "Serverless ML model deployment with Azure Container Apps. We implement scalable, cost-effective model serving infrastructure that auto-scales based on demand without cluster management overhead.",
        content: {
            intro: "Azure Container Apps provides the ideal platform for serverless ML model deployment. Our solutions leverage this infrastructure for flexible, cost-effective model serving that scales automatically with demand.",
            approach: "We containerize ML models and deploy them on Container Apps with appropriate scaling rules, health checks, and traffic management. Our implementations include canary deployments and automatic rollback capabilities.",
            outcomes: "Clients achieve production ML serving with minimal infrastructure management, pay-per-use pricing, and automatic scaling from zero to thousands of concurrent requests. Our Container Apps ML deployments typically reduce serving costs by 40%."
        },
        features: [
            "KEDA-based autoscaling configuration",
            "GPU-enabled container deployment",
            "Blue-green deployment strategies",
            "Integrated monitoring and logging",
            "Virtual network integration for security"
        ]
    },
    // AWS SOLUTIONS (13 pages)
    {
        slug: "aws-bedrock-agents",
        title: "AWS Bedrock Agents Development",
        category: "AWS",
        description: "Autonomous AI agents on AWS Bedrock. We build intelligent agents that reason, plan, and execute complex tasks using foundation models with secure access to your enterprise data and systems.",
        content: {
            intro: "AWS Bedrock Agents represent the next evolution in enterprise AI automation. Our development services create autonomous agents that understand complex requests, break them into steps, and execute across your business systems.",
            approach: "We design agent architectures with appropriate action groups, knowledge bases, and guardrails. Our implementations include thorough testing, observability, and human-in-the-loop controls for high-stakes decisions.",
            outcomes: "Organizations achieve automated complex workflows, intelligent data retrieval, and natural language interfaces to enterprise systems. Our Bedrock Agent implementations typically automate processes that previously required multiple human handoffs."
        },
        features: [
            "Action group design and implementation",
            "Knowledge base integration with RAG",
            "Agent guardrails and safety controls",
            "Multi-step reasoning orchestration",
            "Session memory and context management"
        ]
    },
    {
        slug: "aws-sagemaker-pipelines",
        title: "AWS SageMaker Pipelines Implementation",
        category: "AWS",
        description: "End-to-end MLOps with AWS SageMaker Pipelines. We implement automated machine learning workflows from data preparation through model deployment with full lineage tracking and governance.",
        content: {
            intro: "AWS SageMaker Pipelines provides the infrastructure for reproducible, automated machine learning workflows. Our implementations create production-grade ML pipelines that scale with your organization's AI initiatives.",
            approach: "We design SageMaker workflows that incorporate data validation, distributed training, hyperparameter optimization, and automated deployment. Our pipelines integrate with existing CI/CD systems and include comprehensive monitoring.",
            outcomes: "Clients achieve reproducible ML experiments, automated model retraining, and clear audit trails for regulatory requirements. Our SageMaker implementations typically reduce model development cycle time by 60%."
        },
        features: [
            "Step Functions pipeline orchestration",
            "Distributed training configuration",
            "Model registry and approval workflows",
            "A/B testing endpoint deployment",
            "Feature Store integration"
        ]
    },
    {
        slug: "aws-lambda-ai-functions",
        title: "AWS Lambda AI Functions",
        category: "AWS",
        description: "Serverless AI processing with AWS Lambda. We implement event-driven AI functions that process documents, analyze images, and orchestrate intelligent workflows with minimal operational overhead.",
        content: {
            intro: "AWS Lambda enables serverless AI processing at scale. Our implementations create cost-effective, responsive AI functions that handle variable workloads without provisioned infrastructure.",
            approach: "We optimize Lambda functions for AI workloads, including container image deployment for ML frameworks, provisioned concurrency for latency-sensitive applications, and efficient model loading strategies.",
            outcomes: "Organizations achieve real-time AI processing with pay-per-invocation pricing, automatic scaling, and zero infrastructure management. Our Lambda AI solutions handle millions of daily invocations reliably."
        },
        features: [
            "Container image Lambda deployment",
            "Provisioned concurrency optimization",
            "S3 trigger document processing",
            "Step Functions orchestration",
            "Lambda Layers for ML dependencies"
        ]
    },
    {
        slug: "aws-step-functions-ml",
        title: "AWS Step Functions ML Workflows",
        category: "AWS",
        description: "Orchestrated ML workflows with AWS Step Functions. We implement complex machine learning pipelines with visual workflow design, error handling, and seamless integration with AWS AI services.",
        content: {
            intro: "AWS Step Functions provides robust orchestration for complex ML workflows. Our implementations create maintainable, observable pipelines that coordinate multiple AWS services for end-to-end AI processing.",
            approach: "We design Step Functions workflows that handle the complexity of ML operations including parallel processing, conditional logic, and error recovery. Our implementations include comprehensive logging and alerting.",
            outcomes: "Clients achieve reliable ML pipeline execution, clear visibility into workflow status, and simplified debugging. Our Step Functions implementations reduce pipeline failures by 80% through built-in retry and error handling."
        },
        features: [
            "SageMaker training job orchestration",
            "Parallel processing for batch inference",
            "Human approval step integration",
            "Dynamic workflow branching",
            "Express workflows for high-volume processing"
        ]
    },
    {
        slug: "aws-comprehend-nlp",
        title: "AWS Comprehend NLP Solutions",
        category: "AWS",
        description: "Natural language processing with AWS Comprehend. We implement text analytics, entity extraction, and sentiment analysis solutions that unlock insights from unstructured text at enterprise scale.",
        content: {
            intro: "AWS Comprehend provides powerful NLP capabilities for enterprise text analysis. Our solutions leverage these capabilities for customer feedback analysis, document classification, and knowledge extraction.",
            approach: "We design Comprehend implementations that combine pre-built capabilities with custom entity recognition and classification models trained on your specific domain and terminology.",
            outcomes: "Organizations achieve automated text classification, real-time sentiment monitoring, and structured data extraction from documents. Our Comprehend implementations typically process millions of documents daily with 90%+ accuracy."
        },
        features: [
            "Custom entity recognition training",
            "Document classification models",
            "Real-time sentiment analysis",
            "PII detection and redaction",
            "Topic modeling for content discovery"
        ]
    },
    {
        slug: "aws-textract-document-ai",
        title: "AWS Textract Document AI",
        category: "AWS",
        description: "Intelligent document processing with AWS Textract. We implement automated data extraction from forms, tables, and complex documents with high accuracy and enterprise-grade processing pipelines.",
        content: {
            intro: "AWS Textract transforms document processing through intelligent OCR and structure extraction. Our implementations create automated pipelines that extract structured data from any document type.",
            approach: "We design Textract solutions optimized for your document types, including custom queries for specific data points and post-processing logic for validation and enrichment.",
            outcomes: "Clients achieve 95%+ extraction accuracy, 85% reduction in manual data entry, and real-time document processing. Our Textract implementations handle millions of pages monthly with consistent performance."
        },
        features: [
            "Custom Queries for targeted extraction",
            "Table and form structure detection",
            "Handwriting recognition",
            "Signature detection",
            "Expense document analysis"
        ]
    },
    {
        slug: "aws-lex-chatbots",
        title: "AWS Lex Chatbot Development",
        category: "AWS",
        description: "Conversational AI with AWS Lex. We build intelligent chatbots and voice assistants that understand natural language, integrate with business systems, and deliver exceptional customer experiences.",
        content: {
            intro: "AWS Lex provides the foundation for sophisticated conversational interfaces. Our chatbot development creates natural, helpful interactions that solve customer problems and reduce support burden.",
            approach: "We design conversational flows that handle complex intents, maintain context across turns, and gracefully handle edge cases. Our implementations include integration with AWS Connect for voice applications.",
            outcomes: "Organizations achieve 24/7 customer support, 35% reduction in support costs, and improved customer satisfaction. Our Lex implementations include continuous improvement based on conversation analytics."
        },
        features: [
            "Multi-intent conversation design",
            "Slot elicitation and validation",
            "AWS Connect voice integration",
            "Lambda fulfillment functions",
            "Conversation flow analytics"
        ]
    },
    {
        slug: "aws-polly-voice-ai",
        title: "AWS Polly Voice AI Solutions",
        category: "AWS",
        description: "Neural text-to-speech with AWS Polly. We implement lifelike voice synthesis for IVR systems, content accessibility, and voice-enabled applications with natural-sounding output.",
        content: {
            intro: "AWS Polly provides neural text-to-speech that sounds remarkably human. Our implementations deploy this technology for customer-facing voice applications, accessibility features, and automated content narration.",
            approach: "We configure Polly for optimal voice selection, speaking style, and SSML markup for natural prosody. Our solutions include caching strategies for cost optimization and low-latency delivery.",
            outcomes: "Clients achieve natural-sounding voice interactions, enhanced accessibility compliance, and automated audio content generation. Our Polly implementations deliver consistent voice quality across millions of speech synthesis requests."
        },
        features: [
            "Neural voice selection and tuning",
            "SSML prosody and pronunciation control",
            "Real-time streaming synthesis",
            "Lexicon for custom pronunciations",
            "Speech marks for animation sync"
        ]
    },
    {
        slug: "aws-rekognition-vision",
        title: "AWS Rekognition Vision AI",
        category: "AWS",
        description: "Computer vision with AWS Rekognition. We implement image and video analysis solutions for content moderation, identity verification, and visual search with enterprise security and scale.",
        content: {
            intro: "AWS Rekognition provides powerful computer vision capabilities for enterprise applications. Our implementations deploy these capabilities for safety, efficiency, and enhanced user experiences.",
            approach: "We design Rekognition solutions that combine pre-built features with custom label training for your specific use cases. Our implementations include appropriate privacy controls and bias mitigation.",
            outcomes: "Organizations achieve automated content moderation, streamlined identity verification, and visual search capabilities. Our Rekognition implementations process millions of images daily with consistent accuracy."
        },
        features: [
            "Custom Labels model training",
            "Face detection and comparison",
            "Content moderation automation",
            "Text detection in images",
            "Video segment and shot detection"
        ]
    },
    {
        slug: "aws-personalize-recommendations",
        title: "AWS Personalize Recommendations",
        category: "AWS",
        description: "ML-powered personalization with AWS Personalize. We implement real-time recommendation engines that drive engagement and conversion through individualized experiences at scale.",
        content: {
            intro: "AWS Personalize brings Amazon's recommendation technology to your applications. Our implementations create sophisticated personalization that improves with every interaction.",
            approach: "We design Personalize solutions with appropriate recipe selection, real-time event tracking, and recommendation filtering. Our implementations include A/B testing frameworks to measure personalization impact.",
            outcomes: "Clients achieve 25%+ improvement in click-through rates, increased average order value, and enhanced user engagement. Our Personalize implementations deliver real-time recommendations at scale."
        },
        features: [
            "User and item metadata modeling",
            "Real-time event tracking integration",
            "Campaign optimization strategies",
            "Filters for business rules",
            "Batch recommendation generation"
        ]
    },
    {
        slug: "aws-kendra-enterprise-search",
        title: "AWS Kendra Enterprise Search",
        category: "AWS",
        description: "Intelligent enterprise search with AWS Kendra. We implement AI-powered search that understands natural language queries and returns precise answers from your organization's knowledge.",
        content: {
            intro: "AWS Kendra revolutionizes enterprise search with ML-powered understanding. Our implementations create search experiences that find answers, not just documents, across your entire knowledge base.",
            approach: "We configure Kendra with appropriate data source connectors, custom thesauri, and relevance tuning. Our solutions include custom document enrichment and FAQ extraction for optimal results.",
            outcomes: "Organizations achieve 80% reduction in time-to-answer, improved knowledge discovery, and reduced duplicate content creation. Our Kendra implementations transform how employees access organizational knowledge."
        },
        features: [
            "40+ enterprise connector configuration",
            "Custom document enrichment",
            "Query suggestion and autocomplete",
            "Relevance tuning and boosting",
            "Access control and security filtering"
        ]
    },
    {
        slug: "aws-glue-data-prep",
        title: "AWS Glue Data Preparation",
        category: "AWS",
        description: "Serverless data preparation with AWS Glue. We implement scalable ETL pipelines that prepare data for machine learning and analytics with automatic schema discovery and transformation.",
        content: {
            intro: "AWS Glue provides serverless data integration at scale. Our implementations create efficient data preparation pipelines that feed clean, transformed data to your ML models and analytics systems.",
            approach: "We design Glue jobs using both visual ETL and custom Spark code based on complexity. Our solutions include data quality rules, crawlers for schema management, and job bookmarks for incremental processing.",
            outcomes: "Clients achieve automated data catalog maintenance, reduced data preparation time, and consistent data quality for ML training. Our Glue implementations typically reduce data engineering effort by 50%."
        },
        features: [
            "Visual ETL job design",
            "Data Quality rule implementation",
            "Crawler configuration and scheduling",
            "Job bookmark incremental processing",
            "Glue DataBrew for visual data prep"
        ]
    },
    {
        slug: "aws-neptune-graph-ai",
        title: "AWS Neptune Graph AI",
        category: "AWS",
        description: "Graph-powered AI with AWS Neptune. We implement knowledge graphs and graph neural networks that uncover hidden relationships and enable sophisticated reasoning across connected data.",
        content: {
            intro: "AWS Neptune enables graph-based AI that understands relationships. Our implementations create knowledge graphs that power recommendation engines, fraud detection, and intelligent search.",
            approach: "We design Neptune solutions using appropriate graph models (property graph or RDF) and query languages. Our implementations include graph analytics, ML integration, and efficient data loading strategies.",
            outcomes: "Organizations achieve relationship-based insights, improved fraud detection, and enhanced recommendation quality. Our Neptune implementations reveal connections that traditional databases miss."
        },
        features: [
            "Knowledge graph design and population",
            "Gremlin and SPARQL query optimization",
            "Neptune ML for graph neural networks",
            "Bulk loading pipeline implementation",
            "Graph analytics and centrality measures"
        ]
    },
    // INDUSTRY SOLUTIONS (12 pages)
    {
        slug: "ai-for-finance",
        title: "AI Solutions for Finance & Banking",
        category: "Industry",
        description: "Enterprise AI for financial services. We implement fraud detection, risk modeling, and intelligent automation solutions that meet regulatory requirements while driving operational efficiency.",
        content: {
            intro: "Financial services organizations face unique challenges in AI adoption: regulatory scrutiny, model explainability requirements, and real-time processing needs. Our solutions address these challenges while delivering measurable business impact.",
            approach: "We design AI systems with built-in explainability, audit trails, and compliance controls. Our implementations include model validation frameworks that satisfy regulatory requirements while enabling innovation.",
            outcomes: "Financial institutions achieve 60% faster fraud detection, 40% reduction in false positives, and compliant AI operations. Our finance AI implementations include comprehensive documentation for regulatory review."
        },
        features: [
            "Real-time fraud detection systems",
            "Credit risk model development",
            "Regulatory document processing",
            "Anti-money laundering automation",
            "Explainable AI for compliance"
        ]
    },
    {
        slug: "ai-for-healthcare",
        title: "AI Solutions for Healthcare",
        category: "Industry",
        description: "HIPAA-compliant AI for healthcare organizations. We implement clinical decision support, medical document processing, and patient engagement solutions with enterprise-grade security.",
        content: {
            intro: "Healthcare AI requires careful attention to privacy, safety, and clinical workflow integration. Our solutions deliver AI capabilities that clinicians trust and patients benefit from, while maintaining strict HIPAA compliance.",
            approach: "We design healthcare AI with appropriate clinical validation, privacy controls, and workflow integration. Our implementations include clinician-in-the-loop designs for high-stakes decisions.",
            outcomes: "Healthcare organizations achieve improved clinical efficiency, reduced administrative burden, and enhanced patient communication. Our healthcare AI implementations maintain 100% HIPAA compliance."
        },
        features: [
            "Clinical document understanding",
            "Medical coding automation",
            "Patient communication AI",
            "Prior authorization processing",
            "Clinical trial matching"
        ]
    },
    {
        slug: "ai-for-legal",
        title: "AI Solutions for Legal Services",
        category: "Industry",
        description: "AI-powered legal technology solutions. We implement contract analysis, legal research automation, and document review systems that enhance attorney productivity while maintaining privilege.",
        content: {
            intro: "Legal services require AI that understands complex language, maintains confidentiality, and supports rather than replaces professional judgment. Our solutions augment legal teams with powerful AI capabilities.",
            approach: "We design legal AI with appropriate privilege controls, matter-based access management, and integration with existing practice management systems. Our implementations respect the unique requirements of legal practice.",
            outcomes: "Law firms achieve 70% faster document review, improved contract analysis accuracy, and enhanced legal research capabilities. Our legal AI implementations maintain strict confidentiality and privilege protection."
        },
        features: [
            "Contract analysis and extraction",
            "Legal research augmentation",
            "E-discovery document review",
            "Due diligence automation",
            "Privilege-aware processing"
        ]
    },
    {
        slug: "ai-for-manufacturing",
        title: "AI Solutions for Manufacturing",
        category: "Industry",
        description: "Industrial AI for manufacturing operations. We implement predictive maintenance, quality control, and production optimization solutions that reduce downtime and improve yields.",
        content: {
            intro: "Manufacturing AI delivers measurable ROI through reduced downtime, improved quality, and optimized operations. Our solutions integrate with industrial systems to bring AI to the factory floor.",
            approach: "We design manufacturing AI that connects with existing OT systems, processes sensor data in real-time, and provides actionable insights to operators. Our implementations include edge processing for low-latency requirements.",
            outcomes: "Manufacturers achieve 30% reduction in unplanned downtime, 25% improvement in first-pass yield, and optimized production scheduling. Our manufacturing AI implementations integrate seamlessly with existing operations."
        },
        features: [
            "Predictive maintenance systems",
            "Computer vision quality inspection",
            "Production scheduling optimization",
            "Supply chain demand forecasting",
            "Digital twin integration"
        ]
    },
    {
        slug: "ai-for-retail",
        title: "AI Solutions for Retail",
        category: "Industry",
        description: "Retail AI for enhanced customer experiences and operations. We implement personalization, demand forecasting, and inventory optimization solutions that drive revenue and efficiency.",
        content: {
            intro: "Retail AI creates personalized experiences while optimizing operations. Our solutions help retailers understand customers, predict demand, and optimize inventory across omnichannel operations.",
            approach: "We design retail AI that unifies customer data, predicts behavior, and personalizes experiences across touchpoints. Our implementations include real-time decisioning for dynamic pricing and recommendations.",
            outcomes: "Retailers achieve 20% improvement in customer lifetime value, 15% reduction in inventory costs, and enhanced customer satisfaction. Our retail AI implementations deliver measurable ROI."
        },
        features: [
            "Customer personalization engines",
            "Demand forecasting models",
            "Inventory optimization systems",
            "Dynamic pricing algorithms",
            "Customer churn prediction"
        ]
    },
    {
        slug: "ai-for-insurance",
        title: "AI Solutions for Insurance",
        category: "Industry",
        description: "AI-powered insurance solutions for underwriting, claims, and customer service. We implement intelligent automation that reduces costs while improving accuracy and customer experience.",
        content: {
            intro: "Insurance AI transforms underwriting, claims, and customer service through intelligent automation. Our solutions reduce costs while improving accuracy and customer satisfaction.",
            approach: "We design insurance AI with appropriate actuarial validation, regulatory compliance, and explainability. Our implementations include bias detection and fair lending compliance.",
            outcomes: "Insurers achieve 50% faster claims processing, 30% improvement in underwriting accuracy, and enhanced customer service. Our insurance AI implementations maintain regulatory compliance."
        },
        features: [
            "Automated underwriting systems",
            "Claims processing automation",
            "Fraud detection and prevention",
            "Customer service chatbots",
            "Policy document analysis"
        ]
    },
    {
        slug: "ai-for-real-estate",
        title: "AI Solutions for Real Estate",
        category: "Industry",
        description: "AI for real estate operations and investment. We implement property valuation, market analysis, and document processing solutions that enhance decision-making and efficiency.",
        content: {
            intro: "Real estate AI provides data-driven insights for investment, operations, and transactions. Our solutions help real estate professionals make better decisions faster.",
            approach: "We design real estate AI that integrates market data, property information, and economic indicators. Our implementations include automated valuation models and lease abstraction.",
            outcomes: "Real estate firms achieve faster deal analysis, improved valuation accuracy, and automated document processing. Our real estate AI implementations enhance investment performance."
        },
        features: [
            "Automated property valuation",
            "Market trend analysis",
            "Lease abstraction and analysis",
            "Property image analysis",
            "Investment opportunity scoring"
        ]
    },
    {
        slug: "ai-for-logistics",
        title: "AI Solutions for Logistics",
        category: "Industry",
        description: "AI-powered logistics optimization. We implement route optimization, demand forecasting, and warehouse automation solutions that reduce costs and improve delivery performance.",
        content: {
            intro: "Logistics AI optimizes every aspect of the supply chain from warehouse operations to last-mile delivery. Our solutions reduce costs while improving service levels and sustainability.",
            approach: "We design logistics AI that processes real-time data from multiple sources to optimize decisions. Our implementations include route optimization, load planning, and predictive ETAs.",
            outcomes: "Logistics providers achieve 15% reduction in transportation costs, 99%+ on-time delivery, and optimized warehouse operations. Our logistics AI implementations scale to millions of daily decisions."
        },
        features: [
            "Route optimization algorithms",
            "Demand forecasting systems",
            "Warehouse automation AI",
            "Shipment tracking and ETA prediction",
            "Load and capacity optimization"
        ]
    },
    {
        slug: "ai-for-energy",
        title: "AI Solutions for Energy",
        category: "Industry",
        description: "AI for energy optimization and sustainability. We implement grid optimization, predictive maintenance, and demand forecasting solutions for utilities and energy companies.",
        content: {
            intro: "Energy AI optimizes generation, distribution, and consumption while supporting sustainability goals. Our solutions help utilities manage the transition to renewable energy.",
            approach: "We design energy AI that processes sensor data, weather information, and consumption patterns. Our implementations include demand response optimization and renewable integration.",
            outcomes: "Energy companies achieve 10% reduction in operating costs, improved grid reliability, and accelerated renewable integration. Our energy AI implementations support net-zero goals."
        },
        features: [
            "Grid optimization and balancing",
            "Predictive maintenance for assets",
            "Demand forecasting and response",
            "Renewable energy integration",
            "Energy consumption optimization"
        ]
    },
    {
        slug: "ai-for-telecommunications",
        title: "AI Solutions for Telecommunications",
        category: "Industry",
        description: "AI for telecom network operations and customer experience. We implement network optimization, predictive maintenance, and customer service solutions that improve performance and satisfaction.",
        content: {
            intro: "Telecom AI optimizes network operations while enhancing customer experience. Our solutions help carriers manage network complexity and deliver superior service.",
            approach: "We design telecom AI that processes network telemetry, customer data, and external factors. Our implementations include proactive network optimization and intelligent customer routing.",
            outcomes: "Telecom operators achieve 25% reduction in network incidents, 40% improvement in first-call resolution, and reduced churn. Our telecom AI implementations scale to millions of subscribers."
        },
        features: [
            "Network optimization systems",
            "Predictive maintenance for infrastructure",
            "Customer churn prediction",
            "Intelligent call routing",
            "Fraud detection and prevention"
        ]
    },
    {
        slug: "ai-for-government",
        title: "AI Solutions for Government",
        category: "Industry",
        description: "AI for government services and operations. We implement citizen service automation, document processing, and decision support solutions with appropriate security and compliance.",
        content: {
            intro: "Government AI improves citizen services while maintaining security and transparency. Our solutions help agencies serve constituents more effectively and efficiently.",
            approach: "We design government AI with appropriate FedRAMP compliance, accessibility requirements, and transparency. Our implementations include citizen-facing AI with human oversight.",
            outcomes: "Government agencies achieve faster citizen service, reduced processing backlogs, and improved program delivery. Our government AI implementations maintain full compliance and auditability."
        },
        features: [
            "Citizen service chatbots",
            "Document processing automation",
            "Benefits eligibility determination",
            "Fraud detection systems",
            "Regulatory compliance automation"
        ]
    },
    {
        slug: "ai-for-education",
        title: "AI Solutions for Education",
        category: "Industry",
        description: "AI for personalized learning and educational operations. We implement adaptive learning, student success prediction, and administrative automation solutions for educational institutions.",
        content: {
            intro: "Education AI personalizes learning while reducing administrative burden. Our solutions help institutions improve student outcomes and operational efficiency.",
            approach: "We design education AI with appropriate privacy protections, FERPA compliance, and pedagogical foundations. Our implementations include adaptive learning and early intervention systems.",
            outcomes: "Educational institutions achieve improved student retention, personalized learning at scale, and reduced administrative costs. Our education AI implementations respect student privacy and agency."
        },
        features: [
            "Adaptive learning systems",
            "Student success prediction",
            "Administrative process automation",
            "Intelligent tutoring systems",
            "Curriculum optimization"
        ]
    },
    // SECURITY SOLUTIONS (12 pages)
    {
        slug: "zero-trust-ai-architecture",
        title: "Zero Trust AI Architecture",
        category: "Security",
        description: "Design and implement zero trust security for AI systems. We architect AI infrastructure with identity-based access, continuous verification, and microsegmentation for enterprise protection.",
        content: {
            intro: "Zero trust principles are essential for secure AI deployment. Our architectures ensure that AI systems verify every request, minimize blast radius, and maintain security without impeding functionality.",
            approach: "We design AI systems with identity-based access control, network microsegmentation, and continuous authorization. Our implementations include secrets management, encrypted communication, and comprehensive logging.",
            outcomes: "Organizations achieve enterprise-grade AI security with minimal attack surface, rapid threat detection, and maintained operational efficiency. Our zero trust AI implementations pass security audits with distinction."
        },
        features: [
            "Identity-based AI access control",
            "Network microsegmentation design",
            "Continuous authorization systems",
            "Secrets rotation automation",
            "Security posture monitoring"
        ]
    },
    {
        slug: "soc-2-compliant-ai",
        title: "SOC 2 Compliant AI Systems",
        category: "Security",
        description: "Build AI systems that meet SOC 2 requirements. We implement security, availability, and confidentiality controls for AI operations with full audit documentation.",
        content: {
            intro: "SOC 2 compliance is essential for enterprise AI that handles customer data. Our implementations include all necessary controls and documentation for successful audits.",
            approach: "We design AI systems with SOC 2 trust services criteria embedded in architecture. Our implementations include control documentation, continuous monitoring, and evidence collection automation.",
            outcomes: "Organizations achieve SOC 2 attestation for AI systems with comprehensive control documentation. Our SOC 2 AI implementations typically reduce audit preparation time by 50%."
        },
        features: [
            "Access control implementation",
            "Change management procedures",
            "Incident response automation",
            "Continuous monitoring systems",
            "Audit evidence collection"
        ]
    },
    {
        slug: "hipaa-ai-solutions",
        title: "HIPAA Compliant AI Solutions",
        category: "Security",
        description: "AI implementations that meet HIPAA requirements. We design healthcare AI with appropriate safeguards, BAAs, and documentation for protected health information.",
        content: {
            intro: "Healthcare AI requires strict HIPAA compliance to protect patient information. Our solutions implement required safeguards while enabling powerful AI capabilities for healthcare organizations.",
            approach: "We design AI systems with HIPAA administrative, physical, and technical safeguards. Our implementations include minimum necessary access, encryption, and comprehensive audit logging.",
            outcomes: "Healthcare organizations achieve HIPAA-compliant AI operations with documented safeguards and successful audit outcomes. Our HIPAA AI implementations enable innovation while protecting patient privacy."
        },
        features: [
            "PHI encryption at rest and transit",
            "Minimum necessary access controls",
            "Audit logging and monitoring",
            "Business associate agreements",
            "Breach detection and response"
        ]
    },
    {
        slug: "pci-dss-ai-compliance",
        title: "PCI DSS AI Compliance",
        category: "Security",
        description: "AI systems compliant with PCI DSS requirements. We implement payment data protection, network segmentation, and monitoring for AI that processes cardholder data.",
        content: {
            intro: "AI systems that process payment data require PCI DSS compliance. Our implementations ensure that AI capabilities don't compromise payment security.",
            approach: "We design AI systems that minimize cardholder data exposure while delivering business value. Our implementations include tokenization, network segmentation, and access control.",
            outcomes: "Organizations achieve PCI DSS compliance for AI systems with reduced scope through careful architecture. Our PCI AI implementations pass QSA audits while enabling AI innovation."
        },
        features: [
            "Cardholder data tokenization",
            "Network segmentation design",
            "Access control implementation",
            "Vulnerability management",
            "Security monitoring and logging"
        ]
    },
    {
        slug: "gdpr-ai-data-processing",
        title: "GDPR AI Data Processing",
        category: "Security",
        description: "GDPR-compliant AI for European data processing. We implement privacy by design, data subject rights, and lawful processing for AI systems handling EU personal data.",
        content: {
            intro: "AI processing of personal data requires careful GDPR compliance. Our solutions implement privacy by design principles while enabling valuable AI capabilities.",
            approach: "We design AI systems with data minimization, purpose limitation, and appropriate legal bases. Our implementations include data subject request automation and processing records.",
            outcomes: "Organizations achieve GDPR-compliant AI operations with documented processing activities and automated data subject responses. Our GDPR AI implementations reduce compliance risk."
        },
        features: [
            "Privacy by design architecture",
            "Data subject request automation",
            "Processing records maintenance",
            "Consent management integration",
            "Data protection impact assessments"
        ]
    },
    {
        slug: "fedramp-ai-systems",
        title: "FedRAMP AI Systems",
        category: "Security",
        description: "FedRAMP-authorized AI for government clients. We implement AI systems that meet FedRAMP requirements for security assessment and continuous monitoring.",
        content: {
            intro: "Government AI requires FedRAMP authorization for cloud deployments. Our implementations meet stringent federal security requirements while delivering AI capabilities.",
            approach: "We design AI systems aligned with FedRAMP baseline controls and continuous monitoring requirements. Our implementations include comprehensive documentation for authorization packages.",
            outcomes: "Organizations achieve FedRAMP authorization for AI systems with complete documentation and established continuous monitoring. Our FedRAMP AI implementations accelerate authorization timelines."
        },
        features: [
            "NIST 800-53 control implementation",
            "Continuous monitoring systems",
            "Security assessment documentation",
            "POA&M management",
            "ConMon reporting automation"
        ]
    },
    {
        slug: "iso-27001-ai-security",
        title: "ISO 27001 AI Security",
        category: "Security",
        description: "ISO 27001-aligned AI information security. We implement AI security management systems with risk-based controls and continuous improvement for global enterprises.",
        content: {
            intro: "ISO 27001 provides a framework for systematic AI security management. Our implementations align AI operations with this internationally recognized standard.",
            approach: "We design AI security management systems with appropriate risk assessment, control selection, and continuous improvement. Our implementations support certification efforts.",
            outcomes: "Organizations achieve ISO 27001 certification for AI operations with documented security management systems. Our ISO 27001 AI implementations demonstrate security commitment to customers and partners."
        },
        features: [
            "Information security policy development",
            "Risk assessment methodology",
            "Control implementation and testing",
            "Internal audit programs",
            "Continuous improvement processes"
        ]
    },
    {
        slug: "data-residency-solutions",
        title: "Data Residency AI Solutions",
        category: "Security",
        description: "AI architectures with data residency compliance. We design multi-region AI deployments that keep data within required jurisdictions while maintaining functionality.",
        content: {
            intro: "Data residency requirements demand careful AI architecture design. Our solutions enable powerful AI capabilities while ensuring data never leaves required jurisdictions.",
            approach: "We design multi-region AI architectures with data isolation, regional processing, and appropriate controls. Our implementations include data classification and flow monitoring.",
            outcomes: "Organizations achieve data residency compliance for AI operations across multiple jurisdictions. Our data residency AI implementations enable global operations with local compliance."
        },
        features: [
            "Multi-region architecture design",
            "Data classification systems",
            "Cross-border transfer controls",
            "Regional processing isolation",
            "Data flow monitoring and enforcement"
        ]
    },
    {
        slug: "ai-audit-trails",
        title: "AI Audit Trail Implementation",
        category: "Security",
        description: "Comprehensive audit logging for AI systems. We implement immutable audit trails that capture AI decisions, data access, and system changes for compliance and forensics.",
        content: {
            intro: "AI audit trails are essential for compliance, debugging, and security. Our implementations capture every significant AI operation with tamper-evident logging.",
            approach: "We design audit systems that balance comprehensive capture with performance and cost. Our implementations include structured logging, long-term retention, and analysis capabilities.",
            outcomes: "Organizations achieve complete visibility into AI operations with searchable, immutable audit records. Our audit trail implementations support regulatory compliance and incident response."
        },
        features: [
            "Immutable log architecture",
            "AI decision capture and explanation",
            "Data access logging",
            "Long-term retention management",
            "Audit analytics and reporting"
        ]
    },
    {
        slug: "secure-rag-pipelines",
        title: "Secure RAG Pipeline Architecture",
        category: "Security",
        description: "Security-first RAG implementations. We design retrieval-augmented generation systems with access controls, data isolation, and prompt injection protection for enterprise use.",
        content: {
            intro: "RAG systems require careful security design to protect sensitive data. Our implementations ensure that retrieval respects access controls and generation is protected from manipulation.",
            approach: "We design RAG systems with document-level security, prompt validation, and output filtering. Our implementations prevent unauthorized data access and prompt injection attacks.",
            outcomes: "Organizations achieve secure RAG capabilities with confidence that sensitive data is protected. Our secure RAG implementations pass security assessments while delivering powerful knowledge retrieval."
        },
        features: [
            "Document-level access control",
            "Prompt injection prevention",
            "Output filtering and validation",
            "Retrieval audit logging",
            "Data isolation architecture"
        ]
    },
    {
        slug: "private-llm-deployment",
        title: "Private LLM Deployment",
        category: "Security",
        description: "Deploy large language models in your private infrastructure. We implement on-premises and private cloud LLM solutions for maximum data control and security.",
        content: {
            intro: "Some organizations require complete control over LLM infrastructure. Our private deployments bring powerful language models to your secure environment.",
            approach: "We design private LLM infrastructure with appropriate hardware, model selection, and operational procedures. Our implementations include model optimization for your specific use cases.",
            outcomes: "Organizations achieve LLM capabilities with complete data sovereignty and no external API dependencies. Our private LLM deployments deliver production performance in controlled environments."
        },
        features: [
            "On-premises GPU infrastructure design",
            "Model selection and optimization",
            "Inference server deployment",
            "Model fine-tuning pipelines",
            "Operational monitoring and maintenance"
        ]
    },
    {
        slug: "ai-access-control",
        title: "AI Access Control Systems",
        category: "Security",
        description: "Fine-grained access control for AI resources. We implement role-based and attribute-based access systems that protect AI models, data, and capabilities.",
        content: {
            intro: "AI systems require sophisticated access control beyond traditional applications. Our implementations ensure the right people have the right access to AI capabilities.",
            approach: "We design access control systems that address AI-specific requirements including model access, training data protection, and inference authorization. Our implementations integrate with existing identity systems.",
            outcomes: "Organizations achieve fine-grained AI access control with clear audit trails and automated provisioning. Our AI access control implementations reduce risk while enabling productive AI use."
        },
        features: [
            "Role-based access design",
            "Attribute-based access policies",
            "Model access control",
            "Data access governance",
            "Access certification workflows"
        ]
    }
];
function getSolutionBySlug(slug) {
    return solutionPages.find((page)=>page.slug === slug);
}
function getSolutionsByCategory(category) {
    return solutionPages.filter((page)=>page.category === category);
}
function getAllSlugs() {
    return solutionPages.map((page)=>page.slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$TableOfContents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/TableOfContents.tsx [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/Footer.tsx [app-client] (ecmascript) <export default as Footer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/Footer.tsx [app-client] (ecmascript)");
}),
"[project]/src/app/solutions/SolutionsContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SolutionsContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Footer$3e$__ = __turbopack_context__.i("[project]/src/components/shared/Footer.tsx [app-client] (ecmascript) <export default as Footer>");
"use client";
;
;
;
;
;
;
const categories = [
    {
        key: "Azure",
        label: "Azure Solutions",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
            lineNumber: 11,
            columnNumber: 51
        }, ("TURBOPACK compile-time value", void 0)),
        color: "text-blue-400 border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10"
    },
    {
        key: "AWS",
        label: "AWS Solutions",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
            lineNumber: 12,
            columnNumber: 47
        }, ("TURBOPACK compile-time value", void 0)),
        color: "text-orange-400 border-orange-500/30 bg-orange-500/5 hover:bg-orange-500/10"
    },
    {
        key: "Industry",
        label: "Industry Solutions",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
            lineNumber: 13,
            columnNumber: 57
        }, ("TURBOPACK compile-time value", void 0)),
        color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10"
    },
    {
        key: "Security",
        label: "Security & Compliance",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
            lineNumber: 14,
            columnNumber: 60
        }, ("TURBOPACK compile-time value", void 0)),
        color: "text-purple-400 border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10"
    }
];
function SolutionsContent() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-zinc-950 text-zinc-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]"
            }, void 0, false, {
                fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/4 -right-32 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]"
            }, void 0, false, {
                fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative max-w-screen-2xl mx-auto px-6 lg:px-12 py-24 pt-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center space-x-3 mb-6 px-4 py-2 border border-blue-500/30 rounded-full bg-blue-500/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400",
                                    children: "Enterprise AI Solutions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6",
                                children: "Solutions Portfolio"
                            }, void 0, false, {
                                fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed",
                                children: "Explore our comprehensive suite of enterprise AI solutions spanning cloud platforms, industry verticals, and security compliance frameworks."
                            }, void 0, false, {
                                fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-16",
                        children: categories.map((category, categoryIndex)=>{
                            const solutions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSolutionsByCategory"])(category.key);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: categoryIndex * 0.1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `inline-flex items-center gap-3 px-4 py-2 rounded-lg border ${category.color}`,
                                                children: [
                                                    category.icon,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold uppercase tracking-wide",
                                                        children: category.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-500 text-sm font-mono",
                                                children: [
                                                    solutions.length,
                                                    " solutions"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                                        children: solutions.map((solution, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.3,
                                                    delay: categoryIndex * 0.1 + index * 0.03
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/solutions/${solution.slug}`,
                                                    className: "group block bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-white group-hover:text-blue-400 transition-colors mb-2 leading-snug",
                                                            children: solution.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-zinc-500 line-clamp-2 mb-3",
                                                            children: [
                                                                solution.description.split('.')[0],
                                                                "."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-xs text-blue-400 font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Learn More"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                                                    lineNumber: 80,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    size: 12,
                                                                    className: "group-hover:translate-x-1 transition-transform"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 23
                                                }, this)
                                            }, solution.slug, false, {
                                                fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                                lineNumber: 63,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, category.key, true, {
                                fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.6
                        },
                        className: "mt-20 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-lg p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-white mb-4",
                                children: "Need a Custom Solution?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 mb-6 max-w-2xl mx-auto",
                                children: "Our team specializes in building bespoke AI solutions tailored to your unique business requirements. Let's discuss your specific needs."
                            }, void 0, false, {
                                fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://outlook.office.com/book/NihiloSolutions1@nihilosolutions.com/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn-primary",
                                children: [
                                    "Schedule Consultation",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Footer$3e$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/solutions/SolutionsContent.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = SolutionsContent;
var _c;
__turbopack_context__.k.register(_c, "SolutionsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e9471630._.js.map