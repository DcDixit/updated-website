import type { Icon } from "@tabler/icons-react";
import { IconChartBar, IconRocket, IconTruck } from "@tabler/icons-react";

/** Audience personas and tool highlights for marketing sections. */

export const clientPersonas = [
  {
    title: "UK SaaS founders",
    description: "Pre-seed to Series A teams shipping MVPs, tightening onboarding, clarifying dashboards, and getting product UI ready for investor or enterprise demos.",
    href: "/solutions/saas",
    cta: "SaaS solutions",
    icon: IconRocket,
  },
  {
    title: "US trucking operators",
    description: "Carriers, brokers, and fleet teams who need dispatch CRM, driver apps, or fleet dashboards that match real desk workflows - without a painful rip-and-replace.",
    href: "/solutions/trucking-logistics",
    cta: "Trucking solutions",
    icon: IconTruck,
  },
  {
    title: "Finance and ops teams",
    description: "Teams that need QuickBooks or Xero sync they can trust, plus exception views that surface issues before month-end close becomes a fire drill.",
    href: "/solutions/accounting-integrations",
    cta: "Integration solutions",
    icon: IconChartBar,
  },
] as const satisfies ReadonlyArray<{
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: Icon;
}>;

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
  { label: "Clients", href: "#clients" },
  { label: "Solutions", href: "#solutions" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Tools", href: "#tools" },
  { label: "Team", href: "#team" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;

