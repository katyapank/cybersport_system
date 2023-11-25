"use client";

import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";
import ITeam from "@/types/team/team.type";
import {useAuthMyTeamMutation} from "@/redux/team/project.api";
import {isError} from "util";
import IPlayer from "@/types/player.type";

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


export default function Home() {
    const [players, setPlayers] = useState<IPlayer[]>([]);

    const handleAddPlayer = () => {
        setPlayers([
            ...players,
            {
                userLastName: '',
                userFirstName: '',
                userPatronymic: '',
                userSex: false,
                userNickname: '',
                userRole: '',
                userBDay: '',
                userContact: [''],
                userGto: ''
            },
        ]);
    };
    const handleDeletePlayer = (index: number): void => {
        let temp: IPlayer[] = players.slice();
        temp.splice(index, 1);
        setPlayers(temp);
    };
    const router: AppRouterInstance = useRouter();

    const [authMyTeam, {data: team, isLoading, isError}] = useAuthMyTeamMutation()

    useEffect((): void => {
        if (window.localStorage.getItem('teamToken'))
            authMyTeam(window.localStorage.getItem('teamToken') as string)
    }, []);

    useEffect((): void => {
        team && setPlayers(team.teamUser as IPlayer[])
    }, [team]);

    if (!window.localStorage.getItem('teamToken') || isError) router.push("/login");

        if(team) {
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
                                        value={team.teamName}
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
                                    value={team.teamDescription}
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
                                    placeholder="Логин"
                                    value={team.teamName}
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
                                    placeholder="Субъект РФ"
                                    value={team.teamSubject}
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
                                    value={team.teamPassword}
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
                                    {players.map((_: IPlayer, index: number) => (
                                        <Element
                                            key={index}
                                            color={
                                                index % 2 ? "#15151A" : "#1A1A20"
                                            }
                                        >
                                            <input
                                                placeholder="Никнейм*"
                                                defaultValue={_.userNickname}
                                                required
                                                style={{
                                                    borderRadius: 5,
                                                    height: "50px",
                                                }}
                                            ></input>
                                            <input
                                                placeholder="ФИО*"
                                                defaultValue={_.userLastName ? `${_.userLastName} ${_.userFirstName} ${_.userPatronymic}` : ''}
                                                required
                                                style={{
                                                    borderRadius: 5,
                                                    height: "50px",
                                                }}
                                            ></input>
                                            <input
                                                placeholder="Пол*"
                                                defaultValue={_.userSex ? 'ж' : 'м'}
                                                required
                                                style={{
                                                    borderRadius: 5,
                                                    height: "50px",
                                                }}
                                            ></input>
                                            <input
                                                placeholder="Дата рождения*"
                                                defaultValue={_.userBDay}
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
                                    onClick={() => window.localStorage.removeItem('teamToken')}
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
        }
}
