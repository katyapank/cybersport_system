"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import ITournament from "@/types/tournament.type";
import {useGetAllTournamentsQuery} from "@/redux/tournament/tournament.api";

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
      width: 100%;
    `;

    const Tournaments = styled.div`
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      overflow: hidden;
    `;

    const Tournament = styled.div<{ color: string }>`
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

    const TeamsSection = styled.section`
      margin-top: 24px;
      width: 100%;
    `;

    const Teams = styled.div`
      border-radius: 10px;
      overflow: hidden;
    `;

    const TeamHeader = styled.div`
      padding: 0 24px;
      height: 76px;
      background: #443b76;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;

    // const tournaments: ITournament[] = Array(10).fill({
    //     name: "Кубок Губернатора",
    //     date: "13 - 26 ноя 2023",
    //     prizeFund: "Подарочные карты в DNS",
    // });

    const {data: tournaments} = useGetAllTournamentsQuery(null)

    if (tournaments) {
        return (
            <Main>
                <Container>
                    <h1>Киберспортивные турниры</h1>
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
                                    <p>Название турнира</p>
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
                                        Начало турнира
                                    </p>
                                    <p
                                        style={{
                                            lineHeight: "76px",
                                            width: "100%",
                                            textAlign: "center",
                                            fontWeight: 700,
                                        }}
                                    >
                                        Игра
                                    </p>
                                </div>
                            </TeamHeader>
                            {/*<select*/}
                            {/*    id="option"*/}
                            {/*    name="option"*/}
                            {/*    style={{*/}
                            {/*        border: "2px solid #ccc",*/}
                            {/*        borderRadius: "5px",*/}
                            {/*        height: "30px",*/}
                            {/*        width: "80px",*/}
                            {/*        paddingLeft: "8px",*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    <option value="all" style={{ backgroundColor: "#000" }}>*/}
                            {/*        Все*/}
                            {/*    </option>*/}
                            {/*    <option*/}
                            {/*        value="personal"*/}
                            {/*        style={{ backgroundColor: "#000" }}*/}
                            {/*    >*/}
                            {/*        Мои*/}
                            {/*    </option>*/}
                            {/*</select>*/}
                            {/*<Link*/}
                            {/*    href="tournaments/new"*/}
                            {/*    style={{*/}
                            {/*        width: "150px",*/}
                            {/*        color: "#8973FF",*/}
                            {/*        padding: "6px 8px",*/}
                            {/*        border: "2px solid #8973FF",*/}
                            {/*        cursor: "pointer",*/}
                            {/*        borderRadius: 10,*/}
                            {/*        textAlign: "center",*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    <p>Новый турнир</p>*/}
                            {/*</Link>*/}
                            <TournamentsSection>
                                <Tournaments>
                                    {tournaments.map((item: any, index: number) => (
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
                                                    <p>{item?.tournamentName}</p>
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
                                                        {item?.tournamentStartDay}
                                                    </p>
                                                    <p
                                                        style={{
                                                            lineHeight: "76px",
                                                            width: "100%",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {item?.tournamentGame?.gameName}
                                                    </p>
                                                </div>
                                            </Tournament>
                                        </Link>
                                    ))}
                                </Tournaments>
                            </TournamentsSection>
                        </Teams>
                    </TeamsSection>
                </Container>
            </Main>
        )
    }
}
