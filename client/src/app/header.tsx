"use client";

import Image from "next/image";
import Link from "next/link";
import React, {useEffect} from "react";
import {usePathname} from "next/navigation";
import styled from "styled-components";
import {useAuthMyTeamMutation} from "@/redux/team/team.api";
import {isError} from "util";

const Logo = styled.main`
  margin: 6px 25px 0 0;
  width: 200px;
  height: 55px;
  display: flex;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const AdaptiveHeader = styled.header`
  height: 64px;
  padding: 0 24px;
  position: fixed;
  display: flex;
  background: #000;
  width: 100%;
  justify-content: space-between;
  z-index: 1000;

  @media (max-width: 1024px) {
    padding: 0 2px;
    font-size: 12px;
  }
`;

const AdaptiveNavBar = styled.div`
  display: flex;
  gap: 48px;

  @media (max-width: 1024px) {
    gap: 20px;
  }
`;
const El = styled.div`
  &:hover {
    border-bottom: 3px solid #8973ff;
  }
  @media (max-width: 1024px) {
    border-bottom: none;
  }
`;

export default function Header() {
    const path: string = usePathname();
    const pageName: string = `/${path.split("/")[1]}`;

    const [authMyTeam, {data: team, isLoading, isError}] = useAuthMyTeamMutation()

    interface IHeaderItem {
        name: string;
        path: string;
    }

    const headerItems: IHeaderItem[] = [
        {name: "Матчи", path: "/matches"},
        {name: "Турниры", path: "/tournaments"},
        {name: "Команды", path: "/teams"},
    ];

    useEffect((): void => {
        if (window.localStorage.getItem('teamToken'))
            authMyTeam(window.localStorage.getItem('teamToken') as string)
    }, []);

    return (
        <AdaptiveHeader>
            <AdaptiveNavBar>
                <Link href="/">
                    <Logo>
                        <Image
                            src="/Logo.svg"
                            alt="logo"
                            width={200}
                            height={55}
                        />
                    </Logo>
                </Link>
                {
                    headerItems.map((item: IHeaderItem, index: number) => (
                    <El key={index}>
                        <Link
                            href={item.path}
                            key={item.name}
                            style={{
                                lineHeight: "64px",
                                color:
                                    pageName === item.path ? "#8973FF" : "#ccc",
                            }}
                        >
                            {item.name}
                        </Link>
                    </El>
                ))}
            </AdaptiveNavBar>
            <div>
                {
                    !window.localStorage.getItem('teamToken') || isError ? (
                        <Link
                            href="/login"
                            style={{
                                lineHeight: "64px",
                                color: "#ccc",
                                padding: "12px 16px",
                                border: "2px solid #8973FF",
                                cursor: "pointer",
                                borderRadius: 10,
                            }}
                        >
                            Войти
                        </Link>
                    ) : team?.teamName && !isLoading ? (
                        <Link
                            href="/profile"
                            style={{
                                lineHeight: "64px",
                                color: "#ccc",
                                padding: "12px 16px",
                                border: "2px solid #8973FF",
                                cursor: "pointer",
                                borderRadius: 10,
                            }}
                        >
                            {team.teamName}
                        </Link>
                    ) : null
                }
            </div>
        </AdaptiveHeader>
    );
}
