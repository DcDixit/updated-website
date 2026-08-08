/** Approved client logos for the homepage trust section. */

import type { CaseSlug } from "@/content/site-content";

export type ClientLogoFit = "wide" | "default" | "tall";

export type ClientLogo = {
  name: string;
  logoSrc: string;
  industry: string;
  logoFit?: ClientLogoFit;
  logoScale?: number;
  caseStudySlug?: CaseSlug;
};

/** Trucking / moving / auto-transport first, then remaining sectors. */
export const clientLogosWorkedWith = [
  {
    name: "Keep Moving Movers",
    logoSrc: "/brand/logos/clients/keep-moving-movers.png",
    industry: "Moving",
    logoFit: "wide" as const,
  },
  {
    name: "XmileAuto Transport",
    logoSrc: "/brand/logos/clients/xmileauto-transport.png",
    industry: "Auto Transport",
    logoFit: "tall" as const,
  },
  {
    name: "DC Auto Transport",
    logoSrc: "/brand/logos/clients/dc-auto-transport.png",
    industry: "Auto Transport",
    logoFit: "wide" as const,
  },
  {
    name: "Extra Mile Movers",
    logoSrc: "/brand/logos/clients/extra-mile-movers.png",
    industry: "Moving",
    logoFit: "wide" as const,
  },
  {
    name: "EliteOne Transportation",
    logoSrc: "/brand/logos/clients/eliteone-transportation.png",
    industry: "Transportation",
    logoFit: "wide" as const,
    caseStudySlug: "fleetflow-dispatch" as const,
  },
  {
    name: "Schwarz Logistics",
    logoSrc: "/brand/logos/clients/schwarz-logistics.png",
    industry: "Logistics",
    logoFit: "wide" as const,
  },
  {
    name: "Xmile Transport & Moving",
    logoSrc: "/brand/logos/clients/xmile-transport-moving.png",
    industry: "Transport & Moving",
    logoFit: "wide" as const,
  },
  {
    name: "Houzway",
    logoSrc: "/brand/logos/clients/houzway.png",
    industry: "Real Estate",
    logoFit: "wide" as const,
    caseStudySlug: "marketplace-mvp" as const,
  },
  {
    name: "CareerMoon",
    logoSrc: "/brand/logos/clients/careermoon.png",
    industry: "Coaching & Consulting",
    logoFit: "wide" as const,
  },
  {
    name: "Script",
    logoSrc: "/brand/logos/clients/script.png",
    industry: "Science Education",
    logoFit: "tall" as const,
  },
  {
    name: "Cascadia Collection",
    logoSrc: "/brand/logos/clients/cascadia-collection.png",
    industry: "Luxury Retail",
    logoFit: "wide" as const,
    logoScale: 1.05,
    caseStudySlug: "brandlift-ecommerce" as const,
  },
  {
    name: "Keep Moving Fitness",
    logoSrc: "/brand/logos/clients/keep-moving-fitness.png",
    industry: "Fitness Services",
    logoFit: "tall" as const,
    logoScale: 1.1,
  },
  {
    name: "Global Crypto Blockchain",
    logoSrc: "/brand/logos/clients/global-crypto-blockchain.png",
    industry: "Fintech",
    logoFit: "tall" as const,
    logoScale: 1.1,
    caseStudySlug: "finance-sync-hub" as const,
  },
] satisfies readonly ClientLogo[];

export const clientIndustryHighlights = [
  "Trucking & logistics",
  "Moving",
  "Auto transport",
  "Fintech",
  "Luxury retail",
  "Real estate",
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
