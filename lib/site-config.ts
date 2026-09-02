export const siteConfig = {
  name: "Intouch Global Tech",
  shortName: "Intouch",
  tagline: "Leading Web Development & IT Solutions",
  description:
    "Intouch Global Tech is a leading web development company offering complete web applications, custom software, ERP, HRMS, CRM, Hospital & Pharmacy management systems, SEO, and digital business solutions for global SMB enterprises.",
  url: "https://intouchglobaltech.com",
  email: "intouchglobaltech@gmail.com",
  phone: "+91 8667709294",
  whatsapp: "918667709294",
  businessHours: "Monday – Saturday, 9:00 AM – 7:00 PM (IST)",
  vision:
    "A Leading IT Enterprise Committed to Enhance Global Small and Medium Business",
  mission:
    "To be an emerging US IT Corporation Serving to Global Small and Medium Business (SMB) Enterprises thru Innovative IT Business Solutions",
  values:
    "Intouch Global Tech is committed to achieve “Business Excellence” by consistently delivering cost effective and quality business solutions to exceed our customer’s expectations.",
  seoKeywords: [
    "web development company",
    "website design company",
    "web design company",
    "web development services",
    "Static & Dynamic Website",
    "Best SEO Company",
    "E-Commerce website designing",
    "Logo Designing",
    "ERP Development",
    "HRMS Application",
    "CRM Application",
    "Billing Software",
    "Hospital Management System",
    "Pharmacy Management System",
    "Wordpress Development",
    "SMS Gateway",
    "Email Marketing",
    "Whatsapp Marketing",
    "Domain and Hosting Services",
  ],
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  category: "Web & E-Commerce" | "Enterprise Software" | "Marketing & SEO" | "Cloud & Strategy";
  badge?: string;
  description: string;
  features: string[];
  hasPage: boolean;
};

export const services: Service[] = [
  // --- WEB & E-COMMERCE ---
  {
    slug: "web-development",
    title: "Web Development",
    short: "Static & dynamic websites, responsive web apps, and high-performance custom portals.",
    icon: "Globe",
    category: "Web & E-Commerce",
    badge: "Static & Dynamic",
    description:
      "As a premier web development company, we engineer responsive, ultra-fast static and dynamic websites and custom web applications tailored to your business goals.",
    features: [
      "Static & Dynamic Website Designing",
      "Custom Web Applications Development",
      "Responsive Website Design (Mobile-First)",
      "Website Redesigning & UI Modernization",
      "Blog Design and Development",
      "Cross-Browser Compatibility & Speed Optimization",
      "Full Source Code & Admin Control",
      "SEO-Ready Architecture",
    ],
    hasPage: true,
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    short: "High-converting online stores, multi-vendor marketplaces, and secure checkout gateways.",
    icon: "ShoppingBag",
    category: "Web & E-Commerce",
    badge: "E-Commerce Storefronts",
    description:
      "Complete e-commerce website design and development with product catalog management, payment gateway integration, order tracking, and inventory sync for retail and wholesale businesses.",
    features: [
      "E-Commerce Website Designing",
      "Custom Shopping Cart & Checkout Funnels",
      "Payment Gateway & UPI Integration",
      "Inventory & Order Management",
      "Discount & Coupon Management",
      "Customer Account & Wishlist Portals",
      "Multi-Currency & Tax Config (GST)",
      "Mobile-Optimized Storefronts",
    ],
    hasPage: true,
  },
  {
    slug: "wordpress-cms-development",
    title: "CMS & WordPress Development",
    short: "Dynamic content management systems, custom WordPress themes, and headless CMS builds.",
    icon: "Layers",
    category: "Web & E-Commerce",
    badge: "Custom CMS",
    description:
      "Easily update your website without coding. We create bespoke WordPress themes, secure CMS architectures, and intuitive dashboards for effortless content updates.",
    features: [
      "Custom WordPress Theme Development",
      "Headless CMS & Content Management",
      "Plugin Development & Customization",
      "Visual Page Builder Integration",
      "WordPress Speed Optimization",
      "Database & Security Hardening",
      "Automated Daily Backups",
      "Blog & News Publishing Portals",
    ],
    hasPage: true,
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance & Support",
    short: "Continuous updates, security patches, speed optimization, and 24/7 uptime monitoring.",
    icon: "Wrench",
    category: "Web & E-Commerce",
    badge: "24/7 Support",
    description:
      "Keep your website running smoothly, securely, and updated. We handle regular bug fixes, server patches, content updates, and performance tuning.",
    features: [
      "Regular Security Audits & Patching",
      "Speed & Core Web Vitals Optimization",
      "Content & Banner Updates",
      "Automated Offsite Backups",
      "SSL Certificate & Domain Renewal Care",
      "Malware Removal & Firewall Protection",
      "Dedicated Technical WhatsApp Support",
      "Monthly Health & Performance Reports",
    ],
    hasPage: true,
  },
  {
    slug: "web-designing-branding",
    title: "Web Designing & Logo Branding",
    short: "Creative UI/UX design, brand identity, and corporate logo designing.",
    icon: "Palette",
    category: "Web & E-Commerce",
    badge: "Logo & Brand Design",
    description:
      "Crafting memorable visual identities that build trust. From corporate logo designing to complete digital branding guidelines and high-fidelity UI/UX design systems.",
    features: [
      "Corporate Logo Designing & Brand Identity",
      "Color Palettes & Typography Guidelines",
      "Figma UI/UX Prototypes & Wireframing",
      "Marketing Collateral & Banner Graphics",
      "Social Media Brand Kits",
      "Iconography & Design Systems",
      "Component Libraries for Web & Mobile",
      "Print & Vector Ready Asset Delivery",
    ],
    hasPage: false,
  },

  // --- ENTERPRISE SOFTWARE ---
  {
    slug: "erp-development",
    title: "ERP Development",
    short: "Custom enterprise resource planning platforms unifying inventory, finance, and operations.",
    icon: "Building2",
    category: "Enterprise Software",
    badge: "Enterprise Grade",
    description:
      "We design custom ERP systems that unify your entire business operations — finance, inventory, multi-warehouse logistics, purchase, sales, and analytics — into a single synchronized platform.",
    features: [
      "Multi-Warehouse Inventory Control",
      "Finance, Ledger & GST Invoicing",
      "Purchase & Vendor Order Management",
      "Sales Pipeline & Dispatch Logistics",
      "Production Planning & Bill of Materials",
      "Role-Based Multi-Tier Permissions",
      "Real-Time Executive Analytics Dashboards",
      "Automated PDF & Excel Report Exports",
    ],
    hasPage: true,
  },
  {
    slug: "hrms-application",
    title: "HRMS Application",
    short: "Human Resource Management System with payroll, biometric attendance, and leave tracking.",
    icon: "Users2",
    category: "Enterprise Software",
    badge: "Workforce Management",
    description:
      "Automate your entire workforce lifecycle. Our HRMS platform manages biometric attendance, automated salary calculations, tax deductions, leave approvals, and employee self-service portals.",
    features: [
      "Biometric & Attendance Sync",
      "Automated Payroll & Salary Slip Generator",
      "Leave & Shift Management Workflows",
      "Employee Self-Service (ESS) Mobile & Web",
      "PF, ESI, TDS & Statutory Compliance",
      "Performance Appraisal & Goal Tracking",
      "Employee Onboarding & Document Vault",
      "HR Analytics & Department Telemetry",
    ],
    hasPage: true,
  },
  {
    slug: "crm-application",
    title: "CRM Application",
    short: "Customer relationship management software with lead tracking, sales pipelines, and follow-ups.",
    icon: "Users",
    category: "Enterprise Software",
    badge: "Sales Velocity",
    description:
      "Convert more leads and retain clients. Our CRM application empowers sales teams with lead capture, multi-stage pipelines, automated WhatsApp/email reminders, and closed-deal analytics.",
    features: [
      "Omnichannel Lead Capture & Distribution",
      "Interactive Visual Sales Pipeline Stages",
      "Automated WhatsApp & Email Follow-up Triggers",
      "Customer Call & Meeting History Logs",
      "Quotation & Proposal Generator",
      "Sales Representative Target Tracking",
      "Customer Lifecycle & Renewal Alerts",
      "Granular Branch & Role Access Control",
    ],
    hasPage: true,
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    short: "Tailor-made software solutions engineered specifically around your unique business workflows.",
    icon: "Code2",
    category: "Enterprise Software",
    badge: "100% Bespoke",
    description:
      "When off-the-shelf software fails to match your process, we engineer bespoke software solutions from scratch with 100% source code ownership and zero monthly license fees.",
    features: [
      "Workflow Automation Engines",
      "Internal Operations Portals",
      "Custom Database Architecture",
      "Legacy System Migration & Modernization",
      "Real-Time IoT & Device Data Sync",
      "API Integrations & Webhook Hubs",
      "100% Sovereign Source Code Ownership",
      "Zero Per-User Recurring License Fees",
    ],
    hasPage: true,
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System (HMS)",
    short: "Complete HMS software for patient registration, OPD/IPD, doctor scheduling, and lab reports.",
    icon: "Activity",
    category: "Enterprise Software",
    badge: "Healthcare Tech",
    description:
      "Comprehensive Hospital Management System (HMS) designed for clinics, multi-specialty hospitals, and healthcare networks to manage patient care, billing, electronic health records, and wards.",
    features: [
      "OPD & IPD Patient Registration",
      "Doctor Appointment Scheduling & Token Display",
      "Electronic Medical Records (EMR / EHR)",
      "Diagnostic Lab & Radiology Reporting",
      "Bed & Operation Theatre (OT) Allocation",
      "Integrated Hospital Billing & Insurance Claims",
      "Discharge Summary & Prescription Generator",
      "Multi-Department Doctor & Nurse Portals",
    ],
    hasPage: true,
  },
  {
    slug: "pharmacy-management-system",
    title: "Pharmacy Management System",
    short: "Retail & wholesale pharmacy software with batch expiry tracking, barcode billing, and reorders.",
    icon: "Pill",
    category: "Enterprise Software",
    badge: "Pharma POS",
    description:
      "Specialized pharmacy software designed to streamline medicine billing, batch-wise expiry alerts, Schedule H/H1 drug registers, distributor purchase orders, and stock reconciliation.",
    features: [
      "High-Speed Barcode Billing with GST",
      "Batch Number & Expiry Date Alert Engine",
      "Distributor Purchase & Margin Tracker",
      "Generic & Substitute Drug Quick Search",
      "Schedule Drug Audit Registers",
      "Automated Low-Stock Reorder Triggers",
      "Multi-Counter POS Billing Terminals",
      "Daily Profit & Sales Reconciliation",
    ],
    hasPage: true,
  },
  {
    slug: "billing-software",
    title: "Billing Software & POS",
    short: "Fast GST-compliant billing software with barcode scanning, receipt printing, and ledger.",
    icon: "Receipt",
    category: "Enterprise Software",
    badge: "Fast GST Billing",
    description:
      "Ultra-fast billing software built for retail stores, wholesale traders, supermarkets, and service businesses. Generates GST invoices in seconds with thermal and laser printer support.",
    features: [
      "One-Click GST Invoice & E-Way Bill Output",
      "Thermal Receipt & Laser Invoice Printing",
      "Barcode & QR Code Scanner Integration",
      "Customer Credit Ledger (Khata / Udhar)",
      "Daily Cash Drawer & UPI Payment Sync",
      "Multi-Rate Tax Support",
      "Inventory Deduction on Every Sale",
      "Offline Billing Mode with Cloud Auto-Sync",
    ],
    hasPage: true,
  },
  {
    slug: "software-maintenance-support",
    title: "Software Maintenance & Support",
    short: "Enterprise SLA support, database optimization, feature upgrades, and bug fix contracts.",
    icon: "ShieldCheck",
    category: "Enterprise Software",
    badge: "SLA Guarantee",
    description:
      "Ensure business continuity with our dedicated software maintenance contracts. We monitor server health, perform periodic database vacuuming, patch vulnerabilities, and roll out feature upgrades.",
    features: [
      "Dedicated L1, L2 & L3 Engineering Support",
      "Performance Tuning & Database Indexing",
      "Security Patching & Vulnerability Mitigation",
      "Zero-Downtime Backup & Disaster Recovery",
      "New Feature & Module Additions",
      "Server Scaling & Load Balancing",
      "Guaranteed SLA Response Timelines",
      "Direct Senior Developer Escalation Line",
    ],
    hasPage: false,
  },

  // --- MARKETING & SEO ---
  {
    slug: "seo-search-engine-optimization",
    title: "Search Engine Optimization (SEO)",
    short: "Rank #1 on Google. Organic search optimization for continuous high-intent traffic and leads.",
    icon: "Search",
    category: "Marketing & SEO",
    badge: "Top SEO Solutions",
    description:
      "We drive high-intent customer traffic to your website through on-page technical optimization, keyword research, local search optimization, and authority link building.",
    features: [
      "Complete On-Page & Technical SEO Auditing",
      "High-Intent Keyword Research & Strategy",
      "Core Web Vitals Speed & Layout Tuning",
      "Google Business Profile Search Optimization",
      "On-Page Content & Meta Tag Optimization",
      "High-Authority Backlink Acquisition",
      "Competitor Keyword Gap Analysis",
      "Transparent Monthly Ranking & Traffic Reports",
    ],
    hasPage: true,
  },
  {
    slug: "search-engine-marketing-sem",
    title: "Search Engine Marketing (SEM / PPC)",
    short: "Google Ads, search advertising, and high-ROI conversion-driven lead generation campaigns.",
    icon: "Target",
    category: "Marketing & SEO",
    badge: "High ROI Ads",
    description:
      "Generate immediate qualified leads with targeted Google Search Ads, Display Network, Remarketing, and Meta advertising optimized for lowest cost-per-acquisition (CPA).",
    features: [
      "Google Ads Campaign Setup & Management",
      "High-Conversion Landing Page Optimization",
      "Negative Keyword Pruning & Quality Score Boost",
      "Retargeting & Dynamic Remarketing",
      "Targeted Ad Campaigns",
      "Conversion Tracking & Google Tag Manager",
      "Ad Copy A/B Testing & Creative Assets",
      "Weekly Spend & Cost-Per-Lead Telemetry",
    ],
    hasPage: false,
  },
  {
    slug: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    short: "Official WhatsApp Business API, automated chatbots, broadcast messaging, and click-to-chat funnels.",
    icon: "MessageSquare",
    category: "Marketing & SEO",
    badge: "WhatsApp API",
    description:
      "Engage customers where they are with official WhatsApp Business API solutions. Send automated order confirmations, promotional broadcasts, payment links, and AI chatbots.",
    features: [
      "Official WhatsApp Business API Onboarding",
      "Automated Interactive Chatbot Workflows",
      "Bulk Promotional Broadcasts with Green Tick",
      "Automated Order & Shipping Notifications",
      "Click-to-WhatsApp Ad Lead Integrations",
      "CRM & Payment Gateway Linking",
      "Multi-Agent Support Inbox",
      "Detailed Delivery & Read Rate Telemetry",
    ],
    hasPage: false,
  },
  {
    slug: "sms-gateway",
    title: "SMS Gateway Services",
    short: "High-speed transactional OTP, promotional SMS broadcasts, and DLT registration assistance.",
    icon: "Send",
    category: "Marketing & SEO",
    badge: "Fast OTP Delivery",
    description:
      "Reliable, high-throughput SMS gateway delivering transactional OTPs in under 3 seconds alongside high-volume promotional SMS campaigns with full compliance.",
    features: [
      "Sub-3-Second Transactional OTP Route",
      "Promotional Bulk SMS Campaigns",
      "DLT Registration & Header Approval Assistance",
      "RESTful SMS API Integration for Any App",
      "Automated Billing & Payment Reminder Alerts",
      "High-Concurrency Cloud Telco Gateways",
      "Real-Time Delivery Status Reports",
      "2-Way Interactive SMS & Shortcodes",
    ],
    hasPage: false,
  },
  {
    slug: "email-marketing",
    title: "Email Marketing & Automation",
    short: "High-deliverability email campaigns, automated drip sequences, and newsletter funnels.",
    icon: "Mail",
    category: "Marketing & SEO",
    badge: "99% Inbox Rate",
    description:
      "Nurture leads and drive repeat revenue with custom-designed responsive HTML emails, automated lead nurturing drip sequences, and dedicated SMTP server setups.",
    features: [
      "Custom Responsive HTML Email Template Design",
      "Automated Drip Sequences & Onboarding Workflows",
      "List Segmentation & Lead Tagging",
      "DKIM, SPF & DMARC Domain Authentication",
      "High-Deliverability SMTP Server Configurations",
      "Open Rate & Click-Through Optimization",
      "E-Commerce Cart Abandonment Drips",
      "A/B Subject Line & Content Testing",
    ],
    hasPage: false,
  },

  // --- CLOUD, HOSTING & STRATEGY ---
  {
    slug: "domain-hosting-services",
    title: "Domain & Hosting Services",
    short: "High-speed NVMe cloud hosting, domain registration, SSL certificates, and enterprise emails.",
    icon: "Server",
    category: "Cloud & Strategy",
    badge: "99.99% Uptime",
    description:
      "Reliable domain registration, blazing-fast NVMe cloud web hosting, business email setup (Google Workspace / Microsoft 365), and SSL security for websites and portals.",
    features: [
      ".com, .in, .org Domain Registration & DNS Care",
      "High-Speed NVMe SSD Cloud Web Hosting",
      "Free Let's Encrypt / Wildcard SSL Certificates",
      "Corporate Business Email Setup",
      "Daily Automated Cloud Backups",
      "Cloudflare CDN & DDoS Protection Setup",
      "Server Uptime 99.99% Guaranteed SLA",
      "Seamless Domain & Hosting Migration Support",
    ],
    hasPage: false,
  },
  {
    slug: "business-analysis-market-research",
    title: "Business Analysis & Market Research",
    short: "Strategic technology roadmaps, market feasibility studies, and digital transformation consulting.",
    icon: "LineChart",
    category: "Cloud & Strategy",
    badge: "Strategic Advisory",
    description:
      "We help businesses identify bottlenecks, evaluate market opportunities, and architect the right digital solutions to maximize return on investment (ROI).",
    features: [
      "In-Depth Business Process & Workflow Analysis",
      "Competitor Digital Landscape & Market Research",
      "Technical Architecture & Feasibility Roadmaps",
      "Software Requirement Specification (SRS) Docs",
      "ROI & Cost-Benefit Projection Modeling",
      "User Journey & Persona Mapping",
      "Digital Transformation Consulting for SMBs",
      "Post-Launch Growth Metric Tracking",
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
    slug: "junior-junction",
    name: "Junior Junction",
    industry: "Education & Early Learning",
    category: "Website Design, Development & SEO",
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO Optimization", "Mobile Responsive"],
    short:
      "Where Little Minds Learn, Play & Grow — modern digital presence for Junior Junction preschool in Erode, Tamil Nadu.",
    description:
      "Junior Junction is a joyful preschool focused on nurturing creativity, confidence and happy learning. We created a modern digital presence that reflects the school's environment while helping parents discover its programs, activities and learning experience.",
    challenge:
      "Mr. Raghupathi Arumugam approached us with the need for a professional website for Junior Junction that could effectively represent the preschool online and help parents easily discover the school.",
    approach:
      "We designed and developed a modern, parent-focused website combining engaging visuals, clear information, and intuitive navigation alongside regional SEO strategies for Erode.",
    solution:
      "Delivered a responsive website featuring complete program showcases (Toddler, Play Group, Pre-KG, LKG, UKG), visual storytelling, parent-focused navigation, and targeted local search optimization.",
    keyFeatures: [
      "Modern Responsive Website Design across all Devices",
      "Comprehensive Program Showcase (Toddler to UKG)",
      "Visual Storytelling with Authentic Activity Media",
      "Parent-Focused Experience with Intuitive Navigation",
      "Search Engine Optimization for Parents in Erode",
      "Streamlined Parent Enquiry Journey & WhatsApp Funnel",
    ],
    outcome:
      "A professional, engaging and search-optimized digital experience that represents Junior Junction's vision, showcases its learning environment and creates a clear digital journey for prospective parents.",
    liveUrl: "https://www.juniorjunctionerode.com/",
    hasResults: true,
    results: [
      { label: "Local Search", value: "Rank #1 in Erode" },
      { label: "Parent Discovery", value: "+180%" },
      { label: "Mobile Usability", value: "100%" },
    ],
  },
  {
    slug: "portfolio-website",
    name: "Portfolio Website",
    industry: "Design & Creative Tech",
    category: "Web Application",
    technologies: ["React", "Three.js", "Tailwind CSS", "Node.js", "Express.js"],
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
    slug: "my-job-campus-website",
    name: "My Job Campus Website",
    industry: "EdTech & Recruitment",
    category: "Web Application",
    technologies: ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL"],
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
    slug: "magnertia-erp-system",
    name: "Magnertia ERP System",
    industry: "Industrial & Manufacturing",
    category: "ERP System",
    technologies: ["React", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Firebase"],
    short:
      "Comprehensive industrial manufacturing ERP unifying multi-plant inventory, production planning, procurement, and GST billing.",
    description:
      "A custom-built enterprise resource planning system tailored for precision manufacturing operations, replacing legacy paper registers with automated production lines and inventory telemetry.",
    challenge:
      "Disconnected inventory records between the manufacturing plant and raw material warehouses caused production downtime, inaccurate billing, and blind spots in material procurement.",
    approach:
      "We spent two weeks mapping factory-floor material flows, machine cycle times, and dispatch operations to build a custom ERP that matches exact shopfloor processes.",
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
    slug: "ev-mobile-application",
    name: "EV Mobile Application",
    industry: "CleanTech & E-Mobility",
    category: "Mobile Application",
    technologies: [
      "React Native",
      "Node.js",
      "Express.js",
      "Firebase",
      "Google Maps API",
      "Geolocation",
      "Firebase Cloud Messaging",
    ],
    short:
      "Real-time EV charging mobile app with live station locator, slot booking, OCPP charger control, and instant in-app payment.",
    description:
      "A high-velocity cross-platform mobile application empowering electric vehicle drivers to find nearby compatible charging plugs, reserve charging slots in advance, monitor live kW flow, and pay seamlessly.",
    challenge:
      "EV owners faced charger anxiety due to stale station availability data, broken chargers, and clunky on-site payment flows.",
    approach:
      "We built a real-time IoT bridge connected to the OCPP 1.6/2.0 protocol on the charger hardware, feeding live port statuses into a responsive mobile map experience.",
    solution:
      "Engineered an intuitive mobile app with interactive Google Maps station search, connector-type filtering, RFID/QR code charger unlocking, live charging telemetry, and digital wallet integration.",
    keyFeatures: [
      "Interactive Station Map with Live Port Availability & Navigation",
      "Connector-Type & Charging Speed (kW) Smart Filter Matrix",
      "Advance Slot Reservation & Queue Management System",
      "Instant Charger Start/Stop via QR Code & IoT WebSockets",
      "Live Charging Telemetry (Voltage, Current, Battery %, Cost)",
      "Firebase Cloud Messaging (FCM) Real-Time Status Alerts",
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
    slug: "ev-station-website",
    name: "EV Station Website",
    industry: "CleanTech & Infrastructure",
    category: "Web Application",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    short:
      "Public-facing commercial portal for EV charging network with interactive station finder, tariff calculator, and franchise investor portal.",
    description:
      "A modern, high-conversion commercial website built for an electric vehicle charging network to drive fleet partnerships, showcase charging infrastructure coverage, and onboard host partners.",
    challenge:
      "The charging network needed a scalable digital storefront to attract enterprise commercial property owners, fleet operators, and retail EV customers.",
    approach:
      "We developed an engaging, high-performance web platform featuring interactive tariff estimators, coverage maps, and partner ROI calculators.",
    solution:
      "Built a React & TypeScript web application with dynamic station locator maps, EV savings ROI calculator, franchise partner onboarding funnel, and enterprise fleet management inquiries.",
    keyFeatures: [
      "Interactive Charging Station Locator Map",
      "Dynamic Fuel Savings & Tariff Calculator",
      "Franchise & Property Host Partner Application Funnel",
      "Fleet Charging Infrastructure Portal with Invoicing Specs",
      "SEO-Optimized Content Hub for Drivers & Station Hosts",
      "Direct API Sync with Live Network Charger Availability",
    ],
    outcome:
      "Generated over 400+ qualified franchise host inquiries and established a premier brand presence.",
    hasResults: true,
    results: [
      { label: "Host Partner Inquiries", value: "400+" },
      { label: "Page Load Speed", value: "0.6s" },
      { label: "Organic Search Lift", value: "+220%" },
    ],
  },
  {
    slug: "rpc-erp-system",
    name: "RPC ERP System",
    industry: "Enterprise Operations",
    category: "ERP System",
    technologies: ["React", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Firebase"],
    short:
      "Enterprise operations ERP platform featuring strict role-based access control, asset lifecycle tracking, audit logs, and analytics.",
    description:
      "A mission-critical enterprise resource planning system custom-architected for RPC operations, unifying human resource workflows, physical asset maintenance, financial budgeting, and regulatory compliance.",
    challenge:
      "Managing complex enterprise assets and audit compliance across multiple branches was slowed down by fragmented legacy databases and unverified document trails.",
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
  {
    slug: "vchemics-website",
    name: "Vchemics India Solutions",
    industry: "Construction Chemicals & Infrastructure",
    category: "Website Design, Development & SEO",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SEO Optimization", "PostgreSQL"],
    short:
      "Engineered for Strength. Built for Durability — high-performance construction chemicals, waterproofing systems, and structural repair solutions.",
    description:
      "Vchemics India Solutions specializes in high-performance construction chemicals, concrete admixtures, waterproofing systems, precision grouts and structural repair solutions engineered for demanding construction and infrastructure applications.",
    challenge:
      "Velmurugan Sivanantham needed a professional digital platform that could clearly communicate its technical expertise, product range and construction solutions while making it easier for contractors, consultants, builders and other industry professionals to discover and enquire about the right solutions.",
    approach:
      "We designed and developed a modern, technical and conversion-focused website that presents Vchemics' products, applications and engineering solutions in a structured digital experience with SEO-friendly organization.",
    solution:
      "Delivered a structured corporate platform with product families, structural solution systems, technical data sheets, industry audience routing, and seamless quote pathways.",
    keyFeatures: [
      "Modern Corporate Website for Construction Chemicals",
      "Structured Product Showcase (Admixtures, Grouts, Waterproofing, Repair)",
      "Dedicated Technical Solutions (Basement, Terrace, Rehabilitation)",
      "Industry-Focused Experience for Contractors, Consultants & RMC Plants",
      "Complex Technical & Chemical Information Presentation",
      "Search Engine Optimization for Construction Chemicals in Tamil Nadu",
      "Streamlined Enquiry Journey & Technical Consultation Pathways",
    ],
    outcome:
      "A professional, technically focused and search-optimized digital experience that positions Vchemics India Solutions more effectively online while helping contractors, consultants, builders and industry professionals discover its products and engineering solutions.",
    liveUrl: "https://www.vchemicsindia.com/",
    hasResults: true,
    results: [
      { label: "Technical Inquiries", value: "3x Increase" },
      { label: "Contractor Reach", value: "Pan-Tamil Nadu" },
      { label: "SEO Visibility", value: "Rank #1" },
    ],
  },
  {
    slug: "royal-suvai-restaurant-website",
    name: "Royal Suvai Restaurant",
    industry: "Food & Hospitality",
    category: "Web Application",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    short:
      "Luxury dining and authentic cuisine web platform featuring interactive digital menus, table reservation booking engine, online order dispatcher, and event catering portal.",
    description:
      "An immersive culinary web experience crafted for Royal Suvai Restaurant to showcase gourmet traditional recipes, digital table reservations, WhatsApp food ordering, chef specialties, and catering inquiry management.",
    challenge:
      "The restaurant experienced high phone reservation friction during peak weekend dinner rushes, with customers struggling to view seasonal menus and order takeout without 3rd-party aggregator commissions.",
    approach:
      "We engineered an elegant, appetizing mobile-first web app with direct commission-free online ordering, real-time table slot booking, interactive culinary gallery, and instant WhatsApp order confirmation.",
    solution:
      "Developed a high-conversion Next.js dining platform with dietary filtering (Veg/Non-Veg/Vegan), real-time table seating reservations, banquet catering estimator, and automated kitchen notification hooks.",
    keyFeatures: [
      "Interactive Digital Food Menu with Dietary & Spice Level Filters",
      "Real-Time Table Reservation & Seating Time-Slot Booking Engine",
      "Direct Commission-Free Online Food Ordering via WhatsApp Webhook",
      "Event Banquet & Catering Package Cost Estimator",
      "Appetizing High-Resolution Culinary Showcase & Chef Specialties",
      "Customer Reviews, Social Proof & Google Maps Turn-by-Turn GPS",
    ],
    outcome:
      "Reduced table booking no-shows by 45% and generated over 300+ monthly direct takeout orders with zero third-party commissions.",
    hasResults: true,
    results: [
      { label: "Direct Orders", value: "300+/mo" },
      { label: "Booking No-Shows", value: "-45%" },
      { label: "Commission Saved", value: "100%" },
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
    name: "Engineering Leadership",
    role: "Director & Principal Architect",
    expertise: "Vision, System Architecture, Global Client Solutions",
    bio: "Drives technical excellence, oversees enterprise architecture, and ensures every client solution exceeds performance standards.",
    social: {},
  },
  {
    name: "Project Management",
    role: "Lead Project & Delivery Manager",
    expertise: "Agile Sprints, Business Analysis, Timeline Delivery",
    bio: "Translates business requirements into precise technical milestones with transparent 2-week sprint releases.",
    social: {},
  },
  {
    name: "Full Stack Team",
    role: "Senior Full Stack Engineers",
    expertise: "React, Next.js, Node.js, PostgreSQL, Cloud Infrastructure",
    bio: "Engineers high-throughput backends, APIs, and mission-critical ERP/HRMS databases.",
    social: {},
  },
  {
    name: "UI/UX & Frontend",
    role: "Lead UI/UX & Web Designers",
    expertise: "Figma, Tailwind CSS, Responsive Web, Logo Branding",
    bio: "Creates world-class, responsive, and intuitive web interfaces that turn visitors into loyal customers.",
    social: {},
  },
  {
    name: "SEO & Digital Strategy",
    role: "SEO & Growth Specialists",
    expertise: "Technical SEO, SEM, Organic Rankings, WhatsApp API",
    bio: "Drives top search rankings on Google, high organic traffic, and conversion-optimized messaging funnels.",
    social: {},
  },
  {
    name: "QA & Support Operations",
    role: "Quality Assurance & SLA Support",
    expertise: "Automated Testing, Security Hardening, 24/7 Monitoring",
    bio: "Guarantees zero-defect releases and provides proactive ongoing maintenance for all production systems.",
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
    category: "Web & Frontend",
    icon: "Monitor",
    technologies: ["React", "Next.js", "TypeScript", "HTML5", "Tailwind CSS", "JavaScript", "WordPress", "Vue.js"],
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    technologies: ["Node.js", "Express.js", "NestJS", "Python", "Java", "REST APIs", "GraphQL"],
  },
  {
    category: "Database & Storage",
    icon: "Database",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    category: "Cloud & Infrastructure",
    icon: "Cloud",
    technologies: ["AWS", "Google Cloud", "DigitalOcean", "Cloudflare", "Docker", "Linux"],
  },
  {
    category: "Marketing & Gateways",
    icon: "Target",
    technologies: ["Google Ads", "Google Analytics", "WhatsApp Business API", "SMS Gateway (DLT)", "SendGrid", "Stripe / Razorpay"],
  },
];

export const faqs = [
  {
    question: "What services does Intouch Global Tech provide?",
    answer:
      "Intouch Global Tech offers complete web application and software services: Web Development (Static & Dynamic Websites), E-Commerce Development, WordPress Development, Website Maintenance, Custom Software, ERP, HRMS, CRM, Hospital Management (HMS), Pharmacy Management, Billing Software, SEO, SEM, WhatsApp Marketing, SMS Gateway, Email Marketing, Domain and Hosting, and Business Analysis.",
  },
  {
    question: "Who do you work with?",
    answer:
      "We partner with growing startups, enterprise clients, and Small and Medium Business (SMB) enterprises globally across various industries to build and modernize their digital infrastructure.",
  },
  {
    question: "Can you build custom ERP, HRMS, and CRM software?",
    answer:
      "Yes! We specialize in tailored ERP, HRMS, and CRM software built specifically around your organization's exact workflows with zero per-seat monthly license fees and 100% source code ownership.",
  },
  {
    question: "Do you offer SEO and digital marketing services?",
    answer:
      "Yes. We provide end-to-end On-Page/Off-Page SEO, search visibility optimization, SEM/Google Ads, WhatsApp Marketing API, and SMS Gateway services.",
  },
  {
    question: "What is your project development and delivery process?",
    answer:
      "We follow an agile, transparent methodology: 1. Discovery & Business Analysis, 2. Architecture & Wireframing, 3. Design & Prototyping, 4. Agile Development with 2-week live demos, 5. Comprehensive QA Testing, 6. Cloud Deployment, and 7. Continuous SLA Maintenance & Support.",
  },
  {
    question: "Do I get full ownership of the website and software source code?",
    answer:
      "Absolutely. From Day 1, you own 100% of your source code, database architecture, design assets, and intellectual property with zero lock-in or recurring proprietary license fees.",
  },
  {
    question: "How do we get started with Intouch Global Tech?",
    answer:
      "Reach out to us via our contact form, email us at intouchglobaltech@gmail.com, or message us directly on WhatsApp at +91 86677 09294. Our engineering leads will review your requirements and respond within 24 hours.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover & Analyze",
    description:
      "We conduct deep business analysis and market research to understand your goals, target audience, and system requirements before writing a single line of code.",
  },
  {
    number: "02",
    title: "Plan & Architect",
    description:
      "We map out technical architecture, database schemas, sprint milestones, and exact scopes with transparent fixed pricing and delivery timelines.",
  },
  {
    number: "03",
    title: "Design & Prototype",
    description:
      "We create high-converting, modern UI/UX wireframes, branding elements, and interactive Figma prototypes designed for effortless user experience.",
  },
  {
    number: "04",
    title: "Develop & Integrate",
    description:
      "Our full-stack team builds your application using modern, scalable frameworks with continuous 2-week live sprint demonstrations.",
  },
  {
    number: "05",
    title: "Test & Quality Assurance",
    description:
      "Rigorous functional, security, responsiveness, and performance testing across all devices and browsers to guarantee 99.99% reliability.",
  },
  {
    number: "06",
    title: "Deploy & Launch",
    description:
      "Seamless cloud deployment, domain and hosting setup, SSL configuration, and search engine indexation.",
  },
  {
    number: "07",
    title: "Support & Growth",
    description:
      "Continuous SLA maintenance, SEO monitoring, security updates, and feature scaling as your business expands globally.",
  },
];

export const whyChooseUs = [
  {
    title: "Committed to Business Excellence",
    description:
      "We consistently deliver cost-effective and quality business solutions that exceed expectations, aligned with our core company values.",
    icon: "Target",
  },
  {
    title: "100% Code & IP Ownership",
    description:
      "You own every single line of code, database schema, and design asset. Zero recurring license lock-ins.",
    icon: "Lock",
  },
  {
    title: "Global Delivery Standards",
    description:
      "High-velocity delivery capabilities serving global Small & Medium Businesses with direct developer access.",
    icon: "Globe",
  },
  {
    title: "Complete End-to-End Spectrum",
    description:
      "From static/dynamic websites and custom ERP/CRM to SMS gateways, WhatsApp marketing, and SEO under one unified roof.",
    icon: "Layers",
  },
  {
    title: "Direct Senior Developer Access",
    description:
      "No non-technical intermediaries. Communicate directly with lead engineers via WhatsApp, phone, and video calls.",
    icon: "Users",
  },
  {
    title: "Proven Production Uptime",
    description:
      "Enterprise-grade cloud architectures engineered for sub-second speeds, robust security, and 99.99% uptime.",
    icon: "ShieldCheck",
  },
];

export const projectTypes = [
  "Web & E-Commerce",
  "Custom ERP & HRMS",
  "Hospital / Pharmacy (HMS)",
  "CRM & POS Billing",
  "SEO & Digital Marketing",
  "Custom Software / Other",
];

export const budgetRanges = [
  "₹15K – ₹35K",
  "₹35K – ₹75K",
  "₹75K – ₹1.5L",
  "₹1.5L+ / Enterprise",
];

export const timelineOptions = [
  "Immediate (< 2 wks)",
  "2 – 4 weeks",
  "1 – 3 months",
  "Flexible",
];

export const contactMethods = ["Email", "Phone", "WhatsApp", "Video Call"];
