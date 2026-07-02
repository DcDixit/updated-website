"use client";

import { HomeSolutionsSection } from "@/components/home/home-solutions-section";
import { Container } from "@/components/layout/container";

export function SolutionTabs() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-surface-alt py-[72px] sm:py-[120px]">
      <div className="glow-cobalt pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <Container className="relative z-10">
        <HomeSolutionsSection />
      </Container>
    </section>
  );
}
