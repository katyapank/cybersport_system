"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import ITeam from "@/types/team.type";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";

const Main = styled.main`
    display: flex;
    justify-content: center;
`;

const Container = styled.main`
    margin: 83px 24px 32px;
    width: 1270px;
    min-height: 100lvh;
    display: flex;
    flex-direction: column;
    @media (max-width: 1024px) {
        margin: 80px 10px 15px 10px;
    }
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
    @media (max-width: 1024px) {
        height: 152px;
    }
`;
const TopInfo = styled.div`
    display: flex;
    gap: 70px;
    align-items: center;
    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 20px;
    }
`;
const AdaptiveTopInfo = styled.div`
    width: 60%;
    @media (max-width: 1024px) {
        width: 90%;
    }
`;
const UserPhoto = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    @media (max-width: 1024px) {
        width: 150px;
        height: 150px;
    }
`;

const AdaptiveInput = styled.input`
    border-radius: 5px;
    height: 50px;
    padding: 20px;
    background: #1a1a20;
    @media (max-width: 1024px) {
        padding: 10px;
        height: 25px;
    }
`;
const AdaptiveTableInput = styled.input`
    borderradius: 5;
    height: 50px;
    @media (max-width: 1024px) {
        font-size: 12px;
        height: 25px;
    }
`;

const AdaptiveTable = styled.div`
    // @media (max-width: 1024px) {
    //     display: flex;
    //     flex-direction: column;
    // }
`;

const AdditionalInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: space-between;
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
        margin-top: 15px;
    }
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
    if (IsAuth && role == 0)
        return (
            <Main>
                <Container>
                    <TopInfo>
                        <UserPhoto>
                            <Image
                                src="/default_logo.png"
                                alt="team_logo"
                                width={250}
                                height={250}
                            ></Image>
                        </UserPhoto>
                        <AdaptiveTopInfo>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    color: "#ccc",
                                }}
                            >
                                <AdaptiveInput
                                    placeholder="Название команды"
                                    maxLength={29}
                                    value={team.name}
                                    required
                                ></AdaptiveInput>
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
                        </AdaptiveTopInfo>
                    </TopInfo>
                    <AdditionalInfo>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                color: "#ccc",
                            }}
                        >
                            <AdaptiveInput
                                placeholder="Логин или email команды"
                                value={team.email}
                                required
                            ></AdaptiveInput>
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
                            <AdaptiveInput
                                placeholder="Email капитана"
                                value={team.captain_email}
                                required
                            ></AdaptiveInput>
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
                            <AdaptiveInput
                                placeholder="Придумайте пароль"
                                type="password"
                                value={team.password}
                                required
                            ></AdaptiveInput>
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
                            <AdaptiveInput
                                placeholder="Повторите пароль"
                                type="password"
                                required
                            ></AdaptiveInput>
                            *
                        </div>
                    </AdditionalInfo>
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
                                        <AdaptiveTable>
                                            <AdaptiveTableInput
                                                placeholder="Никнейм*"
                                                value={_.nickname}
                                                required
                                            ></AdaptiveTableInput>
                                            <AdaptiveTableInput
                                                placeholder="ФИО*"
                                                value={_.username}
                                                required
                                            ></AdaptiveTableInput>
                                            <AdaptiveTableInput
                                                placeholder="Пол*"
                                                required
                                            ></AdaptiveTableInput>
                                            <AdaptiveTableInput
                                                placeholder="Дата рождения*"
                                                value={_.bday}
                                                required
                                            ></AdaptiveTableInput>
                                            <AdaptiveTableInput
                                                placeholder="Субъект РФ*"
                                                value={_.subject}
                                                required
                                            ></AdaptiveTableInput>
                                        </AdaptiveTable>
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
    else if (IsAuth && role == 1) return router.push("/profile/judge");
    else if (IsAuth && role == 2) return router.push("/profile/admin");
    else router.push("/login");
}
