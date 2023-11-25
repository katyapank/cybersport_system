"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import ITeam from "@/types/team.type";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const Main = styled.main`
    display: flex;
    justify-content: center;
`;

const Container = styled.main`
    width: 1270px;
    margin: 83px 24px 32px;
    min-height: 100lvh;
`;

const Grids = styled.div`
    display: flex;
    gap: 24px;
`;

const GridSection = styled.section`
    margin-top: 48px;
    width: 100%;
`;

const GridSectionH3 = styled.h3`
    padding: 0 0 24px 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const GridElements = styled.div`
    border-radius: 10px;
    overflow: hidden;
`;

const Element = styled.div<{ color: string }>`
    padding: 0 24px;
    height: 76px;
    background: ${(props) => props.color};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

interface Player {
    nickname: string;
    username: string;
    sex: boolean;
    bday: string;
    subject: string;
}

const team: ITeam = {
    name: "Пупырышки",
    leader: "gazmanoff",
    win_num: 10,
    description: "Описание",
    email: "team@yandex.ru",
    password: "12345678",
    captain_email: "captain@yandex.ru",
};

export default function Home() {
    const [players, setPlayers] = useState<Player[]>(
        Array(3).fill({
            nickname: "vovan",
            username: "Антонов Владимир Юрьевич",
            sex: true,
            bday: "12.12.12",
            subject: "Самарская область",
        })
    );

    const handleAddPlayer = () => {
        setPlayers([
            ...players,
            { nickname: "", username: "", sex: true, bday: "", subject: "" },
        ]);
    };
    const handleDeletePlayer = (index: number) => {
        let temp = players.slice();
        temp.splice(index, 1);
        setPlayers(temp);
    };
    const router: AppRouterInstance = useRouter();
    const IsAuth: boolean = true;
    const role: number = 0; //0 - team, 1 - judge, 2 - admin
    if (IsAuth && role == 2)
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
                        <div style={{ width: "60%" }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    color: "#ccc",
                                }}
                            >
                                <input
                                    placeholder="Название команды"
                                    maxLength={29}
                                    value={team.name}
                                    required
                                    style={{
                                        borderRadius: 5,
                                        height: "50px",
                                        padding: "20px",
                                        background: "#1A1A20",
                                    }}
                                ></input>
                                *
                            </div>
                            <div
                                style={{
                                    borderLeft: "3px solid #8973FF",
                                    paddingLeft: "10px",
                                    width: "100%",
                                    marginTop: "20px",
                                    color: "#ccc",
                                }}
                            >
                                <textarea
                                    placeholder="Описание команды (до 200 символов)"
                                    maxLength={200}
                                    value={team.description}
                                    style={{
                                        resize: "none",
                                        width: "100%",
                                        height: "90px",
                                        borderRadius: 5,
                                        padding: "15px",
                                        background: "#1A1A20",
                                    }}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "50px",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                color: "#ccc",
                            }}
                        >
                            <input
                                placeholder="Логин или email команды"
                                value={team.email}
                                required
                                style={{
                                    borderRadius: 5,
                                    height: "50px",
                                    padding: "20px",
                                    background: "#1A1A20",
                                }}
                            ></input>
                            *
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                color: "#ccc",
                            }}
                        >
                            <input
                                placeholder="Email капитана"
                                value={team.captain_email}
                                required
                                style={{
                                    borderRadius: 5,
                                    height: "50px",
                                    padding: "20px",
                                    background: "#1A1A20",
                                }}
                            ></input>
                            *
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                color: "#ccc",
                            }}
                        >
                            <input
                                placeholder="Придумайте пароль"
                                type="password"
                                value={team.password}
                                required
                                style={{
                                    borderRadius: 5,
                                    height: "50px",
                                    padding: "20px",
                                    background: "#1A1A20",
                                }}
                            ></input>
                            *
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                color: "#ccc",
                            }}
                        >
                            <input
                                placeholder="Повторите пароль"
                                type="password"
                                required
                                style={{
                                    borderRadius: 5,
                                    height: "50px",
                                    padding: "20px",
                                    background: "#1A1A20",
                                }}
                            ></input>
                            *
                        </div>
                    </div>
                    <Grids>
                        <GridSection>
                            <GridSectionH3>
                                Состав команды{" "}
                                <div
                                    onClick={handleAddPlayer}
                                    style={{
                                        width: "150px",
                                        color: "#8973FF",
                                        padding: "6px 8px",
                                        border: "2px solid #8973FF",
                                        cursor: "pointer",
                                        borderRadius: 10,
                                        textAlign: "center",
                                        marginTop: "3px",
                                    }}
                                >
                                    <p>Добавить участника</p>
                                </div>
                            </GridSectionH3>
                            <GridElements>
                                {players.map((_, index: number) => (
                                    <Element
                                        key={index}
                                        color={
                                            index % 2 ? "#15151A" : "#1A1A20"
                                        }
                                    >
                                        <input
                                            placeholder="Никнейм*"
                                            value={_.nickname}
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="ФИО*"
                                            value={_.username}
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="Пол*"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="Дата рождения*"
                                            value={_.bday}
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="Субъект РФ*"
                                            value={_.subject}
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                            }}
                                        ></input>
                                        <div
                                            onClick={() =>
                                                handleDeletePlayer(index)
                                            }
                                            style={{
                                                color: "#8973FF",
                                                cursor: "pointer",
                                                textAlign: "center",
                                            }}
                                        >
                                            <p>(удалить)</p>
                                        </div>
                                    </Element>
                                ))}
                            </GridElements>
                        </GridSection>
                    </Grids>
                </Container>
            </Main>
        );
    else if (IsAuth && role == 0) return router.push("/profile");
    else if (IsAuth && role == 1) return router.push("/judge");
    else router.push("/login");
}
