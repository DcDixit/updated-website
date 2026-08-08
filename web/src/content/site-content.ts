/** Central content barrel - import from domain files or this module. */

export {
  activeSocialLinks,
  brand,
  mailtoHref,
  reviewProfiles,
  reviewUrl,
  siteContact,
  siteStats,
  social,
  socialLinks,
  whatsappHref,
} from "@/content/brand";
export {
  footerColumns,
  mainNav,
  navSecondary,
  primaryCtas,
  processNavItem,
} from "@/content/navigation";
export type { NavChild, NavItem } from "@/content/navigation";

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

/** Homepage hero - trucking-first agency positioning. */
export const homeHero = {
  eyebrowBadge: "Design engineering for trucking & SaaS",
  headline: "We design the software your ops team won't want to work around.",
  headlineEmphasis: "won't want to work around",
  lead: "Dispatch consoles, fleet tools, SaaS dashboards, and QuickBooks/Xero integrations — designed and built for operators and product teams.",
} as const;


