/**
 * Production imagery - verified Unsplash assets stored locally for performance.
 * Source: https://unsplash.com - replace with licensed client screenshots when available.
 * Refresh assets: npm run images:fetch (see scripts/fetch-marketing-images.mjs)
 */
import type { CaseSlug, ServiceSlug } from "@/content/site-content";
import type { SolutionSlug } from "@/content/solutions";

export type VisualAsset = {
  src: string;
  alt: string;
};

const img = {
  heroes: {
    home: "/images/heroes/hero-home.jpg",
    about: "/images/heroes/hero-about.jpg",
    services: "/images/heroes/hero-services.jpg",
    contact: "/images/heroes/hero-contact.jpg",
    work: "/images/heroes/hero-work.jpg",
    process: "/images/heroes/hero-process.jpg",
    technologies: "/images/heroes/hero-technologies.jpg",
    industries: "/images/heroes/hero-industries.jpg",
    insights: "/images/heroes/hero-insights.jpg",
    faq: "/images/heroes/hero-faq.jpg",
    careers: "/images/heroes/hero-careers.jpg",
    solutions: "/images/heroes/hero-solutions.jpg",
    privacy: "/images/heroes/hero-privacy.jpg",
    terms: "/images/heroes/hero-terms.jpg",
  },
  sections: {
    saas: "/images/sections/section-saas.jpg",
    trucking: "/images/sections/section-trucking.jpg",
    trust: "/images/sections/section-trust.jpg",
    team: "/images/sections/section-team.jpg",
    culture: "/images/sections/section-culture.jpg",
    services: "/images/sections/section-services.jpg",
  },
  solutions: {
    trucking: "/images/solutions/solution-trucking.jpg",
    accounting: "/images/solutions/solution-accounting.jpg",
    carTransport: "/images/solutions/solution-car-transport.jpg",
  },
  cases: {
    fleetflow: "/images/cases/case-fleetflow.jpg",
    payrollpro: "/images/cases/case-payrollpro.jpg",
    financesync: "/images/cases/case-financesync.jpg",
    healthtrack: "/images/cases/case-healthtrack.jpg",
    brandlift: "/images/cases/case-brandlift.jpg",
    crmpulse: "/images/cases/case-crmpulse.jpg",
    aisupport: "/images/cases/case-aisupport.jpg",
    marketplace: "/images/cases/case-marketplace.jpg",
  },
  insights: {
    aiDesign: "/images/insights/insight-ai-design.jpg",
    onboarding: "/images/insights/insight-onboarding.jpg",
    mvpUk: "/images/insights/insight-mvp-uk.jpg",
    nocode: "/images/insights/insight-nocode.jpg",
    truckingCrm: "/images/insights/insight-trucking-crm.jpg",
    crmUx: "/images/insights/insight-crm-ux.jpg",
    agency: "/images/insights/insight-agency.jpg",
  },
  tech: {
    design: "/images/tech/tech-design.jpg",
    branding: "/images/tech/tech-branding.jpg",
    frontend: "/images/tech/tech-frontend.jpg",
    mobile: "/images/tech/tech-mobile.jpg",
    backend: "/images/tech/tech-backend.jpg",
    integrations: "/images/tech/tech-integrations.jpg",
    ai: "/images/tech/tech-ai.jpg",
    nocode: "/images/tech/tech-nocode.jpg",
  },
  industries: {
    saas: "/images/industries/industry-saas.jpg",
    trucking: "/images/industries/industry-trucking.jpg",
    accounting: "/images/industries/industry-accounting.jpg",
    carTransport: "/images/industries/industry-car-transport.jpg",
    crm: "/images/industries/industry-crm.jpg",
  },
} as const;

/** @deprecated Use file extension check instead - kept for legacy SVG brand assets */
export function isLocalBrandAsset(src: string) {
  return src.startsWith("/brand/");
}

export const pageHeroVisuals = {
  home: { src: img.heroes.home, alt: "SaaS analytics dashboard on laptop - product design and development" },
  about: { src: img.heroes.about, alt: "Cross-functional product team collaborating in a modern workspace" },
  services: { src: img.heroes.services, alt: "UI/UX design workspace with interface wireframes and screens" },
  contact: { src: img.heroes.contact, alt: "Client and agency team in a project discovery meeting" },
  work: { src: img.heroes.work, alt: "Portfolio of SaaS and logistics digital product outcomes" },
  process: { src: img.heroes.process, alt: "Product team planning delivery milestones on a whiteboard" },
  technologies: { src: img.heroes.technologies, alt: "Modern development environment with code and tooling" },
  industries: { src: img.heroes.industries, alt: "Industry-focused digital product solutions for diverse businesses" },
  insights: { src: img.heroes.insights, alt: "Editorial workspace for product strategy and insights" },
  faq: { src: img.heroes.faq, alt: "Consultation session answering project and process questions" },
  careers: { src: img.heroes.careers, alt: "Distributed product team celebrating a successful launch" },
  privacy: { src: img.heroes.privacy, alt: "Secure data protection and privacy compliance visual" },
  terms: { src: img.heroes.terms, alt: "Professional terms and business documentation" },
  solutions: { src: img.heroes.solutions, alt: "Digital solution architecture and product strategy session" },
} as const satisfies Record<string, VisualAsset>;

export const solutionVisuals: Record<SolutionSlug, VisualAsset> = {
  saas: { src: img.sections.saas, alt: "SaaS product dashboard with analytics and user metrics" },
  "trucking-logistics": { src: img.solutions.trucking, alt: "Trucking dispatch console with fleet routes and logistics operations" },
  "accounting-integrations": { src: img.solutions.accounting, alt: "Finance team reviewing QuickBooks and Xero reconciliation dashboard" },
  "car-transportation": { src: img.solutions.carTransport, alt: "Vehicle transport logistics and customer tracking platform" },
};

export const serviceVisuals: Record<ServiceSlug, VisualAsset> = {
  "ui-ux-design": { src: img.tech.design, alt: "UI/UX design interface and user flow wireframes" },
  "product-design": { src: img.tech.design, alt: "Product design strategy session with interface prototypes" },
  branding: { src: img.tech.branding, alt: "Brand identity and visual system design in progress" },
  "mobile-applications": { src: img.tech.mobile, alt: "Mobile app interface design on smartphone screens" },
  "web-development": { src: img.tech.frontend, alt: "Web application development in a modern IDE" },
  "saas-platforms": { src: img.sections.saas, alt: "SaaS analytics dashboard design and development" },
  "crm-development": { src: img.industries.crm, alt: "CRM dashboard with sales pipeline and workflow automation" },
  "api-integrations": { src: img.tech.integrations, alt: "API integration architecture and connected systems" },
  "ai-assisted-development": { src: img.tech.ai, alt: "AI-assisted product development workflow" },
  "no-code-low-code": { src: img.tech.nocode, alt: "Rapid MVP build using no-code and low-code platforms" },
  "automation-systems": { src: img.tech.backend, alt: "Workflow automation and backend systems architecture" },
};

export const caseStudyVisuals: Record<CaseSlug, VisualAsset> = {
  "fleetflow-dispatch": { src: img.cases.fleetflow, alt: "FleetFlow US trucking dispatch CRM dashboard" },
  "payroll-pro-saas": { src: img.cases.payrollpro, alt: "PayrollPro SaaS onboarding dashboard" },
  "finance-sync-hub": { src: img.cases.financesync, alt: "FinanceSync QuickBooks and Xero reconciliation hub" },
  "healthtrack-mobile": { src: img.cases.healthtrack, alt: "HealthTrack patient mobile app interface" },
  "brandlift-ecommerce": { src: img.cases.brandlift, alt: "BrandLift e-commerce storefront redesign" },
  "crm-pulse-dashboard": { src: img.cases.crmpulse, alt: "CRMPulse sales pipeline dashboard" },
  "ai-support-automation": { src: img.cases.aisupport, alt: "SupportAI ticket automation workflow" },
  "marketplace-mvp": { src: img.cases.marketplace, alt: "LocalServe marketplace MVP platform" },
};

function gallery(primary: VisualAsset, secondary: VisualAsset, tertiary: VisualAsset): VisualAsset[] {
  return [primary, secondary, tertiary];
}

export const caseStudyGallery: Record<CaseSlug, VisualAsset[]> = {
  "fleetflow-dispatch": gallery(
    caseStudyVisuals["fleetflow-dispatch"],
    { src: img.sections.trucking, alt: "Dispatch queue management interface" },
    { src: img.industries.trucking, alt: "Operations analytics and SLA reporting" }
  ),
  "payroll-pro-saas": gallery(
    caseStudyVisuals["payroll-pro-saas"],
    { src: img.sections.saas, alt: "Onboarding checklist and setup progress" },
    { src: img.heroes.process, alt: "Admin permissions and role configuration" }
  ),
  "finance-sync-hub": gallery(
    caseStudyVisuals["finance-sync-hub"],
    { src: img.industries.accounting, alt: "Month-end reconciliation summary view" },
    { src: img.solutions.accounting, alt: "Integration health monitoring panel" }
  ),
  "healthtrack-mobile": gallery(
    caseStudyVisuals["healthtrack-mobile"],
    { src: img.tech.mobile, alt: "Care plan adherence mobile screens" },
    { src: img.cases.healthtrack, alt: "Patient records and messaging UI" }
  ),
  "brandlift-ecommerce": gallery(
    caseStudyVisuals["brandlift-ecommerce"],
    { src: img.cases.brandlift, alt: "Product detail conversion layout" },
    { src: img.tech.design, alt: "Brand identity applied to storefront" }
  ),
  "crm-pulse-dashboard": gallery(
    caseStudyVisuals["crm-pulse-dashboard"],
    { src: img.industries.crm, alt: "Sales rep daily task home screen" },
    { src: img.insights.crmUx, alt: "Pipeline forecast and deal risk view" }
  ),
  "ai-support-automation": gallery(
    caseStudyVisuals["ai-support-automation"],
    { src: img.tech.ai, alt: "Automated ticket routing workflow" },
    { src: img.cases.aisupport, alt: "Agent review queue for AI drafts" }
  ),
  "marketplace-mvp": gallery(
    caseStudyVisuals["marketplace-mvp"],
    { src: img.cases.marketplace, alt: "Vendor onboarding and listing management" },
    { src: img.sections.services, alt: "Customer booking and checkout flow" }
  ),
};

export const industryVisuals: Record<"saas" | "trucking" | "accounting" | "car-transport" | "crm", VisualAsset> = {
  saas: { src: img.industries.saas, alt: "SaaS product interface with analytics and metrics" },
  trucking: { src: img.industries.trucking, alt: "Trucking dispatch console and fleet operations" },
  accounting: { src: img.industries.accounting, alt: "Accounting reconciliation and finance dashboard" },
  "car-transport": { src: img.industries.carTransport, alt: "Vehicle transport logistics platform" },
  crm: { src: img.industries.crm, alt: "CRM dashboard and workflow automation" },
};

export const insightDraftVisuals: VisualAsset[] = [
  { src: img.insights.aiDesign, alt: "AI and product design insights cover" },
  { src: img.insights.onboarding, alt: "SaaS onboarding insights cover" },
  { src: img.insights.nocode, alt: "MVP strategy insights cover" },
  { src: img.insights.crmUx, alt: "CRM dashboard insights cover" },
  { src: img.insights.agency, alt: "Agency selection insights cover" },
  { src: img.insights.mvpUk, alt: "UK SaaS MVP guide cover" },
  { src: img.insights.truckingCrm, alt: "US trucking dispatch CRM guide cover" },
];

export const insightVisualBySlug: Record<
  | "ai-in-product-design-2026"
  | "saas-onboarding-patterns"
  | "saas-mvp-uk-guide"
  | "no-code-vs-custom-mvp"
  | "trucking-dispatch-crm-guide"
  | "crm-dashboard-ux-patterns"
  | "choosing-a-digital-agency",
  VisualAsset
> = {
  "ai-in-product-design-2026": insightDraftVisuals[0],
  "saas-onboarding-patterns": insightDraftVisuals[1],
  "saas-mvp-uk-guide": insightDraftVisuals[5],
  "no-code-vs-custom-mvp": insightDraftVisuals[2],
  "trucking-dispatch-crm-guide": insightDraftVisuals[6],
  "crm-dashboard-ux-patterns": insightDraftVisuals[3],
  "choosing-a-digital-agency": insightDraftVisuals[4],
};

export const techCategoryVisuals: Record<"design" | "frontend" | "mobile" | "backend" | "ai" | "nocode", VisualAsset> = {
  design: { src: img.tech.design, alt: "Design tools and interface components in Figma" },
  frontend: { src: img.tech.frontend, alt: "Frontend development with modern JavaScript frameworks" },
  mobile: { src: img.tech.mobile, alt: "Mobile application interface on device screens" },
  backend: { src: img.tech.backend, alt: "Backend services and server architecture" },
  ai: { src: img.tech.ai, alt: "AI tools and automation workflow integration" },
  nocode: { src: img.tech.nocode, alt: "No-code platform for rapid MVP development" },
};

export const marketingSectionImages = {
  saasSpotlight: { src: img.sections.saas, alt: "SaaS analytics dashboard with growth metrics and user onboarding flows" },
  truckingSpotlight: { src: img.sections.trucking, alt: "Semi-truck on highway representing US trucking and fleet logistics software" },
  trustPartnership: { src: img.sections.trust, alt: "Client and agency team aligning on project scope and deliverables" },
  teamCollaboration: { src: img.sections.team, alt: "Product team collaborating on design and development" },
  cultureWorkshop: { src: img.sections.culture, alt: "Team workshop session with whiteboard planning and collaboration" },
  servicesOverview: { src: img.sections.services, alt: "Design and development team reviewing product deliverables" },
  ctaPipeline: { src: img.heroes.process, alt: "Product team coordinating a release pipeline" },
} as const satisfies Record<string, VisualAsset>;

