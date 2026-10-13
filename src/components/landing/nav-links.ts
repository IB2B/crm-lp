import type { ChromeDict } from "@/i18n/dictionaries/chrome"

// Anchors for the landing page sections. Labels come from src/i18n/dictionaries/chrome.ts (nav).
export const navLinks = [
  { href: "#features", key: "features" },
  { href: "#how-it-works", key: "howItWorks" },
  { href: "#pricing", key: "pricing" },
  { href: "#faq", key: "faq" },
] as const satisfies readonly { href: string; key: keyof ChromeDict["nav"] }[]
