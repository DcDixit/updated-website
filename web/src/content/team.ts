/** Leadership and team - aligned with KRIVA Technologies company profile. */

import { brand, siteContact, socialLinks } from "@/content/brand";

const companyLinkedIn =
  socialLinks.find((link) => link.label === "LinkedIn")?.href ??
  "https://www.linkedin.com/company/kriva-technologies";

export const teamStats = [
  { value: "40+", label: "Products shipped", caption: "SaaS, logistics, CRM & automation" },
  { value: "9+", label: "Years of experience", caption: "In product design & engineering" },
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
  founderExperience: "9+ years in product design & engineering",
  deliveryModel: "Remote-first with dedicated squads for each project.",
} as const;

export const leadershipTeam = [
  {
    name: "Product & Delivery Leadership",
    role: "Founder-led delivery",
    bio: "Every project starts with a founder-led discovery session. Your brief, goals, and constraints get documented before any design or code begins.",
    focus: ["Discovery", "Roadmapping", "Delivery quality"],
    linkedIn: companyLinkedIn,
  },
  {
    name: "Design Practice",
    role: "Product & UI/UX design",
    bio: "SaaS dashboards, trucking ops consoles, onboarding flows, and design systems - designed by people who've built these specific interfaces before.",
    focus: ["UI/UX", "Product design", "Design systems"],
    linkedIn: companyLinkedIn,
  },
  {
    name: "Engineering Practice",
    role: "Web, mobile & integrations",
    bio: "Next.js, React Native, QuickBooks/Xero APIs, and whatever your product needs. Typed, tested, documented code that your team can maintain.",
    focus: ["Web & mobile", "APIs", "Integrations"],
    linkedIn: companyLinkedIn,
  },
  {
    name: "AI & Automation",
    role: "Practical automation",
    bio: "AI-assisted workflows for support triage, document processing, and internal tooling. Human review on every output before it ships.",
    focus: ["AI workflows", "Automation", "Support tooling"],
    linkedIn: companyLinkedIn,
  },
] as const;

export const culturePoints = [
  {
    title: "One conversation, one standard",
    body: "Design and engineering work together from the start. No handoff blame, no 'that's not my department.'",
  },
  {
    title: "Show the work",
    body: "We share progress weekly, document every decision, and give you access to the same tools we use.",
  },
  {
    title: "Build it to last",
    body: "Clean Figma files, typed code, and documentation your team can use after we're done - not artifacts that only make sense to us.",
  },
] as const;

