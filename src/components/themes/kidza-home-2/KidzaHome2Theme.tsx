import type { CSSProperties } from "react";

import type { ThemeProps } from "@/lib/contracts/website";

import { KidzaAbout } from "./KidzaAbout";
import { KidzaAdmissions } from "./KidzaAdmissions";
import { KidzaContact } from "./KidzaContact";
import { KidzaFooter } from "./KidzaFooter";
import { KidzaHeader } from "./KidzaHeader";
import { KidzaHero } from "./KidzaHero";
import { KidzaHighlights } from "./KidzaHighlights";
import { KidzaProgrammes } from "./KidzaProgrammes";

export function KidzaHome2Theme({ data }: ThemeProps) {
  const sections = data.website.enabledSections;

  return (
    <div
      style={
        {
          minHeight: "100vh",
          backgroundColor: "#fffaf3",
          color: "#172033",
          fontFamily: "var(--font-nunito), Arial, Helvetica, sans-serif",
          "--theme-primary": data.website.branding.primaryColor,
          "--theme-secondary": data.website.branding.secondaryColor,
        } as CSSProperties
      }
    >
      <KidzaHeader data={data} />

      <main>
        {sections.hero ? <KidzaHero data={data} /> : null}
        {sections.highlights ? <KidzaHighlights data={data} /> : null}
        {sections.about ? <KidzaAbout data={data} /> : null}
        {sections.programmes ? <KidzaProgrammes data={data} /> : null}
        {sections.admissions ? <KidzaAdmissions data={data} /> : null}
        {sections.contact ? <KidzaContact data={data} /> : null}
      </main>

      <KidzaFooter data={data} />
    </div>
  );
}
