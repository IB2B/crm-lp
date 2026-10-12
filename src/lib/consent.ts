"use client"

import { useSyncExternalStore } from "react"

// Cookie consent for marketing cookies (Meta Pixel). Stored in this browser only.
// "pending" = not decided yet (banner shows). On the server we render nothing.
export type Consent = "accepted" | "declined" | "pending"

const KEY = "torch-cookie-consent"
const EVENT = "torch-consent-change"

function read(): Consent {
  try {
    const value = window.localStorage.getItem(KEY)
    return value === "accepted" || value === "declined" ? value : "pending"
  } catch {
    return "pending"
  }
}

export function setConsent(value: Consent) {
  try {
    if (value === "pending") window.localStorage.removeItem(KEY)
    else window.localStorage.setItem(KEY, value)
  } catch {
    // Storage blocked: the choice lasts until the page is closed.
  }
  window.dispatchEvent(new Event(EVENT))
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange)
  window.addEventListener("storage", onChange)
  return () => {
    window.removeEventListener(EVENT, onChange)
    window.removeEventListener("storage", onChange)
  }
}

/** Returns null during server render and the first hydration pass. */
export function useConsent(): Consent | null {
  return useSyncExternalStore(subscribe, read, () => null)
}
