import type { CSSProperties } from "react";

import type { ThemeProps } from "@/lib/contracts/website";

import styles from "./KidzaProgrammes.module.css";

export function KidzaProgrammes({ data }: ThemeProps) {
    const programmes = data.website.programmes;

    if (programmes.length === 0) {
        return null;
    }

    return (
        <section
            id="programmes"
            className={styles.section}
            style={
                {
                    "--theme-primary": data.website.branding.primaryColor,
                    "--theme-secondary": data.website.branding.secondaryColor,
                } as CSSProperties
            }
        >
            <div className={styles.inner}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Programmes</span>
                    <h2 className={styles.title}>What Your Child Will Learn</h2>
                </div>

                <ul className={styles.grid}>
                    {programmes.map((programme) => (
                        <li key={programme.id} className={styles.card}>
                            <div className={styles.imageWrap}>
                                {programme.imageUrl ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={programme.imageUrl}
                                        alt={programme.name}
                                        className={styles.image}
                                    />
                                ) : (
                                    <div className={styles.imageFallback} aria-hidden="true" />
                                )}
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.name}>{programme.name}</h3>
                                <p className={styles.summary}>{programme.summary}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
