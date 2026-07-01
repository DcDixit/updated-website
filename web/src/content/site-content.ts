/** Central content barrel - import from domain files or this module. */

export {
  brand,
  siteContact,
  socialLinks,
  reviewProfiles,
} from "@/content/brand";
export {
  footerColumns,
  nav,
  navSecondary,
  primaryCtas,
} from "@/content/navigation";

export {
  faqHome,
  faqPageExtra,
  stats,
  processSteps,
  techCategories,
  engagementModels,
  pillars,
  industries,
  careersOpenRoles,
  certificationBadges,
} from "@/content/faq-content";

export {
  type InsightSlug,
  type InsightBlock,
  insightPosts,
  insightPostsPreview,
  insightArticles,
  getRelatedInsights,
} from "@/content/insights";

export {
  type ServiceSlug,
  type ServiceCategory,
  serviceCategories,
  services,
  serviceDetails,
  servicesByCategory,
} from "@/content/services";

export {
  type CaseSlug,
  caseStudies,
  caseStudyDetails,
  featuredCaseStudies,
} from "@/content/portfolio";

export {
  type SolutionSlug,
  solutionPillars,
  solutionDetails,
  solutionSlugs,
  homepageSolutionSections,
  getSolutionBySlug,
} from "@/content/solutions";

export {
  testimonials,
  reviewSignals,
  clientLogos,
  industryFocus,
} from "@/content/testimonials";

export {
  leadershipTeam,
  teamStats,
  culturePoints,
  companyProfile,
} from "@/content/team";

/** Homepage hero - dual-industry agency positioning. */
export const homeHero = {
  eyebrowBadge: "AI-powered digital product agency",
  headline: "SaaS products for UK teams. Trucking software for US operators.",
  headlineEmphasis: "SaaS products",
  lead: "One in-house team across design, engineering, and AI — from discovery to launch and beyond.",
  leadDetail:
    "15+ designers and developers building SaaS platforms, dispatch CRM, fleet dashboards, and QuickBooks/Xero integrations.",
} as const;

