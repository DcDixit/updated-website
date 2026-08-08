/** Approved client logos for the homepage trust section. */

import type { CaseSlug } from "@/content/site-content";

export type ClientLogoFit = "wide" | "default" | "tall";

export type ClientLogo = {
  name: string;
  logoSrc: string;
  industry: string;
  logoFit?: ClientLogoFit;
  /** Multiplier for logo display size, e.g. 0.95 = 5% smaller */
  logoScale?: number;
  /** Logo asset has a dark baked-in background — use a dark plate */
  plate?: "light" | "dark";
  /** Related public case study in the same industry vertical */
  caseStudySlug?: CaseSlug;
};

/** Curated industry tags for the homepage diversity line */
export const clientIndustryHighlights = [
  "Trucking & logistics",
  "Fintech",
  "Luxury retail",
  "Real estate",
  "Education",
  "Fitness & services",
] as const;

export type ClientIndustryGroupId = "all" | "logistics" | "commerce" | "fintech" | "services";

export const clientIndustryGroups = [
  { id: "all", label: "All sectors" },
  { id: "logistics", label: "Logistics" },
  { id: "commerce", label: "Commerce" },
  { id: "fintech", label: "Fintech" },
  { id: "services", label: "Services" },
] as const satisfies ReadonlyArray<{ id: ClientIndustryGroupId; label: string }>;

export function clientIndustryGroupFor(
  industry: string
): Exclude<ClientIndustryGroupId, "all"> {
  switch (industry) {
    case "Transportation":
    case "Moving":
    case "Auto Transport":
    case "Logistics":
    case "Transport & Moving":
      return "logistics";
    case "Luxury Retail":
    case "Real Estate":
      return "commerce";
    case "Fintech":
      return "fintech";
    default:
      return "services";
  }
}

export const clientLogosWorkedWith = [
  {
    name: "EliteOne Transportation",
    logoSrc: "/brand/logos/clients/eliteone-transportation.png",
    industry: "Transportation",
    logoFit: "wide",
    plate: "dark",
    caseStudySlug: "fleetflow-dispatch",
  },
  {
    name: "Keep Moving",
    logoSrc: "/brand/logos/clients/keep-moving-movers.png",
    industry: "Moving",
    logoFit: "wide",
  },
  {
    name: "XmileAuto Transport",
    logoSrc: "/brand/logos/clients/xmileauto-transport.png",
    industry: "Auto Transport",
    logoFit: "tall",
    plate: "dark",
  },
  {
    name: "DC Auto Transport",
    logoSrc: "/brand/logos/clients/dc-auto-transport.png",
    industry: "Auto Transport",
    logoFit: "wide",
    plate: "dark",
  },
  {
    name: "eXTRA Mile Movers",
    logoSrc: "/brand/logos/clients/extra-mile-movers.png",
    industry: "Moving",
    logoFit: "wide",
    logoScale: 0.95,
    plate: "dark",
  },
  {
    name: "Cascadia Collection",
    logoSrc: "/brand/logos/clients/cascadia-collection.png",
    industry: "Luxury Retail",
    logoFit: "wide",
    logoScale: 1.05,
    plate: "dark",
    caseStudySlug: "brandlift-ecommerce",
  },
  {
    name: "Schwarz Logistics",
    logoSrc: "/brand/logos/clients/schwarz-logistics.png",
    industry: "Logistics",
    logoFit: "wide",
  },
  {
    name: "Xmile Transport & Moving",
    logoSrc: "/brand/logos/clients/xmile-transport-moving.png",
    industry: "Transport & Moving",
    logoFit: "wide",
    plate: "dark",
  },
  {
    name: "Keep Moving Fitness Technicians",
    logoSrc: "/brand/logos/clients/keep-moving-fitness.png",
    industry: "Fitness Services",
    logoFit: "wide",
    logoScale: 1.15,
  },
  {
    name: "Houzway",
    logoSrc: "/brand/logos/clients/houzway.png",
    industry: "Real Estate",
    logoFit: "wide",
    caseStudySlug: "marketplace-mvp",
  },
  {
    name: "CareerMoon",
    logoSrc: "/brand/logos/clients/careermoon.png",
    industry: "Coaching & Consulting",
    logoFit: "default",
  },
  {
    name: "SCRIPT",
    logoSrc: "/brand/logos/clients/script.png",
    industry: "Science Education",
    logoFit: "wide",
  },
  {
    name: "Global Crypto & Blockchain",
    logoSrc: "/brand/logos/clients/global-crypto-blockchain.png",
    industry: "Fintech",
    logoFit: "tall",
    plate: "dark",
    caseStudySlug: "finance-sync-hub",
  },
] satisfies readonly ClientLogo[];

export function filterClientsByGroup(group: ClientIndustryGroupId) {
  if (group === "all") return clientLogosWorkedWith;
  return clientLogosWorkedWith.filter(
    (client) => clientIndustryGroupFor(client.industry) === group
  );
}

export const clientTrustStats = {
  clientCount: clientLogosWorkedWith.length,
  sectorCount: clientIndustryHighlights.length,
  caseStudyCount: clientLogosWorkedWith.filter((client) => client.caseStudySlug).length,
} as const;

