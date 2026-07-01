import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/marketing/reveal";

export function EngagementModel() {
  return (
    <SectionShell size="default" className="bg-bg-alt">
      <Reveal>
        <Container className="max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
              How we work together
            </p>
            <h2 className="text-h2 font-bold text-text-primary">Three ways to engage.</h2>
            <p className="mx-auto mt-3 max-w-xl text-body text-text-secondary">
              Pick the model that fits where you are. No long-form commitments unless you want them.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-white p-6 shadow-card">
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
                01 / Project-Based
              </div>
              <h3 className="text-h3 mb-2 font-bold text-text-primary">Defined scope. Fixed outcome.</h3>
              <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                Best for MVPs, redesigns, dashboard builds, and integrations with clear requirements and a
                fixed timeline.
              </p>
              <div className="mb-6 space-y-2 text-sm text-text-secondary">
                <div className="flex justify-between">
                  <span>Typical range</span>
                  <span className="font-semibold text-text-primary">£15,000 – £80,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Timeline</span>
                  <span className="font-semibold text-text-primary">6 – 16 weeks</span>
                </div>
              </div>
              <Link
                href="/contact#brief"
                className="block rounded-md border border-primary py-2.5 text-center text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Start a project
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-primary bg-primary p-6 shadow-lg">
              <div className="absolute right-0 top-0 rounded-bl-lg bg-accent px-3 py-1 text-xs font-bold text-white">
                Most popular
              </div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                02 / Design + Dev Retainer
              </div>
              <h3 className="text-h3 mb-2 font-bold text-white">Ongoing product partner.</h3>
              <p className="mb-6 text-sm leading-relaxed text-white/70">
                Best for teams who want a reliable design and engineering partner after launch — iteration
                sprints, monitoring, roadmap support.
              </p>
              <div className="mb-6 space-y-2 text-sm text-white/70">
                <div className="flex justify-between">
                  <span>Typical range</span>
                  <span className="font-semibold text-white">£4,000 – £12,000 / month</span>
                </div>
                <div className="flex justify-between">
                  <span>Commitment</span>
                  <span className="font-semibold text-white">Rolling monthly</span>
                </div>
              </div>
              <Link
                href="/contact#book"
                className="block rounded-md bg-white py-2.5 text-center text-sm font-semibold text-primary transition-colors duration-200 hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Book a call
              </Link>
            </div>

            <div className="rounded-xl border border-border bg-white p-6 shadow-card">
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
                03 / Discovery Sprint
              </div>
              <h3 className="text-h3 mb-2 font-bold text-text-primary">Validate before you build.</h3>
              <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                Best for early-stage validation, UX audits, or scoping before committing to a full build.
              </p>
              <div className="mb-6 space-y-2 text-sm text-text-secondary">
                <div className="flex justify-between">
                  <span>Typical range</span>
                  <span className="font-semibold text-text-primary">£2,500 – £5,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Timeline</span>
                  <span className="font-semibold text-text-primary">1 – 2 weeks</span>
                </div>
              </div>
              <Link
                href="/contact#brief"
                className="block rounded-md border border-primary py-2.5 text-center text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Start with a sprint
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-text-muted">
            All projects start with an NDA · No obligation after discovery · References available in your
            sector
          </p>
        </Container>
      </Reveal>
    </SectionShell>
  );
}
