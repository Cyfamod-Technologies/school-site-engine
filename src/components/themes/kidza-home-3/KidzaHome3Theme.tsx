import type { CSSProperties } from "react";

import type { ThemeProps } from "@/lib/contracts/website";

import { KidzaAbout3 } from "./KidzaAbout3";
import { KidzaAdmissions3 } from "./KidzaAdmissions3";
import { KidzaContact3 } from "./KidzaContact3";
import { KidzaFooter3 } from "./KidzaFooter3";
import { KidzaHeader3 } from "./KidzaHeader3";
import { KidzaHero3 } from "./KidzaHero3";
import { KidzaHighlights3 } from "./KidzaHighlights3";
import { KidzaProgrammes3 } from "./KidzaProgrammes3";

export function KidzaHome3Theme({ data }: ThemeProps) {
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
      <KidzaHeader3 data={data} />

      <main>
        {sections.hero ? <KidzaHero3 data={data} /> : null}
        {sections.highlights ? <KidzaHighlights3 data={data} /> : null}
        {sections.about ? <KidzaAbout3 data={data} /> : null}
        {sections.programmes ? <KidzaProgrammes3 data={data} /> : null}
        {sections.admissions ? <KidzaAdmissions3 data={data} /> : null}
        {sections.contact ? <KidzaContact3 data={data} /> : null}
      </main>

      <KidzaFooter3 data={data} />
    </div>
  );
}
