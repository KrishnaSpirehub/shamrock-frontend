import posthog from "posthog-js";

export const _trackEvent = (event: string, properties?: Record<string, any>) => {
  console.log("Tracking event", event, properties);
  posthog.capture(event, properties);
};
