"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import ITeam from "@/types/team.type";

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

    const TeamsSection = styled.section`
        margin-top: 24px;
        width: 100%;
    `;

    const Teams = styled.div`
        border-radius: 10px;
        overflow: hidden;
    `;

    const Team = styled.div<{ color: string }>`
        padding: 0 24px;
        height: 76px;
        background: ${(props) => props.color};
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const teams: ITeam[] = Array(10).fill({
        name: "Пупырышки",
        leader: "Pupa",
        win_num: "1",
    });
    return (
        <Main>
            <Container>
                <h1>Команды</h1>
                <TeamsSection>
                    <Teams>
                        {teams.map((item: ITeam, index: number) => (
                            <Link
                                href={`/teams/${index}?team=${JSON.stringify(
                                    item
                                )}`}
                                key={index}
                            >
                                <Team color={index % 2 ? "#15151A" : "#1A1A20"}>
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
                                            {item.leader}
                                        </p>
                                        <p
                                            style={{
                                                lineHeight: "76px",
                                                width: "100%",
                                                textAlign: "center",
                                            }}
                                        >
                                            {item.win_num}
                                        </p>
                                    </div>
                                </Team>
                            </Link>
                        ))}
                    </Teams>
                </TeamsSection>
            </Container>
        </Main>
    );
}
