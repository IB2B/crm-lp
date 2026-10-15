import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

// Security headers on every response (Vercel already adds Strict-Transport-Security).
// The CSP only has the rules that can't break the page: other sites can't frame it, no <base> or
// <object> tricks, forms only post here. A full script allowlist would need a fresh nonce per request,
// which turns off static pages; with 'unsafe-inline' instead it wouldn't stop injected scripts anyway.
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Placeholder team portraits. Remove once real team photos live in /public.
      new URL("https://randomuser.me/api/portraits/**"),
      // Stock photos (Unsplash license, free for commercial use).
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

// withBotId adds the routes Vercel BotID's invisible check loads from (see src/instrumentation-client.ts).
// Its own headers for those routes come after ours, so they win there.
export default withBotId(nextConfig);
