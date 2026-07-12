import Image from "next/image";
import Link from "next/link";

import type { ThemeProps } from "@/lib/contracts/website";

import styles from "./KidzaHero3.module.css";

export function KidzaHero3({ data }: ThemeProps) {
    return (
        <section
            className={styles.hero}
            aria-labelledby="school-hero-heading"
        >
            {data.website.hero.imageUrl ? (
                <Image
                    src={data.website.hero.imageUrl}
                    alt={`Students and learning activities at ${data.school.name}`}
                    fill
                    priority
                    sizes="100vw"
                    className={styles.backgroundImage}
                />
            ) : null}

            <div className={styles.overlay} aria-hidden="true" />

            <div className={styles.inner}>
                <p className={styles.eyebrow}>{data.website.hero.eyebrow}</p>

                <h1 id="school-hero-heading" className={styles.title}>
                    {data.website.hero.title}
                </h1>

                <p className={styles.description}>
                    {data.website.hero.description}
                </p>

                <div className={styles.actions}>
                    <Link
                        href={data.website.hero.primaryAction.href}
                        className={styles.primaryAction}
                    >
                        {data.website.hero.primaryAction.label}
                    </Link>

                    <Link
                        href={data.website.hero.secondaryAction.href}
                        className={styles.secondaryAction}
                    >
                        {data.website.hero.secondaryAction.label}
                    </Link>
                </div>

                <div className={styles.trustItems}>
                    {data.website.hero.trustItems.map((item) => (
                        <span key={item}>✓ {item}</span>
                    ))}
                </div>

                <div className={styles.infoCard}>
                    <span className={styles.infoLabel}>
                        {data.website.hero.infoCard.label}
                    </span>

                    <strong>{data.website.hero.infoCard.title}</strong>

                    <p>{data.website.hero.infoCard.description}</p>
                </div>
            </div>
        </section>
    );
}
