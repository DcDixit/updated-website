"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { GA4, type Ga4Params } from "@/lib/analytics-events";
import { trackEvent, trackPageView } from "@/lib/analytics";

const SCROLL_MILESTONES = [25, 50, 75, 90] as const;

function mapLegacyTrackToGa4(eventName: string, payload: Record<string, string>): Ga4Params & { event: string } {
  const location = payload.location ?? "";
  const label = payload.label ?? "";

  if (eventName.includes("contact_form_submit")) {
    return {
      event: GA4.generateLead,
      event_category: "contact",
      event_label: label || "project_brief",
      method: "form",
      form_name: "project_brief",
    };
  }

  if (eventName.includes("contact_form")) {
    return {
      event: GA4.formError,
      event_category: "contact",
      event_label: label,
      form_name: "project_brief",
      error_type: eventName,
    };
  }

  if (eventName === "work_filter_change") {
    return {
      event: GA4.selectContent,
      event_category: "portfolio",
      content_type: "work_filter",
      content_id: label,
    };
  }

  if (eventName.includes("whatsapp")) {
    return {
      event: GA4.whatsappClick,
      event_category: "conversion",
      event_label: label,
      page_path: location,
    };
  }

  if (eventName.includes("schedule_call") || eventName === "schedule_call_click") {
    return {
      event: GA4.scheduleCallClick,
      event_category: "conversion",
      event_label: label || "Schedule a call",
      page_path: location,
      method: "cal_link",
    };
  }

  if (eventName.includes("cta")) {
    return {
      event: GA4.ctaClick,
      event_category: "conversion",
      event_label: label,
      page_path: location,
    };
  }

  if (eventName === "solution_card_click") {
    return {
      event: GA4.selectContent,
      event_category: "solutions",
      content_type: "solution_card",
      content_id: label,
    };
  }

  return {
    event: eventName,
    event_category: payload.event_category ?? "engagement",
    event_label: label,
    page_path: location,
  };
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const firedScroll = useRef<Set<number>>(new Set());
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || pathname === lastPath.current) return;
    lastPath.current = pathname;
    firedScroll.current.clear();

    trackPageView({ path: pathname, title: document.title });
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      if (height <= 0) return;

      const percent = Math.round((scrollTop / height) * 100);
      for (const milestone of SCROLL_MILESTONES) {
        if (percent >= milestone && !firedScroll.current.has(milestone)) {
          firedScroll.current.add(milestone);
          trackEvent(GA4.scroll, {
            event_category: "engagement",
            percent_scrolled: milestone,
            page_path: window.location.pathname,
          });
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const el = target.closest("[data-track]");
      if (!(el instanceof HTMLElement)) return;

      const legacyName = el.getAttribute("data-track");
      if (!legacyName) return;

      const payload: Record<string, string> = {
        location: el.getAttribute("data-track-location") ?? window.location.pathname,
        label: el.getAttribute("data-track-label") ?? el.textContent?.trim() ?? "",
        href: el.getAttribute("href") ?? "",
      };

      const mapped = mapLegacyTrackToGa4(legacyName, payload);
      trackEvent(mapped.event, mapped);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return children;
}
