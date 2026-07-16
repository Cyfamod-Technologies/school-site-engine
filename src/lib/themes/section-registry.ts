import type { ComponentType } from "react";

import { KidzaAbout1 } from "@/components/themes/kidza-home-1/KidzaAbout1";
import { KidzaAdmissions1 } from "@/components/themes/kidza-home-1/KidzaAdmissions1";
import { KidzaFooter1 } from "@/components/themes/kidza-home-1/KidzaFooter1";
import { KidzaHeader1 } from "@/components/themes/kidza-home-1/KidzaHeader1";
import { KidzaAbout } from "@/components/themes/kidza-home-2/KidzaAbout";
import { KidzaAdmissions } from "@/components/themes/kidza-home-2/KidzaAdmissions";
import { KidzaFooter } from "@/components/themes/kidza-home-2/KidzaFooter";
import { KidzaHeader } from "@/components/themes/kidza-home-2/KidzaHeader";
import { KidzaAbout3 } from "@/components/themes/kidza-home-3/KidzaAbout3";
import { KidzaAdmissions3 } from "@/components/themes/kidza-home-3/KidzaAdmissions3";
import { KidzaFooter3 } from "@/components/themes/kidza-home-3/KidzaFooter3";
import { KidzaHeader3 } from "@/components/themes/kidza-home-3/KidzaHeader3";
import type { ThemeKey, ThemeProps } from "@/lib/contracts/website";

interface ThemeSections {
  Header: ComponentType<ThemeProps>;
  Footer: ComponentType<ThemeProps>;
  About: ComponentType<ThemeProps>;
  Admissions: ComponentType<ThemeProps>;
  backgroundColor: string;
  color: string;
}

// Mirrors the per-theme wrapper styling in each KidzaHomeXTheme.tsx --
// kept here too since /about and /apply render Header+content+Footer
// directly instead of going through the full homepage theme component.
export const sectionRegistry: Record<ThemeKey, ThemeSections> = {
  "kidza-home-1": {
    Header: KidzaHeader1,
    Footer: KidzaFooter1,
    About: KidzaAbout1,
    Admissions: KidzaAdmissions1,
    backgroundColor: "#fffbea",
    color: "#0b0f19",
  },
  "kidza-home-2": {
    Header: KidzaHeader,
    Footer: KidzaFooter,
    About: KidzaAbout,
    Admissions: KidzaAdmissions,
    backgroundColor: "#fffaf3",
    color: "#172033",
  },
  "kidza-home-3": {
    Header: KidzaHeader3,
    Footer: KidzaFooter3,
    About: KidzaAbout3,
    Admissions: KidzaAdmissions3,
    backgroundColor: "#fffaf3",
    color: "#172033",
  },
};

export function getThemeSections(themeKey: ThemeKey): ThemeSections {
  return sectionRegistry[themeKey];
}
