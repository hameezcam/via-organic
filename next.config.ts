import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old WordPress-era URLs that Google still lists. Permanent redirects pass
  // their ranking to the matching page on the new site instead of a 404.
  async redirects() {
    return [
      { source: '/contact-us-2', destination: '/contact', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
