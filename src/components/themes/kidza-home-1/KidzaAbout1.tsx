import type { CSSProperties } from "react";

import type { ThemeProps } from "@/lib/contracts/website";

import styles from "./KidzaAbout1.module.css";

export function KidzaAbout1({ data }: ThemeProps) {
    const about = data.website.about;

    return (
        <section
            id="about"
            className={styles.section}
            style={
                {
                    "--theme-primary": data.website.branding.primaryColor,
                    "--theme-secondary": data.website.branding.secondaryColor,
                } as CSSProperties
            }
        >
            <div className={styles.inner}>
                <div className={styles.imageColumn}>
                    {about.imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={about.imageUrl} alt={about.title} className={styles.image} />
                    ) : (
                        <div className={styles.imageFallback} aria-hidden="true" />
                    )}
                </div>

                <div className={styles.contentColumn}>
                    <span className={styles.eyebrow}>{about.eyebrow}</span>
                    <h2 className={styles.title}>{about.title}</h2>
                    <p className={styles.description}>{about.description}</p>

                    <div className={styles.pillars}>
                        <div className={styles.pillar}>
                            <h3>Mission</h3>
                            <p>{about.mission}</p>
                        </div>

                        <div className={styles.pillar}>
                            <h3>Vision</h3>
                            <p>{about.vision}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
