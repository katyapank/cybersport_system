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
                            <input
                                placeholder="Название команды"
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
                                borderLeft: "3px solid #8973FF",
                                paddingLeft: "10px",
                                width: "100%",
                                marginTop: "20px",
                                color: "#ccc",
                            }}
                        >
                            <textarea
                                placeholder="Описание команды (до 200 символов)"
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
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "50px",
                        justifyContent: "space-between",
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
                            placeholder="Логин или email команды"
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
                            placeholder="Email капитана"
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
                            placeholder="Придумайте пароль"
                            type="password"
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
                            placeholder="Повторите пароль"
                            type="password"
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
                <Grids>
                    <GridSection>
                        <GridSectionH3>
                            Состав команды{" "}
                            <div
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
                                <p>Добавить участника</p>
                            </div>
                        </GridSectionH3>
                        <GridElements>
                            {Array(1)
                                .fill({})
                                .map((_, index: number) => (
                                    <Element
                                        key={index}
                                        color={
                                            index % 2 ? "#15151A" : "#1A1A20"
                                        }
                                    >
                                        <input
                                            placeholder="Никнейм*"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                                padding: "20px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="ФИО*"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                                padding: "20px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="Пол*"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                                padding: "20px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="Дата рождения*"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                                padding: "20px",
                                            }}
                                        ></input>
                                        <input
                                            placeholder="Субъект РФ*"
                                            required
                                            style={{
                                                borderRadius: 5,
                                                height: "50px",
                                                padding: "20px",
                                            }}
                                        ></input>
                                    </Element>
                                ))}
                        </GridElements>
                    </GridSection>
                </Grids>
            </Container>
        </Main>
    );
}
