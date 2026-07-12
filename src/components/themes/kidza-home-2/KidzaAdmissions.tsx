import type { CSSProperties } from "react";

import type { ThemeProps } from "@/lib/contracts/website";

import styles from "./KidzaAdmissions.module.css";

export function KidzaAdmissions({ data }: ThemeProps) {
    const admissions = data.website.admissions;
    const infoCard = data.website.hero.infoCard;
    const trustItems = data.website.hero.trustItems;

    return (
        <section
            id="admissions"
            className={styles.section}
            style={
                {
                    "--theme-primary": data.website.branding.primaryColor,
                    "--theme-secondary": data.website.branding.secondaryColor,
                } as CSSProperties
            }
        >
            <div className={styles.pattern} aria-hidden="true" />

            <div className={styles.inner}>
                <div className={styles.content}>
                    <span className={styles.eyebrow}>{admissions.eyebrow}</span>

                    <h2 className={styles.title}>{admissions.title}</h2>

                    <p className={styles.description}>{admissions.description}</p>

                    <a href={admissions.action.href} className={styles.action}>
                        {admissions.action.label}
                    </a>
                </div>

                <div className={styles.panel}>
                    <div className={styles.panelStat}>
                        <span className={styles.panelStatLabel}>{infoCard.label}</span>
                        <span className={styles.panelStatValue}>{infoCard.title}</span>
                        <span className={styles.panelStatCaption}>{infoCard.description}</span>
                    </div>

                    {trustItems.length > 0 && (
                        <ul className={styles.panelList}>
                            {trustItems.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}
