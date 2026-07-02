"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/ui/GlassCard";
import { marketingSectionImages } from "@/content/visuals";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";

type TabData = {
  id: string;
  label: string;
  outcomes: string[];
  stat: string;
  statLabel: string;
  cta: string;
  image: string;
  imageAlt: string;
};

const tabs: TabData[] = [
  {
    id: "saas",
    label: "QuickBooks & Xero SaaS",
    outcomes: [
      "Embedded QuickBooks / Xero sync inside your product",
      "Bi-directional transaction and invoice automation",
      "OAuth2 token management and webhook handling",
      "White-label accounting module for your SaaS",
    ],
    stat: "40+",
    statLabel: "production integrations shipped",
    cta: "See how we help SaaS platforms →",
    image: marketingSectionImages.saasSpotlight.src,
    imageAlt: marketingSectionImages.saasSpotlight.alt,
  },
  {
    id: "fintech",
    label: "Fintech & Accounting Teams",
    outcomes: [
      "Automate reconciliation and month-end workflows",
      "Custom reporting on top of your accounting data",
      "Multi-entity consolidation and intercompany sync",
      "Replace spreadsheet chaos with live dashboards",
    ],
    stat: "80%",
    statLabel: "reduction in manual reconciliation hours reported",
    cta: "See how we help accounting teams →",
    image: "/images/solutions/solution-accounting.jpg",
    imageAlt: "Finance team reviewing accounting reconciliation dashboard",
  },
  {
    id: "erp",
    label: "ERP & Enterprise",
    outcomes: [
      "NetSuite, SAP B1, Sage Intacct connectors",
      "Custom middleware for legacy ERP systems",
      "Real-time data sync across departments",
      "Full audit trail and error-handling pipelines",
    ],
    stat: "15+",
    statLabel: "ERP connectors in production",
    cta: "See how we handle enterprise integrations →",
    image: "/images/tech/tech-integrations.jpg",
    imageAlt: "Enterprise API integration architecture",
  },
  {
    id: "shopify",
    label: "Shopify & D2C Brands",
    outcomes: [
      "Shopify → QuickBooks / Xero automated sync",
      "Inventory and order data into accounting in real-time",
      "COD reconciliation and returns handling",
      "Custom Shopify apps and theme development",
    ],
    stat: "48hr",
    statLabel: "average integration turnaround for standard connectors",
    cta: "See how we help D2C brands →",
    image: "/images/cases/case-brandlift.jpg",
    imageAlt: "E-commerce storefront and Shopify integration workflow",
  },
  {
    id: "agencies",
    label: "Agencies & Studios",
    outcomes: [
      "White-label integration development for your clients",
      "Design-to-code for SaaS products you're building",
      "Staff augmentation for product and engineering sprints",
      "NDA-first, documentation-complete delivery",
    ],
    stat: "9.2/10",
    statLabel: "average satisfaction score from agency partners",
    cta: "See how we support agencies →",
    image: marketingSectionImages.trustPartnership.src,
    imageAlt: marketingSectionImages.trustPartnership.alt,
  },
];

export function SolutionTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [panelState, setPanelState] = useState<"entering" | "exiting">("entering");
  const headerRef = useScrollReveal();

  const activeTab = tabs[activeIndex];

  const switchTab = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setPanelState("exiting");
      window.setTimeout(() => {
        setActiveIndex(index);
        setPanelState("entering");
      }, 100);
    },
    [activeIndex]
  );

  return (
    <section className="relative overflow-hidden bg-surface-alt py-[72px] sm:py-[120px]">
      <div className="glow-cobalt pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

      <Container className="relative z-10">
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="reveal-up max-w-xl">
          <p className="eyebrow-amber mb-3">WHO WE WORK WITH</p>
          <h2 className="font-heading text-[44px] leading-tight font-bold text-text-primary-v2">
            Solutions shaped around your stack and your team.
          </h2>
        </div>

        <div
          className="scrollbar-hide mt-10 flex gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Solution categories"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              onClick={() => switchTab(index)}
              className={cn(
                "shrink-0 rounded-full border px-5 py-2.5 font-body text-sm font-medium transition-all duration-[180ms]",
                "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-amber/35",
                index === activeIndex
                  ? "border-[rgba(27,42,107,0.35)] bg-[var(--tab-active-bg)] font-semibold text-text-primary-v2 shadow-[0_0_16px_rgba(27,42,107,0.15)] dark:border-[rgba(27,42,107,0.45)] dark:shadow-[0_0_16px_rgba(27,42,107,0.25)]"
                  : "border-surface-card-border bg-[var(--tab-inactive-bg)] text-text-secondary-v2 hover:border-[color-mix(in_oklab,var(--color-accent)_15%,var(--v2-surface-card-border))]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          className={cn(
            "tab-panel mt-12 grid gap-10 lg:grid-cols-2 lg:items-center",
            panelState === "exiting" ? "exiting" : "entering"
          )}
        >
          <div className="order-2 lg:order-1">
            <ul className="space-y-4">
              {activeTab.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 font-body text-sm leading-relaxed text-text-secondary-v2"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-amber" aria-hidden />
                  {outcome}
                </li>
              ))}
            </ul>

            <div className="mt-8 inline-flex flex-col gap-1 rounded-xl border border-surface-card-border bg-surface-card px-5 py-4 shadow-[var(--glass-card-shadow)]">
              <span className="font-heading text-3xl font-bold text-text-primary-v2">{activeTab.stat}</span>
              <span className="font-body text-sm text-text-muted-v2">{activeTab.statLabel}</span>
            </div>

            <Link
              href="/solutions"
              className="card-link mt-8 inline-block font-body text-sm font-medium underline-offset-4"
            >
              {activeTab.cta}
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <GlassCard className="overflow-hidden !p-0" variant="default">
              <figure className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={activeTab.image}
                  alt={activeTab.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgba(11,27,77,0.15)] to-transparent"
                  aria-hidden
                />
              </figure>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
