import type { Metadata } from "next";

import { HomeMarketing } from "@/components/marketing/home-marketing";
import { brand } from "@/content/site-content";
import { pageHeroVisuals } from "@/content/visuals";
import { buildPageMetadata } from "@/lib/seo";

const homeTitle = `${brand.shortName} · Product Design & Engineering Agency`;

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: homeTitle,
    description:
      "Product design and engineering for SaaS platforms, trucking dispatch software, and QuickBooks/Xero integrations. 40+ products shipped by a team with 9+ years experience.",
    path: "/",
    image: pageHeroVisuals.home.src,
  }),
  title: { absolute: homeTitle },
};

export default function Page() {
  return <HomeMarketing />;
}

