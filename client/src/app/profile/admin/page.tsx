"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const Main = styled.main`
    display: flex;
    justify-content: center;
`;

const Container = styled.main`
    width: 1270px;
    margin: 83px 24px 32px;
    min-height: 100lvh;
`;

export default function Home() {
    const router: AppRouterInstance = useRouter();
    const IsAuth: boolean = true;
    const role: number = 2; //0 - team, 1 - judge, 2 - admin
    if (IsAuth && role == 2)
        return (
            <Main>
                <Container>
                    <div
                        style={{
                            marginTop: "50px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Link
                            href="/login"
                            style={{
                                color: "#FF6633",
                                padding: "12px 16px",
                                border: "2px solid #FF6633",
                                cursor: "pointer",
                                borderRadius: 10,
                                textAlign: "center",
                            }}
                        >
                            Выйти из аккаунта
                        </Link>
                    </div>
                </Container>
            </Main>
        );
    else if (IsAuth && role == 0) return router.push("/profile");
    else if (IsAuth && role == 1) return router.push("/judge");
    else router.push("/login");
}