import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SolutionPageLayout } from "@/components/marketing/solution-page-layout";
import { getSolutionBySlug, solutionSlugs } from "@/content/solutions";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return buildPageMetadata({
    title: solution.seo.title,
    description: solution.seo.description,
    path: `/solutions/${slug}`,
  });
}

export default async function SolutionDetailPage({ params }: Props) {
  const slug = (await params).slug;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  return <SolutionPageLayout solution={solution} />;
}
