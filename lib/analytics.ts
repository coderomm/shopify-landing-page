import { sendGAEvent } from "@next/third-parties/google";

/**
 * ------------------------
 * CONVERSION EVENTS
 * ------------------------
 */

export const trackBookAStrategyCall = () => {
  sendGAEvent("event", "book_strategy_call", {
    event_category: "conversion",
    event_label: "book_strategy_call_button",
  });
};

/**
 * ------------------------
 * ENGAGEMENT EVENTS
 * ------------------------
 */

export const trackProjectExpand = (projectTitle: string) => {
  sendGAEvent("event", "project_expand", {
    event_category: "engagement",
    event_label: projectTitle,
  });
};

/**
 * ------------------------
 * NAVIGATION EVENTS
 * ------------------------
 */

export type FooterLink =
  | "upwork"
  | "twitter"
  | "linkedin"
  | "github"
  | "gmail";

export const trackFooterLinkClick = (label: FooterLink) => {
  sendGAEvent("event", "footer_link_click", {
    event_category: "navigation",
    event_label: label,
  });
};

/**
 * ------------------------
 * OUTBOUND / PROJECT EVENTS
 * ------------------------
 */

export const trackProjectWebsiteClick = (
  projectTitle: string,
  projectUrl: string
) => {
  sendGAEvent("event", "project_website_click", {
    event_category: "outbound",
    event_label: projectTitle,
    project_url: projectUrl,
  });
};

export const trackMainPortfolioClick = () => {
  sendGAEvent("event", "main_portfolio_click", {
    event_category: "navigation",
    event_label: "main_portfolio_link",
  });
};
