/** Client testimonials — emptied until quotes are client-verified. */

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

/** Fabricated quotes removed (Sprint 0 Stage 3). Do not re-add unverified names. */
export const clientTestimonials: ClientTestimonial[] = [];

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
  { name: "US Trucking", industry: "Dispatch & fleet", logoSrc: "/brand/industries/trucking.svg" },
  { name: "UK SaaS", industry: "B2B products", logoSrc: "/brand/industries/saas.svg" },
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
