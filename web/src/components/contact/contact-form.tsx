"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { primaryCtas, services, siteContact, solutionPillars } from "@/content/site-content";
import { GA4 } from "@/lib/analytics-events";
import { trackEvent, trackGenerateLead } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const projectTypes = [
  { label: "Trucking & logistics (US)", value: "Trucking & logistics" },
  { label: "SaaS product (UK / US)", value: "SaaS product" },
  { label: "QuickBooks / Xero integration", value: "Accounting integration" },
  { label: "Car transportation platform", value: "Car transportation" },
  { label: "CRM & workflow automation", value: "CRM & automation" },
  { label: "AI product development", value: "AI development" },
] as const;

const markets = ["United States", "United Kingdom", "Other / Global"] as const;

const budgets = [
  "Under $5k",
  "$5k — $15k",
  "$15k — $40k",
  "$40k — $100k",
  "$100k+",
  "Not sure yet",
] as const;

const timelines = [
  "ASAP (within 4 weeks)",
  "1-2 months",
  "3-6 months",
  "6+ months",
  "Flexible / exploring",
] as const;

const selectClass =
  "h-12 w-full rounded-lg border border-[var(--surface-border)] bg-background px-3 text-base text-foreground outline-none focus-visible:border-[var(--color-accent)] focus-visible:ring-[3px] focus-visible:ring-[var(--color-accent)]/35 dark:bg-card";

function FormFieldSkeleton() {
  return (
    <div className="space-y-2" aria-hidden>
      <div className="form-skeleton-pulse h-4 w-24 rounded bg-[var(--surface-border)]" />
      <div className="form-skeleton-pulse h-12 w-full rounded-lg bg-[var(--surface-border)]" />
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formStarted = useRef(false);
  const errorId = useId();

  function trackFormStart() {
    if (formStarted.current) return;
    formStarted.current = true;
    trackEvent(GA4.formStart, {
      event_category: "contact",
      form_name: "project_brief",
      page_path: window.location.pathname,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { error?: string; ok?: boolean };

      if (!res.ok) {
        trackEvent(GA4.formError, {
          event_category: "contact",
          form_name: "project_brief",
          error_type: "server_error",
          event_label: String(res.status),
        });
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      trackGenerateLead({
        formName: "project_brief",
        projectType: String(payload.projectType ?? ""),
        market: String(payload.market ?? ""),
      });
      trackEvent("contact_form_submit_success", {
        project_type: String(payload.projectType ?? ""),
        market: String(payload.market ?? ""),
        service_interest: String(payload.category ?? ""),
      });
      form.reset();
      formStarted.current = false;
    } catch {
      trackEvent(GA4.formError, {
        event_category: "contact",
        form_name: "project_brief",
        error_type: "network_error",
      });
      setErrorMessage("Network error. Please check your connection or email us directly.");
      setStatus("error");
    }
  }

  const isLoading = status === "loading";

  if (status === "sent") {
    return (
      <div
        id="brief"
        role="status"
        className="surface-card scroll-mt-[var(--header-offset)] space-y-6 border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-[var(--space-card)] sm:p-8"
      >
        <div className="space-y-3">
          <h2 className="type-h2 text-foreground">Thank you!</h2>
          <p className="type-body text-[color:var(--text-secondary)]">
            We&apos;ve received your project brief. Our team will review it and get back to you within one business day.
          </p>
        </div>

        <div className="space-y-3">
          <p className="type-badge-label">While you wait:</p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/work"
                className="type-body inline-flex items-center gap-1.5 font-semibold text-[var(--color-accent)] transition-opacity hover:opacity-85"
              >
                Browse our recent work
                <IconArrowUpRight size={16} stroke={1.5} aria-hidden />
              </Link>
            </li>
            <li>
              <Link
                href={primaryCtas.book.href}
                className="type-body inline-flex items-center gap-1.5 font-semibold text-[var(--color-accent)] transition-opacity hover:opacity-85"
              >
                {primaryCtas.book.label}
                <IconArrowUpRight size={16} stroke={1.5} aria-hidden />
              </Link>
            </li>
          </ul>
        </div>

        <p className="type-caption border-t border-[var(--section-divider)] pt-5">
          If your project is urgent, reach us at{" "}
          <Link href={`mailto:${siteContact.email}`} className="font-semibold text-foreground hover:text-[var(--color-accent)]">
            {siteContact.email}
          </Link>
        </p>
      </div>
    );
  }

  return (
    <form
      id="brief"
      className="surface-card relative scroll-mt-[var(--header-offset)] space-y-6 p-[var(--space-card)] sm:p-8"
      onSubmit={handleSubmit}
      onFocusCapture={trackFormStart}
      aria-labelledby="contact-form-title"
      aria-busy={isLoading}
      noValidate={false}
    >
      <h2 id="contact-form-title" className="sr-only">
        Project brief form
      </h2>

      <div className="sr-only" aria-hidden>
        <Label htmlFor="website">Website</Label>
        <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {status === "loading" ? "Sending your message." : null}
        {status === "error" && errorMessage ? errorMessage : null}
      </div>

      {isLoading ? (
        <div className="pointer-events-none space-y-6" aria-hidden>
          <div className="grid gap-6 sm:grid-cols-2">
            <FormFieldSkeleton />
            <FormFieldSkeleton />
          </div>
          <FormFieldSkeleton />
          <div className="grid gap-6 sm:grid-cols-2">
            <FormFieldSkeleton />
            <FormFieldSkeleton />
          </div>
          <FormFieldSkeleton />
          <div className="form-skeleton-pulse h-32 w-full rounded-lg bg-[var(--surface-border)]" />
        </div>
      ) : null}

      <div className={cn("space-y-6", isLoading && "sr-only")}>
        <div className="space-y-2">
          <Label htmlFor="name" className="type-body font-semibold text-foreground">
            Name *
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={status === "error" ? true : undefined}
            aria-describedby={status === "error" ? errorId : undefined}
            className="h-12 rounded-lg border-[var(--surface-border)] bg-background dark:bg-card"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="type-body font-semibold text-foreground">
            Work email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            autoComplete="email"
            aria-invalid={status === "error" ? true : undefined}
            aria-describedby={status === "error" ? errorId : undefined}
            className="h-12 rounded-lg border-[var(--surface-border)] bg-background dark:bg-card"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="company" className="type-body font-semibold text-foreground">
              Company
            </Label>
            <Input
              id="company"
              name="company"
              placeholder="Company name (optional)"
              autoComplete="organization"
              className="h-12 rounded-lg border-[var(--surface-border)] bg-background dark:bg-card"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website-visible" className="type-body font-semibold text-foreground">
              Website
            </Label>
            <Input
              id="website-visible"
              name="website_url"
              type="url"
              placeholder="https://yourcompany.com (optional)"
              autoComplete="url"
              className="h-12 rounded-lg border-[var(--surface-border)] bg-background dark:bg-card"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="projectType" className="type-body font-semibold text-foreground">
              Project type *
            </Label>
            <select id="projectType" name="projectType" required className={cn(selectClass)}>
              <option value="" disabled>
                Select project type
              </option>
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="market" className="type-body font-semibold text-foreground">
              Primary market *
            </Label>
            <select id="market" name="market" required className={cn(selectClass)}>
              <option value="" disabled>
                Select market
              </option>
              {markets.map((market) => (
                <option key={market} value={market}>
                  {market}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="category" className="type-body font-semibold text-foreground">
              Service interest
            </Label>
            <select id="category" name="category" className={cn(selectClass)}>
              <option value="">Select a service (optional)</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
              {solutionPillars.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget" className="type-body font-semibold text-foreground">
              Budget range
            </Label>
            <select id="budget" name="budget" className={cn(selectClass)}>
              <option value="">Select budget (optional)</option>
              {budgets.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeline" className="type-body font-semibold text-foreground">
            Timeline *
          </Label>
          <select id="timeline" name="timeline" required className={cn(selectClass)}>
            <option value="" disabled>
              When do you need this?
            </option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="type-body font-semibold text-foreground">
            Project details *
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            minLength={20}
            rows={5}
            aria-invalid={status === "error" ? true : undefined}
            aria-describedby={status === "error" ? errorId : undefined}
            placeholder="Tell us about your SaaS product, trucking platform, integration needs, or timeline."
            className="type-body rounded-lg border-[var(--surface-border)] bg-background dark:bg-card"
          />
        </div>
      </div>

      {status === "error" && errorMessage ? (
        <p id={errorId} className="type-caption text-destructive" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button type="submit" variant="primary" size="cta" disabled={isLoading} aria-busy={isLoading}>
          {isLoading ? "Sending…" : "Send brief"}
        </Button>
        <p className="type-caption max-w-sm">We respond within 24 hours. Your details stay confidential.</p>
      </div>
    </form>
  );
}

