'use client'

import React from "react";
import Link from "next/link";
import {useForm} from "react-hook-form";
import ILoginTeam from "@/types/team/login-team.type";
import {useLoginTeamMutation} from "@/redux/team/team.api";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function Home() {


    const {
        register, handleSubmit
    } = useForm({
        defaultValues: {
            teamPassword: '', teamLogin: ''
        }, reValidateMode: "onChange"
    });

    const router: AppRouterInstance = useRouter()

    const [loginTeam, {isError: isErrorLogin, isLoading: isLoadingLogin}] = useLoginTeamMutation();

    const onSubmit = async (values: any): Promise<void> => {
        const {data}: { data: ILoginTeam } = await loginTeam({
            teamLogin: values.teamLogin,
            teamPassword: values.teamPassword
        }) as { data: ILoginTeam };
        window.localStorage.setItem('teamToken', data.token)
        router.push('/')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <main style={{display: "flex", justifyContent: "center"}}>
                <div
                    style={{
                        width: 1270,
                        margin: "0 24px 32px",
                        minHeight: "100lvh",
                    }}
                >
                    <div
                        style={{
                            borderLeft: "3px solid #8973FF",
                            paddingLeft: "10px",
                            width: "100%",
                            marginTop: "100px",
                            color: "#ccc",
                        }}
                    >
                        Добро пожаловать на esport Samara region!
                        <br/>
                        Авторизуйтесь, чтобы иметь возможность регистрировать
                        команду на турниры.
                    </div>
                    <div
                        style={{
                            marginTop: "15%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <h2
                            style={{
                                padding: "0 0 24px 0",
                            }}
                        >
                            Вход
                        </h2>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            <input
                                placeholder="Логин"
                                style={{
                                    borderRadius: 5,
                                    height: "50px",
                                    padding: "20px",
                                    background: "#1A1A20",
                                }}
                                {...register("teamLogin")}
                            />
                            <input
                                placeholder="Пароль"
                                type="password"
                                style={{
                                    borderRadius: 5,
                                    height: "50px",
                                    padding: "20px",
                                    background: "#1A1A20",
                                }}
                                {...register("teamPassword")}
                            />
                            <button type="submit" style={{
                                width: "100%",
                                backgroundColor: "#8973FF",
                                color: "#000",
                                fontWeight: 800,
                                padding: "12px 16px",
                                border: "2px solid #8973FF",
                                cursor: "pointer",
                                borderRadius: 10,
                                textAlign: "center",
                                marginTop: "20px",
                            }}>
                                Войти
                            </button>
                            <Link
                                href="/register"
                                style={{
                                    width: "100%",
                                    color: "#8973FF",
                                    padding: "12px 16px",
                                    border: "2px solid #8973FF",
                                    cursor: "pointer",
                                    borderRadius: 10,
                                    textAlign: "center",
                                    marginTop: "3px",
                                }}
                            >
                                Регистрация
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </form>
    );
}
