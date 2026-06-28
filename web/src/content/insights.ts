/** Insight articles - preview cards and full article bodies. */

export type InsightSlug =
  | "ai-in-product-design-2026"
  | "saas-onboarding-patterns"
  | "saas-mvp-uk-guide"
  | "no-code-vs-custom-mvp"
  | "trucking-dispatch-crm-guide"
  | "crm-dashboard-ux-patterns"
  | "choosing-a-digital-agency";

export type InsightBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: readonly string[] };

export const insightPosts: {
  slug: InsightSlug;
  title: string;
  category: string;
  read: string;
  published: string;
  publishedISO: string;
  excerpt: string;
}[] = [
  {
    slug: "ai-in-product-design-2026",
    title: "How AI is changing product design workflows in 2026",
    category: "AI & Design",
    read: "8 min read",
    published: "January 2026",
    publishedISO: "2026-01-15",
    excerpt:
      "Practical ways agencies use Claude, GPT, and Figma AI to accelerate research, prototyping, and design QA - without sacrificing quality.",
  },
  {
    slug: "saas-onboarding-patterns",
    title: "SaaS onboarding patterns that improve activation",
    category: "Product",
    read: "6 min read",
    published: "December 2025",
    publishedISO: "2025-12-08",
    excerpt:
      "Five onboarding patterns we see work repeatedly across B2B SaaS - with metrics from recent client projects.",
  },
  {
    slug: "saas-mvp-uk-guide",
    title: "SaaS MVP guide for UK startups: from idea to launch",
    category: "SaaS Growth",
    read: "9 min read",
    published: "May 2026",
    publishedISO: "2026-05-22",
    excerpt:
      "A practical UK-focused playbook for scoping SaaS MVPs, prioritizing core workflows, and launching with analytics that investors care about.",
  },
  {
    slug: "no-code-vs-custom-mvp",
    title: "No-code vs custom: choosing the right path for your MVP",
    category: "Strategy",
    read: "7 min read",
    published: "November 2025",
    publishedISO: "2025-11-20",
    excerpt:
      "When Bubble or Webflow gets you to market in weeks, and when you need custom code from day one - an honest framework.",
  },
  {
    slug: "trucking-dispatch-crm-guide",
    title: "Dispatch CRM solutions for US trucking companies: what actually works",
    category: "Trucking & Logistics",
    read: "10 min read",
    published: "May 2026",
    publishedISO: "2026-05-20",
    excerpt:
      "How carriers, brokers, and dispatch teams can reduce handle time, improve fleet visibility, and replace spreadsheet-driven operations with purpose-built CRM workflows.",
  },
  {
    slug: "crm-dashboard-ux-patterns",
    title: "CRM dashboard UX patterns that sales teams actually use",
    category: "Product",
    read: "6 min read",
    published: "October 2025",
    publishedISO: "2025-10-12",
    excerpt:
      "How to reduce clutter, surface the right KPIs, and design CRM views reps open every morning - not once a quarter.",
  },
  {
    slug: "choosing-a-digital-agency",
    title: "How to choose a digital agency without wasting six months",
    category: "Strategy",
    read: "5 min read",
    published: "September 2025",
    publishedISO: "2025-09-05",
    excerpt:
      "Red flags, good signals, and the questions that reveal whether an agency can actually ship - not just pitch.",
  },
];

/** @deprecated Use insightPosts */
export const insightPostsPreview = insightPosts;

export const insightArticles: Record<
  InsightSlug,
  { author: string; blocks: readonly InsightBlock[] }
> = {
  "ai-in-product-design-2026": {
    author: "Northline Product Team",
    blocks: [
      {
        type: "paragraph",
        text: "AI tools are no longer experimental side projects in design teams. In 2026, the agencies shipping fastest treat Claude, ChatGPT, Figma AI, and Cursor as part of the delivery stack - with clear guardrails so quality stays human-led.",
      },
      {
        type: "heading",
        text: "Where AI saves the most time",
      },
      {
        type: "list",
        items: [
          "Research synthesis - turning interview notes, support tickets, and analytics into structured problem statements.",
          "First-draft flows - generating wireframe variants to react to, not to ship blindly.",
          "Copy exploration - headline and microcopy options grounded in brand voice guidelines.",
          "Design QA - spotting spacing inconsistencies, contrast issues, and component drift across screens.",
          "Handoff prep - annotating flows and edge cases before dev kickoff.",
        ],
      },
      {
        type: "heading",
        text: "What still needs a senior designer",
      },
      {
        type: "paragraph",
        text: "AI accelerates drafts; it does not replace judgment. Information hierarchy, brand differentiation, accessibility tradeoffs, and stakeholder alignment still require experienced designers who understand business context. We use AI to remove repetitive work so designers spend more time on decisions that move metrics.",
      },
      {
        type: "heading",
        text: "Our practical workflow",
      },
      {
        type: "paragraph",
        text: "Discovery stays human-first: workshops, user interviews, and written briefs. During design, we generate alternatives with AI, critique them as a team, and merge the best ideas into Figma. Every screen passes a human review checklist before development. During build, engineers use Copilot and Cursor for boilerplate - never for unchecked business logic.",
      },
      {
        type: "heading",
        text: "Measuring whether it works",
      },
      {
        type: "paragraph",
        text: "Track cycle time from brief to approved prototype, revision rounds per milestone, and defect rate post-handoff. Teams doing this well typically cut discovery-to-design time by 20–35% without increasing rework - because AI handles volume, and humans handle taste.",
      },
    ],
  },
  "saas-onboarding-patterns": {
    author: "Northline Product Team",
    blocks: [
      {
        type: "paragraph",
        text: "Most SaaS activation problems are onboarding problems. Users sign up with intent, hit friction in the first session, and never return. These five patterns show up repeatedly in projects where activation improved measurably.",
      },
      {
        type: "heading",
        text: "1. Progressive disclosure beats feature tours",
      },
      {
        type: "paragraph",
        text: "Long product tours feel comprehensive and perform terribly. Show users one job-to-be-done path first - import data, invite a teammate, or complete one core action - then unlock advanced features after success.",
      },
      {
        type: "heading",
        text: "2. Role-based entry points",
      },
      {
        type: "paragraph",
        text: "Admin, manager, and end-user flows should not share the same empty dashboard. Ask role upfront and land each persona on a relevant home screen with one clear next step.",
      },
      {
        type: "heading",
        text: "3. Checklist with real value at each step",
      },
      {
        type: "paragraph",
        text: "Checklists work when each item delivers immediate payoff - not when they exist to gamify setup. Tie every step to an outcome the user can see: a report populated, a notification sent, a workflow running.",
      },
      {
        type: "heading",
        text: "4. SSO and permissions clarity",
      },
      {
        type: "paragraph",
        text: "After SSO rollouts, activation often drops because users land in the wrong workspace or lack permissions. Surface workspace context, explain missing access, and route to an admin - don't dead-end with generic errors.",
      },
      {
        type: "heading",
        text: "5. Time-to-value metrics on the dashboard",
      },
      {
        type: "paragraph",
        text: "Show progress toward the user's goal inside the product. A payroll client saw +18% activation after adding a simple 'setup health' panel with three milestones instead of a static welcome modal.",
      },
    ],
  },
  "saas-mvp-uk-guide": {
    author: "Northline Product Team",
    blocks: [
      {
        type: "paragraph",
        text: "Founders often treat MVP scope like a feature wishlist. In UK SaaS markets, that usually delays launch and weakens your first customer conversations. The goal is not to build a smaller product. The goal is to ship a focused product that proves value quickly and gives you clean learning signals.",
      },
      {
        type: "heading",
        text: "Start with one core user outcome",
      },
      {
        type: "paragraph",
        text: "Define a single outcome users should achieve in their first session. For B2B SaaS, this might be 'publish first report', 'invite first teammate', or 'run first payroll draft'. Scope everything else around helping users reach that moment reliably.",
      },
      {
        type: "heading",
        text: "MVP scope framework we use",
      },
      {
        type: "list",
        items: [
          "Core workflow: the smallest end-to-end flow that delivers value.",
          "Critical supporting flows: authentication, permissions, and basic settings.",
          "Operational minimum: error handling, admin visibility, and support paths.",
          "Not now list: features that sound useful but do not improve time-to-value.",
        ],
      },
      {
        type: "heading",
        text: "Design before development, always",
      },
      {
        type: "paragraph",
        text: "Even under tight timelines, UX architecture and interactive prototypes reduce expensive rework. Teams that skip this step usually pay for it later with rushed redesigns, inconsistent onboarding, and engineering slowdowns.",
      },
      {
        type: "heading",
        text: "Launch with analytics from day one",
      },
      {
        type: "paragraph",
        text: "Track activation, time-to-value, and feature adoption from the first release. UK investors and early enterprise buyers care less about feature count and more about evidence that users reach value consistently.",
      },
      {
        type: "heading",
        text: "A practical 12-week MVP plan",
      },
      {
        type: "list",
        items: [
          "Weeks 1–2: discovery, ICP alignment, and UX flows.",
          "Weeks 3–5: high-fidelity UI and clickable prototype validation.",
          "Weeks 6–10: build core flows, QA, and event instrumentation.",
          "Weeks 11–12: launch, support, and first iteration sprint.",
        ],
      },
    ],
  },
  "no-code-vs-custom-mvp": {
    author: "Northline Strategy Team",
    blocks: [
      {
        type: "paragraph",
        text: "Founders often ask whether to launch on Bubble, Webflow, or Framer - or invest in custom Next.js from day one. The honest answer depends on validation stage, team capacity, and what you need to learn in the next 90 days.",
      },
      {
        type: "heading",
        text: "When no-code is the right call",
      },
      {
        type: "list",
        items: [
          "You need to test demand with real payments or bookings in weeks, not months.",
          "The core workflow is standard (marketplace, directory, landing + CRM handoff).",
          "You expect significant pivots before committing to a engineering team.",
          "Integrations are limited to well-supported Zapier/Make connectors.",
        ],
      },
      {
        type: "heading",
        text: "When custom code makes sense early",
      },
      {
        type: "list",
        items: [
          "Proprietary logic, complex permissions, or real-time collaboration are core to the product.",
          "You already have engineering hires and need a codebase they can extend.",
          "Performance, security, or compliance requirements exceed no-code platform limits.",
          "Investors or enterprise buyers expect audit trails, SLAs, or self-hosted options.",
        ],
      },
      {
        type: "heading",
        text: "The hybrid path we use often",
      },
      {
        type: "paragraph",
        text: "Many clients start no-code for validation, then rebuild the validated slice in custom code while keeping marketing sites on Webflow or Framer. A local services marketplace we shipped went live in six weeks on no-code, then migrated checkout and provider matching to a custom backend once unit economics were proven.",
      },
      {
        type: "heading",
        text: "Decision framework",
      },
      {
        type: "paragraph",
        text: "Ask: What must be true in 90 days? If the answer is 'learn whether anyone pays,' bias no-code. If the answer is 'prove we can operate at scale,' bias custom. Either way, design the UX properly first - switching platforms is expensive, but switching bad UX is worse.",
      },
    ],
  },
  "trucking-dispatch-crm-guide": {
    author: "Northline Logistics Product Team",
    blocks: [
      {
        type: "paragraph",
        text: "Most US trucking teams do not fail because they lack software. They fail because dispatch workflows are split across spreadsheets, email threads, and legacy systems that were never designed for today's volume. A modern dispatch CRM should remove friction where operators lose the most time.",
      },
      {
        type: "heading",
        text: "Where dispatch teams lose time",
      },
      {
        type: "list",
        items: [
          "Load assignments handled across disconnected tools.",
          "No clear SLA visibility for at-risk routes.",
          "Manual exception handling with no audit trail.",
          "Poor communication between dispatch, drivers, and supervisors.",
        ],
      },
      {
        type: "heading",
        text: "What a high-performing dispatch CRM includes",
      },
      {
        type: "list",
        items: [
          "Bulk actions for repetitive dispatch decisions.",
          "Live fleet and route dashboard with exception prioritization.",
          "Role-based views for dispatchers, supervisors, and executives.",
          "Integration layer for accounting, TMS, and communication tools.",
        ],
      },
      {
        type: "heading",
        text: "Design for the ops floor, not demo screens",
      },
      {
        type: "paragraph",
        text: "Dispatch UX should prioritize speed, clarity, and recovery. Dense tables are fine when they are structured for fast scanning. Every critical action needs visible confirmation, easy undo paths, and clear status language for shift handovers.",
      },
      {
        type: "heading",
        text: "Implementation approach",
      },
      {
        type: "paragraph",
        text: "Start with workflow mapping and shift shadowing. Then design a phased rollout: first dispatch board, then exceptions, then analytics and integrations. This keeps operations stable while new tooling proves value.",
      },
      {
        type: "heading",
        text: "Metrics that matter",
      },
      {
        type: "list",
        items: [
          "Dispatch handle time per load",
          "Exception response time",
          "On-time delivery risk alerts resolved",
          "Daily active usage by dispatch team",
        ],
      },
    ],
  },
  "crm-dashboard-ux-patterns": {
    author: "Northline Product Team",
    blocks: [
      {
        type: "paragraph",
        text: "Sales teams abandon CRM dashboards that look impressive in demos but fail on Monday morning. The best-performing CRM UIs we ship share a few repeatable patterns.",
      },
      {
        type: "heading",
        text: "Lead with today's work, not global analytics",
      },
      {
        type: "paragraph",
        text: "Reps need calls to make, deals at risk, and tasks overdue - not company-wide pipeline charts on login. Reserve executive roll-ups for manager roles.",
      },
      {
        type: "heading",
        text: "Deal health at a glance",
      },
      {
        type: "paragraph",
        text: "Use consistent visual language for stale deals, missing next steps, and SLA breaches. Color alone is not enough - pair icons and labels for accessibility.",
      },
      {
        type: "heading",
        text: "Mobile-friendly field views",
      },
      {
        type: "paragraph",
        text: "Field reps check CRM between meetings on phones. Thumb-friendly actions, offline-tolerant lists, and quick note capture matter more than dense desktop tables.",
      },
      {
        type: "heading",
        text: "Configurable without chaos",
      },
      {
        type: "paragraph",
        text: "Let teams pin widgets and save views, but provide sensible defaults. Empty-state CRMs are a adoption killer - seed each role with a working layout on day one.",
      },
    ],
  },
  "choosing-a-digital-agency": {
    author: "Northline Strategy Team",
    blocks: [
      {
        type: "paragraph",
        text: "Choosing an agency is less about portfolio gloss and more about whether they can deliver in your context - timeline, budget, internal team, and risk tolerance.",
      },
      {
        type: "heading",
        text: "Green flags",
      },
      {
        type: "list",
        items: [
          "They ask about success metrics before discussing visuals.",
          "Design and engineering are in-house or clearly integrated - not opaque subcontracting.",
          "They share process artifacts: briefs, timelines, demo cadence, handoff docs.",
          "Case studies include constraints, tradeoffs, and outcomes - not only hero shots.",
          "They push back thoughtfully when scope doesn't match budget or timeline.",
        ],
      },
      {
        type: "heading",
        text: "Red flags",
      },
      {
        type: "list",
        items: [
          "Fixed quotes before discovery with no written scope.",
          "No access to designers or developers during sales calls.",
          "Portfolio projects that cannot be verified or referenced.",
          "Unwillingness to sign NDAs or share IP terms upfront.",
          "Everything is 'custom' with no reusable systems or quality checks.",
        ],
      },
      {
        type: "heading",
        text: "Questions to ask on the first call",
      },
      {
        type: "list",
        items: [
          "Who exactly works on my project week to week?",
          "How do you handle scope changes mid-sprint?",
          "What does handoff look like - Figma, GitHub, documentation?",
          "How do you use AI in delivery, and what is always human-reviewed?",
          "What happens after launch if we need iteration?",
        ],
      },
      {
        type: "heading",
        text: "Start small if you're unsure",
      },
      {
        type: "paragraph",
        text: "A paid discovery sprint or design-only phase de-risks the relationship before a full build. Good agencies welcome this - it aligns expectations and produces useful artifacts even if you don't continue.",
      },
    ],
  },
};

export function getRelatedInsights(slug: InsightSlug, limit = 2) {
  const current = insightPosts.find((p) => p.slug === slug);
  if (!current) return insightPosts.slice(0, limit);

  const sameCategory = insightPosts.filter((p) => p.slug !== slug && p.category === current.category);
  const rest = insightPosts.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
