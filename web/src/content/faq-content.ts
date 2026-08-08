export const faqHome = [
  {
    q: "What services do you offer?",
    a: "We design and build two types of software: SaaS products (onboarding, dashboards, MVPs, design systems) and trucking/logistics tools (dispatch CRM, fleet dashboards, driver apps). We also build QuickBooks and Xero integrations and set up workflow automation. We don't do everything - we do these things well because we've spent years on them.",
  },
  {
    q: "How long does a typical project take?",
    a: "A focused MVP or redesign is usually 6 to 10 weeks. A full-stack SaaS platform with integrations runs 12 to 20 weeks. Discovery sprints are 1 to 2 weeks. We'll give you an honest timeline in our first call. We don't inflate estimates to soften the truth.",
  },
  {
    q: "Do you subcontract any work?",
    a: "No. Every designer and engineer on your project is a permanent KRIVA team member. We don't use freelance marketplaces or offshore subcontractors. The team you meet in the first call is the team that builds your product.",
  },
  {
    q: "Do you work with startups and enterprises?",
    a: "Both. For startups, we're used to fast timelines, limited scope, and investor-facing deliverables. For scale-ups and enterprises, we're used to compliance requirements, complex integrations, and multi-stakeholder sign-off. We scope projects accordingly.",
  },
  {
    q: "How do you use AI in your delivery?",
    a: "We use Claude for content and brief drafting, GitHub Copilot for code generation, Cursor for rapid prototyping, and Figma AI for asset generation. Every output is reviewed by a senior team member before it reaches you. AI makes us faster. People make sure it's right.",
  },
  {
    q: "Who owns the design files and code after the project?",
    a: "You do. All Figma files, GitHub repositories, and documentation are transferred to you at project close, or before if you prefer. No lock-in, no vendor dependency. We'll help you onboard your internal team on what we've built.",
  },
  {
    q: "What happens after launch?",
    a: "Most clients move to a monthly retainer after go-live. We offer iteration sprints, performance monitoring, and roadmap support. You can scale the retainer up or pause it depending on your needs. We don't vanish after handoff.",
  },
  {
    q: "Do you work with US-based clients remotely?",
    a: "Yes. Our team covers UK and US time zones. We run async comms via Slack and weekly video calls at times that work across both regions. Most of our US trucking clients have never met us in person and still renew their retainers.",
  },
  {
    q: "What do you need from us to get started?",
    a: "A brief (we'll send you a template), your timeline, and an hour for a discovery call. If you don't have a brief yet, we'll write one together. We're used to clients who come with a problem, not a spec.",
  },
] as const;

export const faqPageExtra = [
  {
    q: "Who owns the designs and code?",
    a: "You do. All Figma files, repositories, and documentation are transferred to you at project completion.",
  },
  {
    q: "How is pricing structured?",
    a: "Fixed-scope projects, monthly retainers, or sprint-based work. Everything is scoped after discovery, with clear deliverables and milestones agreed upfront.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We embed with in-house designers, developers, or product managers and adapt to your tools and working style.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Mutual NDAs are standard before we get into any sensitive product details or architecture.",
  },
  {
    q: "Which time zones do you support?",
    a: "We're remote-first with overlap for US, UK, India, and APAC. We align stand-ups and async updates to your team's schedule.",
  },
] as const;

/** Verified-only stats. Unverified 40+/9+/15+ claims are gated via siteStats nulls. */
export const stats = [
  { value: "4", label: "Time zones covered", caption: "US & UK call hours with India delivery overlap" },
  { value: "1", label: "Team, no subcontracting", caption: "Everyone on your project is ours" },
] as const;

export const processSteps = [
  { title: "Discover", body: "We capture goals, users, constraints, and success metrics in a written brief before any design starts." },
  { title: "Design", body: "Flows, prototypes, and high-fidelity UI reviewed by stakeholders and signed off before development begins." },
  { title: "Build", body: "Incremental delivery with weekly demos, QA gates, and open progress tracking. No surprises." },
  { title: "Launch", body: "Deployment, analytics setup, handoff documentation, and team training." },
  { title: "Support", body: "Iteration sprints, automation maintenance, and roadmap support. Most clients stay on a monthly retainer after launch." },
] as const;

export const techCategories = [
  {
    id: "design",
    label: "Design",
    items: ["Figma", "Framer", "FigJam", "Design systems"],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: ["React Native", "Flutter", "iOS & Android UI"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    id: "ai",
    label: "AI & Automation",
    items: ["Claude", "ChatGPT", "GitHub Copilot", "Make", "Cursor"],
  },
  {
    id: "nocode",
    label: "No-Code",
    items: ["Webflow", "Bubble", "Framer", "Zapier"],
  },
] as const;

export const engagementModels = [
  {
    title: "Discovery sprint",
    body: "Align on scope, timeline, and what you actually need before committing to a full engagement.",
    href: "/contact#book",
  },
  {
    title: "Project engagement",
    body: "Fixed scope with milestones, weekly demos, and a clear handoff at the end.",
    href: "/contact#brief",
  },
  {
    title: "Ongoing partnership",
    body: "Continuous product iteration, design support, and automation maintenance on a rolling basis.",
    href: "/contact#brief",
  },
] as const;

export const pillars = [
  {
    title: "Design and code under one roof",
    body: "Fewer handoffs, faster decisions, consistent quality from wireframe to deployment.",
  },
  {
    title: "Faster delivery with AI tools",
    body: "We use Claude, Cursor, and Figma AI to move faster on the work that benefits from it - with human review before anything ships.",
  },
  {
    title: "Honest communication",
    body: "Weekly demos, shared access, written tradeoffs. We'll tell you when something isn't working, not just when it is.",
  },
  {
    title: "Products that scale without us",
    body: "Design systems, typed codebases, and documentation - so your team isn't dependent on us for every future change.",
  },
] as const;

export const industries = [
  { label: "SaaS & Startups", href: "/solutions/saas", caption: "UK-focused SaaS UI/UX, MVP development, onboarding, and dashboards that support activation and demos." },
  { label: "Trucking & Logistics", href: "/solutions/trucking-logistics", caption: "US trucking software - custom TMS-style tools, dispatch CRM, fleet dashboards, and driver apps." },
  { label: "Accounting Integrations", href: "/solutions/accounting-integrations", caption: "QuickBooks and Xero API sync, reconciliation dashboards, and reliable operator tooling." },
  { label: "Car Transportation", href: "/solutions/car-transportation", caption: "Booking portals, carrier dispatch, customer tracking, and ops automation for vehicle logistics." },
  { label: "CRM & Automation", href: "/services/crm-development", caption: "Custom CRM UX, workflow automation, and integration-heavy consoles for ops teams." },
] as const;

export const careersOpenRoles = [
  {
    title: "Senior Product Designer",
    location: "Remote · India-friendly overlap",
    type: "Full-time",
    applySubject: "Application · Senior Product Designer",
  },
  {
    title: "Full-Stack Developer (Next.js)",
    location: "Remote · global",
    type: "Full-time",
    applySubject: "Application · Full-Stack Developer",
  },
  {
    title: "AI Automation Specialist",
    location: "Remote",
    type: "Full-time · contract-to-hire",
    applySubject: "Application · AI Automation Specialist",
  },
] as const;

export const certificationBadges = [
  "NDA-first engagements",
  "Design + dev in one team",
  "AI in the workflow",
  "Post-launch support available",
] as const;

