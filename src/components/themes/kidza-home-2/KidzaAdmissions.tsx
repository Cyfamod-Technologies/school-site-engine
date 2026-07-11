import type { CSSProperties } from "react";

import type { ThemeProps } from "@/lib/contracts/website";

import styles from "./KidzaAdmissions.module.css";

export function KidzaAdmissions({ data }: ThemeProps) {
    const admissions = data.website.admissions;

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
            <div className={styles.inner}>
                <span className={styles.eyebrow}>{admissions.eyebrow}</span>

                <h2 className={styles.title}>{admissions.title}</h2>

                <p className={styles.description}>{admissions.description}</p>

                <a href={admissions.action.href} className={styles.action}>
                    {admissions.action.label}
                </a>
            </div>
        </section>
    );
}
