import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getPublicSchoolWebsite,
  SchoolWebsiteNotFoundError,
} from "@/lib/api/public-school-website";
import type { PublicSchoolWebsite } from "@/lib/contracts/website";
import { getThemeComponent } from "@/lib/themes/theme-registry";

interface SchoolWebsitePageProps {
  params: Promise<{
    schoolSlug: string;
  }>;
}

export async function generateMetadata({
  params,
}: SchoolWebsitePageProps): Promise<Metadata> {
  const { schoolSlug } = await params;

  try {
    const data = await getPublicSchoolWebsite(schoolSlug);

    return {
      title: data.website.seo.title,
      description: data.website.seo.description,

      openGraph: {
        title: data.website.seo.title,
        description: data.website.seo.description,
        type: "website",
      },
    };
  } catch (error) {
    if (error instanceof SchoolWebsiteNotFoundError) {
      return {
        title: "School website unavailable",
        description:
          "The requested school website is not currently available.",

        robots: {
          index: false,
          follow: false,
        },
      };
    }

    throw error;
  }
}

export default async function SchoolWebsitePage({
  params,
}: SchoolWebsitePageProps) {
  const { schoolSlug } = await params;

  let data: PublicSchoolWebsite;

  try {
    data = await getPublicSchoolWebsite(schoolSlug);
  } catch (error) {
    if (error instanceof SchoolWebsiteNotFoundError) {
      notFound();
    }

    throw error;
  }

  const ThemeComponent = getThemeComponent(data.website.themeKey);

  // Stable lookup from themeRegistry (a plain object), not a freshly
  // created component per render.
  // eslint-disable-next-line react-hooks/static-components
  return <ThemeComponent data={data} />;
}
