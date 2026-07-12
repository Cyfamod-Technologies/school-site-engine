import type { CSSProperties } from "react";

import type { ThemeProps } from "@/lib/contracts/website";

import styles from "./KidzaContact3.module.css";

export function KidzaContact3({ data }: ThemeProps) {
    const contact = data.website.contact;

    return (
        <section
            id="contact"
            className={styles.section}
            style={
                {
                    "--theme-primary": data.website.branding.primaryColor,
                    "--theme-secondary": data.website.branding.secondaryColor,
                } as CSSProperties
            }
        >
            <div className={styles.inner}>
                <div className={styles.card}>
                    <div className={styles.detailsColumn}>
                        <span className={styles.eyebrow}>Contact</span>
                        <h2 className={styles.title}>Get In Touch</h2>

                        <dl className={styles.detailList}>
                            <div className={styles.detailRow}>
                                <dt>Address</dt>
                                <dd>{contact.address}</dd>
                            </div>

                            <div className={styles.detailRow}>
                                <dt>Phone</dt>
                                <dd>
                                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                                </dd>
                            </div>

                            <div className={styles.detailRow}>
                                <dt>Email</dt>
                                <dd>
                                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div className={styles.mapColumn}>
                        {contact.mapUrl ? (
                            <iframe
                                src={contact.mapUrl}
                                className={styles.map}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Map to ${data.school.name}`}
                            />
                        ) : (
                            <div className={styles.mapFallback} aria-hidden="true" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
