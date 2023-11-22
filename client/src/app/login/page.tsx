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
                            borderLeft: "3px solid #8973FF",
                            paddingLeft: "10px",
                            width: "100%",
                            height: "36px",
                            marginTop: "100px",
                            color: "#ccc",
                        }}
                    >
                        <p>
                            Добро пожаловать на esport Samara region!
                            <br />
                            Авторизуйтесь, чтобы иметь возможность
                            регистрировать команду на турниры.
                        </p>
                    </div>
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
                                gap: "10px",
                            }}
                        >
                            <input
                                placeholder="Логин"
                                style={{
                                    borderRadius: 5,
                                    height: "31px",
                                    padding: "0 10px",
                                    background: "#1A1A20",
                                }}
                            ></input>
                            <input
                                placeholder="Пароль"
                                style={{
                                    borderRadius: 5,
                                    height: "31px",
                                    padding: "0 10px",
                                    background: "#1A1A20",
                                }}
                            ></input>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
