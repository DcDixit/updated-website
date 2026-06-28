import type { Metadata } from "next";

import { HomeMarketing } from "@/components/marketing/home-marketing";
import { brand } from "@/content/site-content";
import { pageHeroVisuals } from "@/content/visuals";
import { buildPageMetadata } from "@/lib/seo";

const homeTitle = `${brand.shortName} · SaaS & Trucking Digital Product Agency`;

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: homeTitle,
    description:
      "AI-powered digital product agency for UK SaaS startups and US trucking companies - dispatch CRM, fleet dashboards, QuickBooks/Xero integrations, and SaaS MVP development.",
    path: "/",
    image: pageHeroVisuals.home.src,
  }),
  title: { absolute: homeTitle },
};

export default function Page() {
  return <HomeMarketing />;
}
