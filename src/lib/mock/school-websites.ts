import type { PublicSchoolWebsite } from "@/lib/contracts/website";

export const mockSchoolWebsites: Record<string, PublicSchoolWebsite> = {
  "bright-future": {
    school: {
      name: "Bright Future Academy",
      slug: "bright-future",
      logoUrl: null,
      studentPortalUrl: "https://portal.example.com/login",
    },
    website: {
      themeKey: "kidza-home-2",
      primaryColor: "#2563eb",
      secondaryColor: "#f97316",

      hero: {
        eyebrow: "Welcome to Bright Future Academy",
        title: "A better future starts with a strong foundation",
        description:
          "We provide a caring, creative and supportive learning environment where every child can grow in knowledge, confidence and character.",
        imageUrl:
          "/themes/kidza-home-2/assets/img/hero/hero-slider-1.jpg",
        primaryActionLabel: "Apply for admission",
        secondaryActionLabel: "Explore our school",
      },
    },
  },

  "excellence-academy": {
    school: {
      name: "Excellence Academy",
      slug: "excellence-academy",
      logoUrl: null,
      studentPortalUrl: "https://portal.example.com/login",
    },
    website: {
      themeKey: "kidza-home-2",
      primaryColor: "#0f766e",
      secondaryColor: "#f59e0b",

      hero: {
        eyebrow: "Discover Excellence Academy",
        title: "Learning today, leading with confidence tomorrow",
        description:
          "Our learners receive the guidance, skills and opportunities they need to become confident thinkers and responsible leaders.",
        imageUrl:
          "/themes/kidza-home-2/assets/img/hero/hero-slider-2.jpg",
        primaryActionLabel: "Start your application",
        secondaryActionLabel: "Learn about us",
      },
    },
  },
};
