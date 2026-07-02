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
  specialty: string;
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
