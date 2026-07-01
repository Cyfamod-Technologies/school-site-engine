import type { PublicSchoolWebsite } from "@/lib/contracts/website";

export const mockSchoolWebsites: Record<string, PublicSchoolWebsite> = {
  "bright-future": {
    contractVersion: 1,

    school: {
      name: "Bright Future Academy",
      slug: "bright-future",
      logoUrl: null,
      studentPortalUrl: "https://portal.example.com/login",
    },

    website: {
      status: "published",
      themeKey: "kidza-home-2",

      branding: {
        primaryColor: "#2563eb",
        secondaryColor: "#f97316",
      },

      seo: {
        title: "Bright Future Academy",
        description:
          "Discover Bright Future Academy, a caring and creative learning community for every child.",
        imageUrl:
          "/themes/kidza-home-2/assets/img/hero/hero-slider-1.jpg",
      },

      header: {
        welcomeText: "Welcome to Bright Future Academy",
        utilityText: "A caring place to learn and grow",
        tagline: "Learn • Grow • Succeed",
      },

      hero: {
        eyebrow: "Welcome to Bright Future Academy",
        title: "A better future starts with a strong foundation",
        description:
          "We provide a caring, creative and supportive learning environment where every child can grow in knowledge, confidence and character.",
        imageUrl:
          "/themes/kidza-home-2/assets/img/hero/hero-slider-1.jpg",

        primaryAction: {
          label: "Apply for admission",
          href: "/schools/bright-future#admissions",
        },

        secondaryAction: {
          label: "Explore our school",
          href: "/schools/bright-future#about",
        },

        trustItems: [
          "Safe learning environment",
          "Experienced educators",
        ],

        infoCard: {
          label: "Our commitment",
          title: "Every child deserves an opportunity to thrive.",
          description:
            "Learning, creativity and strong character come together in one caring school community.",
        },
      },

      highlights: [
        {
          id: "safe-learning",
          title: "Safe learning",
          description:
            "A caring and secure environment where every learner is supported.",
          iconUrl: null,
        },
        {
          id: "quality-teachers",
          title: "Quality teachers",
          description:
            "Experienced educators focused on learning and character.",
          iconUrl: null,
        },
        {
          id: "creative-activities",
          title: "Creative activities",
          description:
            "Practical and playful experiences that build confidence.",
          iconUrl: null,
        },
        {
          id: "strong-foundations",
          title: "Strong foundations",
          description:
            "Helping children develop the skills required for the future.",
          iconUrl: null,
        },
      ],

      about: {
        eyebrow: "About our school",
        title: "Building confident learners in a caring community",
        description:
          "Bright Future Academy supports every learner through strong teaching, creativity and positive relationships.",
        imageUrl:
          "/themes/kidza-home-2/assets/img/about/about-2.png",
        mission:
          "To provide accessible, high-quality education that develops knowledge, confidence and character.",
        vision:
          "To raise responsible learners who are prepared to contribute positively to their communities.",
      },

      programmes: [
        {
          id: "early-years",
          name: "Early Years",
          summary:
            "Play-based learning that develops curiosity, communication and confidence.",
          imageUrl:
            "/themes/kidza-home-2/assets/img/learning/learning1.png",
        },
        {
          id: "primary-school",
          name: "Primary School",
          summary:
            "Strong academic foundations supported by creativity and character development.",
          imageUrl:
            "/themes/kidza-home-2/assets/img/learning/learning2.png",
        },
        {
          id: "creative-learning",
          name: "Creative Learning",
          summary:
            "Activities that help learners explore their talents and practical skills.",
          imageUrl:
            "/themes/kidza-home-2/assets/img/learning/learning3.png",
        },
      ],

      admissions: {
        eyebrow: "Join our school",
        title: "Begin your child’s learning journey with us",
        description:
          "Contact our admissions team to learn about available classes, requirements and the application process.",
        action: {
          label: "Start an application",
          href: "/schools/bright-future#admissions",
        },
      },

      contact: {
        address: "12 Learning Avenue, Example City",
        phone: "+234 000 000 0000",
        email: "hello@brightfuture.example",
        mapUrl: null,
      },

      socialLinks: {
        facebook: null,
        instagram: null,
        linkedin: null,
        youtube: null,
        x: null,
      },

      enabledSections: {
        hero: true,
        highlights: true,
        about: true,
        programmes: true,
        admissions: true,
        contact: true,
      },

      publishedAt: "2026-07-01T08:00:00Z",
      updatedAt: "2026-07-01T08:00:00Z",
    },
  },

  "excellence-academy": {
    contractVersion: 1,

    school: {
      name: "Excellence Academy",
      slug: "excellence-academy",
      logoUrl: null,
      studentPortalUrl: "https://portal.example.com/login",
    },

    website: {
      status: "published",
      themeKey: "kidza-home-2",

      branding: {
        primaryColor: "#0f766e",
        secondaryColor: "#f59e0b",
      },

      seo: {
        title: "Excellence Academy",
        description:
          "Explore Excellence Academy, where learners grow in knowledge, confidence and leadership.",
        imageUrl:
          "/themes/kidza-home-2/assets/img/hero/hero-slider-2.jpg",
      },

      header: {
        welcomeText: "Welcome to Excellence Academy",
        utilityText: "Inspiring knowledge, confidence and leadership",
        tagline: "Learn • Lead • Excel",
      },

      hero: {
        eyebrow: "Discover Excellence Academy",
        title: "Learning today, leading with confidence tomorrow",
        description:
          "Our learners receive the guidance, skills and opportunities they need to become confident thinkers and responsible leaders.",
        imageUrl:
          "/themes/kidza-home-2/assets/img/hero/hero-slider-2.jpg",

        primaryAction: {
          label: "Start your application",
          href: "/schools/excellence-academy#admissions",
        },

        secondaryAction: {
          label: "Learn about us",
          href: "/schools/excellence-academy#about",
        },

        trustItems: [
          "Purpose-driven learning",
          "Supportive school community",
        ],

        infoCard: {
          label: "Our promise",
          title: "Every learner is prepared to lead with confidence.",
          description:
            "Academic excellence, creativity and responsible leadership are central to our school community.",
        },
      },

      highlights: [
        {
          id: "academic-excellence",
          title: "Academic excellence",
          description:
            "A structured curriculum supported by dedicated educators.",
          iconUrl: null,
        },
        {
          id: "leadership",
          title: "Leadership",
          description:
            "Helping learners develop confidence and responsibility.",
          iconUrl: null,
        },
        {
          id: "creative-thinking",
          title: "Creative thinking",
          description:
            "Encouraging curiosity, innovation and independent thought.",
          iconUrl: null,
        },
        {
          id: "strong-community",
          title: "Strong community",
          description:
            "Families and teachers working together for every learner.",
          iconUrl: null,
        },
      ],

      about: {
        eyebrow: "Who we are",
        title: "An inspiring environment for learning and leadership",
        description:
          "Excellence Academy combines strong academic teaching with leadership, creativity and responsible citizenship.",
        imageUrl:
          "/themes/kidza-home-2/assets/img/about/about-3.png",
        mission:
          "To inspire learners through excellent teaching, creativity and purposeful leadership development.",
        vision:
          "To become a trusted learning community known for confident, responsible and capable graduates.",
      },

      programmes: [
        {
          id: "foundation-stage",
          name: "Foundation Stage",
          summary:
            "A supportive beginning that develops confidence and communication.",
          imageUrl:
            "/themes/kidza-home-2/assets/img/learning/learning1.png",
        },
        {
          id: "primary-programme",
          name: "Primary Programme",
          summary:
            "A balanced curriculum focused on knowledge, creativity and leadership.",
          imageUrl:
            "/themes/kidza-home-2/assets/img/learning/learning2.png",
        },
        {
          id: "leadership-clubs",
          name: "Leadership Clubs",
          summary:
            "Practical opportunities for teamwork, responsibility and personal growth.",
          imageUrl:
            "/themes/kidza-home-2/assets/img/learning/learning3.png",
        },
      ],

      admissions: {
        eyebrow: "Admissions",
        title: "Become part of the Excellence Academy community",
        description:
          "Speak with our admissions team about available classes, entry requirements and school visits.",
        action: {
          label: "Contact admissions",
          href: "/schools/excellence-academy#admissions",
        },
      },

      contact: {
        address: "24 Excellence Road, Example City",
        phone: "+234 000 000 0001",
        email: "hello@excellence.example",
        mapUrl: null,
      },

      socialLinks: {
        facebook: null,
        instagram: null,
        linkedin: null,
        youtube: null,
        x: null,
      },

      enabledSections: {
        hero: true,
        highlights: true,
        about: true,
        programmes: true,
        admissions: true,
        contact: true,
      },

      publishedAt: "2026-07-01T08:00:00Z",
      updatedAt: "2026-07-01T08:00:00Z",
    },
  },
};
