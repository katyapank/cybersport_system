"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";

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
                            width: "600px",
                            borderRadius: "50%",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            src="/default_logo.png"
                            alt="team_logo"
                            width={400}
                            height={400}
                        ></Image>
                    </div>
                    <div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <h1>Название команды</h1>
                            <div
                                style={{
                                    color: "#ccc",
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "35px",
                                }}
                            >
                                <div>побед</div>
                                <div>поражений</div>
                                <div>ничьих</div>
                            </div>
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
                            Описание команды, описание команды, описание
                            команды.Описание команды, описание команды, описание
                            команды.Описание команды, описание команды, описание
                            команды.Описание команды, описание команды, описание
                            команды.Описание команды, описание команды, описание
                            команды.Описание команды, описание команды, описание
                            команды.
                        </div>
                    </div>
                </div>
                <Grids>
                    <GridSection>
                        <GridSectionH3>Турниры:</GridSectionH3>
                        <GridElements>
                            {Array(3)
                                .fill({})
                                .map((_, index: number) => (
                                    <Element
                                        key={index}
                                        color={
                                            index % 2 ? "#15151A" : "#1A1A20"
                                        }
                                    >
                                        <p>Кубок школы</p>
                                        <p>19.11.23 - 20.11.23</p>
                                    </Element>
                                ))}
                        </GridElements>
                    </GridSection>

                    <GridSection>
                        <GridSectionH3>Игроки:</GridSectionH3>
                        <GridElements>
                            {Array(3)
                                .fill({})
                                .map((_, index: number) => (
                                    <Element
                                        key={index}
                                        color={
                                            index % 2 ? "#15151A" : "#1A1A20"
                                        }
                                    >
                                        <p>Григорий Распутин</p>
                                        <p>Снайпер</p>
                                    </Element>
                                ))}
                        </GridElements>
                    </GridSection>
                </Grids>
            </Container>
        </Main>
    );
}
