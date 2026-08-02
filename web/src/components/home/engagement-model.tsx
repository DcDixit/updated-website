import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/marketing/reveal";

export function EngagementModel() {
  return (
    <SectionShell size="default" className="bg-[var(--surface-muted)]">
      <Reveal>
        <Container>
          <SectionHeader
            eyebrow="How we work together"
            title="Three ways to engage."
            description="Pick the model that fits where you are. No long-form commitments unless you want them."
            align="center"
            className="mb-12"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {/* Project-Based */}
            <div className="surface-card card-hover-rise flex flex-col p-6">
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-[color:var(--text-secondary)]">
                01 / Project-Based
              </div>
              <h3 className="type-h3 mb-2 text-foreground">Defined scope. Fixed outcome.</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                Best for MVPs, redesigns, dashboard builds, and integrations with clear requirements and a
                fixed timeline.
              </p>
              <div className="mb-6 space-y-2 text-sm text-[color:var(--text-secondary)]">
                <div className="flex justify-between border-b border-[var(--surface-border)] pb-2">
                  <span>Typical range</span>
                  <span className="font-semibold text-foreground">£15,000 - £80,000</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span>Timeline</span>
                  <span className="font-semibold text-foreground">6 - 16 weeks</span>
                </div>
              </div>
              <Link
                href="/contact#brief"
                className="block rounded-[var(--card-radius)] border border-[var(--color-primary)] py-2.5 text-center text-sm font-semibold text-[var(--color-primary)] transition-colors duration-200 hover:bg-[var(--color-primary)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
              >
                Start a project
              </Link>
            </div>

            {/* Retainer - featured */}
            <div className="relative overflow-hidden rounded-[var(--card-radius)] bg-[var(--color-primary)] p-6 shadow-lg">
              <div className="absolute right-0 top-0 rounded-bl-[var(--card-radius)] bg-[var(--color-accent)] px-3 py-1 text-xs font-bold text-[var(--color-primary-dark)]">
                Most popular
              </div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                02 / Design + Dev Retainer
              </div>
              <h3 className="type-h3 mb-2 text-white">Ongoing product partner.</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-white/70">
                Best for teams who want a reliable design and engineering partner after launch: iteration
                sprints, monitoring, roadmap support.
              </p>
              <div className="mb-6 space-y-2 text-sm text-white/70">
                <div className="flex justify-between border-b border-white/15 pb-2">
                  <span>Typical range</span>
                  <span className="font-semibold text-white">£4,000 - £12,000 / month</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span>Commitment</span>
                  <span className="font-semibold text-white">Rolling monthly</span>
                </div>
              </div>
              <Link
                href="/contact#book"
                className="block rounded-[var(--card-radius)] bg-white py-2.5 text-center text-sm font-semibold text-[var(--color-primary)] transition-colors duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary)]"
              >
                Book a call
              </Link>
            </div>

            {/* Discovery Sprint */}
            <div className="surface-card card-hover-rise flex flex-col p-6">
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-[color:var(--text-secondary)]">
                03 / Discovery Sprint
              </div>
              <h3 className="type-h3 mb-2 text-foreground">Validate before you build.</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                Best for early-stage validation, UX audits, or scoping before committing to a full build.
              </p>
              <div className="mb-6 space-y-2 text-sm text-[color:var(--text-secondary)]">
                <div className="flex justify-between border-b border-[var(--surface-border)] pb-2">
                  <span>Typical range</span>
                  <span className="font-semibold text-foreground">£2,500 - £5,000</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span>Timeline</span>
                  <span className="font-semibold text-foreground">1 - 2 weeks</span>
                </div>
              </div>
              <Link
                href="/contact#brief"
                className="block rounded-[var(--card-radius)] border border-[var(--color-primary)] py-2.5 text-center text-sm font-semibold text-[var(--color-primary)] transition-colors duration-200 hover:bg-[var(--color-primary)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
              >
                Start with a sprint
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-[color:var(--text-secondary)]">
            All projects start with an NDA · No obligation after discovery · References available in your
            sector
          </p>
        </Container>
      </Reveal>
    </SectionShell>
  );
}

