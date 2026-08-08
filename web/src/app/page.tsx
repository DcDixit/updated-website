import type { Metadata } from "next";

import { HomeMarketing } from "@/components/marketing/home-marketing";
import { brand } from "@/content/site-content";
import { pageHeroVisuals } from "@/content/visuals";
import { buildPageMetadata } from "@/lib/seo";

const homeTitle = "Trucking Software & SaaS Product Development - KRIVA";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: homeTitle,
    description: brand.tagline,
    path: "/",
    image: pageHeroVisuals.home.src,
  }),
  title: { absolute: homeTitle },
};

export default function Page() {
  return <HomeMarketing />;
}

