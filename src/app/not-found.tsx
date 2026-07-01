import Link from "next/link";

import styles from "./not-found.module.css";

export default function NotFoundPage() {
  return (
    <main className={styles.page}>
      <div className={styles.decorationOne} aria-hidden="true" />
      <div className={styles.decorationTwo} aria-hidden="true" />

      <section className={styles.card}>
        <div className={styles.illustration} aria-hidden="true">
          <div className={styles.schoolRoof} />

          <div className={styles.schoolBuilding}>
            <span className={styles.window} />
            <span className={styles.door} />
            <span className={styles.window} />
          </div>
        </div>

        <p className={styles.status}>404 · Website unavailable</p>

        <h1 className={styles.title}>
          This school website cannot be found
        </h1>

        <p className={styles.description}>
          The website may still be in draft, may have been unpublished, or
          the address you entered may be incorrect.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primaryAction}>
            Return to homepage
          </Link>

          <p className={styles.addressHint}>
            Please confirm that the school website address is correct.
          </p>
        </div>

        <div className={styles.help}>
          <span className={styles.helpIcon} aria-hidden="true">
            i
          </span>

          <p>
            School administrators can preview draft websites securely from
            the Website Management area.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        Powered by the School Website Management platform
      </footer>
    </main>
  );
}
