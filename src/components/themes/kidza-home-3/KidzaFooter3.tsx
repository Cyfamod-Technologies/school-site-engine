import Link from "next/link";
import type { CSSProperties } from "react";

import type { ThemeProps } from "@/lib/contracts/website";

import styles from "./KidzaFooter3.module.css";

const SOCIAL_LABELS = {
    facebook: "Facebook",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    youtube: "YouTube",
    x: "X",
} as const;

export function KidzaFooter3({ data }: ThemeProps) {
    const schoolHomeUrl = `/schools/${data.school.slug}`;
    const socialEntries = Object.entries(data.website.socialLinks).filter(
        (entry): entry is [keyof typeof SOCIAL_LABELS, string] => entry[1] !== null,
    );

    return (
        <footer
            className={styles.footer}
            style={
                {
                    "--footer-secondary": data.website.branding.secondaryColor,
                } as CSSProperties
            }
        >
            <div className={styles.inner}>
                <div className={styles.brandColumn}>
                    <Link href={schoolHomeUrl} className={styles.brand}>
                        {data.school.logoUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={data.school.logoUrl}
                                alt={`${data.school.name} logo`}
                                className={styles.logo}
                            />
                        ) : (
                            <span className={styles.logoFallback} aria-hidden="true">
                                {data.school.name.slice(0, 1).toUpperCase()}
                            </span>
                        )}

                        <span className={styles.brandName}>{data.school.name}</span>
                    </Link>

                    <p className={styles.tagline}>{data.website.header.tagline}</p>

                    {socialEntries.length > 0 ? (
                        <ul className={styles.socialList}>
                            {socialEntries.map(([key, url]) => (
                                <li key={key}>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={SOCIAL_LABELS[key]}
                                        className={styles.socialLink}
                                    >
                                        {SOCIAL_LABELS[key]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>

                <nav className={styles.linksColumn} aria-label="Footer navigation">
                    <span className={styles.columnTitle}>Explore</span>

                    <Link href={schoolHomeUrl}>Home</Link>
                    <Link href={`${schoolHomeUrl}#about`}>About</Link>
                    <Link href={`${schoolHomeUrl}#programmes`}>Programmes</Link>
                    <Link href={`${schoolHomeUrl}#admissions`}>Admissions</Link>
                    <Link href={`${schoolHomeUrl}#contact`}>Contact</Link>
                </nav>

                <div className={styles.contactColumn}>
                    <span className={styles.columnTitle}>Contact</span>

                    <p>{data.website.contact.address}</p>

                    <a href={`tel:${data.website.contact.phone}`}>
                        {data.website.contact.phone}
                    </a>

                    <a href={`mailto:${data.website.contact.email}`}>
                        {data.website.contact.email}
                    </a>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>
                    &copy; {new Date().getFullYear()} {data.school.name}. All rights
                    reserved.
                </p>

                <a
                    href="https://cyfamod.com"
                    target="_blank"
                    rel="noopener"
                    className={styles.credit}
                >
                    Website by Cyfamod Technologies
                </a>
            </div>
        </footer>
    );
}
