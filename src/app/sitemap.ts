import type { MetadataRoute } from "next"

import { siteUrl } from "@/content/site"
import { defaultLocale, locales } from "@/i18n/config"

// Public pages, without the language prefix ("" is the home page). The DPA is left out on purpose:
// it's a draft for customers, not a page for search results.
const pages = ["", "/book", "/privacy", "/terms", "/cookie-policy"]

const url = (lang: string, page: string) => `${siteUrl}/${lang}${page}`

// /sitemap.xml: every public page in every language, each listing its other languages
// (hreflang), with English as the default for everyone else.
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    locales.map((lang) => ({
      url: url(lang, page),
      changeFrequency: page === "" || page === "/book" ? ("weekly" as const) : ("yearly" as const),
      priority: page === "" ? 1 : page === "/book" ? 0.8 : 0.3,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, url(l, page)])),
          "x-default": url(defaultLocale, page),
        },
      },
    }))
  )
}
