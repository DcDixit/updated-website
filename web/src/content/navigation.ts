/** Site navigation, CTAs, and footer structure. */

export const primaryCtas = {
  book: { label: "Book a call", href: "/contact#book" },
  brief: { label: "Start a project", href: "/contact#brief" },
  viewWork: { label: "View our work", href: "/work" },
  services: { label: "Explore services", href: "/services" },
  saasSolutions: { label: "SaaS solutions", href: "/solutions/saas" },
  truckingSolutions: { label: "Trucking solutions", href: "/solutions/trucking-logistics" },
} as const;

/** Primary header navigation - keep concise for clarity. */
export const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Secondary links - footer and mobile overflow. */
export const navSecondary = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Tools & Stack", href: "/technologies" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
] as const;

export const footerColumns = [
  {
    heading: "Solutions",
    links: [
      { label: "All solutions", href: "/solutions" },
      { label: "SaaS Product Solutions", href: "/solutions/saas" },
      { label: "Trucking & Logistics", href: "/solutions/trucking-logistics" },
      { label: "QuickBooks & Xero", href: "/solutions/accounting-integrations" },
      { label: "Car Transportation", href: "/solutions/car-transportation" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "All services", href: "/services" },
      { label: "SaaS Product Design", href: "/services/saas-platforms" },
      { label: "CRM & Dashboards", href: "/services/crm-development" },
      { label: "Integrations & APIs", href: "/services/api-integrations" },
      { label: "AI Development", href: "/services/ai-assisted-development" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Process", href: "/process" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;
