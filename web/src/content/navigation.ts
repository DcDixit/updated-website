/** Site navigation, CTAs, and footer structure. */

/**
 * Canonical primary CTA — one filled primary site-wide.
 * Secondary "Send a project brief" is a text link only, never a second filled button.
 */
export const primaryCtas = {
  book: { label: "Book a 20-minute fit call", href: "/contact#book" },
  brief: { label: "Send a project brief", href: "/contact#brief" },
  viewWork: { label: "View our work", href: "/work" },
  services: { label: "Explore services", href: "/services" },
  saasSolutions: { label: "SaaS solutions", href: "/solutions/saas" },
  truckingSolutions: { label: "Trucking solutions", href: "/solutions/trucking-logistics" },
} as const;

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: string; children: readonly NavChild[] };

/** Desktop bar: Trucking | SaaS | Services | Work | About  (+ CTA). Process is mobile/footer only. */
export const mainNav: readonly NavItem[] = [
  {
    label: "Trucking",
    children: [
      {
        label: "Dispatch CRM & TMS",
        href: "/services/crm-development",
        description: "Dispatch consoles, bulk actions, supervisor oversight.",
      },
      {
        label: "Fleet dashboards",
        href: "/services/dashboard-design",
        description: "Route performance and exception handling.",
      },
      {
        label: "Driver mobile apps",
        href: "/services/mobile-applications",
        description: "Load acceptance, status updates, documents.",
      },
      {
        label: "Car transportation",
        href: "/solutions/car-transportation",
        description: "Quote flows, tracking, and auto-transport ops tools.",
      },
      {
        label: "Trucking & moving websites",
        href: "/services/web-development",
        description: "Conversion-focused sites for carriers and movers.",
      },
      {
        label: "All trucking solutions",
        href: "/solutions/trucking-logistics",
        description: "Dispatch, fleet, drivers, and logistics software overview.",
      },
    ],
  },
  {
    label: "SaaS",
    children: [
      {
        label: "QuickBooks & Xero integrations",
        href: "/solutions/accounting-integrations",
        description: "Sync and reconciliation your finance team can trust.",
      },
      {
        label: "SaaS product design",
        href: "/services/saas-platforms",
        description: "Multi-tenant UX, admin panels, permissions.",
      },
      {
        label: "Dashboards & admin panels",
        href: "/services/dashboard-design",
        description: "Analytics and operational views built for daily use.",
      },
      {
        label: "Product design & UX",
        href: "/services/product-design",
        description: "Research, flows, prototypes, and launch-ready UI.",
      },
      {
        label: "All SaaS solutions",
        href: "/solutions/saas",
      },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
] as const;

/** Mobile + footer only — not in the desktop bar. */
export const processNavItem = { label: "Process", href: "/process" } as const;

/** Secondary links — footer Company column and mobile overflow. */
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
    heading: "Trucking & Logistics",
    links: [
      { label: "Trucking & logistics solutions", href: "/solutions/trucking-logistics" },
      { label: "Dispatch CRM & TMS", href: "/services/crm-development" },
      { label: "Fleet dashboards", href: "/services/dashboard-design" },
      { label: "Driver mobile apps", href: "/services/mobile-applications" },
      { label: "Car transportation", href: "/solutions/car-transportation" },
    ],
  },
  {
    heading: "SaaS",
    links: [
      { label: "SaaS product solutions", href: "/solutions/saas" },
      { label: "QuickBooks & Xero integrations", href: "/solutions/accounting-integrations" },
      { label: "SaaS product design", href: "/services/saas-platforms" },
      { label: "Integrations & APIs", href: "/services/api-integrations" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;
