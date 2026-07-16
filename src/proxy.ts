import { NextRequest, NextResponse } from "next/server";

// Domains that should be served as-is, without any custom-domain
// resolution -- this app's own default deployment domain(s), plus
// localhost during development. Comma-separated in the env var so this
// never needs a code change per environment.
const PASSTHROUGH_HOSTS = (process.env.PASSTHROUGH_HOSTS ?? "localhost:3001")
    .split(",")
    .map((host) => host.trim())
    .filter(Boolean);

/**
 * Runs on every request. Schools bring their own arbitrary custom domain
 * (e.g. hill-top.com.ng) rather than a predictable subdomain of one
 * shared domain -- there's no string pattern to derive a school slug
 * from the host, so this asks the backend directly: "which school owns
 * this domain?" and rewrites to the existing /schools/{slug} route,
 * which already has all the real rendering/data-fetching logic.
 *
 * Requests already using the shared /schools/{slug} path pass straight
 * through untouched -- this only ever applies to a custom-domain
 * request.
 */
export async function proxy(request: NextRequest) {
    const host = request.headers.get("host") ?? "";
    const { pathname } = request.nextUrl;

    if (PASSTHROUGH_HOSTS.some((passthrough) => host.includes(passthrough))) {
        return NextResponse.next();
    }

    if (pathname.startsWith("/schools/")) {
        return NextResponse.next();
    }

    const apiBaseUrl = process.env.LARAVEL_API_BASE_URL;

    if (!apiBaseUrl) {
        return NextResponse.next();
    }

    try {
        const response = await fetch(
            `${apiBaseUrl}/public/schools/resolve-domain?domain=${encodeURIComponent(host)}`,
            { cache: "no-store" },
        );

        if (!response.ok) {
            // Unknown domain -- fall through to whatever this app's own
            // routing does with an unrecognised host (its not-found page).
            return NextResponse.next();
        }

        const { slug } = (await response.json()) as { slug: string };

        const url = request.nextUrl.clone();
        url.pathname = `/schools/${slug}${pathname === "/" ? "" : pathname}`;

        return NextResponse.rewrite(url);
    } catch {
        // Backend unreachable -- fail open to passthrough rather than
        // hard-erroring every request on an outage.
        return NextResponse.next();
    }
}

export const config = {
    matcher: ["/((?!_next|api|favicon.ico).*)"],
};
