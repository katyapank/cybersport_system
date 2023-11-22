'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
    interface IHeaderItem {
        name: string;
        patch: string;
    }
    const headerItems: IHeaderItem[] = [
        { name: "Матчи", patch: "/matches" },
        { name: "Турниры", patch: "/tournaments" },
        { name: "Команды", patch: "/teams" },
        { name: "Игроки", patch: "/players" },
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
                justifyContent: 'space-between'
            }}
        >
            <div style={{display: 'flex', width: '100%'}}>
                <Image
                    src="/Logo.svg"
                    alt="logo"
                    width={160}
                    height={44}
                    style={{ marginRight: 25 }}
                />
                {headerItems.map((item: IHeaderItem) => (
                    <Link
                        href={item.patch}
                        key={item.name}
                        style={{
                            padding: "0 25px",
                            lineHeight: "64px",
                            color: "#ccc",
                        }}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <Link
                href='/login'
                style={{
                    padding: "0 25px",
                    lineHeight: "64px",
                    color: "#ccc",
                }}
            >
                Войти
            </Link>
        </header>
    )
}