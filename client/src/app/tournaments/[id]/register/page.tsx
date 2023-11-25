"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import IPlayer from "@/types/player.type";
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

export default function Home() {
    const players = Array(3).fill({
        nickname: "vovan",
        username: "Антонов Владимир Юрьевич",
        sex: true,
        bday: "12.12.12",
    });
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
                            <h2>Название турнира</h2>
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
                            Описание турнира описание турнира описание турнира
                            Описание турнира описание турнира описание
                            турнираОписание турнира описание турнира описание
                            турнираОписание турнира описание турнира описание
                            турнираОписание турнира описание турнира описание
                            турнираОписание турнира описание турнира описание
                            турнираОписание турнира описание турнира описание
                            турнира
                        </div>
                    </div>
                </div>
                <Grids>
                    <GridSection>
                        <GridSectionH3>Состав команды</GridSectionH3>
                        <GridElements>
                            {players.map((player, index: number) => (
                                <Element
                                    key={index}
                                    color={index % 2 ? "#15151A" : "#1A1A20"}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            width: "100%",
                                        }}
                                    >
                                        <div>{player.nickname}</div>
                                        <div>{player.username}</div>
                                        <div>{player.bday}</div>
                                        <div>{player.sex}</div>
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
                        Зарегистрироваться
                    </Link>
                </div>
            </Container>
        </Main>
    );
}
