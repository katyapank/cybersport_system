"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    interface IHeaderItem {
        name: string;
        patch: string;
    }

    const headerItems: IHeaderItem[] = [
        { name: "Матчи", patch: "/matches" },
        { name: "Турниры", patch: "/tournaments" },
        { name: "Команды", patch: "/teams" },
        { name: "Игроки", patch: "/players" },
    ];

    return (
        <div>
            <header
                style={{
                    height: 64,
                    padding: "0 24px",
                    position: "fixed",
                    display: "flex",
                    background: "#000",
                    width: "100vw",
                }}
            >
                <Image
                    src="/Logo.svg"
                    alt="logo"
                    width={160}
                    height={44}
                    style={{ marginRight: 25 }}
                />
                {headerItems.map((item: IHeaderItem) => (
                    <Link
                        href={item.patch}
                        key={item.name}
                        style={{
                            padding: "0 25px",
                            lineHeight: "64px",
                            color: "#ccc",
                        }}
                    >
                        {item.name}
                    </Link>
                ))}
            </header>
            <main style={{ display: "flex", justifyContent: "center" }}>
                <div
                    style={{
                        width: 1270,
                        margin: "0 24px 32px",
                        minHeight: "100lvh",
                    }}
                >
                    <div
                        style={{
                            background:
                                "linear-gradient(180deg, #000 33.33%, #5C4EA4 100%)",
                            width: "100%",
                            aspectRatio: 82 / 33,
                            marginTop: -64,
                            borderRadius: 10,
                        }}
                    ></div>

                    <div style={{ display: "flex", gap: 24 }}>
                        <section style={{ marginTop: 24, width: "100%" }}>
                            <h3 style={{ padding: "0 0 24px 44px" }}>
                                Последние турниры:
                            </h3>
                            <div
                                style={{ borderRadius: 10, overflow: "hidden" }}
                            >
                                <div
                                    style={{
                                        padding: "0 24px",
                                        height: 76,
                                        background: "#1A1A20",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <p>Amar x Eli Hybrid Lan</p>
                                    <p>19.11.23 - 20.11.23</p>
                                </div>
                                <div
                                    style={{
                                        padding: "0 24px",
                                        height: 76,
                                        background: "#15151A",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <p>Amar x Eli Hybrid Lan</p>
                                    <p>19.11.23 - 20.11.23</p>
                                </div>
                                <div
                                    style={{
                                        padding: "0 24px",
                                        height: 76,
                                        background: "#1A1A20",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <p>Amar x Eli Hybrid Lan</p>
                                    <p>19.11.23 - 20.11.23</p>
                                </div>
                            </div>
                        </section>

                        <section style={{ marginTop: 24, width: "100%" }}>
                            <h3 style={{ padding: "0 0 24px 44px" }}>
                                Предстоящие турниры:
                            </h3>
                            <div
                                style={{ borderRadius: 10, overflow: "hidden" }}
                            >
                                <div
                                    style={{
                                        padding: "0 24px",
                                        height: 76,
                                        background: "#1A1A20",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <p>Amar x Eli Hybrid Lan</p>
                                    <p>19.11.23 - 20.11.23</p>
                                </div>
                                <div
                                    style={{
                                        padding: "0 24px",
                                        height: 76,
                                        background: "#15151A",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <p>Amar x Eli Hybrid Lan</p>
                                    <p>19.11.23 - 20.11.23</p>
                                </div>
                                <div
                                    style={{
                                        padding: "0 24px",
                                        height: 76,
                                        background: "#1A1A20",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <p>Amar x Eli Hybrid Lan</p>
                                    <p>19.11.23 - 20.11.23</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
