"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const path = usePathname();
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
                justifyContent: "space-between",
            }}
        >
            <div style={{ display: "flex" }}>
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
            <div
                style={{
                    marginRight: "25px",
                }}
            >
                {path !== "/login" && (
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
                )}
            </div>
        </header>
    );
}
