export const themeDefinitions = {
  "kidza-home-2": {
    displayName: "Kidza Home 2",
    family: "kidza",
    sourceVariant: "index-2.html",
  },
} as const;

export type ThemeKey = keyof typeof themeDefinitions;

export interface PublicSchoolWebsite {
  school: {
    name: string;
    slug: string;
    logoUrl: string | null;
    studentPortalUrl: string | null;
  };

  website: {
    themeKey: ThemeKey;
    primaryColor: string;
    secondaryColor: string;

    hero: {
      title: string;
      description: string;
    };
  };
}

export interface ThemeProps {
  data: PublicSchoolWebsite;
}
