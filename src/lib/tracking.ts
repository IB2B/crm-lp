// Keeps ad tracking parameters (UTM and click IDs) when sending visitors to checkout.
const TRACKING_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"]

export function withTracking(url: string): string {
  if (typeof window === "undefined") return url
  try {
    const target = new URL(url, window.location.href)
    const current = new URLSearchParams(window.location.search)
    for (const key of TRACKING_KEYS) {
      const value = current.get(key)
      if (value && !target.searchParams.has(key)) target.searchParams.set(key, value)
    }
    return target.toString()
  } catch {
    return url
  }
}
