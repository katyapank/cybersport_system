"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import IJudge from "@/types/judge.type";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";

const Main = styled.main`
    display: flex;
    justify-content: center;
`;

const Container = styled.main`
    width: 1270px;
    margin: 83px 24px 32px;
    min-height: 100lvh;
`;

const judge: IJudge = {
    name: "Антонов Антон Антонович",
    nickname: "antonn1980",
    post: "Главный секретарь",
    rank: "1 разряд",
    subject: "Самарская область",
    bday: "12.12.1980",
    contact: "88900000971",
    login: "login@yandex.ru",
    password: "12345678",
};

export default function Home() {
    const router: AppRouterInstance = useRouter();
    const IsAuth: boolean = true;
    const role: number = 1; //0 - team, 1 - judge, 2 - admin
    if (IsAuth && role == 1)
        return (
            <Main>
                <Container>
                    <div
                        style={{
                            display: "flex",
                            gap: "70px",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "250px",
                                height: "250px",
                                borderRadius: "50%",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src="/default_logo.png"
                                alt="team_logo"
                                width={250}
                                height={250}
                            ></Image>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                color: "#ccc",
                            }}
                        >
                            <input
                                placeholder="Имя"
                                maxLength={29}
                                value={judge.name}
                                required
                                style={{
                                    color: "#ccc",
                                    borderRadius: 5,
                                    height: "50px",
                                    padding: "20px",
                                    background: "#1A1A20",
                                }}
                            ></input>
                            {judge.post} ({judge.rank})
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ marginTop: "40px" }}>
                            <h2>Контактная информация</h2>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    marginTop: "20px",
                                    gap: "40px",
                                }}
                            >
                                <input
                                    placeholder="Логин"
                                    value={judge.login}
                                    required
                                    style={{
                                        borderRadius: 5,
                                        height: "50px",
                                        padding: "20px",
                                        background: "#1A1A20",
                                        color: "#ccc",
                                    }}
                                ></input>

                                <input
                                    placeholder="Контакты"
                                    value={judge.contact}
                                    required
                                    style={{
                                        color: "#ccc",
                                        borderRadius: 5,
                                        height: "50px",
                                        padding: "20px",
                                        background: "#1A1A20",
                                    }}
                                ></input>
                            </div>
                        </div>
                        <div style={{ marginTop: "40px" }}>
                            <h2>Данные аккаунта</h2>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    marginTop: "20px",
                                    gap: "40px",
                                }}
                            >
                                <input
                                    placeholder="Придумайте пароль"
                                    type="password"
                                    value={judge.password}
                                    required
                                    style={{
                                        color: "#ccc",
                                        borderRadius: 5,
                                        height: "50px",
                                        padding: "20px",
                                        background: "#1A1A20",
                                    }}
                                ></input>

                                <input
                                    placeholder="Повторите пароль"
                                    type="password"
                                    required
                                    style={{
                                        borderRadius: 5,
                                        color: "#ccc",
                                        height: "50px",
                                        padding: "20px",
                                        background: "#1A1A20",
                                    }}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "40px" }}>
                        <h2>Личная информация</h2>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "20px",
                                gap: "40px",
                            }}
                        >
                            <input
                                placeholder="Дата рождения"
                                value={judge.bday}
                                required
                                style={{
                                    borderRadius: 5,
                                    color: "#ccc",
                                    height: "50px",
                                    padding: "20px",
                                    background: "#1A1A20",
                                }}
                            ></input>

                            <input
                                placeholder="Субъект РФ"
                                value={judge.subject}
                                required
                                style={{
                                    borderRadius: 5,
                                    height: "50px",
                                    padding: "20px",
                                    background: "#1A1A20",
                                    color: "#ccc",
                                }}
                            ></input>
                        </div>
                    </div>
                    <div
                        style={{
                            marginTop: "50px",
                            display: "flex",
                            justifyContent: "center",
                            gap: "40px",
                        }}
                    >
                        <div
                            style={{
                                marginTop: "50px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Link
                                href="/profile"
                                style={{
                                    color: "#8973FF",
                                    padding: "12px 16px",
                                    border: "2px solid #8973FF",
                                    cursor: "pointer",
                                    borderRadius: 10,
                                    textAlign: "center",
                                }}
                            >
                                Применить изменения
                            </Link>
                        </div>
                        <div
                            style={{
                                marginTop: "50px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Link
                                href="/login"
                                style={{
                                    color: "#FF6633",
                                    padding: "12px 16px",
                                    border: "2px solid #FF6633",
                                    cursor: "pointer",
                                    borderRadius: 10,
                                    textAlign: "center",
                                }}
                            >
                                Выйти из аккаунта
                            </Link>
                        </div>
                    </div>
                </Container>
            </Main>
        );
    else if (IsAuth && role == 0) return router.push("/profile");
    else if (IsAuth && role == 2) return router.push("/profile/admin");
    else router.push("/login");
}