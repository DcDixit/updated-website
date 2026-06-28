/** Audience personas and tool highlights for marketing sections. */

export const clientPersonas = [
  {
    title: "UK SaaS founders",
    description: "Pre-seed to Series A teams shipping MVPs, fixing onboarding drop-off, improving dashboards, and preparing product UI for investor or enterprise demos.",
    href: "/solutions/saas",
    cta: "SaaS solutions",
  },
  {
    title: "US trucking operators",
    description: "Carriers, freight brokers, dispatch companies, and fleet businesses who need CRM, driver apps, or fleet dashboards — and can't afford weeks of downtime to switch tools.",
    href: "/solutions/trucking-logistics",
    cta: "Trucking solutions",
  },
  {
    title: "Finance & ops teams",
    description: "Product and operations teams who need QuickBooks or Xero sync that doesn't drift, with dashboards that surface exceptions before month-end becomes a crisis.",
    href: "/solutions/accounting-integrations",
    cta: "Integration solutions",
  },
] as const;

export const aiToolLabels = [
  "Claude",
  "ChatGPT",
  "GitHub Copilot",
  "Cursor",
  "Figma AI",
  "Make",
  "QuickBooks API",
  "Xero API",
  "Next.js",
  "React",
] as const;

export const homeJumpLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "SaaS", href: "#saas" },
  { label: "Trucking", href: "#trucking" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
] as const;
