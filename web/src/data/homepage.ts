export type HomepageStat = {
  value: string;
  label: string;
  caption: string;
};

export const homepageStats: HomepageStat[] = [
  {
    value: "40+",
    label: "Projects delivered",
    caption: "SaaS, logistics, CRM & automation",
  },
  {
    value: "8+",
    label: "Years shipping",
    caption: "Products and digital platforms",
  },
  {
    value: "15+",
    label: "In-house team",
    caption: "Designers, engineers & strategists",
  },
  {
    value: "5.0",
    label: "Google rating",
    caption: "8 verified client reviews",
  },
];

export type HomepageTeamMember = {
  initials: string;
  name: string;
  role: string;
  specialty: string;
  note?: string;
  photo?: string;
};

export const homepageTeam: HomepageTeamMember[] = [
  {
    initials: "AR",
    name: "Alex R.",
    role: "Lead Product Designer",
    specialty: "SaaS UI, dashboard systems, design tokens",
  },
  {
    initials: "JM",
    name: "Jamie M.",
    role: "Frontend Engineer",
    specialty: "React, Next.js, Tailwind, animation",
  },
  {
    initials: "SK",
    name: "Sam K.",
    role: "Backend Engineer",
    specialty: "Node, APIs, QuickBooks & Xero integrations",
  },
  {
    initials: "PL",
    name: "Priya L.",
    role: "UX Strategist",
    specialty: "User research, onboarding flows, CRO",
  },
  {
    initials: "TW",
    name: "Tom W.",
    role: "Project Lead",
    specialty: "Delivery, client communication, QA",
  },
];

export type HomepageTestimonial = {
  initials: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  project: string;
  rating: number;
  outcome?: string;
  caseStudySlug?: string;
};

export const homepageTestimonials: HomepageTestimonial[] = [
  {
    initials: "RM",
    quote:
      "Northline redesigned our SaaS onboarding in six weeks. Activation jumped 18% and our board finally saw product and engineering aligned.",
    name: "Ravi Mehta",
    role: "Head of Product",
    company: "FlowLedger (UK B2B SaaS)",
    project: "SaaS onboarding redesign",
    rating: 5,
    outcome: "+18% activation",
    caseStudySlug: "payroll-pro-saas",
  },
  {
    initials: "MC",
    quote:
      "They delivered a dispatch console our ops team actually enjoys using — handle time down 32% without adding headcount.",
    name: "Marcus Cole",
    role: "VP Operations",
    company: "FleetRoute Logistics (US)",
    project: "Dispatch console & CRM",
    rating: 5,
    outcome: "−32% handle time",
    caseStudySlug: "fleetflow-dispatch",
  },
  {
    initials: "AD",
    quote:
      "From brand identity to Shopify launch, the conversion uplift paid for the project in the first quarter.",
    name: "Anita Desai",
    role: "Founder",
    company: "Meridian D2C",
    project: "E-commerce rebrand & launch",
    rating: 5,
    outcome: "ROI in Q1",
    caseStudySlug: "brandlift-ecommerce",
  },
];

export type HomepageProcessStep = {
  title: string;
  description: string;
};

export const homepageProcessSteps: HomepageProcessStep[] = [
  {
    title: "Discovery",
    description:
      "Goals, users, constraints, and success metrics — captured in a written brief so everyone starts aligned.",
  },
  {
    title: "UX Design",
    description:
      "Wireframes, interactive prototypes, and UI — reviewed and signed off before a single line of code is written.",
  },
  {
    title: "Development",
    description:
      "In-house engineers build iteratively with weekly demos and transparent progress. No black-box sprints.",
  },
  {
    title: "QA & Launch",
    description:
      "Cross-browser testing, accessibility checks, analytics setup, and phased rollout with handoff docs.",
  },
  {
    title: "Post-launch",
    description:
      "Iteration sprints, monitoring, and roadmap support — most clients keep us on retainer after go-live.",
  },
];

export type HomepageCaseStudySlug = "fleetflow-dispatch" | "payroll-pro-saas" | "finance-sync-hub";

export const portfolioFilterCategories = ["All", "SaaS", "Trucking", "Integrations", "AI"] as const;

export type PortfolioFilterCategory = (typeof portfolioFilterCategories)[number];

export const caseStudyFilterMap: Record<string, PortfolioFilterCategory[]> = {
  "fleetflow-dispatch": ["Trucking"],
  "payroll-pro-saas": ["SaaS"],
  "finance-sync-hub": ["Integrations"],
  "healthtrack-mobile": ["SaaS"],
  "brandlift-ecommerce": ["SaaS"],
  "crm-pulse-dashboard": ["SaaS"],
  "ai-support-automation": ["AI"],
  "marketplace-mvp": ["SaaS"],
};
