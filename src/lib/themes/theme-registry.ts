import type { ComponentType } from "react";

import { KidzaHome2Theme } from "@/components/themes/kidza-home-2/KidzaHome2Theme";
import type {
  ThemeKey,
  ThemeProps,
} from "@/lib/contracts/website";

export const themeRegistry: Record<
  ThemeKey,
  ComponentType<ThemeProps>
> = {
  "kidza-home-2": KidzaHome2Theme,
};

export function getThemeComponent(
  themeKey: ThemeKey,
): ComponentType<ThemeProps> {
  return themeRegistry[themeKey];
}
