import type { CSSProperties, ReactNode } from "react";

import type { PublicSchoolWebsite } from "@/lib/contracts/website";
import { getThemeSections } from "@/lib/themes/section-registry";

interface SectionPageLayoutProps {
  data: PublicSchoolWebsite;
  children: ReactNode;
}

// Shared chrome (Header/Footer + brand-colour wrapper) for standalone
// section pages (/about, /apply) that render one section on its own
// instead of going through the full homepage theme component.
export function SectionPageLayout({ data, children }: SectionPageLayoutProps) {
  const { Header, Footer, backgroundColor, color } = getThemeSections(
    data.website.themeKey,
  );

  return (
    <div
      style={
        {
          minHeight: "100vh",
          backgroundColor,
          color,
          fontFamily: "var(--font-nunito), Arial, Helvetica, sans-serif",
          "--theme-primary": data.website.branding.primaryColor,
          "--theme-secondary": data.website.branding.secondaryColor,
        } as CSSProperties
      }
    >
      <Header data={data} />
      <main>{children}</main>
      <Footer data={data} />
    </div>
  );
}
