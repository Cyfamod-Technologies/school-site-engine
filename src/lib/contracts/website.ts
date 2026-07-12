export const themeDefinitions = {
  "kidza-home-2": {
    displayName: "Kidza Home 2",
    family: "kidza",
    sourceVariant: "index-2.html",
  },
  "kidza-home-3": {
    displayName: "Kidza Home 3",
    family: "kidza",
    sourceVariant: "index-3.html",
  },
} as const;

export type ThemeKey = keyof typeof themeDefinitions;

export type WebsitePublicationStatus =
  | "draft"
  | "published"
  | "unpublished";

export interface WebsiteAction {
  label: string;
  href: string;
}

export interface WebsiteHighlight {
  id: string;
  title: string;
  description: string;
  iconUrl: string | null;
}

export interface WebsiteProgramme {
  id: string;
  name: string;
  summary: string;
  imageUrl: string | null;
}

export interface WebsiteSectionVisibility {
  hero: boolean;
  highlights: boolean;
  about: boolean;
  programmes: boolean;
  admissions: boolean;
  contact: boolean;
}

export interface PublicSchoolWebsite {
  contractVersion: 1;

  school: {
    name: string;
    slug: string;
    logoUrl: string | null;
    studentPortalUrl: string | null;
  };

  website: {
    status: WebsitePublicationStatus;
    themeKey: ThemeKey;

    branding: {
      primaryColor: string;
      secondaryColor: string;
    };

    seo: {
      title: string;
      description: string;
      imageUrl: string | null;
    };

    header: {
      welcomeText: string;
      utilityText: string;
      tagline: string;
    };

    hero: {
      eyebrow: string;
      title: string;
      description: string;
      imageUrl: string | null;

      primaryAction: WebsiteAction;
      secondaryAction: WebsiteAction;

      trustItems: string[];

      infoCard: {
        label: string;
        title: string;
        description: string;
      };
    };

    highlights: WebsiteHighlight[];

    about: {
      eyebrow: string;
      title: string;
      description: string;
      imageUrl: string | null;
      mission: string;
      vision: string;
    };

    programmes: WebsiteProgramme[];

    admissions: {
      eyebrow: string;
      title: string;
      description: string;
      action: WebsiteAction;
    };

    contact: {
      address: string;
      phone: string;
      email: string;
      mapUrl: string | null;
    };

    socialLinks: {
      facebook: string | null;
      instagram: string | null;
      linkedin: string | null;
      youtube: string | null;
      x: string | null;
    };

    enabledSections: WebsiteSectionVisibility;

    publishedAt: string | null;
    updatedAt: string;
  };
}

export interface ThemeProps {
  data: PublicSchoolWebsite;
}
