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
    value: "9+",
    label: "Years of experience",
    caption: "In product design & engineering",
  },
  {
    value: "15+",
    label: "Senior team",
    caption: "Designers, engineers & specialists",
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
      "We document your goals, users, constraints, and what success looks like. You review and sign off before we design anything.",
  },
  {
    title: "UX Design",
    description:
      "Wireframes, prototypes, and final UI - reviewed with you before any code is written. No design surprises later.",
  },
  {
    title: "Development",
    description:
      "Your product gets built in weekly increments. You see working demos every week, not a big reveal at the end.",
  },
  {
    title: "QA & Launch",
    description:
      "Cross-browser testing, accessibility checks, analytics setup, and a phased rollout. We hand off clean documentation.",
  },
  {
    title: "Post-launch",
    description:
      "Bug fixes, iteration, and roadmap support. Most clients keep working with us after launch.",
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

