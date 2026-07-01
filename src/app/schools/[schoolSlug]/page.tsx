import { notFound } from "next/navigation";

import { mockSchoolWebsites } from "@/lib/mock/school-websites";
import { getThemeComponent } from "@/lib/themes/theme-registry";

interface SchoolWebsitePageProps {
  params: Promise<{
    schoolSlug: string;
  }>;
}

export default async function SchoolWebsitePage({
  params,
}: SchoolWebsitePageProps) {
  const { schoolSlug } = await params;

  const website = mockSchoolWebsites[schoolSlug];

  if (!website) {
    notFound();
  }

  const Theme = getThemeComponent(website.website.themeKey);

  // eslint-disable-next-line react-hooks/static-components
  return <Theme data={website} />;
}
