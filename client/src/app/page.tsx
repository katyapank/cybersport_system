"use client";

import React from "react";

export default function Home() {
    return (
        <div>
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
