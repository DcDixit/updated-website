"use client";

import {
  IconBolt,
  IconChartBar,
  IconLayout,
  IconPuzzle,
  IconStack2,
  IconWorld,
} from "@tabler/icons-react";
import type { ComponentType } from "react";

import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/ui/GlassCard";
import { useScrollReveal } from "@/lib/useScrollReveal";
const services = [
  {
    icon: IconPuzzle,
    title: "Accounting Integrations",
    description:
      "QuickBooks, Xero, NetSuite, SAP B1, and Sage — we've shipped production connectors for all of them. Bi-directional sync, error handling, and full documentation included.",
    featured: false,
  },
  {
    icon: IconStack2,
    title: "SaaS Product Development",
    description:
      "From MVP to scaled platform — we design and build web products for SaaS founders who need a technical partner, not just a dev shop.",
    featured: true,
  },
  {
    icon: IconBolt,
    title: "Workflow Automation",
    description:
      "n8n, Zapier, Make — or fully custom API pipelines. We automate the manual finance and ops workflows that slow your team down.",
    featured: false,
  },
  {
    icon: IconLayout,
    title: "UI/UX & Design Systems",
    description:
      "Product design, design systems, and Figma-to-code for SaaS products. We work at the intersection of design and engineering.",
    featured: false,
  },
  {
    icon: IconWorld,
    title: "ERP Connectors",
    description:
      "Custom middleware and connectors for NetSuite, SAP B1, Sage Intacct. We handle the complexity so your team doesn't have to.",
    featured: false,
  },
  {
    icon: IconChartBar,
    title: "Financial Reporting Tools",
    description:
      "Custom dashboards and reporting layers on top of your accounting data — so finance teams get insight, not just exports.",
    featured: false,
  },
] as const;

function ServiceCard({
  icon: Icon,
  title,
  description,
  featured,
  delayMs,
}: {
  icon: ComponentType<{ className?: string; stroke?: number }>;
  title: string;
  description: string;
  featured: boolean;
  delayMs: number;
}) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="reveal-up h-full"
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <GlassCard variant={featured ? "featured" : "default"} className="flex h-full flex-col" icon={<Icon stroke={1.75} />}>
        <h3 className="font-heading text-lg font-semibold text-text-primary-v2">{title}</h3>
        <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-text-secondary-v2">{description}</p>
        <p className="mt-4 font-body text-[13px] font-medium text-brand-amber opacity-0 transition-opacity duration-150 group-hover:opacity-100">
          Learn more →
        </p>
      </GlassCard>
    </div>
  );
}

export function Services() {
  const headerRef = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-surface-base py-[72px] sm:py-[120px]">
      <div className="glow-cobalt" aria-hidden="true" />
      <div className="section-grid-pattern pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />

      <Container className="relative z-10">
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="reveal-up max-w-xl">
          <p className="eyebrow-amber mb-3">WHAT WE BUILD</p>
          <h2 className="font-heading text-[44px] leading-tight font-bold text-text-primary-v2">
            Digital products and integrations — built to ship.
          </h2>
          <p className="mt-4 font-body text-base text-text-secondary-v2">
            From embedded accounting connectors to full SaaS platforms — we build things that run in production.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              featured={service.featured}
              delayMs={index * 60}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
