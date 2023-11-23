"use client";

import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center
`;

const Container = styled.main`
  width: 1270px;
  margin: 0 24px 32px;
  min-height: 100lvh
`;

const TopSection = styled.section`
  background: linear-gradient(180deg, #000 33.33%, #5C4EA4 100%);
  width: 100%;
  aspect-ratio: 82 / 33;
  margin-top: -64px;
  border-radius: 10px;
`;

const TournamentsSections = styled.div`
  display: flex;
  gap: 24px
`;

const TournamentsSection = styled.section`
  margin-top: 24px;
  width: 100%;
`;

const TournamentsSectionH3 = styled.h3`
  padding: 0 0 24px 44px
`;

const Tournaments = styled.div`
  border-radius: 10px;
  overflow: hidden
`;

const Tournament = styled.div<{color: string}>`
  padding: 0 24px;
  height: 76px;
  background: ${props => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Home() {
    return (
        <Main>
            <Container>
                <TopSection></TopSection>
                <TournamentsSections>
                    <TournamentsSection>
                        <TournamentsSectionH3>Последние турниры:</TournamentsSectionH3>
                        <Tournaments>
                            {
                                Array(3).fill({}).map((_, index: number) => (
                                    <Tournament key={index} color={index % 2 ? '#15151A' : '#1A1A20'}>
                                        <p>Amar x Eli Hybrid Lan</p>
                                        <p>19.11.23 - 20.11.23</p>
                                    </Tournament>
                                ))
                            }
                        </Tournaments>
                    </TournamentsSection>

                    <TournamentsSection>
                        <TournamentsSectionH3>Предстоящие турниры:</TournamentsSectionH3>
                        <Tournaments>
                            {
                                Array(3).fill({}).map((_, index: number) => (
                                    <Tournament key={index} color={index % 2 ? '#15151A' : '#1A1A20'}>
                                        <p>Amar x Eli Hybrid Lan</p>
                                        <p>19.11.23 - 20.11.23</p>
                                    </Tournament>
                                ))
                            }
                        </Tournaments>
                    </TournamentsSection>
                </TournamentsSections>
            </Container>
        </Main>
    );
}
