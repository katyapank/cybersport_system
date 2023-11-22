import React from "react";
import Image from "next/image";
import Link from "next/link";

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
                            marginTop: "15%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <h2
                            style={{
                                padding: "0 0 24px 0",
                            }}
                        >
                            Вход
                        </h2>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection: "column",
                                gap: "20px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        width: "200px",
                                        height: "200px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Image
                                        src="/default_logo.png"
                                        alt="team_logo"
                                        width={200}
                                        height={200}
                                    ></Image>
                                </div>
                                <input
                                    placeholder="Название команды"
                                    required
                                    style={{
                                        borderRadius: 5,
                                        height: "31px",
                                        padding: "0 10px",
                                        background: "#1A1A20",
                                    }}
                                ></input>
                                <input
                                    placeholder="Логин или email команды"
                                    required
                                    style={{
                                        borderRadius: 5,
                                        height: "31px",
                                        padding: "0 10px",
                                        background: "#1A1A20",
                                    }}
                                ></input>
                                <input
                                    placeholder="Email капитана"
                                    required
                                    style={{
                                        borderRadius: 5,
                                        height: "31px",
                                        padding: "0 10px",
                                        background: "#1A1A20",
                                    }}
                                ></input>
                                <textarea
                                    placeholder="Описание команды"
                                    style={{
                                        resize: "none",
                                        width: "100%",
                                        height: "100px",
                                        borderRadius: 5,
                                        padding: "6px 10px",
                                        background: "#1A1A20",
                                    }}
                                ></textarea>
                                <input
                                    placeholder="Придумайте пароль"
                                    type="password"
                                    required
                                    style={{
                                        borderRadius: 5,
                                        height: "31px",
                                        padding: "0 10px",
                                        background: "#1A1A20",
                                    }}
                                ></input>
                                <input
                                    placeholder="Повторите пароль"
                                    type="password"
                                    required
                                    style={{
                                        borderRadius: 5,
                                        height: "31px",
                                        padding: "0 10px",
                                        background: "#1A1A20",
                                    }}
                                ></input>

                                <Link
                                    href="/login"
                                    style={{
                                        width: "80%",
                                        color: "#8973FF",
                                        padding: "12px 16px",
                                        border: "2px solid #8973FF",
                                        cursor: "pointer",
                                        borderRadius: 10,
                                        textAlign: "center",
                                        marginTop: "3px",
                                    }}
                                >
                                    Зарегистрироваться
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
