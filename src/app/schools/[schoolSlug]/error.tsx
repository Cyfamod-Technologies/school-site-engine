"use client";

import { useEffect } from "react";

interface SchoolWebsiteErrorProps {
    error: Error & {
        digest?: string;
    };

    reset: () => void;
}

export default function SchoolWebsiteError({
    error,
    reset,
}: SchoolWebsiteErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main
            style={{
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",
                padding: "2rem",
                background: "#fffaf3",
                color: "#172033",
                fontFamily: "Arial, Helvetica, sans-serif",
            }}
        >
            <section
                style={{
                    width: "min(100%, 560px)",
                    padding: "2rem",
                    border: "1px solid #e2e8f0",
                    borderRadius: "1.5rem",
                    background: "#ffffff",
                    boxShadow: "0 20px 50px rgba(15, 23, 42, 0.1)",
                    textAlign: "center",
                }}
            >
                <p
                    style={{
                        margin: 0,
                        fontSize: "0.78rem",
                        fontWeight: 900,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#64748b",
                    }}
                >
                    Service temporarily unavailable
                </p>

                <h1
                    style={{
                        margin: "1rem 0 0",
                        fontSize: "clamp(2rem, 7vw, 3.5rem)",
                        lineHeight: 1,
                    }}
                >
                    We could not load this school website
                </h1>

                <p
                    style={{
                        margin: "1.25rem 0 0",
                        color: "#64748b",
                        lineHeight: 1.7,
                    }}
                >
                    The school website service may be temporarily unavailable.
                    Please try again.
                </p>

                <button
                    type="button"
                    onClick={reset}
                    style={{
                        marginTop: "1.5rem",
                        minHeight: "48px",
                        padding: "0 1.25rem",
                        border: 0,
                        borderRadius: "999px",
                        background: "#172033",
                        color: "#ffffff",
                        fontWeight: 800,
                        cursor: "pointer",
                    }}
                >
                    Try again
                </button>
            </section>
        </main>
    );
}
