import type { CSSProperties } from "react";

import type { ThemeProps } from "@/lib/contracts/website";

import { KidzaHeader } from "./KidzaHeader";
import { KidzaHero } from "./KidzaHero";

export function KidzaHome2Theme({ data }: ThemeProps) {
  return (
    <main
      style={
        {
          minHeight: "100vh",
          backgroundColor: "#fffaf3",
          color: "#172033",
          fontFamily: "Arial, Helvetica, sans-serif",
          "--theme-primary": data.website.primaryColor,
          "--theme-secondary": data.website.secondaryColor,
        } as CSSProperties
      }
    >
      <KidzaHeader data={data} />
      <KidzaHero data={data} />
    </main>
  );
}
