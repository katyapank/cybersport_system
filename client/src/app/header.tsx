'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import styled from "styled-components";

const Logo = styled.main`
  margin: 6px 25px 0 0;
  width: 160px;
  height: 44px;
  display: flex;
`;

export default function Header() {
    const path: string = usePathname()
    const pageName: string = `/${path.split('/')[1]}`

    interface IHeaderItem {
        name: string;
        path: string;
    }

    const headerItems: IHeaderItem[] = [
        {name: "Матчи", path: "/matches"},
        {name: "Турниры", path: "/tournaments"},
        {name: "Команды", path: "/teams"}
    ];

    return (
        <header
            style={{
                height: 64,
                padding: "0 24px",
                position: "fixed",
                display: "flex",
                background: "#000",
                width: "100vw",
                justifyContent: 'space-between',
                zIndex: 1000
            }}
        >
            <div style={{display: 'flex'}}>
                <Link href="/">
                    <Logo>
                        <Image
                            src="/Logo.svg"
                            alt="logo"
                            width={160}
                            height={44}
                        />
                    </Logo>
                </Link>
                {headerItems.map((item: IHeaderItem) => (
                    <Link
                        href={item.path}
                        key={item.name}
                        style={{
                            padding: "0 25px",
                            lineHeight: "64px",
                            color: pageName === item.path ? "#8973FF" : "#ccc",
                        }}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <div>
                {
                    path !== "/login" && (
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
                    )
                }
            </div>
        </header>
    )
}