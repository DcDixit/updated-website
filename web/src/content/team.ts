/** Leadership and team - aligned with Northline Digital company profile. */

import { brand, siteContact, socialLinks } from "@/content/brand";

const companyLinkedIn =
  socialLinks.find((link) => link.label === "LinkedIn")?.href ??
  "https://www.linkedin.com/company/northline-digital";

export const teamStats = [
  { value: "15+", label: "Team members", caption: "Design, engineering, strategy" },
  { value: `${new Date().getFullYear() - brand.founded}+`, label: "Years shipping", caption: "Products & platforms" },
  { value: "4", label: "Time zones", caption: "US, UK, India, APAC overlap" },
] as const;

export const companyProfile = {
  legalName: brand.legalName,
  founded: brand.founded,
  headquarters: siteContact.addressLine,
  hqLabel: siteContact.hqLabel,
  email: siteContact.email,
  phone: siteContact.displayPhone,
  schedulingUrl: siteContact.schedulingUrl,
  linkedIn: companyLinkedIn,
  deliveryModel: "Remote-first with dedicated product squads for UK SaaS and US logistics clients.",
} as const;

export const leadershipTeam = [
  {
    name: "Product & Delivery Leadership",
    role: "Founder-led squads",
    bio: `${brand.shortName} runs founder-led discovery with dedicated design, engineering, and delivery leads on every engagement - from SaaS MVPs to dispatch CRM platforms.`,
    focus: ["Discovery", "Roadmapping", "Delivery quality"],
    linkedIn: companyLinkedIn,
  },
  {
    name: "Design Practice",
    role: "UI/UX & product design",
    bio: "In-house designers specializing in SaaS onboarding, ops dashboards, design systems, and conversion-focused marketing sites for UK and US markets.",
    focus: ["UI/UX", "Product design", "Design systems"],
    linkedIn: companyLinkedIn,
  },
  {
    name: "Engineering Practice",
    role: "Web, mobile & integrations",
    bio: "Full-stack engineers focused on Next.js, React Native, API integrations, and maintainable codebases - including QuickBooks, Xero, and logistics data pipelines.",
    focus: ["Web & mobile", "APIs", "Integrations"],
    linkedIn: companyLinkedIn,
  },
  {
    name: "AI & Automation",
    role: "Workflow automation",
    bio: "Specialists in AI-assisted development, internal tooling, and ops automation with human-in-the-loop review for production-grade reliability.",
    focus: ["AI workflows", "Automation", "Support tooling"],
    linkedIn: companyLinkedIn,
  },
] as const;

export const culturePoints = [
  {
    title: "One team, one outcome",
    body: "Design and engineering work together from day one — no handoff theater, no blame between disciplines. One conversation, one delivery standard.",
  },
  {
    title: "Proof over promises",
    body: "We share work-in-progress weekly, measure what matters, and document every decision so clients stay in control — not just informed.",
  },
  {
    title: "Built to last",
    body: "Clean Figma libraries, typed codebases, and handoff documentation your team can actually use — long after the project closes.",
  },
] as const;
