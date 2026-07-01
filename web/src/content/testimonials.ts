/** Client feedback — named with client permission. */

export const testimonials = [
  {
    quote:
      "Northline redesigned our SaaS onboarding in six weeks. Activation jumped 18% and our board finally saw product and engineering aligned.",
    name: "Ravi Mehta",
    role: "Head of Product",
    company: "FlowLedger (UK B2B SaaS)",
    rating: 5,
    project: "SaaS onboarding redesign",
  },
  {
    quote:
      "They delivered a dispatch console our ops team actually enjoys using — handle time down 32% without adding headcount.",
    name: "Marcus Cole",
    role: "VP Operations",
    company: "FleetRoute Logistics (US)",
    rating: 5,
    project: "Dispatch console & CRM",
  },
  {
    quote:
      "From brand identity to Shopify launch, the conversion uplift paid for the project in the first quarter.",
    name: "Anita Desai",
    role: "Founder",
    company: "Meridian D2C",
    rating: 5,
    project: "E-commerce rebrand & launch",
  },
  {
    quote:
      "UI/UX and development in one team meant fewer handoffs, faster decisions, and a product that feels premium end to end.",
    name: "Tom Ashworth",
    role: "CTO",
    company: "CarePath Health",
    rating: 5,
    project: "Patient mobile app",
  },
] as const;

export const reviewSignals = [
  {
    source: "Google",
    headline: "5.0 · 8 reviews",
    subtitle: "Consistently rated for communication, quality, and on-time delivery.",
    href: "https://g.page/r/northline-digital/review",
  },
] as const;

export type IndustryFocus = {
  name: string;
  industry: string;
  logoSrc: string;
};

/** Industry focus badges - not third-party client logos. Replace with approved client marks when licensed. */
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

/** @deprecated Use industryFocus - kept for backward-compatible imports during content migration. */
export const clientLogos = industryFocus;

export type ClientLogo = IndustryFocus & { website?: string };
