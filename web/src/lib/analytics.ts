declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEventPayload = Record<string, string | number | boolean | null | undefined>;

export function trackEvent(eventName: string, payload: AnalyticsEventPayload = {}) {
  if (typeof window === "undefined") return;

  const cleanPayload = Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined && value !== null)
  );

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, cleanPayload);
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...cleanPayload });
  }
}

/** GA4 generate_lead with recommended params. */
export function trackGenerateLead(input: {
  formName: string;
  projectType?: string;
  market?: string;
  value?: number;
}) {
  trackEvent("generate_lead", {
    event_category: "contact",
    form_name: input.formName,
    method: "form",
    ...(input.projectType ? { content_id: input.projectType } : {}),
    ...(input.market ? { event_label: input.market } : {}),
    ...(input.value ? { value: input.value, currency: "USD" } : {}),
  });
}

export function trackScheduleCallClick(input: { location: string; label?: string }) {
  trackEvent("schedule_call_click", {
    event_category: "conversion",
    event_label: input.label ?? "Schedule a call",
    page_path: input.location,
    method: "cal_link",
  });
}

export function trackPageView(input: { path: string; title: string }) {
  trackEvent("page_view", {
    page_path: input.path,
    page_title: input.title,
    page_location: typeof window !== "undefined" ? window.location.href : input.path,
  });
}
