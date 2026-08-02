export type ServiceSlug =
  | "ui-ux-design"
  | "product-design"
  | "web-development"
  | "mobile-applications"
  | "branding"
  | "ai-assisted-development"
  | "no-code-low-code"
  | "automation-systems"
  | "crm-development"
  | "saas-platforms"
  | "api-integrations"
  | "web-application-design"
  | "dashboard-design"
  | "ux-research"
  | "wireframing-prototyping"
  | "design-systems"
  | "logo-design";

export type ServiceCategory = "design" | "development" | "ai-automation";

export const serviceCategories: {
  id: ServiceCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "design",
    label: "Design",
    description: "UI/UX, product design, branding, and mobile experiences that feel premium and purposeful.",
  },
  {
    id: "development",
    label: "Development",
    description: "Web, SaaS, CRM dashboards, and integrations built for performance and scale.",
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    description: "AI-assisted delivery, no-code platforms, and workflow automation that saves time and cost.",
  },
];

export const services: {
  slug: ServiceSlug;
  category: ServiceCategory;
  title: string;
  summary: string;
  bullets: readonly string[];
}[] = [
  {
    slug: "ui-ux-design",
    category: "design",
    title: "UI/UX Design",
    summary: "Research-led flows, prototypes, and interface systems that stay intuitive as products grow.",
    bullets: ["User research", "Wireframes & prototypes", "Design systems"],
  },
  {
    slug: "product-design",
    category: "design",
    title: "Product Design",
    summary: "Full product design for SaaS, dashboards, and digital platforms, from concept through to launch-ready UI.",
    bullets: ["Product strategy", "UX architecture", "High-fidelity UI"],
  },
  {
    slug: "branding",
    category: "design",
    title: "Branding & Graphic Design",
    summary: "Cohesive brand identity, visual systems, and marketing assets that elevate perception without trend-chasing.",
    bullets: ["Brand identity", "Visual guidelines", "Marketing collateral"],
  },
  {
    slug: "mobile-applications",
    category: "design",
    title: "Mobile App Design",
    summary: "Native-quality mobile UX for iOS and Android, focused on clarity, onboarding, and retention.",
    bullets: ["App UX flows", "iOS & Android UI", "Prototype testing"],
  },
  {
    slug: "ux-research",
    category: "design",
    title: "UX Research",
    summary: "Interviews, usability tests, and journey mapping that turn assumptions into evidence-backed product decisions.",
    bullets: ["User interviews", "Usability testing", "Journey & persona maps"],
  },
  {
    slug: "wireframing-prototyping",
    category: "design",
    title: "Wireframing & Prototyping",
    summary: "Low- and high-fidelity prototypes that align stakeholders and de-risk development before code starts.",
    bullets: ["Wireframes", "Interactive prototypes", "Stakeholder walkthroughs"],
  },
  {
    slug: "design-systems",
    category: "design",
    title: "Design Systems",
    summary: "Scalable component libraries, tokens, and documentation that keep product teams shipping consistent UI.",
    bullets: ["Component libraries", "Design tokens", "Dev-ready specs"],
  },
  {
    slug: "web-application-design",
    category: "design",
    title: "Web Application Design",
    summary: "Complex web app UX for authenticated products, multi-step flows, and data-heavy interfaces.",
    bullets: ["App UX architecture", "Responsive layouts", "Interaction patterns"],
  },
  {
    slug: "dashboard-design",
    category: "design",
    title: "Dashboard Design",
    summary: "Analytics, admin, and operational dashboards designed for clarity, scanability, and daily use.",
    bullets: ["KPI layouts", "Data visualization", "Filter & drill-down UX"],
  },
  {
    slug: "logo-design",
    category: "design",
    title: "Logo Design",
    summary: "Distinctive marks and logo systems that work across digital, print, and social touchpoints.",
    bullets: ["Logo concepts", "Mark refinement", "Usage guidelines"],
  },
  {
    slug: "web-development",
    category: "development",
    title: "Web Design & Development",
    summary: "Fast, accessible marketing sites and web apps with modern stacks, CMS flexibility, and SEO foundations.",
    bullets: ["Next.js / React", "Responsive UI", "Performance & SEO"],
  },
  {
    slug: "saas-platforms",
    category: "development",
    title: "SaaS Product Design",
    summary: "Multi-tenant SaaS UX, admin panels, permissions, and release-friendly design systems.",
    bullets: ["Tenant UX patterns", "Admin dashboards", "Scalable UI kits"],
  },
  {
    slug: "crm-development",
    category: "development",
    title: "CRM & Dashboard Design",
    summary: "Sales pipelines, reporting views, and operational dashboards teams actually trust day to day.",
    bullets: ["Pipeline UX", "Custom dashboards", "Data visualization"],
  },
  {
    slug: "api-integrations",
    category: "development",
    title: "Integrations & APIs",
    summary: "Reliable connectors between your product, CRM, ERP, and third-party tools, with clear error handling and monitoring.",
    bullets: ["REST & webhooks", "CRM / ERP sync", "Monitoring & alerts"],
  },
  {
    slug: "ai-assisted-development",
    category: "ai-automation",
    title: "AI-Assisted Product Development",
    summary: "Ship faster with AI-augmented design, development, and QA. We use Claude, GPT, Copilot, and modern toolchains with human oversight at every step.",
    bullets: ["AI-accelerated delivery", "Smart prototyping", "Quality automation"],
  },
  {
    slug: "no-code-low-code",
    category: "ai-automation",
    title: "No-Code / Low-Code Solutions",
    summary: "Webflow, Bubble, Framer, and Make-powered MVPs and internal tools without months of custom build time.",
    bullets: ["Webflow & Framer", "Bubble apps", "Rapid MVPs"],
  },
  {
    slug: "automation-systems",
    category: "ai-automation",
    title: "Automation Workflows",
    summary: "Make, Zapier, and custom automations that remove repetitive work while keeping humans in control.",
    bullets: ["Make / Zapier", "CRM automation", "AI workflow design"],
  },
];

export const serviceDetails: Record<
  ServiceSlug,
  {
    challenges: readonly string[];
    deliverables: readonly string[];
    benefits: readonly string[];
    faq: { q: string; a: string }[];
  }
> = {
  "ui-ux-design": {
    challenges: [
      "New features make the product feel inconsistent",
      "Users drop off in complex workflows",
      "Design handoffs slow engineering down",
    ],
    deliverables: [
      "User research summary",
      "Information architecture map",
      "Interactive Figma prototype",
      "UI kit with component specs",
    ],
    benefits: [
      "Faster stakeholder alignment",
      "Higher conversion and task completion",
      "Design system that scales with your roadmap",
    ],
    faq: [
      { q: "Do you work with our in-house team?", a: "Yes. We embed alongside your designers or product managers and share Figma libraries your team owns." },
      { q: "Which tools do you use?", a: "Figma-first, with optional FigJam for workshops. We deliver dev-ready specs and tokens." },
    ],
  },
  "product-design": {
    challenges: [
      "Product vision exists but UI execution lags",
      "Stakeholders disagree on priorities without a shared prototype",
      "Dashboards and settings feel like an afterthought",
    ],
    deliverables: [
      "Product UX map",
      "Core user flows + edge cases",
      "Design system foundations",
      "Launch-ready UI screens",
    ],
    benefits: [
      "One coherent product narrative from day one",
      "Reduced rework before development starts",
      "Premium feel that supports pricing and trust",
    ],
    faq: [
      { q: "Is this different from UI/UX design?", a: "Product design spans strategy, flows, and UI for the full product, not just individual screens or marketing pages." },
    ],
  },
  branding: {
    challenges: [
      "Brand looks generic compared to competitors",
      "Marketing and product visuals don't match",
      "No reusable templates; everything built from scratch",
    ],
    deliverables: [
      "Logo refinement or new mark",
      "Color, type, and layout rules",
      "Brand guidelines PDF",
      "Social & deck templates",
    ],
    benefits: [
      "Stronger first impression with clients",
      "Consistent visuals across touchpoints",
      "Faster production for marketing assets",
    ],
    faq: [
      { q: "Do you only do full rebrands?", a: "No. We often stabilize existing brands with a focused visual system refresh." },
    ],
  },
  "mobile-applications": {
    challenges: [
      "Mobile UX copied from desktop and feels cramped",
      "Onboarding doesn't explain value quickly",
      "App store assets and flows aren't conversion-tuned",
    ],
    deliverables: [
      "Mobile UX flows (iOS & Android)",
      "High-fidelity app UI",
      "Interactive prototype",
      "App store screenshot templates",
    ],
    benefits: [
      "Higher activation and retention",
      "Clearer dev handoff for React Native or native teams",
      "Polished presence on App Store and Play Store",
    ],
    faq: [
      { q: "Do you also build the app?", a: "Yes. We offer design-only or design and development with React Native, Flutter, or native paths." },
    ],
  },
  "web-development": {
    challenges: [
      "Site feels slow or dated compared to competitors",
      "Marketing team can't update content without developers",
      "Poor mobile experience hurts conversions",
    ],
    deliverables: [
      "Responsive Next.js implementation",
      "Reusable component library",
      "CMS integration (when needed)",
      "Performance & analytics baseline",
    ],
    benefits: [
      "Premium web presence that loads fast",
      "Easier content updates for your team",
      "SEO-friendly structure out of the box",
    ],
    faq: [
      { q: "Which stack do you prefer?", a: "Next.js, React, and TypeScript for most marketing and product sites. Chosen for speed, SEO, and maintainability." },
    ],
  },
  "saas-platforms": {
    challenges: [
      "Admin and customer UX diverge over time",
      "Permission models confuse new users",
      "Hard to ship UI improvements without breaking tenants",
    ],
    deliverables: [
      "SaaS UX audit",
      "Tenant-aware UI patterns",
      "Admin + end-user design system",
      "Release-friendly component specs",
    ],
    benefits: [
      "Lower churn through clearer onboarding",
      "Faster feature shipping with shared patterns",
      "Enterprise-ready visual polish",
    ],
    faq: [
      { q: "Can you redesign an existing SaaS?", a: "Yes. We typically roll out redesigns in phases to reduce risk and maintain continuity." },
    ],
  },
  "crm-development": {
    challenges: [
      "Sales team doesn't trust pipeline data",
      "Reports take manual exports and spreadsheet work",
      "CRM UI doesn't match how you actually sell",
    ],
    deliverables: [
      "Pipeline & stage model workshop",
      "Custom dashboard designs",
      "Automation rule map",
      "HubSpot / Salesforce UX improvements",
    ],
    benefits: [
      "Better forecast accuracy",
      "Less time in spreadsheets",
      "Dashboards leadership uses weekly",
    ],
    faq: [
      { q: "Which CRM platforms?", a: "HubSpot, Salesforce, Pipedrive, and custom CRM builds. We design for the tool you use or the one you're building." },
    ],
  },
  "api-integrations": {
    challenges: [
      "Integrations break silently and data drifts",
      "Teams manually reconcile between systems",
      "No visibility when sync jobs fail",
    ],
    deliverables: [
      "Integration architecture map",
      "Connector implementation",
      "Error alerting & logs",
      "Operator documentation",
    ],
    benefits: [
      "Reliable data across tools",
      "Less manual ops work",
      "Faster troubleshooting when issues arise",
    ],
    faq: [
      { q: "Do you integrate with payment or accounting systems?", a: "Yes. QuickBooks Online, Xero, Stripe, Razorpay, Zoho, and common ERP APIs depending on your stack." },
    ],
  },
  "ai-assisted-development": {
    challenges: [
      "Delivery timelines slip despite growing teams",
      "Quality inconsistent across designers and developers",
      "Unsure how to use AI without compromising craft",
    ],
    deliverables: [
      "AI workflow playbook for your team",
      "Accelerated design + dev sprints",
      "Prompt libraries & QA checklists",
      "Documentation of AI-assisted processes",
    ],
    benefits: [
      "30–50% faster iteration on suitable workstreams",
      "Consistent output with human review gates",
      "Modern positioning for investors and clients",
    ],
    faq: [
      { q: "Which AI tools do you use?", a: "Claude, ChatGPT, GitHub Copilot, Figma AI plugins, and Cursor. Each is selected for the task at hand, always with human oversight." },
    ],
  },
  "no-code-low-code": {
    challenges: [
      "Need an MVP fast but full custom build is too slow",
      "Internal tools stuck in spreadsheets",
      "Marketing wants landing pages without dev bottlenecks",
    ],
    deliverables: [
      "Platform selection recommendation",
      "Webflow / Framer / Bubble build",
      "Make automation hooks",
      "Handoff documentation",
    ],
    benefits: [
      "Launch in weeks, not months",
      "Lower cost for validation-stage products",
      "Easy iteration for non-technical teams",
    ],
    faq: [
      { q: "When is no-code the wrong choice?", a: "Highly custom logic, strict compliance, or massive scale usually need custom code. We'll tell you honestly in discovery." },
    ],
  },
  "automation-systems": {
    challenges: [
      "Teams repeat the same manual steps daily",
      "Leads and data fall through cracks between tools",
      "No one owns workflow maintenance",
    ],
    deliverables: [
      "Workflow audit",
      "Make / Zapier automation build",
      "CRM & email triggers",
      "Monitoring & fallback rules",
    ],
    benefits: [
      "Hours returned to high-value work",
      "Fewer missed follow-ups and data errors",
      "Scalable ops without hiring immediately",
    ],
    faq: [
      { q: "Can you automate AI steps too?", a: "Yes. We chain LLM steps into Make workflows for summarization, routing, and draft generation, with approval gates throughout." },
    ],
  },
  "ux-research": {
    challenges: [
      "Product decisions rely on opinions instead of evidence",
      "Usability issues surface only after launch",
      "Teams lack shared understanding of user goals",
    ],
    deliverables: [
      "Research plan & recruitment guide",
      "Interview or test recordings & notes",
      "Insight report with prioritized recommendations",
      "Journey maps or persona snapshots",
    ],
    benefits: [
      "Clearer roadmap priorities backed by user evidence",
      "Fewer expensive rework cycles",
      "Shared language across product, design, and leadership",
    ],
    faq: [
      { q: "How long does a research sprint take?", a: "Most focused studies run 2–4 weeks from kickoff to readout, depending on recruitment and scope." },
    ],
  },
  "wireframing-prototyping": {
    challenges: [
      "Stakeholders can't align on scope without something tangible",
      "Engineering starts before flows are validated",
      "Iterations are slow when feedback is scattered",
    ],
    deliverables: [
      "Low-fidelity wireframes",
      "Clickable Figma prototype",
      "Annotated flows for engineering",
      "Iteration notes from review sessions",
    ],
    benefits: [
      "Faster alignment before build",
      "Lower cost to explore alternatives",
      "Clearer handoff into development",
    ],
    faq: [
      { q: "Do you prototype for mobile and web?", a: "Yes. We prototype for the platform your product targets, including responsive web and native mobile patterns." },
    ],
  },
  "design-systems": {
    challenges: [
      "UI inconsistencies multiply as the team grows",
      "Design and engineering interpret components differently",
      "Every new feature reinvents basic patterns",
    ],
    deliverables: [
      "Token and typography scale",
      "Component library in Figma",
      "Usage documentation",
      "Optional code component mapping",
    ],
    benefits: [
      "Faster feature delivery with reusable patterns",
      "More consistent brand and UX quality",
      "Easier onboarding for new designers and developers",
    ],
    faq: [
      { q: "Can you extend an existing system?", a: "Yes. We audit what you have, consolidate duplicates, and expand components without disrupting live product work." },
    ],
  },
  "web-application-design": {
    challenges: [
      "Marketing-site patterns don't fit authenticated product UX",
      "Complex workflows feel overwhelming to new users",
      "Responsive behavior breaks down on data-heavy screens",
    ],
    deliverables: [
      "App information architecture",
      "Core workflow UI screens",
      "Responsive layout specs",
      "Interaction and empty-state patterns",
    ],
    benefits: [
      "Product UX that scales beyond landing pages",
      "Clearer paths through multi-step tasks",
      "Better handoff for React or Next.js builds",
    ],
    faq: [
      { q: "Is this different from web development?", a: "Yes. This service focuses on UX and UI for web applications. We also offer implementation through our development services." },
    ],
  },
  "dashboard-design": {
    challenges: [
      "Metrics are available but hard to scan quickly",
      "Dashboards become cluttered as requests accumulate",
      "Teams export to spreadsheets because UI isn't trusted",
    ],
    deliverables: [
      "Dashboard IA and widget hierarchy",
      "Chart and table UI patterns",
      "Filter, date-range, and drill-down flows",
      "Dark/light theme-ready visual system",
    ],
    benefits: [
      "Operational visibility without spreadsheet workarounds",
      "Dashboards leadership actually opens weekly",
      "Scalable layout patterns for new metrics",
    ],
    faq: [
      { q: "Do you design admin and analytics views?", a: "Yes. We design internal admin consoles, customer analytics, and executive summary dashboards." },
    ],
  },
  "logo-design": {
    challenges: [
      "Current mark doesn't scale across digital sizes",
      "Brand feels forgettable in a crowded market",
      "Logo usage is inconsistent across teams",
    ],
    deliverables: [
      "Concept exploration deck",
      "Primary and secondary logo lockups",
      "Clear space and minimum size rules",
      "Export kit for web, print, and social",
    ],
    benefits: [
      "Stronger recognition in sales and marketing",
      "Consistent logo usage across touchpoints",
      "Foundation for broader brand identity work",
    ],
    faq: [
      { q: "Is logo design part of a full rebrand?", a: "It can be standalone or the first phase of a broader branding engagement, depending on your needs." },
    ],
  },
};

export function servicesByCategory(category: ServiceCategory) {
  return services.filter((s) => s.category === category);
}

