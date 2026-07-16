import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SectionPageLayout } from "@/components/themes/SectionPageLayout";
import {
  getPublicSchoolWebsite,
  SchoolWebsiteNotFoundError,
} from "@/lib/api/public-school-website";
import type { PublicSchoolWebsite } from "@/lib/contracts/website";
import { getThemeSections } from "@/lib/themes/section-registry";

interface AboutPageProps {
  params: Promise<{
    schoolSlug: string;
  }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { schoolSlug } = await params;

  try {
    const data = await getPublicSchoolWebsite(schoolSlug);

    return {
      title: `About | ${data.website.seo.title}`,
      description: data.website.about.description,
    };
  } catch (error) {
    if (error instanceof SchoolWebsiteNotFoundError) {
      return {
        title: "School website unavailable",
        robots: { index: false, follow: false },
      };
    }

    throw error;
  }
}

export default async function AboutPage({ params }: AboutPageProps) {
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

  // Same rule the homepage theme uses -- a disabled section shouldn't be
  // reachable just because its dedicated page URL is known.
  if (!data.website.enabledSections.about) {
    notFound();
  }

  const { About } = getThemeSections(data.website.themeKey);

  return (
    <SectionPageLayout data={data}>
      <About data={data} />
    </SectionPageLayout>
  );
}
