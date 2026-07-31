/** Central content barrel - import from domain files or this module. */

export {
  brand,
  siteContact,
  socialLinks,
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
  type ClientTestimonial,
  type ClientVoice,
  clientTestimonials,
  clientVoices,
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
  eyebrowBadge: "Digital product agency",
  headline: "Software that fits how your team actually works.",
  headlineEmphasis: "actually works",
  lead: "Design and engineering for UK SaaS products and US trucking operations — one in-house team from discovery to launch.",
  leadDetail:
    "We build SaaS platforms, dispatch CRM, fleet dashboards, and QuickBooks/Xero integrations with clear ownership and weekly delivery.",
} as const;

