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
      "We design and build SaaS platforms for UK startups and trucking software for US operators — one focused team from discovery through launch.",
    path: "/",
    image: pageHeroVisuals.home.src,
  }),
  title: { absolute: homeTitle },
};

export default function Page() {
  return <HomeMarketing />;
}
