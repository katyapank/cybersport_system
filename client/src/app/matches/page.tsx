"use client";

import React, {useEffect} from "react";
import styled from "styled-components";
import IMatch from "@/types/match.type";
import Image from "next/image";
import {useGetAllMatchesQuery} from "@/redux/match/match.api";

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

    const MatchesSection = styled.section`
        margin-top: 24px;
        width: 100%;
    `;

    const Matches = styled.div`
        border-radius: 10px;
        overflow: hidden;
    `;

    const Match = styled.div<{ color: string }>`
        padding: 0 24px;
        height: 76px;
        background: ${(props) => props.color};
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const Logo = styled.main`
        margin: 6px 25px 0 0;
        width: 20px;
        height: 20px;
        display: flex;
        cursor: pointer;
    `;

    // const matches: IMatch[] = Array(10).fill({
    //     name: "Полуфинал",
    //     date: "14 янв 2023 15:00",
    //     tournament: "Кубок губернатора: cs",
    //     team1: "Пупырышки",
    //     team2: "Казаки",
    //     winner: "Пупырышки",
    // });

    const {data: matches} = useGetAllMatchesQuery(null)

    if(matches) {
        return (
            <Main>
                <Container>
                    <h1>Матчи</h1>
                    {/*<select*/}
                    {/*    id="option"*/}
                    {/*    name="option"*/}
                    {/*    style={{*/}
                    {/*        marginTop: "25px",*/}
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

                    <MatchesSection>
                        <Matches>
                            {
                                matches.map((item: IMatch, index: number) => (
                                <Match key={index} color={index % 2 ? "#15151A" : "#1A1A20"}>
                                    <div
                                        style={{
                                            display: "flex",
                                            width: "100%",
                                            alignItems: "center",
                                            gap: "30px",
                                        }}
                                    >
                                        {/*<div*/}
                                        {/*    style={{*/}
                                        {/*        lineHeight: "76px",*/}
                                        {/*    }}*/}
                                        {/*>*/}
                                        {/*    <p>{item.matchName}</p>*/}
                                        {/*</div>*/}
                                        <div style={{}}>
                                            <p>{`${item.matchTeam1.teamName} vs ${item.matchTeam2.teamName}`}</p>
                                        </div>
                                        {/*<Logo>*/}
                                        {/*    <Image*/}
                                        {/*        src="/edit.png"*/}
                                        {/*        alt="edit"*/}
                                        {/*        width={20}*/}
                                        {/*        height={20}*/}
                                        {/*    />*/}
                                        {/*</Logo>*/}
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
                                            {item.matchTournament.tournamentName}
                                        </p>
                                        <p
                                            style={{
                                                lineHeight: "76px",
                                                width: "100%",
                                                textAlign: "center",
                                            }}
                                        >
                                            {item.matchStartDay}
                                        </p>
                                        <p
                                            style={{
                                                lineHeight: "76px",
                                                width: "100%",
                                                textAlign: "center",
                                            }}
                                        >
                                            {item?.matchWinner?.teamName ? item?.matchWinner?.teamName : 'Победитель не известен'}
                                        </p>
                                    </div>
                                </Match>
                            ))}
                        </Matches>
                    </MatchesSection>
                </Container>
            </Main>
        );
    }
}
