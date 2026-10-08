import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Placeholder team portraits. Remove once real team photos live in /public.
      new URL("https://randomuser.me/api/portraits/**"),
      // Stock photos (Unsplash license, free for commercial use).
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
