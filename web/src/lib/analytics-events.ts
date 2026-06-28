/** GA4-recommended event names and parameter keys for consistent reporting. */

export const GA4 = {
  generateLead: "generate_lead",
  selectContent: "select_content",
  ctaClick: "cta_click",
  viewItemList: "view_item_list",
  scroll: "scroll",
  formStart: "form_start",
  formError: "form_error",
  scheduleCallClick: "schedule_call_click",
  pageView: "page_view",
  whatsappClick: "whatsapp_click",
} as const;

/** Mark these as key events (conversions) in GA4 Admin after deploy. */
export const GA4_CONVERSION_EVENTS = [
  GA4.generateLead,
  GA4.scheduleCallClick,
  GA4.ctaClick,
  GA4.whatsappClick,
] as const;

export type Ga4EventName = (typeof GA4)[keyof typeof GA4];

export type Ga4Params = {
  event_category?: string;
  event_label?: string;
  page_path?: string;
  content_type?: string;
  content_id?: string;
  method?: string;
  value?: number;
  currency?: string;
  percent_scrolled?: number;
  form_name?: string;
  error_type?: string;
};
