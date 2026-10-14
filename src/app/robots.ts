import type { MetadataRoute } from "next"

import { siteUrl } from "@/content/site"

// /robots.txt: every crawler may read the site, except the API routes.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
