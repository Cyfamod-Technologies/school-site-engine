import { z } from "zod";

import type { PublicSchoolWebsite } from "@/lib/contracts/website";

const actionSchema = z.object({
    label: z.string(),
    href: z.string(),
});

const highlightSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    iconUrl: z.string().nullable(),
});

const programmeSchema = z.object({
    id: z.string(),
    name: z.string(),
    summary: z.string(),
    imageUrl: z.string().nullable(),
});

const publicSchoolWebsiteSchema: z.ZodType<PublicSchoolWebsite> =
    z.object({
        contractVersion: z.literal(1),

        school: z.object({
            name: z.string(),
            slug: z.string(),
            logoUrl: z.string().nullable(),
            studentPortalUrl: z.string().nullable(),
        }),

        website: z.object({
            status: z.literal("published"),
            themeKey: z.literal("kidza-home-2"),

            branding: z.object({
                primaryColor: z.string(),
                secondaryColor: z.string(),
            }),

            seo: z.object({
                title: z.string(),
                description: z.string(),
                imageUrl: z.string().nullable(),
            }),

            header: z.object({
                welcomeText: z.string(),
                utilityText: z.string(),
                tagline: z.string(),
            }),

            hero: z.object({
                eyebrow: z.string(),
                title: z.string(),
                description: z.string(),
                imageUrl: z.string().nullable(),

                primaryAction: actionSchema,
                secondaryAction: actionSchema,

                trustItems: z.array(z.string()),

                infoCard: z.object({
                    label: z.string(),
                    title: z.string(),
                    description: z.string(),
                }),
            }),

            highlights: z.array(highlightSchema),

            about: z.object({
                eyebrow: z.string(),
                title: z.string(),
                description: z.string(),
                imageUrl: z.string().nullable(),
                mission: z.string(),
                vision: z.string(),
            }),

            programmes: z.array(programmeSchema),

            admissions: z.object({
                eyebrow: z.string(),
                title: z.string(),
                description: z.string(),
                action: actionSchema,
            }),

            contact: z.object({
                address: z.string(),
                phone: z.string(),
                email: z.string(),
                mapUrl: z.string().nullable(),
            }),

            socialLinks: z.object({
                facebook: z.string().nullable(),
                instagram: z.string().nullable(),
                linkedin: z.string().nullable(),
                youtube: z.string().nullable(),
                x: z.string().nullable(),
            }),

            enabledSections: z.object({
                hero: z.boolean(),
                highlights: z.boolean(),
                about: z.boolean(),
                programmes: z.boolean(),
                admissions: z.boolean(),
                contact: z.boolean(),
            }),

            publishedAt: z.string().nullable(),
            updatedAt: z.string(),
        }),
    });

export class SchoolWebsiteNotFoundError extends Error {
    constructor(schoolSlug: string) {
        super(`No published website was found for "${schoolSlug}".`);

        this.name = "SchoolWebsiteNotFoundError";
    }
}

export class SchoolWebsiteApiError extends Error {
    readonly status: number | null;

    constructor(message: string, status: number | null = null) {
        super(message);

        this.name = "SchoolWebsiteApiError";
        this.status = status;
    }
}

function getLaravelApiBaseUrl(): string {
    const value = process.env.LARAVEL_API_BASE_URL?.trim();

    if (!value) {
        throw new SchoolWebsiteApiError(
            "LARAVEL_API_BASE_URL is not configured.",
        );
    }

    return value.replace(/\/+$/, "");
}

export async function getPublicSchoolWebsite(
    schoolSlug: string,
): Promise<PublicSchoolWebsite> {
    const apiBaseUrl = getLaravelApiBaseUrl();
    const encodedSchoolSlug = encodeURIComponent(schoolSlug);

    let response: Response;

    try {
        response = await fetch(
            `${apiBaseUrl}/public/schools/${encodedSchoolSlug}/website`,
            {
                headers: {
                    Accept: "application/json",
                },

                /*
                 * Always request the latest published configuration for now.
                 * We can introduce tagged caching and revalidation later.
                 */
                cache: "no-store",
            },
        );
    } catch {
        throw new SchoolWebsiteApiError(
            "The public school website service could not be reached.",
        );
    }

    if (response.status === 404) {
        throw new SchoolWebsiteNotFoundError(schoolSlug);
    }

    if (!response.ok) {
        throw new SchoolWebsiteApiError(
            `The public school website API returned HTTP ${response.status}.`,
            response.status,
        );
    }

    let payload: unknown;

    try {
        payload = await response.json();
    } catch {
        throw new SchoolWebsiteApiError(
            "The public school website API returned invalid JSON.",
            response.status,
        );
    }

    const result = publicSchoolWebsiteSchema.safeParse(payload);

    if (!result.success) {
        console.error(
            "Invalid public school website API response:",
            result.error.flatten(),
        );

        throw new SchoolWebsiteApiError(
            "The public school website API response does not match contract version 1.",
            502,
        );
    }

    return result.data;
}
