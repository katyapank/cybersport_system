"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import ITournament from "@/types/tournament.type";

export default function Page() {
    const Main = styled.main`
        display: flex;
        justify-content: center;
    `;

    const Container = styled.main`
        width: 1270px;
        margin: 83px 24px 32px;
        min-height: 100lvh;
    `;

    const TournamentsSection = styled.section`
        margin-top: 24px;
        width: 100%;
    `;

    const Tournaments = styled.div`
        border-radius: 10px;
        overflow: hidden;
    `;

    const Tournament = styled.div<{ color: string }>`
        padding: 0 24px;
        height: 76px;
        background: ${(props) => props.color};
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const tournaments: ITournament[] = Array(10).fill({
        name: "Кубок Губернатора",
        date: "13 - 26 ноя 2023",
        prizeFund: "Подарочные карты в DNS",
    });
    return (
        <Main>
            <Container>
                <h1>Киберспортивные турниры</h1>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "center",
                        marginTop: "25px",
                        justifyContent: "space-between",
                    }}
                >
                    <select
                        id="option"
                        name="option"
                        style={{
                            border: "2px solid #ccc",
                            borderRadius: "5px",
                            height: "30px",
                            width: "80px",
                            paddingLeft: "8px",
                        }}
                    >
                        <option value="all" style={{ backgroundColor: "#000" }}>
                            Все
                        </option>
                        <option
                            value="personal"
                            style={{ backgroundColor: "#000" }}
                        >
                            Мои
                        </option>
                    </select>
                    <Link
                        href="tournaments/new"
                        style={{
                            width: "150px",
                            color: "#8973FF",
                            padding: "6px 8px",
                            border: "2px solid #8973FF",
                            cursor: "pointer",
                            borderRadius: 10,
                            textAlign: "center",
                        }}
                    >
                        <p>Новый турнир</p>
                    </Link>
                </div>
                <TournamentsSection>
                    <Tournaments>
                        {tournaments.map((item: ITournament, index: number) => (
                            <Link
                                href={`/tournaments/${index}?tournament=${JSON.stringify(
                                    item
                                )}`}
                                key={index}
                            >
                                <Tournament
                                    color={index % 2 ? "#15151A" : "#1A1A20"}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            width: "100%",
                                        }}
                                    >
                                        <p>{item.name}</p>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            width: "100%",
                                        }}
                                    >
                                        <p
                                            style={{
                                                lineHeight: "76px",
                                                width: "100%",
                                                textAlign: "center",
                                            }}
                                        >
                                            13 - 26 ноя 2023
                                        </p>
                                        <p
                                            style={{
                                                lineHeight: "76px",
                                                width: "100%",
                                                textAlign: "center",
                                            }}
                                        >
                                            Подарочные карты в DNS
                                        </p>
                                    </div>
                                </Tournament>
                            </Link>
                        ))}
                    </Tournaments>
                </TournamentsSection>
            </Container>
        </Main>
    );
}
