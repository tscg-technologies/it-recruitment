/**
 * IT TALENT & TECHNOLOGY RECRUITMENT
 * Shared Demo Job Dataset
 * 
 * DISCLAIMER:
 * DEMO JOB LISTINGS — THESE ARE ILLUSTRATIVE EXAMPLES, NOT VERIFIED LIVE VACANCIES.
 * For portfolio and demonstration purposes only.
 */

const IT_JOBS_DATA = [
  {
    id: "IT001",
    title: "Senior Python Systems Developer",
    specialization: "Software Development",
    primarySkills: ["Python", "FastAPI", "PostgreSQL"],
    secondarySkills: ["Docker", "Redis", "Kafka", "Linux", "Git"],
    location: "Bengaluru",
    experience: "5–8 Years",
    experienceCategory: "5-8",
    employmentType: "Permanent",
    workArrangement: "Hybrid",
    salary: "₹24,00,000 – ₹32,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-10-24",
    isDemo: true,
    overview: "We are seeking an experienced Senior Python Systems Developer to engineer high-throughput distributed microservices and asynchronous backend data pipelines.",
    responsibilities: [
      "Design, build, and maintain high-performance asynchronous REST and gRPC services using Python (FastAPI/asyncio).",
      "Optimize complex relational schema and distributed caching layers with PostgreSQL, Redis, and connection poolers.",
      "Collaborate with DevOps teams on containerized deployments, Kubernetes pods, and zero-downtime CI/CD workflows.",
      "Conduct in-depth code reviews, mentor mid-level software engineers, and establish strict testing standards (pytest, mock).",
      "Champion system observability by implementing structured logging, OpenTelemetry tracing, and Prometheus metrics."
    ],
    requiredSkills: [
      "5+ years of production experience writing clean, idiomatic Python in concurrent/asynchronous environments.",
      "Deep expertise in FastAPI or Django Rest Framework, asynchronous event loops, and asyncio primitives.",
      "Advanced relational database tuning (PostgreSQL indexing, query optimization, migration tools).",
      "Hands-on background with Docker, container networking, and cloud-native architecture.",
      "Familiarity with distributed message brokers such as Apache Kafka, RabbitMQ, or AWS SQS."
    ],
    preferredSkills: [
      "Prior experience refactoring monolithic systems into domain-driven microservices.",
      "Knowledge of Rust or Go for high-performance systems extensions.",
      "Contributions to open-source Python libraries or active technical blog authorship."
    ]
  },
  {
    id: "IT002",
    title: "React Frontend Engineer",
    specialization: "Frontend Development",
    primarySkills: ["React", "TypeScript", "Next.js"],
    secondarySkills: ["Redux Toolkit", "Tailwind CSS", "Jest", "Webpack", "GraphQL"],
    location: "Hyderabad",
    experience: "2–5 Years",
    experienceCategory: "2-5",
    employmentType: "Permanent",
    workArrangement: "Remote — India",
    salary: "₹14,00,000 – ₹20,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-10-28",
    isDemo: true,
    overview: "Looking for an inventive React Frontend Engineer passionate about design fidelity, Web Vitals performance, and robust TypeScript component design.",
    responsibilities: [
      "Engineer intuitive, accessible, and responsive client-facing web applications using React 19, TypeScript, and modern state architectures.",
      "Build reusable component libraries strictly following WCAG 2.1 AA accessibility guidelines and design tokens.",
      "Optimize Core Web Vitals (LCP, INP, CLS) across desktop, tablet, and mobile browsers.",
      "Integrate complex RESTful and GraphQL APIs with optimistic UI updates and resilient offline caching.",
      "Write unit and integration tests using Vitest, React Testing Library, and Playwright."
    ],
    requiredSkills: [
      "3+ years of professional front-end engineering using React and strongly-typed TypeScript.",
      "Command of modern CSS layouts (Flexbox, Grid, container queries, CSS variables).",
      "Proficiency with modern build ecosystems (Vite, Webpack, Turbopack, npm/pnpm).",
      "Demonstrated ability to optimize rendering cycles and minimize unnecessary React re-renders."
    ],
    preferredSkills: [
      "Experience with Next.js App Router and server-side rendering (SSR).",
      "Experience with micro-frontends or module federation architecture.",
      "Public GitHub portfolio showcasing custom UI components or creative UI experiments."
    ]
  },
  {
    id: "IT003",
    title: "Lead Java Microservices Engineer",
    specialization: "Backend Development",
    primarySkills: ["Java", "Spring Boot", "Microservices"],
    secondarySkills: ["Kafka", "Kubernetes", "AWS", "Hibernate", "PostgreSQL"],
    location: "Pune",
    experience: "8+ Years",
    experienceCategory: "8+",
    employmentType: "Permanent",
    workArrangement: "Hybrid",
    salary: "₹32,00,000 – ₹42,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-11-01",
    isDemo: true,
    overview: "Senior architectural role leading enterprise-grade financial transaction systems, event-driven streaming, and resilient Java microservices clusters.",
    responsibilities: [
      "Architect and lead development of resilient microservices using Java 21, Spring Boot 3, and Spring Cloud.",
      "Drive event-driven streaming pipelines processing millions of transactions per day via Apache Kafka.",
      "Establish engineering practices, design patterns, security controls (OAuth2/OIDC), and resilience patterns (Circuit Breaker).",
      "Guide junior and senior engineers through architectural reviews, code craftsmanship, and cloud deployments.",
      "Partner with product managers and enterprise enterprise architects on long-term digital transformation roadmaps."
    ],
    requiredSkills: [
      "8+ years in Java enterprise software development with at least 4 years architecting microservices.",
      "Deep understanding of JVM internals, garbage collection tuning, multithreading, and memory management.",
      "Extensive production experience with Spring Boot, Spring Security, Hibernate/JPA, and Kafka.",
      "Strong grasp of containerization, Kubernetes orchestration, and cloud infrastructure on AWS or Azure."
    ],
    preferredSkills: [
      "Domain-Driven Design (DDD) and Event Sourcing expertise.",
      "Prior background in high-volume FinTech, payments, or banking platforms.",
      "TOGAF or AWS Certified Solutions Architect credential."
    ]
  },
  {
    id: "IT004",
    title: "Cloud Infrastructure & DevOps Engineer",
    specialization: "Cloud & DevOps",
    primarySkills: ["AWS", "Kubernetes", "Terraform"],
    secondarySkills: ["Docker", "GitHub Actions", "Linux", "Prometheus", "Python"],
    location: "Chennai",
    experience: "2–5 Years",
    experienceCategory: "2-5",
    employmentType: "Permanent",
    workArrangement: "On-site",
    salary: "₹16,00,000 – ₹22,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-10-30",
    isDemo: true,
    overview: "Seeking a proactive Cloud Infrastructure & DevOps Engineer to maintain scalable cloud footprints, manage Kubernetes clusters, and automate automated release gates.",
    responsibilities: [
      "Provision and govern cloud resources across multi-account AWS architectures using declarative Terraform code.",
      "Administer and scale production Elastic Kubernetes Service (EKS) clusters with Helm charts and ArgoCD.",
      "Build robust, self-healing CI/CD deployment pipelines using GitHub Actions and GitLab CI.",
      "Implement infrastructure monitoring, alerting, and dashboarding using Prometheus, Grafana, and Datadog.",
      "Ensure cloud security compliance, IAM least privilege principles, and network VPC segmentation."
    ],
    requiredSkills: [
      "3+ years in DevOps, Site Reliability, or Cloud Engineering within AWS cloud environments.",
      "Strong proficiency in Infrastructure-as-Code (Terraform or OpenTofu).",
      "Solid production knowledge of Kubernetes primitives, ingress controllers, and service meshes.",
      "Proficient in Bash and Python scripting for automation and system management."
    ],
    preferredSkills: [
      "AWS Certified SysOps Administrator or Solutions Architect Associate.",
      "Certified Kubernetes Administrator (CKA).",
      "Experience with GitOps workflows and secret management solutions (HashiCorp Vault)."
    ]
  },
  {
    id: "IT005",
    title: "Senior Data Engineer",
    specialization: "Data & Business Intelligence",
    primarySkills: ["Python", "Spark", "Databricks"],
    secondarySkills: ["SQL", "Airflow", "AWS", "Snowflake", "Delta Lake"],
    location: "Bengaluru",
    experience: "5–8 Years",
    experienceCategory: "5-8",
    employmentType: "Permanent",
    workArrangement: "Remote — India",
    salary: "₹26,00,000 – ₹35,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-10-25",
    isDemo: true,
    overview: "Join an elite data engineering group constructing Petabyte-scale modern data lakehouses, streaming ingestion pipelines, and analytics transformations.",
    responsibilities: [
      "Develop distributed batch and real-time ETL/ELT pipelines using PySpark, Apache Spark, and Databricks.",
      "Model and organize analytical data warehouses and Delta Lake schemas for reporting and ML consumers.",
      "Orchestrate complex DAG workflows using Apache Airflow and automated data validation frameworks (Great Expectations).",
      "Collaborate with Data Analysts and Machine Learning teams to surface clean, cataloged datasets.",
      "Monitor data lineage, data governance, and pipeline compute costs across AWS and cloud storage."
    ],
    requiredSkills: [
      "5+ years engineering robust distributed data pipelines with PySpark and SQL.",
      "Proficiency with lakehouse paradigms (Delta Lake, Apache Iceberg, or Snowflake).",
      "Strong data modeling foundation (Kimball dimensional modeling, star schemas, medallion architecture).",
      "Solid understanding of database internals, partition strategies, and query plan execution."
    ],
    preferredSkills: [
      "Databricks Certified Data Engineer Associate or Professional.",
      "Experience streaming data with Apache Kafka or Spark Structured Streaming.",
      "Knowledge of dbt (data build tool) for SQL transformations."
    ]
  },
  {
    id: "IT006",
    title: "Enterprise Machine Learning Engineer",
    specialization: "Artificial Intelligence & Machine Learning",
    primarySkills: ["Python", "PyTorch", "MLOps"],
    secondarySkills: ["TensorFlow", "Scikit-Learn", "Docker", "Kubeflow", "AWS SageMaker"],
    location: "Hyderabad",
    experience: "2–5 Years",
    experienceCategory: "2-5",
    employmentType: "Permanent",
    workArrangement: "Hybrid",
    salary: "₹18,00,000 – ₹28,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-11-03",
    isDemo: true,
    overview: "Bridge the gap between experimental data science models and rock-solid production deployment by deploying performant ML inference services.",
    responsibilities: [
      "Train, fine-tune, and evaluate deep learning and statistical models using PyTorch, Hugging Face, and Scikit-Learn.",
      "Build robust MLOps automation for continuous model retraining, concept drift monitoring, and registry versioning (MLflow).",
      "Containerize and deploy inference microservices with FastAPI, Triton Inference Server, and Docker.",
      "Optimize model inference latencies using ONNX Runtime, TensorRT, and model quantization techniques.",
      "Collaborate with software teams to integrate ML predictions securely into customer workflows."
    ],
    requiredSkills: [
      "3+ years in applied Machine Learning, model development, and production software deployment.",
      "Deep understanding of machine learning algorithms, deep neural networks, and mathematical fundamentals.",
      "Strong background in containerized MLOps pipelines and cloud ML platforms (AWS SageMaker / Vertex AI).",
      "Proficient in Python, scientific compute libraries (NumPy, Pandas, SciPy), and testing."
    ],
    preferredSkills: [
      "Hands-on experience deploying computer vision or natural language processing models.",
      "Master's degree in Computer Science, Data Science, or related engineering discipline.",
      "Active Kaggle ranking or publications in peer-reviewed AI venues."
    ]
  },
  {
    id: "IT007",
    title: "Generative AI & LLM Systems Engineer",
    specialization: "Artificial Intelligence & Machine Learning",
    primarySkills: ["Python", "LLMs", "Vector DBs"],
    secondarySkills: ["LangChain", "LlamaIndex", "OpenAI API", "FastAPI", "Pinecone"],
    location: "Bengaluru",
    experience: "2–5 Years",
    experienceCategory: "2-5",
    employmentType: "Contract",
    workArrangement: "Remote — India",
    salary: "₹22,00,000 – ₹30,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-11-04",
    isDemo: true,
    overview: "Cutting-edge opportunity to design enterprise Retrieval-Augmented Generation (RAG) agents, semantic search systems, and secure LLM application workflows.",
    responsibilities: [
      "Architect and evaluate enterprise RAG pipelines combining embeddings, vector stores (Pinecone, Qdrant, Chroma), and hybrid keyword search.",
      "Develop custom AI agents using LangChain, LangGraph, and LlamaIndex for automated enterprise workflows.",
      "Implement prompt engineering, guardrails (NeMo, Llama Guard), and hallucination evaluation frameworks.",
      "Fine-tune open-weight LLMs (Llama, Mistral) using LoRA/QLoRA techniques for domain-specific tasks.",
      "Build low-latency API wrappers in FastAPI with streaming token support and caching layers."
    ],
    requiredSkills: [
      "2+ years working with generative AI architectures, transformer models, embeddings, and prompt orchestration.",
      "Advanced Python skills with experience building production microservices.",
      "Practical experience with vector databases, semantic indexing, chunking strategies, and re-ranking algorithms.",
      "Deep familiarity with token usage optimization, model evaluation metrics, and API latency constraints."
    ],
    preferredSkills: [
      "Experience deploying local open-source models using vLLM or Ollama on GPU infrastructure.",
      "Knowledge of Agentic workflows with function calling and tool usage.",
      "Background in enterprise security, data privacy, and PII anonymization."
    ]
  },
  {
    id: "IT008",
    title: "Senior Data & Business Intelligence Analyst",
    specialization: "Data & Business Intelligence",
    primarySkills: ["Power BI", "SQL", "DAX"],
    secondarySkills: ["Python", "Tableau", "Excel", "Data Modeling", "ETL"],
    location: "Mumbai",
    experience: "2–5 Years",
    experienceCategory: "2-5",
    employmentType: "Permanent",
    workArrangement: "Hybrid",
    salary: "₹12,00,000 – ₹18,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-10-22",
    isDemo: true,
    overview: "Transform enterprise operational data into executive decision dashboards, visual analytics, and strategic business intelligence insights.",
    responsibilities: [
      "Design and maintain interactive Power BI reports and dashboards for C-suite and divisional leaders.",
      "Write advanced SQL queries, window functions, and stored procedures to extract and clean relational data.",
      "Develop optimized DAX measures, calculated columns, and tabular data models ensuring swift report load times.",
      "Conduct exploratory data analysis using Python and SQL to uncover trends, revenue anomalies, and customer patterns.",
      "Conduct dashboard training sessions and establish self-service BI governance across business units."
    ],
    requiredSkills: [
      "3+ years as a Business Intelligence or Data Analyst translating requirements into visual narratives.",
      "Mastery of Power BI (Power Query, DAX, data modeling, incremental refresh).",
      "Advanced relational SQL skills across PostgreSQL, SQL Server, or Snowflake.",
      "Solid business acumen and exceptional stakeholder presentation skills."
    ],
    preferredSkills: [
      "Microsoft Certified: Power BI Data Analyst Associate (PL-300).",
      "Experience with Tableau Desktop and Tableau Server administration.",
      "Basic Python scripting for automated data extraction."
    ]
  },
  {
    id: "IT009",
    title: "Enterprise Power BI & Fabric Developer",
    specialization: "Data & Business Intelligence",
    primarySkills: ["Power BI", "Microsoft Fabric", "SQL"],
    secondarySkills: ["Azure Synapse", "DAX", "Data Factory", "Python", "Lakehouse"],
    location: "Delhi NCR",
    experience: "5–8 Years",
    experienceCategory: "5-8",
    employmentType: "Permanent",
    workArrangement: "Hybrid",
    salary: "₹20,00,000 – ₹28,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-10-26",
    isDemo: true,
    overview: "Lead migration to Microsoft Fabric lakehouses and architect enterprise semantic models supporting cross-organization reporting.",
    responsibilities: [
      "Architect and implement enterprise-scale Power BI solutions on Microsoft Fabric and Azure Synapse.",
      "Design Direct Lake semantic models and optimize large tabular data models for lightning-fast executive reporting.",
      "Build automated data ingestion pipelines using Microsoft Fabric Data Factory and notebooks.",
      "Establish tenant administration policies, row-level security (RLS), object-level security, and capacity monitoring.",
      "Collaborate with enterprise data governance teams to enforce standard data dictionaries and metadata management."
    ],
    requiredSkills: [
      "5+ years of dedicated Power BI and enterprise data warehouse development experience.",
      "Hands-on expertise with Microsoft Fabric workloads (OneLake, Lakehouse, Warehouse, Data Factory).",
      "Deep DAX formula optimization and tabular model partitioning experience.",
      "Strong SQL proficiency and experience with Azure cloud data services."
    ],
    preferredSkills: [
      "DP-600 or PL-300 Microsoft Certifications.",
      "Experience with Git integration in Microsoft Fabric workspaces.",
      "Background in SAP or Salesforce data extraction into Azure."
    ]
  },
  {
    id: "IT010",
    title: "Full-Stack TypeScript / MERN Developer",
    specialization: "Full-Stack Engineering",
    primarySkills: ["Node.js", "React", "TypeScript"],
    secondarySkills: ["MongoDB", "Express", "GraphQL", "Docker", "REST API"],
    location: "Pune",
    experience: "2–5 Years",
    experienceCategory: "2-5",
    employmentType: "Permanent",
    workArrangement: "Remote — India",
    salary: "₹15,00,000 – ₹22,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-11-02",
    isDemo: true,
    overview: "Develop end-to-end cloud products using TypeScript across React client interfaces, Node.js backend microservices, and document databases.",
    responsibilities: [
      "Build end-to-end feature modules across front-end web interfaces and backend Node.js services.",
      "Design and maintain scalable REST and GraphQL APIs with schema validation (Zod) and JWT authentication.",
      "Model and optimize MongoDB document schemas, indexing strategies, and aggregation pipelines.",
      "Implement responsive, stateful UI components using React, Redux Toolkit, and styled CSS.",
      "Write thorough end-to-end integration and component tests to maintain code quality."
    ],
    requiredSkills: [
      "3+ years building full-stack applications with Node.js, Express/NestJS, and React.",
      "Strong command of TypeScript across both client and server codebases.",
      "Experience with NoSQL databases (MongoDB) and relational databases (PostgreSQL).",
      "Understanding of asynchronous patterns, event loop mechanics, and microservice communication."
    ],
    preferredSkills: [
      "Experience with NestJS enterprise backend framework.",
      "Experience with containerizing full-stack stacks using Docker Compose.",
      "Familiarity with serverless architectures (AWS Lambda / Vercel)."
    ]
  },
  {
    id: "IT011",
    title: "Cybersecurity SOC Analyst & Threat Hunter",
    specialization: "Cybersecurity",
    primarySkills: ["SIEM", "SOC", "Incident Response"],
    secondarySkills: ["Splunk", "Wireshark", "Network Security", "EDR", "Threat Hunting"],
    location: "Hyderabad",
    experience: "0–2 Years",
    experienceCategory: "0-2",
    employmentType: "Permanent",
    workArrangement: "On-site",
    salary: "₹7,50,000 – ₹11,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-11-05",
    isDemo: true,
    overview: "Exciting opportunity for an analytical Cybersecurity Analyst to monitor real-time threat telemetry, triage SIEM security alerts, and defend corporate endpoints.",
    responsibilities: [
      "Monitor 24/7 Security Operations Center (SOC) dashboards and triage alerts from SIEM platforms (Splunk / Microsoft Sentinel).",
      "Investigate endpoint detection and response (EDR) telemetry for indicators of compromise (IOCs) and malware activity.",
      "Perform deep packet inspection and network traffic analysis using Wireshark and Zeek.",
      "Document security incidents, execute standard operating playbooks, and escalate high-severity breaches.",
      "Assist in periodic vulnerability scanning, phishing simulations, and employee security awareness exercises."
    ],
    requiredSkills: [
      "0–2 years experience or comprehensive academic training in cybersecurity and network defense.",
      "Clear understanding of TCP/IP networking, OSI model, DNS, firewalls, and proxy systems.",
      "Familiarity with common attack vectors (OWASP Top 10, MITRE ATT&CK framework).",
      "Proficient in Windows and Linux command-line environments for security auditing."
    ],
    preferredSkills: [
      "Security certifications such as CompTIA Security+, CEH, or CySA+.",
      "Experience scripting log parsing using Python or PowerShell.",
      "Participation in Capture The Flag (CTF) security competitions."
    ]
  },
  {
    id: "IT012",
    title: "Lead SDET & Automation Engineer",
    specialization: "Quality Assurance & Testing",
    primarySkills: ["Selenium", "Playwright", "Java"],
    secondarySkills: ["TestNG", "Cypress", "CI/CD", "API Testing", "JMeter"],
    location: "Chennai",
    experience: "5–8 Years",
    experienceCategory: "5-8",
    employmentType: "Permanent",
    workArrangement: "Hybrid",
    salary: "₹20,00,000 – ₹27,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-10-27",
    isDemo: true,
    overview: "Lead testing infrastructure, establish automated test suites across UI and API layers, and elevate software release quality.",
    responsibilities: [
      "Architect and scale robust test automation frameworks using Playwright, Selenium WebDriver, and Java/TypeScript.",
      "Build automated REST API test suites using RestAssured and Postman CLI integration.",
      "Embed automated tests directly into GitHub Actions and Jenkins pipelines to gate pull requests.",
      "Execute performance and stress testing runs using Apache JMeter and k6.",
      "Mentor QA engineers on automation best practices, test design patterns (Page Object Model), and bug triaging."
    ],
    requiredSkills: [
      "5+ years of dedicated software testing with at least 3 years architecting test automation frameworks.",
      "Proficient in Java or TypeScript programming for automated test creation.",
      "Hands-on expertise with modern tools like Playwright, Cypress, or Selenium.",
      "Deep understanding of CI/CD pipeline integration, test reporting, and parallel test execution."
    ],
    preferredSkills: [
      "Experience with BDD frameworks like Cucumber.",
      "Experience with mobile automation using Appium.",
      "ISTQB Advanced Level Test Automation Engineer certification."
    ]
  },
  {
    id: "IT013",
    title: "Salesforce Senior Technical Developer",
    specialization: "ERP & CRM",
    primarySkills: ["Salesforce", "Apex", "LWC"],
    secondarySkills: ["Visualforce", "SOQL", "Salesforce DX", "REST API", "Sales Cloud"],
    location: "Bengaluru",
    experience: "5–8 Years",
    experienceCategory: "5-8",
    employmentType: "Permanent",
    workArrangement: "Remote — India",
    salary: "₹22,00,000 – ₹31,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-10-29",
    isDemo: true,
    overview: "Design custom Salesforce enterprise CRM applications, build Lightning Web Components, and engineer high-volume third-party system integrations.",
    responsibilities: [
      "Develop custom Salesforce business logic using Apex triggers, classes, asynchronous Apex, and SOQL/SOSL queries.",
      "Build responsive, modern user interfaces using Lightning Web Components (LWC) and JavaScript.",
      "Architect real-time integrations between Salesforce and external ERP/data systems via REST and SOAP APIs.",
      "Manage source-driven development using Salesforce DX, Git, and automated deployment packages.",
      "Audit existing code for governor limit adherence, test coverage (>85%), and code security guidelines."
    ],
    requiredSkills: [
      "5+ years of dedicated Salesforce development experience on Sales and Service Clouds.",
      "Deep knowledge of Apex, governor limits, trigger frameworks, and transaction control.",
      "Hands-on development of complex Lightning Web Components (LWC).",
      "Proficient with Salesforce DX, scratch orgs, and CI/CD tools (Copado / Jenkins)."
    ],
    preferredSkills: [
      "Salesforce Platform Developer II (PDII) certification.",
      "Experience with Salesforce Financial Services Cloud or Health Cloud.",
      "Knowledge of MuleSoft integration platform."
    ]
  },
  {
    id: "IT014",
    title: "Senior .NET Core / Azure Backend Architect",
    specialization: "Backend Development",
    primarySkills: [".NET", "C#", "Azure"],
    secondarySkills: [".NET Core", "Microservices", "SQL Server", "Docker", "Entity Framework"],
    location: "Delhi NCR",
    experience: "8+ Years",
    experienceCategory: "8+",
    employmentType: "Permanent",
    workArrangement: "Hybrid",
    salary: "₹30,00,000 – ₹40,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-10-21",
    isDemo: true,
    overview: "Architect enterprise cloud backend platforms, high-scale microservices, and secure API gateways using C# and Microsoft Azure.",
    responsibilities: [
      "Architect and lead development of scalable, cloud-native services using C# 12, .NET 8, and ASP.NET Core.",
      "Design Azure cloud architecture leveraging Azure App Services, Functions, Service Bus, and Azure SQL.",
      "Implement domain-driven design, clean architecture, and CQRS patterns with MediatR.",
      "Oversee database design and performance optimization in SQL Server and Cosmos DB.",
      "Enforce rigorous security standards including Azure Active Directory / Entra ID, OAuth2, and Key Vault."
    ],
    requiredSkills: [
      "8+ years in professional software development with .NET and C#.",
      "Extensive experience architecting microservices on Microsoft Azure cloud.",
      "Mastery of Entity Framework Core, LINQ, and advanced SQL tuning.",
      "Proven leadership mentoring engineering teams and defining coding standards."
    ],
    preferredSkills: [
      "Microsoft Certified: Azure Solutions Architect Expert.",
      "Experience with event streaming using Azure Event Hubs or Kafka.",
      "Familiarity with Blazor or modern frontend frameworks."
    ]
  },
  {
    id: "IT015",
    title: "Mobile Application Developer (React Native & Flutter)",
    specialization: "Mobile App Development",
    primarySkills: ["React Native", "Flutter", "TypeScript"],
    secondarySkills: ["Dart", "iOS", "Android", "Redux", "REST API"],
    location: "Mumbai",
    experience: "2–5 Years",
    experienceCategory: "2-5",
    employmentType: "Contract",
    workArrangement: "Remote — India",
    salary: "₹15,00,000 – ₹21,00,000 PA (Illustrative benchmark)",
    postedDate: "2026-11-06",
    isDemo: true,
    overview: "Craft smooth cross-platform mobile experiences for both iOS and Android platforms with 60fps animations and offline-first capabilities.",
    responsibilities: [
      "Build and publish cross-platform mobile apps using React Native and Flutter frameworks.",
      "Integrate native iOS and Android SDK modules and bridges where high-performance capabilities are required.",
      "Implement offline storage, state management, and seamless background push notifications.",
      "Manage app store release lifecycles on Apple App Store Connect and Google Play Console.",
      "Profile and optimize memory usage, startup times, and frame rates across diverse device form factors."
    ],
    requiredSkills: [
      "3+ years building cross-platform mobile applications in production with React Native or Flutter.",
      "Proficient in TypeScript/JavaScript and Dart languages.",
      "Experience integrating REST APIs, WebSockets, and third-party SDKs.",
      "Demonstrated experience publishing and maintaining apps in the App Store and Play Store."
    ],
    preferredSkills: [
      "Native Swift/Kotlin programming knowledge.",
      "Experience with automated mobile CI/CD pipelines (Fastlane / Bitrise).",
      "Knowledge of mobile app security best practices and secure token storage."
    ]
  }
];

// Helper functions for easy querying across pages
if (typeof window !== 'undefined') {
  window.IT_JOBS_DATA = IT_JOBS_DATA;

  window.getJobById = function(id) {
    if (!id) return null;
    return IT_JOBS_DATA.find(job => job.id.toLowerCase() === id.trim().toLowerCase()) || null;
  };

  window.getJobsBySpecialization = function(specialization) {
    if (!specialization) return [];
    return IT_JOBS_DATA.filter(job => job.specialization.toLowerCase() === specialization.trim().toLowerCase());
  };

  window.getJobsBySkill = function(skill) {
    if (!skill) return [];
    const lowerSkill = skill.trim().toLowerCase();
    return IT_JOBS_DATA.filter(job => 
      job.primarySkills.some(s => s.toLowerCase() === lowerSkill) ||
      job.secondarySkills.some(s => s.toLowerCase() === lowerSkill)
    );
  };
}
