"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/ui/GlassCard";
import { clientProductLogos } from "@/content/visuals";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";

type IntegrationStatus = "live" | "soon";

type Integration = {
  name: string;
  status: IntegrationStatus;
  abbr: string;
};

const liveIntegrations: Integration[] = [
  { name: "QuickBooks Online", status: "live", abbr: "QB" },
  { name: "QuickBooks Desktop", status: "live", abbr: "QD" },
  { name: "Xero", status: "live", abbr: "Xe" },
  { name: "NetSuite", status: "live", abbr: "NS" },
  { name: "SAP Business One", status: "live", abbr: "SAP" },
  { name: "Sage Intacct", status: "live", abbr: "SI" },
  { name: "Shopify", status: "live", abbr: "Sh" },
  { name: "Stripe", status: "live", abbr: "St" },
  { name: "WooCommerce", status: "live", abbr: "WC" },
  { name: "Amazon", status: "live", abbr: "Am" },
  { name: "Zapier", status: "live", abbr: "Zp" },
  { name: "n8n", status: "live", abbr: "n8" },
  { name: "HubSpot", status: "live", abbr: "HS" },
  { name: "Salesforce", status: "live", abbr: "SF" },
  { name: "PayPal", status: "live", abbr: "PP" },
];

const soonIntegrations: Integration[] = [
  { name: "Zoho Books", status: "soon", abbr: "ZB" },
  { name: "FreshBooks", status: "soon", abbr: "FB" },
  { name: "Wave", status: "soon", abbr: "Wv" },
  { name: "Odoo", status: "soon", abbr: "Od" },
];

const allIntegrations = [...liveIntegrations, ...soonIntegrations];

function IntegrationCard({ name, status, abbr }: Integration) {
  return (
    <GlassCard className="!px-4 !py-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:!bg-surface-card-hover">
      <div
        className={cn(
          "mx-auto flex h-10 w-10 items-center justify-center rounded-lg",
          "border border-[rgba(27,42,107,0.15)] bg-[var(--hero-badge-bg)] font-body text-xs font-bold text-text-secondary-v2",
          "transition-all duration-200"
        )}
      >
        {abbr}
      </div>
      <p className="mt-2 font-body text-xs font-medium text-text-secondary-v2">{name}</p>
      <span
        className={cn(
          "mt-1 inline-block rounded-full px-2 py-0.5 font-body text-[10px] font-bold",
          status === "live"
            ? "border border-[rgba(16,185,129,0.25)] bg-[rgba(16,185,129,0.12)] text-[#059669] dark:text-[#10B981]"
            : "border border-surface-card-border bg-[var(--tab-inactive-bg)] text-text-muted-v2"
        )}
      >
        {status === "live" ? "Live" : "Soon"}
      </span>
    </GlassCard>
  );
}

export function Integrations() {
  const headerRef = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-surface-alt py-[72px] sm:py-[120px]">
      <div className="section-grid-pattern pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      <Container className="relative z-10">
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="reveal-up max-w-xl">
          <p className="eyebrow-amber mb-3">INTEGRATIONS WE&apos;VE SHIPPED</p>
          <h2 className="font-heading text-[44px] leading-tight font-bold text-text-primary-v2">
            Connected to the platforms your business runs on.
          </h2>
          <p className="mt-4 font-body text-base text-text-secondary-v2">
            40+ production integrations across accounting, ERP, eCommerce, and automation platforms.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-surface-card-border bg-surface-card/60 px-6 py-5 backdrop-blur-sm">
          <p className="font-body text-xs font-semibold tracking-wide text-text-muted-v2 uppercase">
            Client products
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {clientProductLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={36}
                className="h-7 w-auto object-contain opacity-80 transition-opacity hover:opacity-100 dark:brightness-110"
                unoptimized
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {allIntegrations.map((integration) => (
            <IntegrationCard key={integration.name} {...integration} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="font-body text-[15px] text-text-secondary-v2">
            Don&apos;t see your platform? We build custom connectors.
          </p>
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center rounded-lg border-[1.5px] border-[rgba(27,42,107,0.45)]",
              "px-6 py-3 font-body text-sm font-medium text-text-primary-v2",
              "transition-colors hover:border-brand-cobalt focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-amber/35"
            )}
          >
            Request a custom integration →
          </Link>
        </div>
      </Container>
    </section>
  );
}
