import type { NextConfig } from "next";

const adminAppOrigin = process.env.ADMIN_APP_ORIGIN || "http://localhost:3000";

// Derived from LARAVEL_API_BASE_URL (already required elsewhere) instead of
// a hardcoded hostname -- school logos/hero images are served from the
// backend's own storage disk, and next/image's optimizer 400s any remote
// src whose host isn't explicitly allowlisted. Whatever backend this app
// points at is automatically the allowlisted image host too.
function backendStorageHostname(): string | null {
  const raw = process.env.LARAVEL_API_BASE_URL?.trim();
  if (!raw) return null;
  try {
    return new URL(raw).hostname;
  } catch {
    return null;
  }
}

const backendHostname = backendStorageHostname();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: backendHostname
      ? [
          {
            protocol: "https" as const,
            hostname: backendHostname,
            pathname: "/storage/**",
          },
        ]
      : [],
  },
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
