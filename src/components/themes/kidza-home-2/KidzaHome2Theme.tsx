import type { ThemeProps } from "@/lib/contracts/website";

export function KidzaHome2Theme({ data }: ThemeProps) {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        color: "#172033",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          padding: "1.25rem 2rem",
          backgroundColor: data.website.primaryColor,
          color: "#ffffff",
        }}
      >
        <strong>{data.school.name}</strong>
      </header>

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
              margin: "0 auto",
              maxWidth: "640px",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "#66758b",
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
