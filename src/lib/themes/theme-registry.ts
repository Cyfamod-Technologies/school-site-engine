import type { ComponentType } from "react";

import { KidzaHome2Theme } from "@/components/themes/kidza-home-2/KidzaHome2Theme";
import { KidzaHome3Theme } from "@/components/themes/kidza-home-3/KidzaHome3Theme";
import type {
  ThemeKey,
  ThemeProps,
} from "@/lib/contracts/website";

export const themeRegistry: Record<
  ThemeKey,
  ComponentType<ThemeProps>
> = {
  "kidza-home-2": KidzaHome2Theme,
  "kidza-home-3": KidzaHome3Theme,
};

export function getThemeComponent(
  themeKey: ThemeKey,
): ComponentType<ThemeProps> {
  return themeRegistry[themeKey];
}
