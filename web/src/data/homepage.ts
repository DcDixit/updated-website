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
    value: "4",
    label: "Time zones covered",
    caption: "US, UK, India & APAC overlap",
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
