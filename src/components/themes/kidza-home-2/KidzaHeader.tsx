"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";

import type { ThemeProps } from "@/lib/contracts/website";

import styles from "./KidzaHeader.module.css";

export function KidzaHeader({ data }: ThemeProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const schoolHomeUrl = `/schools/${data.school.slug}`;

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header
            className={styles.header}
            style={
                {
                    "--header-primary": data.website.primaryColor,
                    "--header-secondary": data.website.secondaryColor,
                } as CSSProperties
            }
        >
            <div className={styles.utilityBar}>
                <div className={styles.utilityInner}>
                    <p>Welcome to {data.school.name}</p>

                    <p>A caring place to learn and grow</p>
                </div>
            </div>

            <div className={styles.navigation}>
                <div className={styles.navigationInner}>
                    <Link
                        href={schoolHomeUrl}
                        className={styles.brand}
                        onClick={closeMenu}
                    >
                        {data.school.logoUrl ? (
                            // A regular image is temporary until Laravel storage
                            // and Next.js remote image hosts are configured.
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

                        <span className={styles.brandText}>
                            <strong>{data.school.name}</strong>
                            <small>Learn • Grow • Succeed</small>
                        </span>
                    </Link>

                    <nav
                        id="kidza-public-navigation"
                        className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""
                            }`}
                        aria-label="School website navigation"
                    >
                        <Link href={schoolHomeUrl} onClick={closeMenu}>
                            Home
                        </Link>

                        <Link href={`${schoolHomeUrl}#about`} onClick={closeMenu}>
                            About
                        </Link>

                        <Link href={`${schoolHomeUrl}#programmes`} onClick={closeMenu}>
                            Programmes
                        </Link>

                        <Link href={`${schoolHomeUrl}#admissions`} onClick={closeMenu}>
                            Admissions
                        </Link>

                        <Link href={`${schoolHomeUrl}#contact`} onClick={closeMenu}>
                            Contact
                        </Link>

                        {data.school.studentPortalUrl ? (
                            <a
                                href={data.school.studentPortalUrl}
                                className={styles.mobilePortalButton}
                                onClick={closeMenu}
                            >
                                Student Portal
                            </a>
                        ) : null}
                    </nav>

                    <div className={styles.actions}>
                        {data.school.studentPortalUrl ? (
                            <a
                                href={data.school.studentPortalUrl}
                                className={styles.portalButton}
                            >
                                Student Portal
                            </a>
                        ) : null}

                        <button
                            type="button"
                            className={styles.menuButton}
                            aria-label={
                                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
                            }
                            aria-expanded={isMenuOpen}
                            aria-controls="kidza-public-navigation"
                            onClick={() => {
                                setIsMenuOpen((currentState) => !currentState);
                            }}
                        >
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
