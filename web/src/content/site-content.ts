/** Central content barrel - import from domain files or this module. */

export {
  brand,
  reviewProfiles,
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
  eyebrowBadge: "Product design & engineering",
  headline: "We design the software your ops team won't want to work around.",
  headlineEmphasis: "won't want to work around",
  lead: "Dispatch consoles, SaaS dashboards, fleet tools, and QuickBooks/Xero integrations - designed and built by a team that's shipped 40+ of them.",
  leadDetail:
    "Every solution we offer comes from work we've actually done - not service categories we invented to fill a menu.",
} as const;


