export const faqHome = [
  {
    q: "What services do you offer?",
    a: "SaaS product design, trucking & logistics software, dispatch CRM, fleet dashboards, QuickBooks/Xero integrations, CRM automation, and AI-assisted development - all delivered by our 15+ person in-house team.",
  },
  {
    q: "How long does a typical project take?",
    a: "Discovery sprints run 1–2 weeks. Design phases are usually 3–6 weeks. Development ranges from 6–12 weeks depending on scope. We share a detailed timeline after discovery.",
  },
  {
    q: "Do you work with startups and enterprises?",
    a: "Yes - from pre-seed MVPs to scaling SaaS teams. We tailor engagement size and process to your stage and internal team structure.",
  },
  {
    q: "How do you use AI in delivery?",
    a: "We use Claude, ChatGPT, Copilot, and Figma AI to accelerate research, design, and development - always with human review before anything ships to clients.",
  },
  {
    q: "What happens after launch?",
    a: "We offer post-launch support, iteration sprints, and automation maintenance. Most clients retain us for ongoing improvements rather than one-off handoffs.",
  },
] as const;

export const faqPageExtra = [
  {
    q: "Who owns the designs and code?",
    a: "You do. All Figma files, repositories, and documentation are transferred to you at project completion.",
  },
  {
    q: "How is pricing structured?",
    a: "Fixed-scope projects, monthly retainers, or sprint-based engagements - scoped after discovery with clear deliverables and milestones.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We embed with in-house designers, developers, or product managers and adapt to your tools and ceremonies.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes - mutual NDAs are standard before we discuss sensitive product details or architecture.",
  },
  {
    q: "Which time zones do you support?",
    a: "We're remote-first with overlap for US, UK, India, and APAC. We align stand-ups and async updates to your team's schedule.",
  },
] as const;

export const stats = [
  { value: "40+", label: "Projects delivered", caption: "SaaS, logistics, CRM & automation" },
  { value: "15+", label: "In-house team", caption: "Designers, engineers & strategists" },
  { value: "5.0★", label: "Google rating", caption: "8 verified client reviews" },
  { value: "8+", label: "Years shipping", caption: "Products and digital platforms" },
] as const;

export const processSteps = [
  { title: "Discover", body: "Goals, users, constraints, and success metrics — captured in a written brief before any design starts." },
  { title: "Design", body: "Flows, prototypes, and high-fidelity UI reviewed by stakeholders and validated before development begins." },
  { title: "Build", body: "Incremental delivery with weekly demos, QA gates, and transparent progress — no black-box sprints." },
  { title: "Launch", body: "Deployment, analytics instrumentation, handoff documentation, and team training." },
  { title: "Support", body: "Iteration sprints, automation maintenance, and roadmap support — most clients keep us on retainer after launch." },
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
    body: "1–2 weeks to align scope, timeline, and deliverables before you commit to a full build.",
    href: "/contact#book",
  },
  {
    title: "Project engagement",
    body: "Fixed-scope design or development with milestones, demos, and clear handoff.",
    href: "/contact#brief",
  },
  {
    title: "Ongoing partnership",
    body: "Monthly retainer for product iteration, automation maintenance, and design support.",
    href: "/contact#brief",
  },
] as const;

export const pillars = [
  {
    title: "One team, end to end",
    body: "Design and engineering under one roof — fewer handoffs, faster decisions, and a consistent standard from first wireframe to final deployment.",
  },
  {
    title: "AI-accelerated delivery",
    body: "We use Claude, Copilot, and Figma AI to move faster on suitable workstreams — with human review gates before anything ships.",
  },
  {
    title: "Transparent process",
    body: "Weekly demos, shared Figma and GitHub access, written briefs, and honest tradeoffs. No black-box delivery.",
  },
  {
    title: "Built to scale",
    body: "Design systems, typed codebases, and documentation your team can extend — without needing us in the room every time.",
  },
] as const;

export const industries = [
  { label: "SaaS & Startups", href: "/solutions/saas", caption: "UK-focused SaaS UI/UX, MVP development, dashboards, and AI-powered workflows that drive activation." },
  { label: "Trucking & Logistics", href: "/solutions/trucking-logistics", caption: "US trucking websites, dispatch CRM, fleet dashboards, driver apps, and transportation SaaS platforms." },
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
  "AI-accelerated workflows",
  "Post-launch support available",
] as const;
