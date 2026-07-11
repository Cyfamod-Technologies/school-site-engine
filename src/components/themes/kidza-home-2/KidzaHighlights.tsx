import type { CSSProperties } from "react";

import type { ThemeProps } from "@/lib/contracts/website";

import styles from "./KidzaHighlights.module.css";

export function KidzaHighlights({ data }: ThemeProps) {
    const highlights = data.website.highlights;

    if (highlights.length === 0) {
        return null;
    }

    return (
        <section
            className={styles.section}
            style={
                {
                    "--theme-primary": data.website.branding.primaryColor,
                    "--theme-secondary": data.website.branding.secondaryColor,
                } as CSSProperties
            }
        >
            <div className={styles.inner}>
                <ul className={styles.grid}>
                    {highlights.map((highlight) => (
                        <li key={highlight.id} className={styles.card}>
                            {highlight.iconUrl ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={highlight.iconUrl}
                                    alt=""
                                    aria-hidden="true"
                                    className={styles.icon}
                                />
                            ) : (
                                <span className={styles.iconFallback} aria-hidden="true" />
                            )}

                            <h3 className={styles.title}>{highlight.title}</h3>

                            <p className={styles.description}>{highlight.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
