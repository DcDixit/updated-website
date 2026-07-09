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
  type MegaMenuServiceGroup,
  megaMenuServiceGroups,
  solutionMenuTeasers,
  getMegaMenuServiceTitle,
} from "@/content/mega-menu";

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
  headline: "Design and build software your users actually adopt.",
  headlineEmphasis: "actually adopt",
  lead: "One in-house team for UK SaaS and US trucking — from discovery to launch.",
  leadDetail:
    "Senior designers and engineers building SaaS platforms, dispatch CRM, fleet dashboards, and QuickBooks/Xero integrations.",
} as const;

