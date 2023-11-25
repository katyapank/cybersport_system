"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import ITeam from "@/types/team/team.type";

export default function Page() {
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
        &:hover {
            background-color: #302c4d;
        }
    `;

    const TeamHeader = styled.div`
        padding: 0 24px;
        height: 76px;
        background: #443b76;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const HiddenField = styled.div`
        display: flex;
        width: 100%;
        max-width: 49%;
        overflow: hidden;
        @media (max-width: 1024px) {
            max-width: 46%;
            overflow: hidden;
        }
    `;
    const HiddenFields = styled.div`
        display: flex;
        width: 100%;
        max-width: 60%;
        overflow: hidden;
        @media (max-width: 1024px) {
            max-width: 50%;
            overflow: hidden;
        }
    `;

    const teams: ITeam[] = Array(10).fill({
        teamName: "Пупырышки",
        leader: "Pupa",
        teamWinCount: "1",
    });
    return (
        <Main>
            <Container>
                <h1>Команды</h1>
                <TeamsSection>
                    <Teams>
                        <TeamHeader>
                            <div
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    fontWeight: 700,
                                }}
                            >
                                <p>Название команды</p>
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
                                        fontWeight: 700,
                                    }}
                                >
                                    Капитан
                                </p>
                                <p
                                    style={{
                                        lineHeight: "76px",
                                        width: "100%",
                                        textAlign: "center",
                                        fontWeight: 700,
                                    }}
                                >
                                    Победы
                                </p>
                            </div>
                        </TeamHeader>
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
                                        <p>{item.teamName}</p>
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
                                            {item.teamWinCount}
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
