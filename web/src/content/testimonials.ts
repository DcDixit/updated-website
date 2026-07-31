/** Client testimonials — named quotes for the homepage and marketing surfaces. */

export type ClientTestimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  project?: string;
  industry?: string;
  /** Optional link to related anonymized case study */
  caseStudySlug?: string;
};

export const clientTestimonials: ClientTestimonial[] = [
  {
    id: "ravi-mehta",
    quote:
      "Northline redesigned our SaaS onboarding in six weeks. Activation jumped 18% and our board finally saw product and engineering aligned.",
    name: "Ravi Mehta",
    role: "Head of Product",
    company: "FlowLedger (UK B2B SaaS)",
    project: "SaaS onboarding redesign",
    industry: "SaaS",
    caseStudySlug: "payroll-pro-saas",
  },
  {
    id: "marcus-cole",
    quote:
      "They delivered a dispatch console our ops team actually enjoys using. Handle time dropped 32% without adding headcount.",
    name: "Marcus Cole",
    role: "VP Operations",
    company: "FleetRoute Logistics (US)",
    project: "Dispatch console & CRM",
    industry: "Trucking",
    caseStudySlug: "fleetflow-dispatch",
  },
  {
    id: "anita-desai",
    quote:
      "From brand identity to Shopify launch, the conversion uplift paid for the project in the first quarter.",
    name: "Anita Desai",
    role: "Founder",
    company: "Meridian D2C",
    project: "E-commerce rebrand & launch",
    industry: "E-commerce",
    caseStudySlug: "brandlift-ecommerce",
  },
  {
    id: "tom-ashworth",
    quote:
      "UI/UX and development in one team meant fewer handoffs, faster decisions, and a product that feels premium end to end.",
    name: "Tom Ashworth",
    role: "CTO",
    company: "CarePath Health",
    project: "Patient mobile app",
    industry: "Healthcare",
  },
];

/** @deprecated Use clientTestimonials */
export type ClientVoice = ClientTestimonial;
/** @deprecated Use clientTestimonials */
export const clientVoices = clientTestimonials;

/** Industry focus badges - not third-party client logos. */
export type IndustryFocus = {
  name: string;
  industry: string;
  logoSrc: string;
};

export const industryFocus: IndustryFocus[] = [
  { name: "UK SaaS", industry: "B2B products", logoSrc: "/brand/industries/saas.svg" },
  { name: "US Trucking", industry: "Dispatch & fleet", logoSrc: "/brand/industries/trucking.svg" },
  { name: "Accounting", industry: "QuickBooks & Xero", logoSrc: "/brand/industries/accounting.svg" },
  { name: "CRM", industry: "Sales & ops", logoSrc: "/brand/industries/crm.svg" },
  { name: "Healthcare", industry: "Patient apps", logoSrc: "/brand/industries/healthcare.svg" },
  { name: "E-commerce", industry: "D2C & retail", logoSrc: "/brand/industries/ecommerce.svg" },
  { name: "AI products", industry: "Automation", logoSrc: "/brand/industries/ai.svg" },
  { name: "Marketplaces", industry: "Two-sided platforms", logoSrc: "/brand/industries/marketplace.svg" },
];

/** @deprecated Use industryFocus */
export const clientLogos = industryFocus;

export type ClientLogo = IndustryFocus & { website?: string };
