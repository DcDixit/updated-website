import type { Icon } from "@tabler/icons-react";
import { IconChartBar, IconRocket, IconTruck } from "@tabler/icons-react";

/** Audience personas and tool highlights for marketing sections. */

export const clientPersonas = [
  {
    title: "SaaS founders & product teams",
    description: "Pre-seed to Series B teams shipping MVPs, tightening onboarding, and getting product UI ready for demos, investors, or enterprise buyers. We've done this 20+ times.",
    href: "/solutions/saas",
    cta: "SaaS solutions",
    icon: IconRocket,
  },
  {
    title: "Trucking & logistics operators",
    description: "Carriers, brokers, and fleet managers who need dispatch software, driver apps, or fleet dashboards that match real desk workflows - without a six-month implementation.",
    href: "/solutions/trucking-logistics",
    cta: "Trucking solutions",
    icon: IconTruck,
  },
  {
    title: "Finance & operations teams",
    description: "Teams that need QuickBooks or Xero sync they can actually trust, plus exception dashboards that catch problems before month-end close turns into overtime.",
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

