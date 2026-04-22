(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/shared/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pages.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const categories = [
    {
        name: 'Azure',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
        color: 'text-blue-400'
    },
    {
        name: 'AWS',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"],
        color: 'text-orange-400'
    },
    {
        name: 'Industry',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        color: 'text-emerald-400'
    },
    {
        name: 'Security',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        color: 'text-purple-400'
    }
];
const Navbar = ()=>{
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeMobileCategory, setActiveMobileCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>setIsScrolled(window.scrollY > 20)
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleClickOutside = {
                "Navbar.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsSolutionsOpen(false);
                    }
                }
            }["Navbar.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const navItems = [
        'Services',
        'About',
        'Contact'
    ];
    const getSolutionsByCategory = (category)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["solutionPages"].filter((page)=>page.category === category);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-8'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center justify-between px-4 md:px-8 py-3 rounded-full border transition-all duration-500 
          ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-xl border-zinc-800 shadow-[0_0_30px_rgba(0,0,0,0.5)]' : 'bg-zinc-950/70 backdrop-blur-sm border-zinc-800/50 md:bg-transparent md:border-transparent'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center space-x-2 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-white rounded-full group-hover:shadow-[0_0_8px_#fff] transition-all duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/Navbar.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-black tracking-[0.2em] md:tracking-[0.3em] text-white uppercase italic",
                                        children: "Nihilo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/Navbar.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/Navbar.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/Navbar.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex justify-center items-center space-x-8 lg:space-x-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: dropdownRef,
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsSolutionsOpen(!isSolutionsOpen),
                                            className: "nav-link text-[11px] font-bold mono uppercase tracking-[0.4em] flex items-center gap-1",
                                            children: [
                                                "Solutions",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 12,
                                                    className: `transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Navbar.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shared/Navbar.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isSolutionsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fixed top-24 left-1/2 -translate-x-1/2 w-[800px] bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-2xl p-6 z-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-4 gap-6",
                                                    children: categories.map(({ name, icon: Icon, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `flex items-center gap-2 mb-3 pb-2 border-b border-zinc-800`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                            size: 14,
                                                                            className: color
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/shared/Navbar.tsx",
                                                                            lineNumber: 76,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-xs font-bold uppercase tracking-widest ${color}`,
                                                                            children: name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/shared/Navbar.tsx",
                                                                            lineNumber: 77,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/shared/Navbar.tsx",
                                                                    lineNumber: 75,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1 max-h-64 overflow-y-auto scrollbar-thin",
                                                                    children: getSolutionsByCategory(name).map((solution)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: `/solutions/${solution.slug}`,
                                                                            onClick: ()=>setIsSolutionsOpen(false),
                                                                            className: "block text-xs text-zinc-400 hover:text-white hover:bg-zinc-800/50 px-2 py-1.5 rounded transition-colors",
                                                                            children: solution.title.replace(' Solutions', '').replace(' Services', '').replace(' Implementation', '')
                                                                        }, solution.slug, false, {
                                                                            fileName: "[project]/src/components/shared/Navbar.tsx",
                                                                            lineNumber: 81,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/shared/Navbar.tsx",
                                                                    lineNumber: 79,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, name, true, {
                                                            fileName: "[project]/src/components/shared/Navbar.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Navbar.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 pt-4 border-t border-zinc-800",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/solutions",
                                                        onClick: ()=>setIsSolutionsOpen(false),
                                                        className: "text-xs text-blue-400 hover:text-blue-300 font-bold uppercase tracking-widest",
                                                        children: "View All Solutions →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/shared/Navbar.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Navbar.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shared/Navbar.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/Navbar.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/#${item.toLowerCase()}`,
                                        className: "nav-link text-[11px] font-bold mono uppercase tracking-[0.4em]",
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/src/components/shared/Navbar.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/Navbar.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://intake.nihilosolutions.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "hidden sm:inline-flex btn-cta",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Start Readiness Protocol"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/Navbar.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Navbar.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                    className: "md:hidden p-2 text-white hover:text-blue-400 transition-colors",
                                    "aria-label": "Toggle menu",
                                    children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/Navbar.tsx",
                                        lineNumber: 133,
                                        columnNumber: 35
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/Navbar.tsx",
                                        lineNumber: 133,
                                        columnNumber: 53
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Navbar.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/Navbar.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/Navbar.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden mt-2 mx-2 p-6 bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-2xl max-h-[80vh] overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveMobileCategory(activeMobileCategory ? null : 'solutions'),
                                        className: "w-full flex items-center justify-between text-lg font-bold text-white uppercase tracking-widest py-2 border-b border-zinc-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Solutions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/Navbar.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 20,
                                                className: `transition-transform ${activeMobileCategory === 'solutions' ? 'rotate-180' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/Navbar.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shared/Navbar.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    activeMobileCategory === 'solutions' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 space-y-4",
                                        children: [
                                            categories.map(({ name, icon: Icon, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `flex items-center gap-2 mb-2`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                    size: 14,
                                                                    className: color
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/shared/Navbar.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-sm font-bold uppercase tracking-widest ${color}`,
                                                                    children: name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/shared/Navbar.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/shared/Navbar.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-1 pl-4",
                                                            children: getSolutionsByCategory(name).slice(0, 4).map((solution)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/solutions/${solution.slug}`,
                                                                    onClick: ()=>setIsMobileMenuOpen(false),
                                                                    className: "text-xs text-zinc-400 hover:text-white py-1",
                                                                    children: solution.title.replace(' Solutions', '').replace(' Services', '').replace(' Implementation', '')
                                                                }, solution.slug, false, {
                                                                    fileName: "[project]/src/components/shared/Navbar.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/shared/Navbar.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, name, true, {
                                                    fileName: "[project]/src/components/shared/Navbar.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/solutions",
                                                onClick: ()=>setIsMobileMenuOpen(false),
                                                className: "block text-sm text-blue-400 font-bold uppercase tracking-widest pt-2",
                                                children: "View All →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/Navbar.tsx",
                                                lineNumber: 172,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shared/Navbar.tsx",
                                        lineNumber: 151,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/Navbar.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/#${item.toLowerCase()}`,
                                    onClick: ()=>setIsMobileMenuOpen(false),
                                    className: "text-lg font-bold text-white uppercase tracking-widest py-2 border-b border-zinc-800 hover:text-blue-400 transition-colors",
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/src/components/shared/Navbar.tsx",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://intake.nihilosolutions.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "mt-4 inline-flex items-center justify-center px-6 py-3 font-mono uppercase tracking-[0.2em] text-white rounded-sm border-2 border-blue-500 bg-zinc-900 hover:bg-blue-500 hover:text-black transition-all",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-black",
                                    children: "Start Readiness Protocol"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Navbar.tsx",
                                    lineNumber: 199,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/Navbar.tsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/Navbar.tsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/Navbar.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Navbar.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/Navbar.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "XvEZ6msrQPL7znMPl2mAHUepam0=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$command$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Command$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/command.js [app-client] (ecmascript) <export default as Command>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
'use client';
;
;
const Footer = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "pt-32 pb-16 bg-zinc-950 border-t border-zinc-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-screen-2xl mx-auto px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-white rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/Footer.tsx",
                                            lineNumber: 21,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-white tracking-[0.2em] italic uppercase",
                                            children: "Nihilo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/Footer.tsx",
                                            lineNumber: 22,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                    lineNumber: 20,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-500 max-w-sm mb-10 font-light leading-relaxed",
                                    children: "Architecting the future of enterprise automation. Principals led engineering for AI and Cloud Native environments."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                    lineNumber: 24,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://linkedin.com/company/nihilosolutions",
                                            target: "_blank",
                                            rel: "noopener",
                                            "aria-label": "LinkedIn",
                                            className: "text-zinc-600 hover:text-white transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                size: 18,
                                                strokeWidth: 1.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/Footer.tsx",
                                                lineNumber: 29,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/Footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://github.com/nihilosolutions",
                                            target: "_blank",
                                            rel: "noopener",
                                            "aria-label": "GitHub",
                                            className: "text-zinc-600 hover:text-white transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                size: 18,
                                                strokeWidth: 1.5
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/Footer.tsx",
                                                lineNumber: 32,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/Footer.tsx",
                                            lineNumber: 31,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/Footer.tsx",
                            lineNumber: 19,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[10px] mono uppercase tracking-[0.3em] text-white mb-8",
                                    children: "Technical_Services"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                    lineNumber: 38,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4 text-zinc-500 text-sm font-light",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/privacy",
                                                className: "hover:underline",
                                                children: "Privacy Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/Footer.tsx",
                                                lineNumber: 41,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/Footer.tsx",
                                            lineNumber: 40,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center space-x-3 group cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    size: 14,
                                                    strokeWidth: 1.5,
                                                    className: "group-hover:text-blue-400 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#services",
                                                    className: "group-hover:text-white transition-colors",
                                                    children: "AI Engineering"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shared/Footer.tsx",
                                            lineNumber: 43,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center space-x-3 group cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$command$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Command$3e$__["Command"], {
                                                    size: 14,
                                                    strokeWidth: 1.5,
                                                    className: "group-hover:text-blue-400 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#services",
                                                    className: "group-hover:text-white transition-colors",
                                                    children: "Workflow Automation"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shared/Footer.tsx",
                                            lineNumber: 47,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center space-x-3 group cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                    size: 14,
                                                    strokeWidth: 1.5,
                                                    className: "group-hover:text-blue-400 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#services",
                                                    className: "group-hover:text-white transition-colors",
                                                    children: "Cloud Native Design"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shared/Footer.tsx",
                                            lineNumber: 51,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center space-x-3 group cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                    size: 14,
                                                    strokeWidth: 1.5,
                                                    className: "group-hover:text-blue-400 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#services",
                                                    className: "group-hover:text-white transition-colors",
                                                    children: "Security Audits"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shared/Footer.tsx",
                                            lineNumber: 55,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                    lineNumber: 39,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/Footer.tsx",
                            lineNumber: 37,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[10px] mono uppercase tracking-[0.3em] text-white mb-8",
                                    children: "Access_Point"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                    lineNumber: 63,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-6 text-zinc-500 text-sm font-light",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center space-x-3 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                                    size: 16,
                                                    strokeWidth: 1.5,
                                                    className: "text-zinc-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:support@nihilosolutions.com",
                                                    className: "hover:text-white font-mono transition-colors",
                                                    children: "support@nihilosolutions.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shared/Footer.tsx",
                                            lineNumber: 65,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    size: 16,
                                                    strokeWidth: 1.5,
                                                    className: "text-zinc-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[10px] tracking-widest uppercase",
                                                    children: "Status: Operational"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shared/Footer.tsx",
                                            lineNumber: 69,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                    size: 16,
                                                    strokeWidth: 1.5,
                                                    className: "text-zinc-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[10px] tracking-widest uppercase",
                                                    children: "Loc: CT_USA"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/shared/Footer.tsx",
                                            lineNumber: 73,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                    lineNumber: 64,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/Footer.tsx",
                            lineNumber: 62,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/Footer.tsx",
                    lineNumber: 18,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-700 text-[10px] mono tracking-widest uppercase",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Nihilo Solutions LLC. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/Footer.tsx",
                            lineNumber: 82,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-8 mt-4 md:mt-0 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/privacy",
                                    className: "hover:text-zinc-400 transition-colors",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                    lineNumber: 84,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-zinc-800",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                    lineNumber: 85,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:nihilo@nihilosolutions.com",
                                    className: "hover:text-zinc-400 transition-colors",
                                    children: "Contact Engineering"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                    lineNumber: 86,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-zinc-800",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                    lineNumber: 87,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-zinc-800 italic",
                                    children: "Principals Led"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/Footer.tsx",
                                    lineNumber: 88,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/Footer.tsx",
                            lineNumber: 83,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/Footer.tsx",
                    lineNumber: 81,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/Footer.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/Footer.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/TableOfContents.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const slugify = (text = '')=>text.toString().toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+|-+$/g, '');
const TableOfContents = ()=>{
    _s();
    const [headings, setHeadings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TableOfContents.useEffect": ()=>{
            const container = document.querySelector('main') || document.body;
            const h2s = Array.from(container.querySelectorAll('h2'));
            const hs = h2s.map({
                "TableOfContents.useEffect.hs": (h)=>{
                    if (!h.id) h.id = slugify(h.textContent || 'section');
                    return {
                        id: h.id,
                        text: h.textContent ? h.textContent.trim() : h.id
                    };
                }
            }["TableOfContents.useEffect.hs"]);
            setHeadings(hs);
            const idToElement = new Map();
            hs.forEach({
                "TableOfContents.useEffect": (s)=>{
                    const el = document.getElementById(s.id);
                    if (el) idToElement.set(s.id, el);
                }
            }["TableOfContents.useEffect"]);
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -55% 0px',
                threshold: 0
            };
            const observer = new IntersectionObserver({
                "TableOfContents.useEffect": (entries)=>{
                    entries.forEach({
                        "TableOfContents.useEffect": (entry)=>{
                            const id = entry.target.id;
                            if (entry.isIntersecting) setActiveId(id);
                        }
                    }["TableOfContents.useEffect"]);
                }
            }["TableOfContents.useEffect"], observerOptions);
            hs.forEach({
                "TableOfContents.useEffect": (s)=>{
                    const el = idToElement.get(s.id);
                    if (el) observer.observe(el);
                }
            }["TableOfContents.useEffect"]);
            return ({
                "TableOfContents.useEffect": ()=>observer.disconnect()
            })["TableOfContents.useEffect"];
        }
    }["TableOfContents.useEffect"], []);
    const handleClick = (e, id)=>{
        e.preventDefault();
        const target = document.getElementById(id);
        if (!target) return;
        if (window.innerWidth <= 768) setOpen(false);
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({
            behavior: prefersReduced ? 'auto' : 'smooth',
            block: 'start'
        });
        setActiveId(id);
    };
    if (headings.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((o)=>!o),
                className: "md:hidden fixed bottom-4 right-4 z-[60] bg-zinc-900/80 p-3 border border-zinc-800 text-white text-[9px] font-mono uppercase tracking-widest shadow-lg",
                "aria-label": "Toggle table of contents",
                children: open ? 'Close' : 'Index'
            }, void 0, false, {
                fileName: "[project]/src/components/shared/TableOfContents.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `${open ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 fixed top-1/4 right-4 md:right-8 z-50 w-52 bg-zinc-950/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none border border-zinc-800 md:border-none rounded-lg md:rounded-none p-4 md:p-0 transition-transform duration-300`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3 text-[10px] uppercase tracking-widest font-mono",
                    children: headings.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `#${h.id}`,
                                onClick: (e)=>handleClick(e, h.id),
                                className: `block transition-colors duration-200 ${activeId === h.id ? 'text-blue-400 border-l-2 border-blue-500 pl-2' : 'text-zinc-500 hover:text-white pl-0'}`,
                                children: h.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/TableOfContents.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, h.id, false, {
                            fileName: "[project]/src/components/shared/TableOfContents.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/TableOfContents.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/shared/TableOfContents.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(TableOfContents, "iX8N0EfmTHsJuwEPidGkVi4ILh4=");
_c = TableOfContents;
const __TURBOPACK__default__export__ = TableOfContents;
var _c;
__turbopack_context__.k.register(_c, "TableOfContents");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0-nlutk._.js.map