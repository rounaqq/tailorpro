export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.tailorpro.tailorpro_mobile";

export const APP_STORE_URL = "https://apps.apple.com/in/app/elanza/id6812652439";

// Props for a store badge <a>: opens the store in a new tab, or renders an
// inert "coming soon" badge while the URL is still empty.
export function storeLinkProps(url: string) {
  return url
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
    : { "aria-disabled": true, title: "Coming soon" };
}
