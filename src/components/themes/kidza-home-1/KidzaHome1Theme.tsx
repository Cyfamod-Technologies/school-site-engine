import type { CSSProperties } from "react";

import type { ThemeProps } from "@/lib/contracts/website";

import { KidzaAbout1 } from "./KidzaAbout1";
import { KidzaAdmissions1 } from "./KidzaAdmissions1";
import { KidzaContact1 } from "./KidzaContact1";
import { KidzaFooter1 } from "./KidzaFooter1";
import { KidzaHeader1 } from "./KidzaHeader1";
import { KidzaHero1 } from "./KidzaHero1";
import { KidzaHighlights1 } from "./KidzaHighlights1";
import { KidzaProgrammes1 } from "./KidzaProgrammes1";

export function KidzaHome1Theme({ data }: ThemeProps) {
    const sections = data.website.enabledSections;

    return (
        <div
            style={
                {
                    minHeight: "100vh",
                    backgroundColor: "#fffbea",
                    color: "#0b0f19",
                    fontFamily: "var(--font-nunito), Arial, Helvetica, sans-serif",
                    "--theme-primary": data.website.branding.primaryColor,
                    "--theme-secondary": data.website.branding.secondaryColor,
                } as CSSProperties
            }
        >
            <KidzaHeader1 data={data} />

            <main>
                {sections.hero ? <KidzaHero1 data={data} /> : null}
                {sections.highlights ? <KidzaHighlights1 data={data} /> : null}
                {sections.about ? <KidzaAbout1 data={data} /> : null}
                {sections.programmes ? <KidzaProgrammes1 data={data} /> : null}
                {sections.admissions ? <KidzaAdmissions1 data={data} /> : null}
                {sections.contact ? <KidzaContact1 data={data} /> : null}
            </main>

            <KidzaFooter1 data={data} />
        </div>
    );
}
