import type { CSSProperties } from "react";

import type { ThemeProps } from "@/lib/contracts/website";

import { KidzaHeader } from "./KidzaHeader";

export function KidzaHome2Theme({ data }: ThemeProps) {
  return (
    <main
      style={
        {
          minHeight: "100vh",
          backgroundColor: "#f8fafc",
          color: "#172033",
          fontFamily: "Arial, sans-serif",
          "--theme-primary": data.website.primaryColor,
          "--theme-secondary": data.website.secondaryColor,
        } as CSSProperties
      }
    >
      <KidzaHeader data={data} />

      <section
        style={{
          minHeight: "75vh",
          display: "grid",
          placeItems: "center",
          padding: "3rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "760px" }}>
          <p
            style={{
              color: data.website.secondaryColor,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Kidza Home 2
          </p>

          <h1
            style={{
              margin: "1rem 0",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 1.05,
            }}
          >
            {data.website.hero.title}
          </h1>

          <p
            style={{
              maxWidth: "640px",
              margin: "0 auto",
              color: "#66758b",
              fontSize: "1.125rem",
              lineHeight: 1.7,
            }}
          >
            {data.website.hero.description}
          </p>

          <a
            href="#about"
            style={{
              display: "inline-block",
              marginTop: "2rem",
              padding: "0.9rem 1.4rem",
              borderRadius: "0.75rem",
              backgroundColor: data.website.secondaryColor,
              color: "#ffffff",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Explore our school
          </a>
        </div>
      </section>
    </main>
  );
}
