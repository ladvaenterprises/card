/**
 * Centralized Configuration for Mitesh Ladva Personal Portfolio & Digital Business Card
 * Verified sources: ladvaenterprises.com & mitesh.ladvaenterprises.com
 */

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  impactHighlight: string;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  numericValue: number;
  suffix: string;
  prefix?: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  designation: string;
  company: string;
  quote: string;
  rating: number;
  verified: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  impact: string;
  description: string;
  technologies: string[];
}

export interface MethodologyStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const MITESH_CONFIG = {
  profile: {
    fullName: "Mitesh Ladva",
    firstName: "Mitesh",
    lastName: "Ladva",
    title: "Founder & Managing Partner",
    company: "Ladva Enterprises",
    tagline: "Strategic Business Consulting • Operational Excellence • Digital Transformation",
    headline: "Transforming Organizations Through Strategic Vision & Measurable Execution",
    shortBio: "Founder & Managing Partner of Ladva Enterprises with over 20 years of cumulative strategic consulting, operational redesign, and enterprise data transformation expertise. Empowering mid-market leaders and high-growth enterprises across India and global markets.",
    photoUrl: "/profile.png",
    experienceYears: "20+",
    establishedYear: "2018",
  },

  contact: {
    phoneDisplay: "+91 95948 89811",
    phoneClean: "9594889811",
    phoneInternational: "+919594889811",
    whatsappClean: "919594889811",
    primaryEmail: "info@ladvaenterprises.com",
    personalEmail: "miteshladva@gmail.com",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    addressDisplay: "Mumbai, Maharashtra, India",
    companyWebsite: "https://ladvaenterprises.com/",
    portfolioWebsite: "https://mitesh.ladvaenterprises.com/",
    linkedinUrl: "https://www.linkedin.com/in/mitesh-ladva",
    vcfFileName: "Mitesh_Ladva_Executive_Card.vcf",
    cardFileName: "Mitesh_Ladva_Visiting_Card.png",
  },

  metrics: [
    {
      id: "experience",
      label: "Years Consulting Experience",
      value: "20+",
      numericValue: 20,
      suffix: "+",
      description: "Cumulative leadership and strategic advisory expertise",
    },
    {
      id: "engagements",
      label: "Successful Engagements",
      value: "200+",
      numericValue: 200,
      suffix: "+",
      description: "Across manufacturing, logistics, healthcare & tech sectors",
    },
    {
      id: "roi",
      label: "Average Client ROI",
      value: "4.8x",
      numericValue: 4.8,
      suffix: "x",
      description: "Validated financial & operational value generation",
    },
    {
      id: "satisfaction",
      label: "Client Satisfaction Rate",
      value: "98%",
      numericValue: 98,
      suffix: "%",
      description: "Maintained consistently across long-term partnerships",
    },
    {
      id: "value",
      label: "Client Value Created",
      value: "₹2,400Cr+",
      numericValue: 2400,
      prefix: "₹",
      suffix: "Cr+",
      description: "Cumulative enterprise value, margins & cost savings",
    },
  ] as MetricItem[],

  services: [
    {
      id: "management-consulting",
      title: "Management Consulting",
      tagline: "Organizational Alignment & Performance",
      description: "Strategic advisory and organizational transformation designed to align corporate leadership, organizational structures, and execution culture with aggressive market goals.",
      icon: "Building2",
      deliverables: [
        "Executive governance frameworks",
        "Organizational restructuring & workflow redesign",
        "Change management & operating models",
        "Cross-functional synergy alignment"
      ]
    },
    {
      id: "strategy-growth",
      title: "Strategy & Growth",
      tagline: "Scalable Market Expansion & Positioning",
      description: "Data-backed market entry roadmaps, competitive differentiation, product-market expansion, and merger & acquisition advisory to scale precisely and sustainably.",
      icon: "TrendingUp",
      deliverables: [
        "Commercial growth roadmaps",
        "Market penetration & territory expansion",
        "Competitor intelligence & strategic moat design",
        "M&A and joint-venture advisory"
      ]
    },
    {
      id: "it-digital-transformation",
      title: "IT & Digital Transformation",
      tagline: "Modernizing Architecture & Data Pipelines",
      description: "End-to-end digital modernization, cloud infrastructure deployment, workflow automation, and enterprise BI analytics that convert fragmented data into real-time decision power.",
      icon: "Cpu",
      deliverables: [
        "Enterprise MIS & KPI dashboard automation",
        "BigQuery, SQL & Looker data warehouse integration",
        "ERP modernization (Dynamics 365, Tally, Custom ERP)",
        "Process automation & operational cloud migration"
      ]
    },
    {
      id: "hr-talent-strategy",
      title: "HR & Talent Strategy",
      tagline: "High-Performance Leadership & Teams",
      description: "Designing high-performance talent acquisition frameworks, leadership development roadmaps, meritocratic incentive systems, and resilient corporate culture.",
      icon: "Users",
      deliverables: [
        "Executive succession planning",
        "Competency mapping & performance appraisal systems",
        "Leadership coaching & talent retention programs",
        "Agile HR governance & team restructuring"
      ]
    },
    {
      id: "legal-compliance",
      title: "Legal & Compliance",
      tagline: "Regulatory Resilience & Risk Mitigation",
      description: "Authoritative guidance on statutory regulatory compliance, ISO certification standards (9001, 14001, 45001), HACCP protocols, contract frameworks, and enterprise risk management.",
      icon: "ShieldCheck",
      deliverables: [
        "ISO 9001, 14001 & 45001 implementation & audit readiness",
        "HACCP compliance & food-safety quality systems",
        "Corporate governance & statutory reporting",
        "Contract lifecycle & vendor risk mitigation"
      ]
    },
    {
      id: "financial-advisory",
      title: "Financial Advisory",
      tagline: "Capital Strategy, Cash Flow & Profitability",
      description: "Rigorous financial planning, cash flow optimization, risk management, and capital restructuring to ensure organizational resilience, margin expansion, and investor readiness.",
      icon: "BarChart3",
      deliverables: [
        "Working capital & inventory holding cost reduction",
        "Margin expansion & unit economics analysis",
        "Financial modeling & cash flow forecasting",
        "Investor readiness & capital allocation strategy"
      ]
    }
  ] as ServiceItem[],

  methodology: [
    {
      step: "01",
      title: "Discovery & Diagnostics",
      tagline: "Uncovering Deep Operational Reality",
      description: "A thorough diagnostic assessment of organizational bottlenecks, financial leakages, data architecture, and market position to identify high-leverage growth levers.",
      deliverables: ["Comprehensive operational audit", "Gap & bottleneck analysis", "Stakeholder executive interviews", "Baseline KPI benchmarking"]
    },
    {
      step: "02",
      title: "Strategy Design",
      tagline: "Formulating Pragmatic Roadmaps",
      description: "Crafting customized, data-driven strategic blueprints tailored specifically to your organizational DNA, risk tolerance, and competitive landscape.",
      deliverables: ["Customized strategic roadmap", "Financial modeling & ROI forecasts", "Resource allocation matrix", "Milestone & accountability framework"]
    },
    {
      step: "03",
      title: "Hands-on Execution",
      tagline: "Bridging Strategy & Daily Operations",
      description: "Direct senior involvement in piloting implementations, re-engineering workflows, training teams, and installing automated monitoring systems.",
      deliverables: ["Phased workflow deployment", "Management representative enablement", "Automated MIS & BI dashboards", "Change management governance"]
    },
    {
      step: "04",
      title: "Review & Scale",
      tagline: "Institutionalizing Lasting Competitive Advantage",
      description: "Rigorous post-implementation audits, performance reviews against target metrics, and scaling systems to ensure enduring, self-sustaining excellence.",
      deliverables: ["Target ROI verification", "SOP institutionalization", "Continuous improvement cadence", "Long-term advisory roadmap"]
    }
  ] as MethodologyStep[],

  industries: [
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial",
      description: "Optimizing plant throughput, supply chain logistics, Lean Six Sigma methodologies, and inventory holding costs across multi-location manufacturing facilities.",
      icon: "Factory",
      impactHighlight: "Up to 23% margin gain & 15% holding cost reduction"
    },
    {
      id: "logistics",
      name: "Logistics & Supply Chain",
      description: "End-to-end freight visibility, international export coordination, customs compliance, and automated dispatch routing.",
      icon: "Truck",
      impactHighlight: "50% logistics efficiency increase & automated tracking"
    },
    {
      id: "energy",
      name: "Energy & Sustainability",
      description: "Renewable energy adoption, environmental ISO 14001 compliance, clean tech transition, and resource efficiency auditing.",
      icon: "Zap",
      impactHighlight: "ISO 14001 certified & energy footprint reduction"
    },
    {
      id: "healthcare",
      name: "Healthcare & Pharma",
      description: "Strict regulatory governance, HACCP compliance, medical equipment logistics, and healthcare sales operations data integration.",
      icon: "HeartPulse",
      impactHighlight: "100% statutory compliance across healthcare audits"
    },
    {
      id: "retail",
      name: "Retail & Consumer Goods",
      description: "Omnichannel inventory synchronization, consumer demand forecasting, vendor margin negotiations, and CRM automated pipelines.",
      icon: "ShoppingBag",
      impactHighlight: "25% planning accuracy uplift & zero stockouts"
    },
    {
      id: "realestate",
      name: "Real Estate & Infrastructure",
      description: "Capital deployment tracking, contractor compliance, vendor audit systems, and large-scale project milestone management.",
      icon: "Landmark",
      impactHighlight: "Transparent capital allocation & vendor risk control"
    },
    {
      id: "banking",
      name: "Banking & Financial Services",
      description: "Enterprise risk mitigation, compliance audits, financial modeling, portfolio analytics, and automated regulatory reporting.",
      icon: "Wallet",
      impactHighlight: "High-integrity audit compliance & automated MIS"
    },
    {
      id: "education",
      name: "Education & EdTech",
      description: "Institutional scaling, admissions analytics, LMS integration, curriculum operational planning, and student outcome monitoring.",
      icon: "GraduationCap",
      impactHighlight: "Data-driven student retention & streamlined operations"
    }
  ] as IndustryItem[],

  projects: [
    {
      id: "etrav",
      title: "Automated Enterprise KPI Reporting Engine",
      client: "E-Trav",
      category: "IT & Digital Transformation",
      impact: "350% faster reporting cycle with cross-vertical real-time visibility",
      description: "Engineered and deployed an automated KPI reporting architecture utilizing Python and Power Query for Flights, Hotels, DMC, and Visa operations, transitioning management from delayed weekly reports to live decision dashboards.",
      technologies: ["Python", "Power Query", "Excel Automation", "KPI Dashboards"]
    },
    {
      id: "avn",
      title: "Unified Multi-Channel Data Warehouse & BI Platform",
      client: "AVN Ayurveda",
      category: "Data Analytics & Cloud Architecture",
      impact: "Consolidated 4 disparate data sources into a single source of truth",
      description: "Architected a unified sales and operations data warehouse consolidating Salesforce, Dynamics 365, Apps Script, and Google Sheets into Google BigQuery, powering interactive executive dashboards in Looker.",
      technologies: ["Google BigQuery", "Looker", "Salesforce", "Microsoft Dynamics 365"]
    },
    {
      id: "bitcol",
      title: "Firm-Wide Operations Analysis & ERP Implementation",
      client: "Bitumen Corporation (India) Pvt Ltd – BITCOL",
      category: "Operations & Financial Advisory",
      impact: "23% margin uplift, 15% reduction in holding cost across 9 locations",
      description: "Conducted operations analysis across 2 processing plants and 9 regional depot locations. Spearheaded unified ERP rollout and automated MIS reporting, slashing reporting latency by 350%.",
      technologies: ["Enterprise ERP", "Power Query", "Financial Modeling", "Inventory Optimization"]
    },
    {
      id: "iso-clients",
      title: "IMS & ISO Certification Advisory (9001, 14001, 45001)",
      client: "Multiple Industrial & Engineering Clients",
      category: "Legal & Compliance",
      impact: "100% first-pass audit compliance across all client audits",
      description: "Served as lead management representative and external consultant guiding industrial enterprises through integrated management system implementations, HACCP protocols, and external audits by EIL, HPCL, MDL, and SAIL.",
      technologies: ["ISO 9001 / 14001 / 45001", "HACCP", "Vendor Audits", "SOP Frameworks"]
    }
  ] as ProjectItem[],

  clientLogos: [
    { name: "E-Trav", image: "/assets/clients/etrav.png" },
    { name: "AVN Ayurveda", image: "/assets/clients/avn.png" },
    { name: "Kompress", image: "/assets/clients/kompress.png" },
    { name: "Marvel", image: "/assets/clients/marvel.png" },
    { name: "Polyglove", image: "/assets/clients/polyglove.png" },
    { name: "Urban Gourmet", image: "/assets/clients/urban_gourmet.png" }
  ],

  testimonials: [
    {
      id: "test-1",
      clientName: "Executive Leadership Team",
      designation: "Managing Director",
      company: "Leading Travel & Hospitality Firm (E-Trav)",
      quote: "Mitesh transformed how we view and utilize data across our flights, hotels, and DMC divisions. His automated KPI reporting framework cut our decision turnaround from days to real-time. A rare strategist who truly rolls up his sleeves.",
      rating: 5,
      verified: true
    },
    {
      id: "test-2",
      clientName: "Director of Operations",
      designation: "Head of Supply Chain & Ops",
      company: "Ayurvedic Healthcare & Wellness (AVN Ayurveda)",
      quote: "The BigQuery and Looker integration architected under Mitesh's leadership synchronized our fractured CRM and ERP systems. For the first time, our executive board had unified, tamper-proof clarity over channel revenues.",
      rating: 5,
      verified: true
    },
    {
      id: "test-3",
      clientName: "Senior Plant Director",
      designation: "Chief Operating Officer",
      company: "Industrial Manufacturing & Gaskets Corporation",
      quote: "Mitesh's deep mastery of ISO 9001/14001 standards and vendor compliance for high-stakes audits (EIL, HPCL) gave us total confidence. His process improvements delivered measurable 20%+ operational efficiency gains.",
      rating: 5,
      verified: true
    }
  ] as TestimonialItem[],

  whatsappShareMessage: 
    `*🏛️ Mitesh Ladva - Founder & Managing Partner*\n` +
    `*Ladva Enterprises | Strategic Consulting*\n\n` +
    `_"Transforming organizations through strategic vision, data-driven clarity, and measurable execution."_\n\n` +
    `💼 *Consulting Practices:*\n` +
    `• Management Consulting & Organizational Restructuring\n` +
    `• Strategy & Scalable Market Growth\n` +
    `• IT & Digital Transformation (BigQuery, Looker, ERP, MIS)\n` +
    `• HR & Executive Talent Strategy\n` +
    `• Legal, Compliance & ISO (9001, 14001, 45001)\n` +
    `• Financial Advisory & Working Capital Optimization\n\n` +
    `📞 *Direct Mobile:* +91 95948 89811\n` +
    `✉️ *Business Email:* info@ladvaenterprises.com\n` +
    `🌐 *View Digital Portfolio & Save Contact:* https://mitesh.ladvaenterprises.com/\n` +
    `🏢 *Corporate Portal:* https://ladvaenterprises.com/`
};

