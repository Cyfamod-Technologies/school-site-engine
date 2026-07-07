import type { NextConfig } from "next";

const adminAppOrigin = process.env.ADMIN_APP_ORIGIN || "http://localhost:3000";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Default: no route should be embeddable in an iframe from anywhere
        // (defense-in-depth against clickjacking on the public site).
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
        ],
      },
      {
        // Exception: the preview route is meant to be embedded, but only by
        // the admin frontend that issued the signed link, not any origin.
        source: "/schools/:schoolSlug/preview",
        headers: [
          // X-Frame-Options has no multi-origin equivalent -- omit it here
          // so it doesn't override the CSP below in browsers that check both.
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors ${adminAppOrigin}`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
