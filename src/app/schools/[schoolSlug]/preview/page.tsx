import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getPreviewSchoolWebsite,
  SchoolWebsiteNotFoundError,
  SchoolWebsitePreviewLinkInvalidError,
} from "@/lib/api/public-school-website";
import type { PublicSchoolWebsite } from "@/lib/contracts/website";
import { getThemeComponent } from "@/lib/themes/theme-registry";

interface SchoolWebsitePreviewPageProps {
  params: Promise<{
    schoolSlug: string;
  }>;
  searchParams: Promise<{
    expires?: string;
    signature?: string;
  }>;
}

// Preview content is draft/unpublished by definition -- never let it be
// indexed, regardless of the frame-ancestors restriction in next.config.ts.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function SchoolWebsitePreviewPage({
  params,
  searchParams,
}: SchoolWebsitePreviewPageProps) {
  const { schoolSlug } = await params;
  const { expires, signature } = await searchParams;

  if (!expires || !signature) {
    return (
      <PreviewMessage
        title="Missing preview link parameters"
        description="This page requires a valid preview link issued from Website Management -- open it from the Preview button there, not directly."
      />
    );
  }

  let data: PublicSchoolWebsite;

  try {
    data = await getPreviewSchoolWebsite(schoolSlug, { expires, signature });
  } catch (error) {
    if (error instanceof SchoolWebsiteNotFoundError) {
      notFound();
    }

    if (error instanceof SchoolWebsitePreviewLinkInvalidError) {
      return (
        <PreviewMessage
          title="Preview link invalid or expired"
          description={error.message}
        />
      );
    }

    throw error;
  }

  const ThemeComponent = getThemeComponent(data.website.themeKey);

  return (
    <>
      <div
        style={{
          background: "#fef3c7",
          color: "#92400e",
          padding: "0.5rem 1rem",
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: 600,
        }}
      >
        Preview mode — status: {data.website.status}. This is not visible to
        the public unless published.
      </div>
      {/* eslint-disable-next-line react-hooks/static-components -- stable
      lookup from themeRegistry, not a freshly created component per render. */}
      <ThemeComponent data={data} />
    </>
  );
}

function PreviewMessage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        textAlign: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{title}</h1>
        <p style={{ color: "#64748b" }}>{description}</p>
      </div>
    </main>
  );
}
