export type HomepageStat = {
  value: string;
  label: string;
  sub: string;
};

export const homepageStats: HomepageStat[] = [
  {
    value: "32%",
    label: "Average handle time reduction",
    sub: "in dispatch CRM projects",
  },
  {
    value: "99.3%",
    label: "Sync reliability achieved",
    sub: "in QuickBooks/Xero integrations",
  },
  {
    value: "18%",
    label: "Average activation uplift",
    sub: "in SaaS onboarding redesigns",
  },
  {
    value: "40+",
    label: "Products shipped",
    sub: "SaaS, logistics, CRM & AI",
  },
  {
    value: "6 wks",
    label: "Average time to first delivery",
    sub: "from discovery to signed-off design",
  },
  {
    value: "5.0 ⭐",
    label: "Google rating",
    sub: "8 verified client reviews",
  },
];

export type HomepageClient = {
  name: string;
  logoUrl: string | null;
  category?: string;
};

/** Tech & platform logos shown in the trusted-by strip. Replace with approved client marks when available. */
export const homepageClients: HomepageClient[] = [
  { name: "Next.js", logoUrl: null, category: "Frontend" },
  { name: "React Native", logoUrl: null, category: "Mobile" },
  { name: "QuickBooks", logoUrl: null, category: "Integrations" },
  { name: "Xero", logoUrl: null, category: "Integrations" },
  { name: "HubSpot", logoUrl: null, category: "CRM" },
  { name: "Figma", logoUrl: null, category: "Design" },
  { name: "Webflow", logoUrl: null, category: "No-Code" },
  { name: "Bubble", logoUrl: null, category: "No-Code" },
  { name: "Make", logoUrl: null, category: "Automation" },
  { name: "Stripe", logoUrl: null, category: "Payments" },
  { name: "Supabase", logoUrl: null, category: "Backend" },
  { name: "Vercel", logoUrl: null, category: "Deployment" },
];

export type HomepageTeamMember = {
  initials: string;
  name: string;
  role: string;
  note?: string;
  photo?: string;
};

export const homepageTeam: HomepageTeamMember[] = [
  { name: "Team Lead", role: "Head of Product Design", initials: "TL" },
  { name: "SaaS Designer", role: "Senior UX Designer", initials: "SD" },
  { name: "Eng Lead", role: "Lead Engineer", initials: "EL" },
  { name: "QuickBooks Eng", role: "Integration Specialist", initials: "QE" },
  { name: "Trucking UX", role: "Logistics UX Lead", initials: "TU" },
  { name: "AI Engineer", role: "AI & Automation Engineer", initials: "AE" },
  { name: "QA Lead", role: "QA & Delivery Manager", initials: "QL" },
  { name: "Strategist", role: "Product Strategist", initials: "PS" },
];

export type HomepageTestimonial = {
  initials: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  project: string;
  rating: number;
  outcome: string;
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
  },
  {
    initials: "MC",
    quote:
      "They delivered a dispatch console our ops team actually enjoys using — handle time down 32% without adding headcount.",
    name: "Marcus Cole",
    role: "Operations Director",
    company: "FleetRoute Logistics (US)",
    project: "Dispatch console & CRM",
    rating: 5,
    outcome: "−32% handle time",
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
  },
  {
    initials: "JK",
    quote:
      "We'd worked with two agencies before Northline. Neither understood that clean UI and working integrations aren't separate problems. Northline got it immediately.",
    name: "James Kwan",
    role: "CTO",
    company: "LedgerStack (UK SaaS)",
    project: "Platform redesign & integrations",
    rating: 5,
    outcome: "On-time delivery",
  },
  {
    initials: "SR",
    quote:
      "Our old system needed three screens to cover what Northline's console does in one. The team learned it in a day.",
    name: "Sarah Rodriguez",
    role: "Head of Dispatch",
    company: "Midwest Freight Co. (US)",
    project: "Dispatch console rebuild",
    rating: 5,
    outcome: "Zero training curve",
  },
];

export type HomepageProcessStep = {
  title: string;
  description: string;
  timeEstimate: string;
  deliverable: string;
};

export const homepageProcessSteps: HomepageProcessStep[] = [
  {
    title: "Discovery",
    description:
      "Goals, users, constraints, and success metrics — captured in a written brief so everyone starts aligned.",
    timeEstimate: "Week 1–2",
    deliverable: "Written brief + success metrics doc",
  },
  {
    title: "UX Design",
    description:
      "Wireframes, interactive prototypes, and UI — reviewed and signed off before a single line of code is written.",
    timeEstimate: "Week 3–5",
    deliverable: "Signed-off wireframes + interactive prototype",
  },
  {
    title: "Development",
    description:
      "In-house engineers build iteratively with weekly demos and transparent progress. No black-box sprints.",
    timeEstimate: "Week 6–12",
    deliverable: "Weekly demos, staging environment",
  },
  {
    title: "QA & Launch",
    description:
      "Cross-browser testing, accessibility checks, analytics setup, and phased rollout with handoff docs.",
    timeEstimate: "Week 13–14",
    deliverable: "Launch checklist, handoff docs",
  },
  {
    title: "Post-launch",
    description:
      "Iteration sprints, monitoring, and roadmap support — most clients keep us on retainer after go-live.",
    timeEstimate: "Ongoing",
    deliverable: "Monthly retainer or ad-hoc sprints",
  },
];

export const homepageAiTools = [
  "Claude",
  "ChatGPT",
  "GitHub Copilot",
  "Cursor",
  "Figma AI",
  "Make",
  "QuickBooks API",
] as const;

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

export const caseStudyIndustryLabels: Record<string, string> = {
  "fleetflow-dispatch": "Logistics · CRM",
  "payroll-pro-saas": "SaaS · Product",
  "finance-sync-hub": "Integrations · Finance",
};
