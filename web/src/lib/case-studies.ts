import { caseStudies, type CaseSlug, type ServiceSlug } from "@/content/site-content";

const serviceTagMap: Record<ServiceSlug, readonly string[]> = {
  "ui-ux-design": ["UI/UX", "Product", "Mobile"],
  "product-design": ["Product", "SaaS", "UX"],
  branding: ["Branding", "E-commerce", "Web"],
  "mobile-applications": ["Mobile", "Healthcare", "UI/UX"],
  "web-development": ["Web", "Branding", "E-commerce"],
  "saas-platforms": ["SaaS", "Product", "UX"],
  "crm-development": ["CRM", "Dashboard", "SaaS", "Logistics"],
  "api-integrations": ["Integrations", "Dashboard", "Automation"],
  "ai-assisted-development": ["AI", "Automation", "SaaS"],
  "no-code-low-code": ["No-Code", "Marketplace", "MVP"],
  "automation-systems": ["Automation", "AI", "CRM"],
};

export function getRelatedCaseStudies(serviceSlug: ServiceSlug, limit = 2) {
  const tags = serviceTagMap[serviceSlug] ?? [];
  const matched = caseStudies.filter((c) => c.tags.some((tag) => tags.includes(tag)));

  if (matched.length >= limit) return matched.slice(0, limit);
  return caseStudies.slice(0, limit);
}

export function getCaseStudiesBySlugs(slugs: readonly string[]) {
  return slugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));
}

export function getCaseStudiesByTag(tag: string | null) {
  if (!tag || tag === "All") return caseStudies;
  return caseStudies.filter((c) => c.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));
}

export const workFilterTags = ["All", "SaaS", "Logistics", "CRM", "Integrations", "Automation", "AI", "Mobile"] as const;

export type WorkFilterTag = (typeof workFilterTags)[number];

export function getIndustryWorkLink(industryId: string): string {
  const tagMap: Record<string, string> = {
    saas: "/work?tag=SaaS",
    trucking: "/work?tag=Logistics",
    accounting: "/work?tag=Integrations",
    "car-transport": "/work?tag=Logistics",
    crm: "/work?tag=CRM",
  };
  return tagMap[industryId] ?? "/work";
}

export function getIndustrySolutionLink(industryId: string): string {
  const linkMap: Record<string, string> = {
    saas: "/solutions/saas",
    trucking: "/solutions/trucking-logistics",
    accounting: "/solutions/accounting-integrations",
    "car-transport": "/solutions/car-transportation",
    crm: "/services/crm-development",
  };
  return linkMap[industryId] ?? "/solutions";
}
