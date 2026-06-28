import type { Icon } from "@tabler/icons-react";
import {
  IconBrain,
  IconBuildingWarehouse,
  IconChartBar,
  IconDeviceMobile,
  IconLayoutDashboard,
  IconReceipt2,
  IconRoute,
  IconTruck,
  IconWorld,
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
  market: string;
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
    headline: "SaaS product design agency for UK startups and scaling teams",
    summary:
      "UI/UX, dashboards, MVP development, and AI-assisted workflows — built by an in-house product team from discovery through launch.",
    market: "Primary · UK · Secondary · US",
    href: "/solutions/saas",
    icon: IconLayoutDashboard,
    services: ["SaaS UI/UX", "Dashboard design", "MVP development", "AI workflows", "Product scalability", "SaaS branding"],
    cta: "Explore SaaS solutions",
    seo: {
      title: "SaaS Product Design Agency UK",
      description:
        "SaaS UI/UX agency for UK startups — MVP development, dashboard design, AI-assisted workflows, and scalable product systems.",
      keywords: ["SaaS product design agency UK", "SaaS UI/UX agency", "Product design consultancy UK", "AI SaaS development company"],
    },
  },
  {
    slug: "trucking-logistics",
    title: "Trucking & Logistics Solutions",
    headline: "Digital products for US trucking companies, brokers, and fleet operators",
    summary:
      "Trucking websites, dispatch CRM, fleet dashboards, driver mobile apps, and transportation SaaS platforms - designed for real ops teams.",
    market: "Primary · United States",
    href: "/solutions/trucking-logistics",
    icon: IconTruck,
    services: ["Trucking websites", "Dispatch CRM", "Fleet dashboards", "Driver mobile apps", "Logistics branding", "Transportation SaaS"],
    cta: "Explore trucking solutions",
    seo: {
      title: "Trucking Website Design & Logistics Software Development USA",
      description:
        "Trucking website design company USA - dispatch CRM solutions, fleet management dashboards, driver apps, and logistics software development.",
      keywords: [
        "Trucking website design company USA",
        "Logistics software development",
        "Dispatch CRM solutions",
        "Fleet management dashboard",
      ],
    },
  },
  {
    slug: "accounting-integrations",
    title: "QuickBooks & Xero Integrations",
    headline: "Reliable accounting sync for product teams and operations",
    summary:
      "QuickBooks and Xero API integrations with clear error handling, operator dashboards, and reconciliation workflows your finance team trusts.",
    market: "UK · US · Global",
    href: "/solutions/accounting-integrations",
    icon: IconReceipt2,
    services: ["QuickBooks Online sync", "Xero API integration", "Invoice & payment flows", "Reconciliation dashboards", "Multi-entity mapping", "Webhook monitoring"],
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
    headline: "Software and digital experiences for vehicle transport operators",
    summary:
      "Booking portals, carrier dashboards, dispatch workflows, and customer-facing tracking for auto transport and vehicle logistics businesses.",
    market: "United States · Canada",
    href: "/solutions/car-transportation",
    icon: IconRoute,
    services: ["Transport booking portals", "Carrier dispatch tools", "Customer tracking UX", "Quote & pricing flows", "Driver coordination apps", "Ops automation"],
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
    headline: "Operational dashboards and automation your team actually uses",
    summary:
      "Custom CRM UX, sales pipelines, dispatch consoles, and Make/Zapier workflows - designed around how your team works day to day.",
    market: "SaaS · Trucking · Professional services",
    href: "/services/crm-development",
    icon: IconChartBar,
    services: ["Dispatch CRM UX", "Sales pipeline design", "Custom dashboards", "Workflow automation", "CRM integrations", "Reporting views"],
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
    headline: "AI-accelerated delivery with human oversight at every step",
    summary:
      "Embed AI into design, development, and ops workflows - faster iteration without sacrificing quality, compliance, or brand trust.",
    market: "UK · US · Global",
    href: "/services/ai-assisted-development",
    icon: IconBrain,
    services: ["AI-assisted design", "Smart prototyping", "Workflow automation", "Support triage", "Document processing", "QA acceleration"],
    cta: "Explore AI solutions",
    seo: {
      title: "AI SaaS Development & Productivity Automation",
      description: "AI-assisted product development and workflow automation for SaaS and logistics teams.",
      keywords: ["AI SaaS development company", "AI product development agency"],
    },
  },
] as const;

export const solutionDetails: Record<SolutionSlug, SolutionDetail> = {
  saas: {
    ...solutionPillars[0],
    heroLead:
      "We partner with UK SaaS founders and product leaders to design MVPs, refine onboarding, and scale dashboards - with an in-house team that ships, not slides.",
    outcomes: [
      { label: "Typical MVP timeline", value: "8–12 weeks" },
      { label: "Activation uplift", value: "+15–25%" },
      { label: "Team size", value: "15+ in-house" },
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
        description: "From validated prototype to production-ready Next.js or low-code MVP - scoped for speed and clarity.",
      },
      {
        title: "AI-assisted workflows",
        description: "Embed AI into product UX and internal delivery - with review gates and audit-friendly processes.",
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
      { title: "Discovery", body: "Align on ICP, activation metrics, and MVP scope - documented before design starts." },
      { title: "Design sprints", body: "Flows, prototypes, and UI validated with stakeholders and target users." },
      { title: "Build & iterate", body: "Incremental delivery with demos, QA, and analytics baselines." },
      { title: "Launch & scale", body: "Handoff, design system docs, and roadmap support for the next release." },
    ],
    faq: [
      {
        q: "Do you work with early-stage UK SaaS startups?",
        a: "Yes - from pre-seed MVPs to Series A scaling. We tailor team size and engagement model to your stage and runway.",
      },
      {
        q: "Can you redesign an existing SaaS product?",
        a: "Absolutely. We typically roll out redesigns in phases to reduce risk and maintain user continuity.",
      },
      {
        q: "Design-only or design + development?",
        a: "Both. Many clients start with product design and extend into Next.js development with the same in-house team.",
      },
    ],
    relatedServiceSlugs: ["saas-platforms", "product-design", "ui-ux-design", "ai-assisted-development"],
    relatedCaseSlugs: ["payroll-pro-saas", "crm-pulse-dashboard", "marketplace-mvp"],
  },
  "trucking-logistics": {
    ...solutionPillars[1],
    heroLead:
      "We build dispatch CRM, fleet dashboards, driver apps, and trucking websites for US operators - freight brokers, dispatch companies, logistics startups, and fleet businesses.",
    outcomes: [
      { label: "Dispatch handle time", value: "−20–35%" },
      { label: "Routes managed daily", value: "400+" },
      { label: "US market focus", value: "Primary" },
    ],
    capabilities: [
      {
        title: "Trucking company websites",
        description: "Conversion-focused sites for carriers, brokers, and logistics brands - fast, credible, and SEO-ready.",
      },
      {
        title: "Dispatch CRM solutions",
        description: "Unified dispatch consoles with bulk actions, SLA tracking, and supervisor oversight built for ops floors.",
      },
      {
        title: "Fleet management dashboards",
        description: "Real-time fleet visibility, route performance, and exception handling - designed for dispatchers and managers.",
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
      { title: "UX for the floor", body: "Design for speed, error recovery, and high-volume actions - validated with real operators." },
      { title: "Build & integrate", body: "Connect ELD, mapping, accounting, and CRM systems with reliable sync and monitoring." },
      { title: "Rollout & training", body: "Phased launch, operator docs, and iteration based on floor feedback." },
    ],
    faq: [
      {
        q: "Do you work with US trucking companies and freight brokers?",
        a: "Yes - this is a primary focus. We align stand-ups and delivery to US time zones and ops realities.",
      },
      {
        q: "Can you redesign our dispatch CRM without stopping operations?",
        a: "We plan phased rollouts and parallel workflows so dispatch keeps running during migration.",
      },
      {
        q: "Do you build driver mobile apps too?",
        a: "Yes - React Native and Flutter paths for iOS and Android, designed alongside dispatch and fleet tools.",
      },
    ],
    relatedServiceSlugs: ["crm-development", "web-development", "mobile-applications", "saas-platforms"],
    relatedCaseSlugs: ["fleetflow-dispatch", "finance-sync-hub", "crm-pulse-dashboard"],
  },
  "accounting-integrations": {
    ...solutionPillars[2],
    heroLead:
      "Connect your product or ops platform to QuickBooks Online and Xero - with sync jobs finance teams trust, operator dashboards, and alerts when something breaks.",
    outcomes: [
      { label: "Nightly sync reliability", value: "99%+" },
      { label: "Manual reconciliation", value: "−60–80%" },
      { label: "Platforms supported", value: "QBO · Xero" },
    ],
    capabilities: [
      {
        title: "QuickBooks Online integration",
        description: "Customers, invoices, payments, and chart-of-accounts mapping with idempotent sync and audit trails.",
      },
      {
        title: "Xero API integration",
        description: "Two-way sync for contacts, invoices, and bank feeds - with clear error states and retry logic.",
      },
      {
        title: "Reconciliation dashboards",
        description: "Operator views for sync status, exceptions, and month-end close - built for finance, not engineers.",
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
        a: "Yes - multi-region billing setups with separate connectors and unified operator dashboards are common for SaaS clients.",
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
      "Digital products for auto transport companies - quote flows, carrier dispatch, customer tracking, and ops automation built for vehicle logistics.",
    outcomes: [
      { label: "Quote-to-book time", value: "−40%" },
      { label: "Customer self-serve", value: "+30%" },
      { label: "Platform delivery", value: "6–14 weeks" },
    ],
    capabilities: [
      {
        title: "Transport booking portals",
        description: "Quote, book, and pay flows optimized for conversion - with clear pricing and trust signals.",
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
      { title: "Journey mapping", body: "Map customer, carrier, and ops journeys - identify friction in quote-to-delivery." },
      { title: "Product design", body: "High-fidelity UX for portals, dispatch, and tracking - validated before build." },
      { title: "Platform build", body: "Next.js web apps, mobile coordination tools, and integrations with your existing stack." },
      { title: "Launch & optimize", body: "Analytics, conversion tuning, and ops feedback loops post-launch." },
    ],
    faq: [
      {
        q: "Do you build for auto transport brokers and carriers?",
        a: "Yes - both sides of the market: customer-facing portals and internal dispatch/ops tools.",
      },
      {
        q: "Can this connect to our existing TMS or CRM?",
        a: "We integrate with common logistics and CRM platforms via API - or build custom connectors where needed.",
      },
      {
        q: "How is this different from general trucking solutions?",
        a: "Car transportation has unique quote, tracking, and customer communication patterns - we design specifically for vehicle logistics.",
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
