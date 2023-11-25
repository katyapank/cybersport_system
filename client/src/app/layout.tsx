import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '../styles/reset.css'
import '../styles/globals.css'
import React, {ReactNode} from "react";
import {NextFont} from "next/dist/compiled/@next/font";
import Header from "@/app/header";
import StyledComponentsRegistry from "@/providers/StyledComponentsRegistry";
import ReduxProviders from "@/providers/ReduxProviders";
import Auth from "@/providers/Auth";

const inter: NextFont = Inter({subsets: ['latin', 'cyrillic']})

export const metadata: Metadata = {
    title: 'ESPORT Samara region',
    description: '',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <StyledComponentsRegistry>
           <ReduxProviders>
               <Auth>
                   <Header/>
                   {children}
               </Auth>
           </ReduxProviders>
        </StyledComponentsRegistry>
        </body>
        </html>
    )
}
