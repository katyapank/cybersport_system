'use client'

import React, {ReactNode, useEffect} from 'react'
import {useAuthMyTeamMutation} from "@/redux/team/project.api";

export default function Auth({children}: { children: ReactNode }) {
    const [authMyTeam, {data}] = useAuthMyTeamMutation()

    useEffect((): void => {
        if (window.localStorage.getItem('teamToken'))
            authMyTeam(window.localStorage.getItem('teamToken') as string)
    }, []);

    return (
        <div>{children}</div>
    )
}