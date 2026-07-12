import type { CSSProperties } from "react";

import type { ThemeProps } from "@/lib/contracts/website";

import { KidzaHeader3 } from "./KidzaHeader3";
import { KidzaHero3 } from "./KidzaHero3";

export function KidzaHome3Theme({ data }: ThemeProps) {
  return (
    <main
      style={
        {
          minHeight: "100vh",
          backgroundColor: "#fffaf3",
          color: "#172033",
          fontFamily: "Arial, Helvetica, sans-serif",
          "--theme-primary": data.website.branding.primaryColor,
          "--theme-secondary": data.website.branding.secondaryColor,
        } as CSSProperties
      }
    >
      <KidzaHeader3 data={data} />

      {data.website.enabledSections.hero ? (
        <KidzaHero3 data={data} />
      ) : null}
    </main>
  );
}
