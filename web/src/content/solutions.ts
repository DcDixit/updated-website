import type { Icon } from "@tabler/icons-react";
import {
  IconBrain,
  IconChartBar,
  IconLayoutDashboard,
  IconReceipt2,
  IconRoute,
  IconTruck,
} from "@tabler/icons-react";

export type SolutionSlug =
  | "saas"
  | "trucking-logistics"
  | "accounting-integrations"
  | "car-transportation";

export type SolutionPillar = {
  slug: SolutionSlug;
  title: string;
  headline: string;
  summary: string;
  market?: string;
  href: string;
  icon: Icon;
  services: readonly string[];
  cta: string;
  seo: {
    title: string;
    description: string;
    keywords: readonly string[];
  };
};

export type SolutionDetail = SolutionPillar & {
  heroLead: string;
  outcomes: readonly { label: string; value: string }[];
  capabilities: readonly { title: string; description: string }[];
  processSteps: readonly { title: string; body: string }[];
  faq: readonly { q: string; a: string }[];
  relatedServiceSlugs: readonly string[];
  relatedCaseSlugs: readonly string[];
};

export const solutionPillars: SolutionPillar[] = [
  {
    slug: "saas",
    title: "SaaS Product Solutions",
    headline: "SaaS products that earn demos - and keep users after signup.",
    summary:
      "SaaS teams hire us when the product works but users aren't sticking. We fix the parts that cause drop-off - onboarding flows, permission screens, dashboards, and the UX patterns that turn trials into paying accounts.",
    market: "UK & US SaaS",
    href: "/solutions/saas",
    icon: IconLayoutDashboard,
    services: [
      "SaaS UI/UX & onboarding",
      "Dashboard design",
      "MVP build (10-week sprints)",
      "AI-assisted workflows",
      "Design system setup",
      "Post-launch retainer",
    ],
    cta: "Explore SaaS solutions",
    seo: {
      title: "SaaS Product Design & Development Agency UK",
      description:
        "Product design and development for UK B2B SaaS - onboarding UX, dashboards, MVP builds, and design systems that scale with your roadmap.",
      keywords: [
        "SaaS product design agency UK",
        "SaaS UI/UX agency",
        "B2B SaaS onboarding design",
        "SaaS MVP development UK",
      ],
    },
  },
  {
    slug: "trucking-logistics",
    title: "Trucking & Logistics Solutions",
    headline: "Dispatch and fleet software shaped around the desk - not a demo deck.",
    summary:
      "Dispatch boards, fleet dashboards, driver apps, and load management tools - built for how trucking ops teams actually work, not how software companies think they should.",
    market: "Trucking & logistics",
    href: "/solutions/trucking-logistics",
    icon: IconTruck,
    services: [
      "Custom TMS & dispatch CRM",
      "Fleet dashboards",
      "Driver mobile apps",
      "Trucking websites",
      "Logistics SaaS",
      "Carrier onboarding flows",
    ],
    cta: "Explore trucking solutions",
    seo: {
      title: "Custom Trucking Software & Dispatch CRM Development USA",
      description:
        "Custom trucking software for US operators - dispatch CRM, fleet dashboards, driver apps, TMS-style platforms, and logistics integrations.",
      keywords: [
        "custom trucking software development",
        "dispatch CRM solutions",
        "fleet management dashboard",
        "TMS software development USA",
      ],
    },
  },
  {
    slug: "accounting-integrations",
    title: "QuickBooks & Xero Integrations",
    headline: "Your sync drifts every month-end. Ours doesn't.",
    summary:
      "Reliable sync between your platform and QuickBooks or Xero. Reconciliation dashboards, exception handling, and the kind of month-end close experience that doesn't require a fire drill.",
    market: "Finance & operations",
    href: "/solutions/accounting-integrations",
    icon: IconReceipt2,
    services: [
      "QuickBooks API integration",
      "Xero sync & reconciliation",
      "Exception dashboards",
      "Operator reporting",
      "Automated workflows",
      "Finance team handoff docs",
    ],
    cta: "Explore integrations",
    seo: {
      title: "QuickBooks & Xero Integration Development",
      description:
        "QuickBooks and Xero integration services - reliable sync, reconciliation dashboards, and API connectors for SaaS and logistics platforms.",
      keywords: ["QuickBooks integration development", "Xero API integration", "Accounting software sync"],
    },
  },
  {
    slug: "car-transportation",
    title: "Car Transportation",
    headline: "Vehicle logistics software that matches how carriers actually operate.",
    summary:
      "Quote calculators, shipment tracking, and operations tools for auto transport companies - designed around the workflow your dispatch and sales teams already follow.",
    market: "Auto transport",
    href: "/solutions/car-transportation",
    icon: IconRoute,
    services: [
      "Transport booking portals",
      "Carrier dispatch tools",
      "Customer tracking UX",
      "Quote & pricing flows",
      "Driver coordination apps",
      "Ops automation",
    ],
    cta: "Explore car transport solutions",
    seo: {
      title: "Car Transportation Software & Digital Product Design",
      description:
        "Digital product design and development for car transportation companies - booking portals, dispatch CRM, and customer tracking experiences.",
      keywords: ["Car transportation software", "Auto transport dispatch", "Vehicle logistics platform"],
    },
  },
];

/** Homepage-only pillars including CRM and AI (link to services or solutions). */
export const homepageSolutionSections = [
  ...solutionPillars,
  {
    slug: "crm-automation" as const,
    title: "CRM & Workflow Automation",
    headline: "CRM your ops team opens every morning, not just at month-end.",
    summary:
      "Custom CRM layouts, pipeline views, and internal tools that match how your sales or ops team actually tracks work - not how a default CRM thinks they should.",
    market: "SaaS · Trucking · Professional services",
    href: "/services/crm-development",
    icon: IconChartBar,
    services: [
      "Dispatch CRM UX",
      "Sales pipeline design",
      "Custom dashboards",
      "Workflow automation",
      "CRM integrations",
      "Reporting views",
    ],
    cta: "Explore CRM solutions",
    seo: {
      title: "CRM & Workflow Automation",
      description: "CRM dashboard design and workflow automation for product and operations teams.",
      keywords: ["Dispatch CRM solutions", "CRM dashboard design"],
    },
  },
  {
    slug: "ai-productivity" as const,
    title: "AI Productivity & Automation",
    headline: "AI that saves hours. A human signs off before anything ships.",
    summary:
      "Practical AI workflows: ticket triage, document processing, internal tooling. Every automation reviewed by a person before it touches production.",
    market: "Global",
    href: "/services/ai-assisted-development",
    icon: IconBrain,
    services: [
      "AI-assisted design",
      "Smart prototyping",
      "Workflow automation",
      "Support triage",
      "Document processing",
      "QA acceleration",
    ],
    cta: "Explore AI solutions",
    seo: {
      title: "AI SaaS Development & Productivity Automation",
      description: "AI-powered product development and workflow automation for SaaS and logistics teams.",
      keywords: ["AI SaaS development company", "AI product development agency"],
    },
  },
] as const;

export const solutionDetails: Record<SolutionSlug, SolutionDetail> = {
  saas: {
    ...solutionPillars[0],
    heroLead:
      "We partner with UK SaaS founders and product leaders to design MVPs, refine onboarding, and scale dashboards - with an in-house team that ships weekly, not just presents.",
    outcomes: [
      { label: "Typical MVP timeline", value: "8-12 weeks" },
      { label: "Engagement model", value: "Design + build" },
      { label: "Team", value: "In-house only" },
    ],
    capabilities: [
      {
        title: "SaaS UI/UX & product design",
        description: "Research-led flows, onboarding, settings, and permission models that reduce churn and support pricing.",
      },
      {
        title: "Dashboard & admin design",
        description: "Tenant-aware admin panels, analytics views, and design systems that scale across releases.",
      },
      {
        title: "MVP design & development",
        description: "From validated prototype to production-ready Next.js or low-code MVP, scoped for speed and a clear timeline.",
      },
      {
        title: "AI-powered workflows",
        description: "Embed AI into product UX and internal delivery, with review gates and audit-friendly processes.",
      },
      {
        title: "Product scalability",
        description: "Design tokens, component libraries, and UX patterns that survive rapid feature growth.",
      },
      {
        title: "SaaS branding",
        description: "Positioning-ready visual identity that supports enterprise sales and investor conversations.",
      },
    ],
    processSteps: [
      { title: "Discovery", body: "Align on ICP, activation metrics, and MVP scope. Everything is documented before design starts." },
      { title: "Design sprints", body: "Flows, prototypes, and UI validated with stakeholders and target users." },
      { title: "Build & iterate", body: "Incremental delivery with demos, QA, and analytics baselines." },
      { title: "Launch & scale", body: "Handoff, design system docs, and roadmap support for the next release." },
    ],
    faq: [
      {
        q: "Do you work with early-stage UK SaaS startups?",
        a: "Yes. We work with teams from pre-seed MVPs through to Series A scaling. Team size and engagement model are tailored to your stage and runway.",
      },
      {
        q: "Can you redesign an existing SaaS product?",
        a: "Absolutely. We typically roll out redesigns in phases to reduce risk and maintain user continuity.",
      },
      {
        q: "Design-only or design + development?",
        a: "Both. Many clients start with product design and extend into Next.js development with the same in-house team.",
      },
      {
        q: "Do you work with US SaaS teams as well as UK?",
        a: "Yes. The UK is our primary SaaS market, but we regularly support US product teams with overlapping hours and the same delivery model.",
      },
      {
        q: "What's a typical first engagement?",
        a: "A scoped discovery + design sprint, or a fixed MVP build with weekly demos. We recommend the lightest path that answers your biggest risk - activation, demo readiness, or technical feasibility.",
      },
    ],
    relatedServiceSlugs: ["saas-platforms", "product-design", "ui-ux-design", "ai-assisted-development"],
    relatedCaseSlugs: ["payroll-pro-saas", "crm-pulse-dashboard", "marketplace-mvp"],
  },
  "trucking-logistics": {
    ...solutionPillars[1],
    heroLead:
      "We build dispatch CRM, fleet dashboards, driver apps, and trucking websites for US operators - freight brokers, carriers, logistics startups, and fleet businesses that have outgrown spreadsheets or rigid off-the-shelf TMS.",
    outcomes: [
      { label: "Focus market", value: "US trucking" },
      { label: "Integrations", value: "ELD · accounting · CRM" },
      { label: "Delivery", value: "Phased rollout" },
    ],
    capabilities: [
      {
        title: "Trucking company websites",
        description: "Conversion-focused sites for carriers, brokers, and logistics brands. Fast, credible, and built for search.",
      },
      {
        title: "Dispatch CRM solutions",
        description: "Unified dispatch consoles with bulk actions, SLA tracking, and supervisor oversight built for ops floors.",
      },
      {
        title: "Fleet management dashboards",
        description: "Real-time fleet visibility, route performance, and exception handling, designed for dispatchers and operations managers.",
      },
      {
        title: "Driver mobile apps",
        description: "Clear mobile UX for load acceptance, status updates, documents, and communication on the road.",
      },
      {
        title: "Logistics branding",
        description: "Professional brand systems for trucking and freight companies competing on trust and reliability.",
      },
      {
        title: "Transportation SaaS platforms",
        description: "Multi-tenant TMS-style products, broker tools, and logistics SaaS from MVP through scale.",
      },
    ],
    processSteps: [
      { title: "Ops discovery", body: "Shadow dispatch workflows, map pain points, and define success metrics with your ops team." },
      { title: "UX for the floor", body: "Design for speed, error recovery, and high-volume actions, validated with real operators before anything ships." },
      { title: "Build & integrate", body: "Connect ELD, mapping, accounting, and CRM systems with reliable sync and monitoring." },
      { title: "Rollout & training", body: "Phased launch, operator docs, and iteration based on floor feedback." },
    ],
    faq: [
      {
        q: "Do you work with US trucking companies and freight brokers?",
        a: "Yes - this is a primary focus. We align stand-ups and delivery to US time zones and how dispatch desks actually run.",
      },
      {
        q: "Custom TMS vs off-the-shelf - how do you decide?",
        a: "If a commercial TMS fits your workflows and integrations, we often recommend staying put and building around it. Custom makes sense when your processes, settlements, or integrations are the product - and off-the-shelf would force expensive workarounds.",
      },
      {
        q: "Can you redesign our dispatch CRM without stopping operations?",
        a: "We plan phased rollouts and parallel workflows so dispatch keeps running during migration.",
      },
      {
        q: "Do you build driver mobile apps too?",
        a: "Yes - React Native and Flutter paths for iOS and Android, designed alongside dispatch and fleet tools.",
      },
      {
        q: "Who owns the software after launch?",
        a: "You do. Source code, design files, and documentation transfer to your accounts. We can stay on retainer for iteration, but you're never locked in.",
      },
    ],
    relatedServiceSlugs: ["crm-development", "web-development", "mobile-applications", "saas-platforms"],
    relatedCaseSlugs: ["fleetflow-dispatch", "finance-sync-hub", "crm-pulse-dashboard"],
  },
  "accounting-integrations": {
    ...solutionPillars[2],
    heroLead:
      "Connect your product or ops platform to QuickBooks Online and Xero, with sync jobs finance teams trust, operator dashboards, and alerts when something breaks.",
    outcomes: [
      { label: "Platforms supported", value: "QBO · Xero" },
      { label: "Engagement model", value: "Sync + operator UX" },
      { label: "Delivery", value: "Phased go-live" },
    ],
    capabilities: [
      {
        title: "QuickBooks Online integration",
        description: "Customers, invoices, payments, and chart-of-accounts mapping with idempotent sync and audit trails.",
      },
      {
        title: "Xero API integration",
        description: "Two-way sync for contacts, invoices, and bank feeds, with clear error states and retry logic.",
      },
      {
        title: "Reconciliation dashboards",
        description: "Operator views for sync status, exceptions, and month-end close. Built for finance teams, not engineers.",
      },
      {
        title: "Webhook & job monitoring",
        description: "Alerting, logs, and fallback rules so integration failures never go silent.",
      },
      {
        title: "Multi-entity & multi-currency",
        description: "Support for complex org structures common in SaaS billing and logistics invoicing.",
      },
      {
        title: "Integration architecture",
        description: "Documented connector design your team can extend as product and billing models evolve.",
      },
    ],
    processSteps: [
      { title: "Data mapping", body: "Map entities, edge cases, and failure modes between your product and accounting system." },
      { title: "Connector build", body: "Implement sync jobs, webhooks, and idempotency with staging validation." },
      { title: "Operator UX", body: "Dashboards and alerts so finance can self-serve exceptions without engineering tickets." },
      { title: "Go-live & monitor", body: "Parallel run, reconciliation checks, and ongoing monitoring playbooks." },
    ],
    faq: [
      {
        q: "QuickBooks Desktop or QuickBooks Online?",
        a: "We primarily integrate QuickBooks Online via Intuit's API. Desktop integrations are scoped case-by-case.",
      },
      {
        q: "Can you sync both Xero and QuickBooks for different regions?",
        a: "Yes. Multi-region billing setups with separate connectors and unified operator dashboards are common for SaaS clients.",
      },
      {
        q: "How do you handle sync failures?",
        a: "Every job logs errors, retries with backoff, and surfaces exceptions in an operator dashboard with actionable next steps.",
      },
    ],
    relatedServiceSlugs: ["api-integrations", "automation-systems", "crm-development"],
    relatedCaseSlugs: ["finance-sync-hub", "payroll-pro-saas", "crm-pulse-dashboard"],
  },
  "car-transportation": {
    ...solutionPillars[3],
    heroLead:
      "Digital products for auto transport companies: quote flows, carrier dispatch, customer tracking, and ops automation built for vehicle logistics.",
    outcomes: [
      { label: "Focus market", value: "Auto transport" },
      { label: "Typical scope", value: "Quote · dispatch · tracking" },
      { label: "Platform delivery", value: "6-14 weeks" },
    ],
    capabilities: [
      {
        title: "Transport booking portals",
        description: "Quote, book, and pay flows optimized for conversion, with clear pricing and trust signals throughout.",
      },
      {
        title: "Carrier dispatch tools",
        description: "Assign loads, coordinate drivers, and manage exceptions from a single ops console.",
      },
      {
        title: "Customer tracking UX",
        description: "Shipment status, ETA updates, and proactive notifications that reduce support volume.",
      },
      {
        title: "Pricing & quote engines",
        description: "Configurable quote logic with transparent breakdowns for customers and ops review.",
      },
      {
        title: "Driver coordination apps",
        description: "Mobile-first tools for pickup, delivery confirmation, and document capture.",
      },
      {
        title: "Ops automation",
        description: "Automate status updates, invoicing triggers, and CRM follow-ups across your transport stack.",
      },
    ],
    processSteps: [
      { title: "Journey mapping", body: "Map customer, carrier, and ops journeys to identify friction in the quote-to-delivery process." },
      { title: "Product design", body: "High-fidelity UX for portals, dispatch, and tracking, validated before build begins." },
      { title: "Platform build", body: "Next.js web apps, mobile coordination tools, and integrations with your existing stack." },
      { title: "Launch & optimize", body: "Analytics, conversion tuning, and ops feedback loops post-launch." },
    ],
    faq: [
      {
        q: "Do you build for auto transport brokers and carriers?",
        a: "Yes. We build for both sides: customer-facing portals and internal dispatch and ops tools.",
      },
      {
        q: "Can this connect to our existing TMS or CRM?",
        a: "We integrate with common logistics and CRM platforms via API, or build custom connectors where needed.",
      },
      {
        q: "How is this different from general trucking solutions?",
        a: "Car transportation has unique quote, tracking, and customer communication patterns. We design specifically for vehicle logistics, not general trucking.",
      },
    ],
    relatedServiceSlugs: ["web-development", "crm-development", "mobile-applications", "api-integrations"],
    relatedCaseSlugs: ["fleetflow-dispatch", "marketplace-mvp", "finance-sync-hub"],
  },
};

export function getSolutionBySlug(slug: string): SolutionDetail | undefined {
  return solutionDetails[slug as SolutionSlug];
}

export const solutionSlugs = Object.keys(solutionDetails) as SolutionSlug[];

