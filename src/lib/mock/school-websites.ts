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
        title: "A better future starts here",
        description:
          "A caring school community where every child can learn, grow and become confident.",
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
        title: "Learning today, leading tomorrow",
        description:
          "We help learners develop knowledge, confidence and strong character.",
      },
    },
  },
};
