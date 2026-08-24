export const siteConfig = {
  name: "Nexora",
  tagline: "We Build Digital Products That Move Businesses Forward",
  description:
    "From ERP and CRM platforms to high-performance websites, mobile applications, and custom business software — we design and build technology around the way your business works.",
  url: "https://nexora.example.com",
  email: "suvedasathees24@gmail.com",
  phone: "+91 8667709294",
  whatsapp: "918667709294",
  location: "Remote-first, serving clients worldwide",
  businessHours: "Monday – Friday, 9:00 AM – 6:00 PM (CET)",
  social: {
    linkedin: "",
    twitter: "",
    github: "",
    instagram: "",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  description: string;
  features: string[];
  hasPage: boolean;
};

export const services: Service[] = [
  {
    slug: "erp-development",
    title: "ERP Development",
    short:
      "Custom enterprise resource planning systems designed around business workflows.",
    icon: "Building2",
    description:
      "We build ERP systems that unify your operations — from finance and inventory to HR and reporting — into a single platform that mirrors how your business actually runs.",
    features: [
      "HR & Payroll",
      "Finance & Accounting",
      "Inventory Management",
      "Purchase Management",
      "Sales Management",
      "Production Planning",
      "Role-Based Access",
      "Reporting & Analytics",
    ],
    hasPage: true,
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    short:
      "Customer and sales management platforms that turn leads into long-term relationships.",
    icon: "Users",
    description:
      "We build CRM platforms that help your sales team track every lead, follow-up, and deal — so nothing falls through the cracks and every customer relationship is nurtured.",
    features: [
      "Lead Management",
      "Sales Pipeline",
      "Customer Profiles",
      "Follow-up Tracking",
      "Task Management",
      "Communication History",
      "Sales Analytics",
      "User Permissions",
    ],
    hasPage: true,
  },
  {
    slug: "website-development",
    title: "Website Development",
    short:
      "High-performance websites designed for credibility and conversion.",
    icon: "Globe",
    description:
      "We design and build websites that load fast, rank well, and convert visitors into customers — from corporate sites to full e-commerce platforms.",
    features: [
      "Corporate Websites",
      "Business Websites",
      "Landing Pages",
      "Portfolio Websites",
      "E-commerce Stores",
      "Custom Web Applications",
    ],
    hasPage: true,
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short:
      "Modern mobile applications for business and customer engagement.",
    icon: "Smartphone",
    description:
      "We build native and cross-platform mobile applications that keep your customers engaged and your operations running — on Android, iOS, and everything in between.",
    features: [
      "Android Applications",
      "iOS Applications",
      "Cross-Platform Apps",
      "Customer Apps",
      "Business Apps",
      "Admin Dashboards",
    ],
    hasPage: true,
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    short:
      "Software designed specifically around unique business requirements.",
    icon: "Code2",
    description:
      "When off-the-shelf software doesn't fit, we build custom solutions that solve your exact business problem — designed, developed, and deployed around your workflow.",
    features: [
      "Business Management Systems",
      "Internal Portals",
      "Workflow Systems",
      "Employee Systems",
      "Inventory Platforms",
      "Booking Systems",
      "Reporting Dashboards",
      "Industry-Specific Platforms",
    ],
    hasPage: true,
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short:
      "Modern interfaces focused on usability, clarity, and conversion.",
    icon: "Palette",
    description:
      "We design interfaces that are intuitive, accessible, and beautiful — so your users can accomplish their goals without friction.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Interface Design",
      "Design Systems",
      "Usability Testing",
    ],
    hasPage: false,
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    short:
      "Automate repetitive workflows and reduce manual processes.",
    icon: "Workflow",
    description:
      "We identify repetitive tasks in your business and automate them — freeing your team to focus on work that actually requires human judgment.",
    features: [
      "Workflow Automation",
      "Process Optimization",
      "Integration Automation",
      "Data Sync",
      "Notification Systems",
      "Scheduled Tasks",
    ],
    hasPage: false,
  },
  {
    slug: "api-backend-development",
    title: "API & Backend Development",
    short:
      "Secure, scalable backend systems and integrations.",
    icon: "Server",
    description:
      "We build the backend infrastructure that powers your applications — secure APIs, scalable databases, and reliable integrations with third-party services.",
    features: [
      "REST & GraphQL APIs",
      "Authentication Systems",
      "Database Design",
      "Third-Party Integrations",
      "Microservices",
      "Webhook Systems",
    ],
    hasPage: false,
  },
  {
    slug: "cloud-deployment",
    title: "Cloud & Deployment",
    short:
      "Deploy applications using modern cloud infrastructure.",
    icon: "Cloud",
    description:
      "We deploy and manage your applications on modern cloud infrastructure — ensuring reliability, scalability, and security from day one.",
    features: [
      "Cloud Architecture",
      "CI/CD Pipelines",
      "Containerization",
      "Load Balancing",
      "Monitoring & Alerts",
      "Backup & Recovery",
    ],
    hasPage: false,
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    short:
      "Integrate AI-powered functionality into suitable business applications.",
    icon: "BrainCircuit",
    description:
      "We integrate AI where it genuinely adds value — from intelligent search and recommendation systems to automated document processing and predictive analytics.",
    features: [
      "AI-Powered Search",
      "Document Processing",
      "Predictive Analytics",
      "Chatbot Integration",
      "Recommendation Systems",
      "Natural Language Processing",
    ],
    hasPage: false,
  },
];

export type Project = {
  slug: string;
  name: string;
  industry: string;
  category: "Web" | "ERP" | "CRM" | "Mobile" | "E-commerce" | "Custom Software";
  technologies: string[];
  short: string;
  description: string;
  challenge: string;
  approach: string;
  solution: string;
  keyFeatures: string[];
  outcome: string;
  liveUrl?: string;
  hasResults: boolean;
  results?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "junior-junction-school",
    name: "Junior Junction School",
    industry: "Education & Academy",
    category: "Web",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"],
    short:
      "Interactive digital campus portal with smart admissions, dynamic curriculum browser, and parent-teacher communication suite.",
    description:
      "A bespoke, interactive web portal engineered for Junior Junction School to streamline digital admissions, student lifecycle management, event calendars, and parent notifications with sub-second page loads.",
    challenge:
      "The institution relied on paper inquiry forms and fragmented social messaging, creating high administrative overhead during peak admission cycles and delayed parent updates.",
    approach:
      "We engineered a child-centric, highly accessible, and lightning-fast web experience with integrated online application pipelines, automated SMS/email triggers, and an intuitive administrative backend.",
    solution:
      "Built a secure Next.js digital campus featuring digital admissions with instant fee generation, interactive curriculum showcases, dynamic photo/video galleries, and real-time school announcement broadcasts.",
    keyFeatures: [
      "Online Admission & Digital Application Tracking Pipeline",
      "Interactive Curriculum & Grade-Wise Activity Explorer",
      "Real-Time Parent Announcement & Event Calendar Hub",
      "High-Performance Responsive UI with 100% Mobile Optimization",
      "Administrative Portal for Inquiry Management & Document Verification",
      "Automated SMS & WhatsApp Parent Notification Dispatcher",
    ],
    outcome:
      "Reduced admission processing cycle by 65% and unified all institutional communications on a single branded portal.",
    liveUrl: "https://www.juniorjunctionerode.com/",
    hasResults: true,
    results: [
      { label: "Admission Turnaround", value: "3x Faster" },
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Parent Engagement", value: "+140%" },
    ],
  },
  {
    slug: "portfolio",
    name: "Modern Interactive Portfolio",
    industry: "Design & Technology",
    category: "Custom Software",
    technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    short:
      "Ultra-modern, 3D interactive portfolio platform with micro-interactions, dark/light aesthetics, and fluid layout physics.",
    description:
      "A flagship creative engineering portfolio built to showcase high-tier digital craftsmanship with interactive WebGL shaders, smooth inertial scrolling, dynamic case study viewers, and modular component design.",
    challenge:
      "Standard static portfolios failed to convey deep technical capabilities, interactive architecture design, and modern front-end execution excellence.",
    approach:
      "We designed an editorial 3D canvas experience with hardware-accelerated micro-animations, typography hierarchy, and instant interactive feedback.",
    solution:
      "Developed a custom portfolio system powered by Three.js particle backgrounds, reactive cursor physics, case study deep-dives, and seamless page transitions.",
    keyFeatures: [
      "Interactive 3D WebGL Particle Background & Shader Mesh",
      "Dynamic Bento-Grid Project Showcase with Live Filters",
      "Fluid Layout Physics & Smooth Inertial Scrolling",
      "Interactive Telemetry & Live Tech Stack Breakdown",
      "Direct Interactive Contact Console with WhatsApp Integration",
      "Zero-Layout-Shift Responsive Architecture across all Devices",
    ],
    outcome:
      "Achieved a 60fps fluid visual experience that converts prospective enterprise leads through undeniable visual craftsmanship.",
    hasResults: true,
    results: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Conversion Rate", value: "+85%" },
      { label: "Client Inquiries", value: "4x Lift" },
    ],
  },
  {
    slug: "myjob-campus-website",
    name: "MyJob Campus Website",
    industry: "EdTech & Career",
    category: "Web",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Redis"],
    short:
      "Full-scale campus recruitment and corporate placement ecosystem connecting universities, graduating students, and enterprise recruiters.",
    description:
      "An end-to-end recruitment platform engineered to automate campus hiring drives, skill-based job matching, automated resume parsing, and multi-stage corporate interview scheduling.",
    challenge:
      "University placement cells struggled to manage hundreds of simultaneous hiring pipelines across disparate spreadsheets, leading to scheduling collisions and missed student applications.",
    approach:
      "We designed a multi-tenant role-based platform that unifies students, campus placement officers, and corporate talent acquisition teams into one synchronized workflow.",
    solution:
      "Built a high-concurrency placement engine with student profile builders, automated eligibility filters, company drive registration portals, and live interview slot dispatchers.",
    keyFeatures: [
      "Multi-Role Portals for Students, Colleges, and Corporate Recruiters",
      "Automated Eligibility Filter & Instant Drive Application Engine",
      "Resume Builder with Structured Skill Matrix Verification",
      "Multi-Stage Interview Scheduling with Calendar Synchronization",
      "Live Drive Analytics Dashboard for Placement Officers",
      "Direct WhatsApp & Email Status Notifications for Applicants",
    ],
    outcome:
      "Successfully streamlined campus placement drives for thousands of students with zero scheduling errors.",
    hasResults: true,
    results: [
      { label: "Drive Automation", value: "100%" },
      { label: "Placement Velocity", value: "2.5x Faster" },
      { label: "Application Processing", value: "50k+/mo" },
    ],
  },
  {
    slug: "erp-for-magnertia",
    name: "ERP for Magnertia",
    industry: "Manufacturing & Industrial",
    category: "ERP",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Redis", "Tailwind CSS"],
    short:
      "Comprehensive industrial manufacturing ERP unifying multi-plant inventory, production planning, procurement, and GST billing.",
    description:
      "A custom-built enterprise resource planning system tailored for Magnertia's precision manufacturing operations, replacing legacy paper registers with automated production lines and inventory telemetry.",
    challenge:
      "Disconnected inventory records between the manufacturing plant and raw material warehouses caused production downtime, inaccurate billing, and blind spots in material procurement.",
    approach:
      "We spent two weeks mapping factory-floor material flows, machine cycle times, and dispatch operations to build a custom ERP that matches their exact shopfloor processes.",
    solution:
      "Delivered a centralized, role-based ERP platform covering bill of materials (BOM), automated vendor purchase orders, inventory barcode tracking, GST-compliant invoicing, and dispatch logistics.",
    keyFeatures: [
      "Multi-Warehouse Raw Material & Finished Goods Inventory Engine",
      "Dynamic Bill of Materials (BOM) & Machine Production Scheduling",
      "Automated Supplier Purchase Orders triggered by Stock Thresholds",
      "GST-Compliant Invoicing, E-Way Bill Generation & Ledger Accounting",
      "Shopfloor Operator Tablet UI with Barcode Batch Scanning",
      "Executive Dashboard with Real-Time Plant Output & Cost Telemetry",
    ],
    outcome:
      "Eliminated manufacturing material stockouts and reduced monthly billing reconciliation time from 5 days to 2 hours.",
    hasResults: true,
    results: [
      { label: "Stock Discrepancies", value: "-98%" },
      { label: "Billing Time", value: "-95%" },
      { label: "Plant Throughput", value: "+32%" },
    ],
  },
  {
    slug: "mobile-app-for-ev-charge-station",
    name: "Mobile App for EV Charge Station",
    industry: "CleanTech & E-Mobility",
    category: "Mobile",
    technologies: ["React Native", "Node.js", "WebSockets", "Firebase", "PostgreSQL", "Mapbox"],
    short:
      "Real-time EV charging mobile app with live station locator, slot booking, OCPP charger control, and instant in-app payment.",
    description:
      "A high-velocity cross-platform mobile application empowering electric vehicle drivers to find nearby compatible charging plugs, reserve charging slots in advance, monitor live kW flow, and pay seamlessly.",
    challenge:
      "EV owners faced charger anxiety due to stale station availability data, broken chargers, and clunky on-site payment flows.",
    approach:
      "We built a real-time IoT bridge connected to the OCPP 1.6/2.0 protocol on the charger hardware, feeding live port statuses into a responsive mobile map experience.",
    solution:
      "Engineered an intuitive mobile app with interactive Mapbox station search, connector-type filtering (CCS2, Type 2, GB/T), RFID/QR code charger unlocking, live charging telemetry, and digital wallet integration.",
    keyFeatures: [
      "Interactive Station Map with Live Port Availability & Navigation",
      "Connector-Type & Charging Speed (kW) Smart Filter Matrix",
      "Advance Slot Reservation & Queue Management System",
      "Instant Charger Start/Stop via QR Code & IoT WebSockets",
      "Live Charging Telemetry (Voltage, Current, Battery %, Cost)",
      "Integrated Digital Wallet, UPI, and Automatic Invoicing",
    ],
    outcome:
      "Provided an effortless charging experience with 99.98% session connection reliability across hundreds of charging points.",
    hasResults: true,
    results: [
      { label: "Active Drivers", value: "25,000+" },
      { label: "IoT Connection SLA", value: "99.98%" },
      { label: "Average Booking Time", value: "< 15 Sec" },
    ],
  },
  {
    slug: "website-for-ev-station",
    name: "Website for EV Station Network",
    industry: "E-Mobility & Infrastructure",
    category: "Web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet", "Node.js"],
    short:
      "Public-facing commercial portal for EV charging network with interactive station finder, tariff calculator, and franchise investor portal.",
    description:
      "A modern, high-conversion commercial website built for an electric vehicle charging network to drive fleet partnerships, showcase charging infrastructure coverage, and onboard host partners.",
    challenge:
      "The charging network needed a scalable digital storefront to attract enterprise commercial property owners, fleet operators, and retail EV customers.",
    approach:
      "We developed an engaging, high-performance web platform featuring interactive tariff estimators, coverage maps, and partner ROI calculators.",
    solution:
      "Built a Next.js web application with dynamic station locator maps, EV savings ROI calculator, franchise partner onboarding funnel, and enterprise fleet management inquiries.",
    keyFeatures: [
      "Interactive Nationwide EV Charging Station Locator Map",
      "Dynamic EV vs Petrol Fuel Savings & Tariff Calculator",
      "Franchise & Property Host Partner Application Funnel",
      "Fleet Charging Infrastructure Portal with Invoicing Specs",
      "SEO-Optimized Content Hub for EV Drivers & Station Hosts",
      "Direct API Sync with Live Network Charger Availability",
    ],
    outcome:
      "Generated over 400+ qualified franchise host inquiries and established a premier brand presence in the regional EV ecosystem.",
    hasResults: true,
    results: [
      { label: "Host Partner Inquiries", value: "400+" },
      { label: "Page Load Speed", value: "0.6s" },
      { label: "Organic Search Lift", value: "+220%" },
    ],
  },
  {
    slug: "erp-for-rpc",
    name: "ERP for RPC",
    industry: "Enterprise Operations",
    category: "ERP",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
    short:
      "Enterprise operations ERP platform featuring strict role-based access control, asset lifecycle tracking, audit logs, and analytics.",
    description:
      "A mission-critical enterprise resource planning system custom-architected for RPC operations, unifying human resource workflows, physical asset maintenance, financial budgeting, and regulatory compliance.",
    challenge:
      "Managing complex enterprise assets and audit compliance across multiple regional branches was slowed down by fragmented legacy databases and unverified document trails.",
    approach:
      "We built a microservices-based, auditable architecture with strict role-based access control (RBAC) and immutable transaction logs.",
    solution:
      "Delivered a secure enterprise ERP suite providing comprehensive asset lifecycle management, automated maintenance scheduling, digital approval workflows, and instant board reporting.",
    keyFeatures: [
      "Granular Role-Based Access Control (RBAC) with Multi-Tier Approval Chains",
      "Enterprise Asset Lifecycle & Preventative Maintenance Tracker",
      "Consolidated Multi-Branch Financial Budgeting & Ledger Tracking",
      "Immutable Audit Log Trail for 100% Regulatory Compliance",
      "Automated Executive Reporting with PDF/Excel Export Engine",
      "High-Concurrency PostgreSQL Architecture with Redis In-Memory Caching",
    ],
    outcome:
      "Delivered complete operational visibility across all branches with zero audit non-compliance flags.",
    hasResults: true,
    results: [
      { label: "Audit Accuracy", value: "100%" },
      { label: "Approval Latency", value: "-80%" },
      { label: "System Uptime", value: "99.99%" },
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  expertise: string;
  bio: string;
  social: { linkedin?: string; twitter?: string; github?: string };
};

export const team: TeamMember[] = [
  {
    name: "[Founder Name]",
    role: "Founder / Director",
    expertise: "Strategy, Architecture, Client Relations",
    bio: "Leads the company vision and oversees project architecture and client partnerships.",
    social: {},
  },
  {
    name: "[PM Name]",
    role: "Project Manager",
    expertise: "Agile Delivery, Requirements, Planning",
    bio: "Keeps projects on schedule and ensures every deliverable matches the client's goals.",
    social: {},
  },
  {
    name: "[Developer Name]",
    role: "Full Stack Developer",
    expertise: "Backend, APIs, Database Design",
    bio: "Builds scalable backend systems and the APIs that power every application.",
    social: {},
  },
  {
    name: "[Developer Name]",
    role: "Frontend Developer",
    expertise: "React, Next.js, UI Implementation",
    bio: "Turns designs into fast, accessible, and responsive user interfaces.",
    social: {},
  },
  {
    name: "[Developer Name]",
    role: "Backend Developer",
    expertise: "Node.js, Java, System Architecture",
    bio: "Designs and develops the server-side architecture that supports complex business logic.",
    social: {},
  },
  {
    name: "[Designer Name]",
    role: "UI/UX Designer",
    expertise: "User Research, Prototyping, Design Systems",
    bio: "Creates intuitive interfaces and ensures every product is a pleasure to use.",
    social: {},
  },
  {
    name: "[QA Name]",
    role: "QA / Support",
    expertise: "Testing, Quality Assurance, Client Support",
    bio: "Ensures every release meets quality standards and supports clients after launch.",
    social: {},
  },
];

export type TechCategory = {
  category: string;
  icon: string;
  technologies: string[];
};

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    technologies: ["React", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    icon: "Server",
    technologies: ["Node.js", "Express.js", "Java", "Python"],
  },
  {
    category: "Database",
    icon: "Database",
    technologies: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Cloud",
    icon: "Cloud",
    technologies: ["Google Cloud", "AWS", "Cloudflare"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    technologies: ["Git", "GitHub", "Figma", "VS Code", "Docker"],
  },
];

export const faqs = [
  {
    question: "What type of software do you build?",
    answer:
      "We build custom ERP systems, CRM platforms, websites, web applications, mobile apps, and custom business software. Every solution is designed around the specific needs of the business.",
  },
  {
    question: "Can you build custom ERP systems?",
    answer:
      "Yes. We design ERP systems that unify your operations — from finance and inventory to HR and reporting — into a single platform built around your workflows.",
  },
  {
    question: "Can you build CRM software?",
    answer:
      "Yes. We build CRM platforms with lead management, sales pipelines, customer profiles, follow-up tracking, and analytics — tailored to how your sales team actually works.",
  },
  {
    question: "Do you develop mobile applications?",
    answer:
      "Yes. We build native and cross-platform mobile applications for Android and iOS, including customer apps, business apps, and admin dashboards.",
  },
  {
    question: "Do you work with existing systems?",
    answer:
      "Yes. We can integrate with existing systems, migrate data from legacy platforms, and build new modules that work alongside your current infrastructure.",
  },
  {
    question: "Can you integrate APIs?",
    answer:
      "Yes. We build and integrate REST and GraphQL APIs, connect third-party services, and handle authentication, webhooks, and data synchronization.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. We offer ongoing maintenance, monitoring, and support to keep your product running smoothly and evolving with your business.",
  },
  {
    question: "How long does development take?",
    answer:
      "Timelines depend on scope, complexity, and integrations. After an initial discovery conversation, we provide a detailed timeline broken down by phase.",
  },
  {
    question: "How do you calculate project cost?",
    answer:
      "Cost depends on scope, features, design complexity, integrations, technology, timeline, and support requirements. We provide a detailed quote after understanding your needs.",
  },
  {
    question: "How do we start a project?",
    answer:
      "Reach out through our contact form or email. We'll schedule a discovery call to understand your business, goals, and challenges — then provide a proposal with scope, timeline, and cost.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, goals, users, and challenges. No code is written until we know what problem we're solving.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define requirements, architecture, scope, and a roadmap so every stakeholder knows what's being built and when.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create the user experience and interface — wireframes, prototypes, and a design system that guides development.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build the product using modern technologies, with regular reviews and incremental delivery.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "We test functionality, responsiveness, security, and performance to ensure the product works flawlessly.",
  },
  {
    number: "06",
    title: "Deploy",
    description:
      "We launch the application on modern cloud infrastructure with monitoring and rollback plans in place.",
  },
  {
    number: "07",
    title: "Support",
    description:
      "We maintain, monitor, improve, and scale the product long after launch.",
  },
];

export const whyChooseUs = [
  {
    title: "Business-First Thinking",
    description:
      "We understand the business problem before choosing the technology. The solution serves the business — not the other way around.",
    icon: "Target",
  },
  {
    title: "Custom Solutions",
    description:
      "We build around your requirements, not around a template. Every system is designed to fit how your business actually operates.",
    icon: "Puzzle",
  },
  {
    title: "Modern Technology",
    description:
      "We use appropriate, proven modern technologies — chosen for reliability, scalability, and maintainability, not hype.",
    icon: "Cpu",
  },
  {
    title: "Transparent Development",
    description:
      "We keep clients informed throughout the process with regular reviews, clear milestones, and honest communication.",
    icon: "Eye",
  },
  {
    title: "Scalable Architecture",
    description:
      "We build systems that grow with your business — from your first hundred users to your first million.",
    icon: "TrendingUp",
  },
  {
    title: "Long-Term Support",
    description:
      "We don't disappear after launch. We continue supporting, monitoring, and improving the product as your business evolves.",
    icon: "LifeBuoy",
  },
];

export const pricingCategories = [
  {
    type: "Websites",
    description: "Corporate, portfolio, and business websites",
    price: "Starting from [PRICE]",
    features: [
      "Custom design",
      "Responsive development",
      "SEO optimization",
      "CMS integration",
      "Contact forms",
      "Analytics setup",
    ],
  },
  {
    type: "Web Applications",
    description: "Custom web apps and dashboards",
    price: "Custom quotation",
    features: [
      "Custom architecture",
      "User authentication",
      "Database design",
      "API development",
      "Admin dashboard",
      "Ongoing support",
    ],
  },
  {
    type: "ERP Systems",
    description: "Enterprise resource planning platforms",
    price: "Custom quotation",
    features: [
      "Module-based design",
      "Role-based access",
      "Real-time reporting",
      "Workflow automation",
      "Third-party integration",
      "Long-term support",
    ],
  },
  {
    type: "CRM Systems",
    description: "Sales and customer management platforms",
    price: "Custom quotation",
    features: [
      "Lead pipeline",
      "Customer profiles",
      "Follow-up automation",
      "Sales analytics",
      "Team permissions",
      "Integration support",
    ],
  },
  {
    type: "Mobile Applications",
    description: "Native and cross-platform apps",
    price: "Custom quotation",
    features: [
      "iOS and Android",
      "Offline support",
      "Push notifications",
      "API integration",
      "Admin dashboard",
      "App store deployment",
    ],
  },
  {
    type: "Custom Software",
    description: "Bespoke solutions for unique problems",
    price: "Custom quotation",
    features: [
      "Requirement analysis",
      "Custom architecture",
      "Workflow automation",
      "Reporting dashboards",
      "Integration support",
      "Ongoing maintenance",
    ],
  },
];

export const projectTypes = [
  "Website",
  "Web Application",
  "ERP",
  "CRM",
  "Mobile App",
  "E-commerce",
  "Custom Software",
  "UI/UX",
  "Automation",
  "Other",
];

export const budgetRanges = [
  "₹5,000 – ₹15,000",
  "₹15,000 – ₹20,000",
  "₹35,000 – ₹50,000",
  "₹50,000 – ₹70,000",
  "₹70,000 – ₹90,000",
  "₹90,000+",
  "Not sure yet",
];

export const timelineOptions = [
  "Less than 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "More than 6 months",
  "Flexible",
];

export const contactMethods = ["Email", "Phone", "WhatsApp", "Video Call"];
