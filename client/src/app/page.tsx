"use client";

import React from "react";
import styled from "styled-components";

const Main = styled.main`
    display: flex;
    justify-content: center;
`;

const Container = styled.main`
    width: 1270px;
    margin: 0 24px 32px 24px;
    min-height: 100lvh;
    display: flex;
    flex-direction: column;
    @media (max-width: 1024px) {
        margin: 0 10px 15px 10px;
    }
`;

const TopSection = styled.section`
    background: linear-gradient(180deg, #000 0.33%, #5c4ea4 100%);
    width: 100%;
    height: 300px;
    border-radius: 10px;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    @media (max-width: 1024px) {
        height: 200px;
    }
`;

const TournamentsSections = styled.div`
    display: flex;
    gap: 24px;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

const TournamentsSection = styled.section`
    margin-top: 24px;
    width: 100%;
`;

const TournamentsSectionH3 = styled.h3`
    padding: 0 0 24px 44px;
    @media (max-width: 1024px) {
        padding: 0 0 15px 0;
    }
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

export default function Home() {
    return (
        <Main>
            <Container>
                <TopSection>
                    <div style={{ textAlign: "center" }}>
                        <h1>Кубок губернатора уже сегодня!</h1>
                        <br />
                        26.11 стадион Солидарность Самара Арена
                    </div>
                </TopSection>
                <TournamentsSections>
                    <TournamentsSection>
                        <TournamentsSectionH3>
                            Последние турниры:
                        </TournamentsSectionH3>
                        <Tournaments>
                            {Array(3)
                                .fill({})
                                .map((_, index: number) => (
                                    <Tournament
                                        key={index}
                                        color={
                                            index % 2 ? "#15151A" : "#1A1A20"
                                        }
                                    >
                                        <p>Amar x Eli Hybrid Lan</p>
                                        <p>19.11.23 - 20.11.23</p>
                                    </Tournament>
                                ))}
                        </Tournaments>
                    </TournamentsSection>

                    <TournamentsSection>
                        <TournamentsSectionH3>
                            Предстоящие турниры:
                        </TournamentsSectionH3>
                        <Tournaments>
                            {Array(3)
                                .fill({})
                                .map((_, index: number) => (
                                    <Tournament
                                        key={index}
                                        color={
                                            index % 2 ? "#15151A" : "#1A1A20"
                                        }
                                    >
                                        <p>Amar x Eli Hybrid Lan</p>
                                        <p>19.11.23 - 20.11.23</p>
                                    </Tournament>
                                ))}
                        </Tournaments>
                    </TournamentsSection>
                </TournamentsSections>
            </Container>
        </Main>
    );
}
