import Image from "next/image";
import Link from "next/link";

import type { ThemeProps } from "@/lib/contracts/website";

import styles from "./KidzaHero.module.css";

export function KidzaHero({ data }: ThemeProps) {
    const schoolHomeUrl = `/schools/${data.school.slug}`;

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

            <div className={styles.decorativeShapeOne} aria-hidden="true" />
            <div className={styles.decorativeShapeTwo} aria-hidden="true" />

            <div className={styles.inner}>
                <div className={styles.content}>
                    <p className={styles.eyebrow}>
                        {data.website.hero.eyebrow}
                    </p>

                    <h1 id="school-hero-heading" className={styles.title}>
                        {data.website.hero.title}
                    </h1>

                    <p className={styles.description}>
                        {data.website.hero.description}
                    </p>

                    <div className={styles.actions}>
                        <Link
                            href={`${schoolHomeUrl}#admissions`}
                            className={styles.primaryAction}
                        >
                            {data.website.hero.primaryActionLabel}
                        </Link>

                        <Link
                            href={`${schoolHomeUrl}#about`}
                            className={styles.secondaryAction}
                        >
                            {data.website.hero.secondaryActionLabel}
                        </Link>
                    </div>

                    <div className={styles.trustItems}>
                        <span>✓ Safe learning environment</span>
                        <span>✓ Experienced educators</span>
                    </div>
                </div>

                <aside className={styles.infoCard}>
                    <span className={styles.infoLabel}>Our commitment</span>

                    <strong>Every child deserves an opportunity to thrive.</strong>

                    <p>
                        Learning, creativity and strong character come together in one
                        caring school community.
                    </p>
                </aside>
            </div>
        </section>
    );
}
