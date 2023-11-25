"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
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

const NewElement = styled.div<{ color: string }>`
    padding: 0 24px;
    height: 145px;
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

export default function Home() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [new_players, setNewPlayers] = useState<Player[]>([]);

    const handleAddPlayer = () => {
        setPlayers([
            ...players,
            { nickname: "", username: "", sex: true, bday: "", subject: "" },
        ]);
    };

    const handleAddNewPlayer = () => {
        setNewPlayers([
            ...new_players,
            { nickname: "", username: "", sex: true, bday: "", subject: "" },
        ]);
    };

    const handleDeletePlayer = (index: number) => {
        let temp = players.slice();
        temp.splice(index, 1);
        setPlayers(temp);
    };

    const handleDeleteNewPlayer = (index: number) => {
        let temp = new_players.slice();
        temp.splice(index, 1);
        setNewPlayers(temp);
    };

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
                            width: "60%",
                            gap: "20px",
                            display: "flex",
                            flexDirection: "column",
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
                                placeholder="Название турнира"
                                maxLength={29}
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
                                placeholder="Даты проведения"
                                maxLength={29}
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
                                placeholder="Дисциплина"
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
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "50px",
                        gap: "30px",
                    }}
                >
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
                            placeholder="Описание турнира (до 200 символов)"
                            maxLength={200}
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
                    <div
                        style={{
                            paddingLeft: "10px",
                            width: "100%",
                            marginTop: "20px",
                            color: "#ccc",
                        }}
                    >
                        <textarea
                            placeholder="Текстовое содержание (до 2000 символов)"
                            maxLength={200}
                            style={{
                                resize: "none",
                                width: "100%",
                                height: "500px",
                                borderRadius: 5,
                                padding: "15px",
                                background: "#1A1A20",
                            }}
                        ></textarea>
                    </div>
                </div>
                <Grids>
                    <GridSection>
                        <GridSectionH3>
                            Судейская бригада{" "}
                            <div style={{ display: "flex", gap: "20px" }}>
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
                                    <p>Добавить судью</p>
                                </div>
                                <div
                                    onClick={handleAddNewPlayer}
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
                                    <p>Новый судья</p>
                                </div>
                            </div>
                        </GridSectionH3>
                        <GridElements>
                            {players.map((_, index: number) => (
                                <Element
                                    key={index}
                                    color={index % 2 ? "#15151A" : "#1A1A20"}
                                >
                                    <input
                                        placeholder="id*"
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
                            {new_players.map((_, index: number) => (
                                <NewElement
                                    key={index}
                                    color={index % 2 ? "#2c2848" : "#302c4d"}
                                >
                                    <div>
                                        <input
                                            placeholder="id*"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="Никнейм*"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="ФИО*"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="Должность*"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="Категория*"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="Субъект РФ*"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="Дата рождения*"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="Контакты*"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="Пароль*"
                                            type="password"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                            }}
                                        ></input>
                                    </div>

                                    <div
                                        onClick={() =>
                                            handleDeleteNewPlayer(index)
                                        }
                                        style={{
                                            color: "#8973FF",
                                            cursor: "pointer",
                                            textAlign: "center",
                                        }}
                                    >
                                        <p>(удалить)</p>
                                    </div>
                                </NewElement>
                            ))}
                        </GridElements>
                    </GridSection>
                </Grids>


                <div
                    style={{
                        marginTop: "50px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Link
                        href="/tournaments"
                        style={{
                            color: "#8973FF",
                            padding: "12px 16px",
                            border: "2px solid #8973FF",
                            cursor: "pointer",
                            borderRadius: 10,
                            textAlign: "center",
                        }}
                    >
                        Сохранить
                    </Link>
                </div>
            </Container>
        </Main>
    );
}
