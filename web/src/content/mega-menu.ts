import type { ServiceSlug } from "@/content/services";
import type { SolutionSlug } from "@/content/solutions";

export type MegaMenuServiceGroup = {
  id: string;
  label: string;
  items: readonly {
    slug: ServiceSlug;
    /** Shorter label for the header menu when the full service title is too long. */
    title?: string;
  }[];
};

/** One-line teasers for the solutions panel — not full page summaries. */
export const solutionMenuTeasers: Record<SolutionSlug, string> = {
  saas: "Onboarding, dashboards, and MVPs for SaaS teams.",
  "trucking-logistics": "Dispatch CRM, fleet dashboards, and driver apps.",
  "accounting-integrations": "QuickBooks & Xero sync with reliable reconciliation.",
  "car-transportation": "Quote flows, tracking, and ops tools for auto transport.",
};

/** Text-only service groupings balanced for a four-column scan pattern. */
export const megaMenuServiceGroups: MegaMenuServiceGroup[] = [
  {
    id: "product-ux",
    label: "Product & UX",
    items: [
      { slug: "product-design" },
      { slug: "ui-ux-design" },
      { slug: "ux-research" },
      { slug: "wireframing-prototyping", title: "Wireframing & Prototyping" },
      { slug: "design-systems" },
    ],
  },
  {
    id: "apps-dashboards",
    label: "Apps & Dashboards",
    items: [
      { slug: "mobile-applications", title: "Mobile App Design" },
      { slug: "web-application-design" },
      { slug: "saas-platforms", title: "SaaS Product Design" },
      { slug: "dashboard-design" },
      { slug: "crm-development", title: "CRM Design" },
    ],
  },
  {
    id: "brand-web",
    label: "Brand & Web",
    items: [
      { slug: "branding", title: "Branding & Identity" },
      { slug: "logo-design" },
      { slug: "web-development", title: "Web Design & Development" },
      { slug: "api-integrations", title: "Integrations & APIs" },
    ],
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    items: [
      { slug: "ai-assisted-development", title: "AI-Assisted Development" },
      { slug: "no-code-low-code", title: "No-Code / Low-Code" },
      { slug: "automation-systems", title: "Automation Workflows" },
    ],
  },
];

export function getMegaMenuServiceTitle(
  item: { title?: string },
  fallbackTitle: string
) {
  return item.title ?? fallbackTitle;
}
