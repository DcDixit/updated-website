export type HomepageStat = {
  value: string;
  label: string;
  caption: string;
};

export const homepageStats: HomepageStat[] = [
  {
    value: "250+",
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
    value: "4.9",
    label: "Clutch rating",
    caption: "12 verified client reviews",
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
    initials: "HO",
    quote:
      "Northline redesigned our SaaS onboarding in six weeks. Activation jumped 18% and our board finally saw product and engineering aligned.",
    name: "Head of Product",
    role: "Product leadership",
    company: "UK B2B SaaS",
    project: "SaaS onboarding redesign",
    rating: 5,
  },
  {
    initials: "MD",
    quote:
      "Northline shipped our driver app MVP in 6 weeks. The Dispatch CRM reduced our manual workload by 40%. We've since expanded to a full retainer.",
    name: "Head of Engineering",
    role: "Engineering leadership",
    company: "US Logistics SaaS",
    project: "Driver app + Dispatch CRM",
    rating: 5,
  },
  {
    initials: "CL",
    quote:
      "Best agency experience we've had. They think like a product team, not a vendor. Our onboarding drop-off went from 60% to 22% after the redesign.",
    name: "Founder",
    role: "Founder",
    company: "UK B2B SaaS",
    project: "SaaS onboarding redesign",
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
