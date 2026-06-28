export type CaseSlug =
  | "fleetflow-dispatch"
  | "payroll-pro-saas"
  | "finance-sync-hub"
  | "healthtrack-mobile"
  | "brandlift-ecommerce"
  | "crm-pulse-dashboard"
  | "ai-support-automation"
  | "marketplace-mvp";

export const caseStudies: {
  slug: CaseSlug;
  title: string;
  metric: string;
  summary: string;
  tags: readonly string[];
  featured?: boolean;
}[] = [
  {
    slug: "fleetflow-dispatch",
    title: "FleetFlow - US trucking dispatch CRM",
    metric: "−32% handle time",
    summary: "Modernized a US trucking dispatch CRM with bulk actions, SLA intelligence, and supervisor controls for 400+ daily routes.",
    tags: ["Logistics", "CRM", "SaaS"],
    featured: true,
  },
  {
    slug: "payroll-pro-saas",
    title: "PayrollPro - B2B SaaS onboarding",
    metric: "+18% activation",
    summary: "Progressive onboarding and permission clarity for a payroll platform after SSO rollout.",
    tags: ["SaaS", "Product", "UX"],
    featured: true,
  },
  {
    slug: "finance-sync-hub",
    title: "FinanceSync - QuickBooks & Xero reconciliation hub",
    metric: "99.3% nightly sync",
    summary: "Built reliable QuickBooks/Xero reconciliation workflows with operator dashboards finance teams trust at month-end close.",
    tags: ["Integrations", "Dashboard", "Automation"],
    featured: true,
  },
  {
    slug: "healthtrack-mobile",
    title: "HealthTrack - patient mobile app",
    metric: "4.8★ app rating",
    summary: "Patient-facing iOS and Android UX for appointment booking, records, and care plan adherence.",
    tags: ["Mobile", "Healthcare", "UI/UX"],
  },
  {
    slug: "brandlift-ecommerce",
    title: "BrandLift - D2C rebrand & storefront",
    metric: "+24% conversion",
    summary: "Full brand refresh and Shopify storefront redesign for a growing consumer electronics label.",
    tags: ["Branding", "E-commerce", "Web"],
  },
  {
    slug: "crm-pulse-dashboard",
    title: "CRMPulse - sales dashboard",
    metric: "−41% reporting time",
    summary: "Custom HubSpot dashboards and pipeline UX aligned to how the sales team actually works.",
    tags: ["CRM", "Dashboard", "SaaS"],
  },
  {
    slug: "ai-support-automation",
    title: "SupportAI - ticket automation",
    metric: "−55% tier-1 volume",
    summary: "Make + Claude workflow that triages support tickets and drafts replies for human approval.",
    tags: ["AI", "Automation", "SaaS"],
  },
  {
    slug: "marketplace-mvp",
    title: "LocalServe - marketplace MVP",
    metric: "Live in 6 weeks",
    summary: "No-code marketplace MVP with vendor onboarding, bookings, and admin ops - validated before custom build.",
    tags: ["No-Code", "Marketplace", "MVP"],
  },
];

export const caseStudyDetails: Record<
  CaseSlug,
  {
    client: string;
    problem: string;
    research: string;
    solution: string;
    ui: string;
    dev: string;
    challenges: string;
    outcome: string;
    metrics: { label: string; value: string }[];
    testimonial: string;
  }
> = {
  "fleetflow-dispatch": {
    client: "FleetFlow · Logistics SaaS · Series A",
    problem: "Dispatch operators relied on spreadsheets alongside a legacy TMS - handle times rose 40% as fleet volume doubled.",
    research: "Shadow sessions with ops teams in three hubs, exception log analysis, and SLA mapping across 400+ daily routes.",
    solution: "Unified dispatch console with bulk approvals, audited overrides, and real-time SLA burndown for supervisors.",
    ui: "Role-based density modes, high-contrast SLA indicators, and thumb-friendly actions for field supervisors on tablets.",
    dev: "Next.js frontend, feature-flag rollout, integration tests against TMS schema versions, staging fed with sanitized data.",
    challenges: "Legacy API limits, retail blackout windows, and bilingual ops teams across regions.",
    outcome: "Manual touch time dropped 32%, overnight exception queues cleared before peak hours, and NPS from ops leads improved.",
    metrics: [
      { label: "Manual handle time", value: "−32%" },
      { label: "Avg. exception response", value: "11 min" },
      { label: "Console uptime", value: "99.4%" },
    ],
    testimonial:
      "“Northline understood our ops floor as well as our roadmap - the console finally matches how dispatch actually works.” - VP Operations, FleetFlow",
  },
  "payroll-pro-saas": {
    client: "PayrollPro · B2B SaaS · UK & EU",
    problem: "Activation stalled after SSO - admins saw empty states while end users bounced between docs and support.",
    research: "Funnel analysis, session replays, and eight stakeholder interviews across finance and IT buyers.",
    solution: "Role-based onboarding paths, seeded templates per vertical, and integration health surfaced in-product.",
    ui: "Parallel admin vs champion flows, clear permission copy, and progress indicators tied to real setup tasks.",
    dev: "Experiment flags, Entra/Okta edge-case handling, and event taxonomy aligned to growth dashboards.",
    challenges: "Conflicting KPIs between growth and compliance, noisy legacy segment data.",
    outcome: "Activation up 18% in 30 days, permissions-related tickets down 36%, board-ready experiment readouts delivered.",
    metrics: [
      { label: "30-day activation", value: "+18%" },
      { label: "Time to first payroll run", value: "−41%" },
      { label: "Permissions tickets", value: "−36%" },
    ],
    testimonial:
      "“Design and engineering finally told one story - our investors noticed the difference in the demo.” - Head of Product, PayrollPro",
  },
  "finance-sync-hub": {
    client: "FinanceSync · FinOps platform · UK & US",
    problem: "QuickBooks and Xero sync drifted silently across entities - finance stopped trusting automated accruals before month-end.",
    research: "Three cycle reconciliations, connector log forensics, and controller interviews in US and UK entities.",
    solution: "Idempotent QuickBooks/Xero sync workers, anomaly surfacing before close, and triage UI with human-readable deltas.",
    ui: "Discrepancy cards with remediation steps - no raw JSON - optimized for outsourced finance teams.",
    dev: "Queue-based workers, canary deployments, PagerDuty alerting with executive rollup views.",
    challenges: "Partial accounting schemas, rate limits, and multi-entity mapping across UK/US books.",
    outcome: "99.3% nightly reconcile success, mean detect time under 6 minutes, manual rework hours cut in half.",
    metrics: [
      { label: "Nightly success rate", value: "99.3%" },
      { label: "Mean detect time", value: "6 min" },
      { label: "Manual rework", value: "−54%" },
    ],
    testimonial:
      "“They shipped integration work finance could actually audit - month-end is calm again.” - Corporate Controller",
  },
  "healthtrack-mobile": {
    client: "HealthTrack · Digital health · US",
    problem: "Legacy patient portal had 2.1★ ratings - booking and records access frustrated users and support volume was high.",
    research: "Patient interviews, support ticket taxonomy, and competitive audit of top-rated health apps.",
    solution: "Mobile-first IA with clear appointment flows, record access, and proactive care reminders.",
    ui: "Accessible typography, calm visual language, and step-by-step flows tested with older patient cohorts.",
    dev: "React Native app, biometric login, HIPAA-conscious data handling patterns, App Store optimization assets.",
    challenges: "Strict compliance reviews, offline edge cases, and provider-specific scheduling rules.",
    outcome: "App Store rating climbed to 4.8★, support tickets for booking dropped 28%, daily active use increased.",
    metrics: [
      { label: "App Store rating", value: "4.8★" },
      { label: "Booking support tickets", value: "−28%" },
      { label: "Weekly active patients", value: "+22%" },
    ],
    testimonial:
      "“Patients finally describe the app as ‘easy’ - that was our north star.” - Product Director, HealthTrack",
  },
  "brandlift-ecommerce": {
    client: "BrandLift · D2C electronics",
    problem: "Brand felt generic, Shopify conversion lagged competitors despite strong product reviews.",
    research: "Brand audit, heatmaps, checkout funnel analysis, and customer perception interviews.",
    solution: "New visual identity, componentized Shopify theme, and PDP templates optimized for mobile conversion.",
    ui: "Bold product photography system, trust badges near CTAs, and simplified checkout with fewer distractions.",
    dev: "Custom Shopify theme, performance optimization, analytics events for merchandising decisions.",
    challenges: "Large SKU catalog, frequent promotional campaigns, global shipping messaging.",
    outcome: "Conversion rate up 24%, average order value up 12%, brand recognition improved in post-purchase surveys.",
    metrics: [
      { label: "Conversion rate", value: "+24%" },
      { label: "Average order value", value: "+12%" },
      { label: "Mobile checkout completion", value: "+19%" },
    ],
    testimonial:
      "“Our site finally looks and performs like the products we sell.” - Founder, BrandLift",
  },
  "crm-pulse-dashboard": {
    client: "CRMPulse · B2B sales org · 80 reps",
    problem: "HubSpot dashboards showed conflicting numbers - reps exported to Excel for every forecast call.",
    research: "Sales stage workshops, CRM hygiene audit, and shadowing of weekly forecast meetings.",
    solution: "Custom pipeline views, stage definitions aligned to reality, and leadership dashboards with single source of truth.",
    ui: "Role-specific home screens, deal health indicators, and mobile-friendly views for field reps.",
    dev: "HubSpot custom objects, automation rules with rollback, and scheduled data quality alerts.",
    challenges: "Historical data mess, conflicting definitions across regions, change management with senior reps.",
    outcome: "Reporting prep time down 41%, forecast accuracy improved, leadership adopted dashboards weekly.",
    metrics: [
      { label: "Reporting prep time", value: "−41%" },
      { label: "Forecast variance", value: "−18%" },
      { label: "CRM daily active reps", value: "+33%" },
    ],
    testimonial:
      "“For the first time, pipeline reviews use HubSpot - not spreadsheets.” - VP Sales",
  },
  "ai-support-automation": {
    client: "SupportAI · SaaS · 12k MAU",
    problem: "Tier-1 tickets consumed 60% of support capacity - response times slipped during product launches.",
    research: "Ticket categorization study, macro analysis, and review of 500 closed conversations.",
    solution: "Make workflow with Claude triage, draft replies, and human approval before send.",
    ui: "Internal review console for support leads with confidence scores and one-click edit/send.",
    dev: "Make scenarios, Zendesk integration, logging for audit, fallback to manual queue on low confidence.",
    challenges: "Tone consistency, PII handling, and agent trust in AI drafts.",
    outcome: "Tier-1 volume down 55%, median first response improved 38%, CSAT held steady with human review.",
    metrics: [
      { label: "Tier-1 ticket volume", value: "−55%" },
      { label: "First response time", value: "−38%" },
      { label: "CSAT score", value: "4.6 / 5" },
    ],
    testimonial:
      "“AI handles the repetitive stuff - our team focuses on customers who need real help.” - Head of Support",
  },
  "marketplace-mvp": {
    client: "LocalServe · Services marketplace · Pre-seed",
    problem: "Founders needed to validate supply/demand fit before raising for a custom marketplace build.",
    research: "Competitive scan, vendor interviews, and smoke tests for booking flows in two cities.",
    solution: "Bubble marketplace with vendor onboarding, booking, payments hook, and lightweight admin ops.",
    ui: "Clean mobile-first booking UX, vendor profiles, and admin views for ops without engineering.",
    dev: "Bubble app, Stripe Connect setup, Make notifications, analytics for conversion tracking.",
    challenges: "Manual vendor vetting at launch, payment edge cases, and scope control for MVP.",
    outcome: "Live in 6 weeks, 120 vendors onboarded, validated unit economics before Series A fundraise.",
    metrics: [
      { label: "Time to launch", value: "6 weeks" },
      { label: "Vendors onboarded", value: "120" },
      { label: "Bookings in 90 days", value: "840" },
    ],
    testimonial:
      "“We proved the model without burning our runway on a full custom build.” - Co-founder, LocalServe",
  },
};

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
