import type { ComponentType } from "react";

import { KidzaHome2Theme } from "@/components/themes/kidza-home-2/KidzaHome2Theme";
import type {
  ThemeKey,
  ThemeProps,
} from "@/lib/contracts/website";

type ThemeComponent = ComponentType<ThemeProps>;

const themeRegistry: Record<ThemeKey, ThemeComponent> = {
  "kidza-home-2": KidzaHome2Theme,
};

export function getThemeComponent(
  themeKey: ThemeKey,
): ThemeComponent {
  return themeRegistry[themeKey];
}
