'use client'

import React, {useEffect, useState} from 'react'
import {
    SingleEliminationBracket,
    Match as MatchComponent,
    SVGViewer,
    createTheme, DoubleEliminationBracket
} from "@g-loot/react-tournament-brackets";
import useWindowDimensions from '@/hooks/useWindowDimensions';
import styled from "styled-components";
import {Match, Theme} from "@g-loot/react-tournament-brackets/dist/src/types";
import {ReadonlyURLSearchParams, useSearchParams} from 'next/navigation';

export default function Page() {
    const Main = styled.main`
      display: flex;
      justify-content: center
    `;

    const Container = styled.main`
      width: 100%;
      max-width: 1270px;
      margin: 83px 24px 32px;
      min-height: 100lvh
    `;
    const {height, width} = useWindowDimensions();

    const teams = [
        {
            id: "14754a1a-932c-4992-8dec-f7f94a339960",
            resultText: null,
            isWinner: false,
            status: null,
            name: "CoKe BoYz",
            picture: "teamlogos/client_team_default_logo"
        },
        {
            id: "d16315d4-7f2d-427b-ae75-63a1ae82c0a8",
            resultText: null,
            isWinner: false,
            status: null,
            name: "Aids Team",
            picture: "teamlogos/client_team_default_logo"
        },
        {
            id: "d8b9f00a-0ffa-4527-8316-da701894768e",
            resultText: null,
            isWinner: false,
            status: null,
            name: "Art of kill",
            picture: "teamlogos/client_team_default_logo"
        },
        {
            id: "9397971f-4b2f-44eb-a094-722eb286c59b",
            resultText: null,
            isWinner: false,
            status: null,
            name: "Crazy Pepes",
            picture: "teamlogos/client_team_default_logo"
        },
        {
            id: "42fecd89-dc83-4821-80d3-718acb50a30c",
            resultText: null,
            isWinner: false,
            status: null,
            name: "BLUEJAYS",
            picture: "teamlogos/client_team_default_logo"
        },
        {
            id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
            resultText: null,
            isWinner: false,
            status: null,
            name: "Bosphorus",
            picture: "teamlogos/r7zn4gr8eajivapvjyzd"
        },
        {
            id: "42fecd89-dc83-4821-80d3-718acb50a30c",
            resultText: null,
            isWinner: false,
            status: null,
            name: "BLUEJAYS2",
            picture: "teamlogos/client_team_default_logo"
        },
        {
            id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
            resultText: null,
            isWinner: false,
            status: null,
            name: "Bosphorus2",
            picture: "teamlogos/r7zn4gr8eajivapvjyzd"
        }
    ]

    // useEffect((): void => {
    //     const matches: HTMLCollection = document.getElementById('bracket')?.querySelector("div")
    //         ?.querySelector("svg")?.querySelector("g")?.querySelector("g")?.querySelector("g")
    //         ?.children as HTMLCollection
    //     for (let i: number = 0; i < matches.length; i++)
    //         (matches[i].querySelectorAll("g")[1]
    //             ?.querySelector("svg")?.querySelector("div")?.querySelector("div")?.querySelector("a")
    //             ?.querySelector("p") as HTMLParagraphElement).textContent = 'Подробнее'
    // }, []);

    const [elimination, setElimination] = useState<boolean>(true)
    const searchParams: ReadonlyURLSearchParams = useSearchParams();

    return (
        <Main>
            <Container>
                <div style={{height: 200, width: '100%'}}></div>
                <h1>{ JSON.parse(searchParams.get("tournament") as string).name}</h1>


                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}} id="bracket">
                    {
                        elimination ? (
                            <DoubleEliminationBracket
                                theme={GlootTheme}
                                matches={genDoubleEliminationBracket(teams)}
                                matchComponent={MatchComponent}
                                svgWrapper={({children, ...props}) => (
                                    <SVGViewer
                                        width={width > 1270 + 48 ? 1270 : width - 48}
                                        height={height}
                                        SVGBackground="#000"
                                        {...props}
                                    >
                                        {children}
                                    </SVGViewer>
                                )}
                                onMatchClick={(match) => console.log(match)}
                                onPartyClick={(match) => console.log(match)}
                            />
                        ) : (
                            <SingleEliminationBracket
                                theme={GlootTheme}
                                matches={genSingleEliminationBracket(teams)}
                                matchComponent={MatchComponent}
                                svgWrapper={({children, ...props}) => (
                                    <SVGViewer
                                        width={width}
                                        height={10000}
                                        SVGBackground="#000"
                                        {...props}
                                    >
                                        {children}
                                    </SVGViewer>
                                )}
                                onMatchClick={(match) => console.log(match)}
                                onPartyClick={(match) => console.log(match)}
                            />
                        )
                    }
                </div>
            </Container>
        </Main>
    );
}

const GlootTheme: Theme = createTheme({
    textColor: {main: "#000000", highlighted: "#F4F2FE", dark: "#707582"},
    matchBackground: {wonColor: "#2D2D59", lostColor: "#1B1D2D"},
    score: {
        background: {
            wonColor: `#10131C`,
            lostColor: "#10131C"
        },
        text: {highlightedWonColor: "#7BF59D", highlightedLostColor: "#FB7E94"}
    },
    border: {
        color: "#292B43",
        highlightedColor: "RGBA(152,82,242,0.4)"
    },
    roundHeader: {backgroundColor: "#3B3F73", fontColor: "#F4F2FE"},
    connectorColor: "#3B3F73",
    connectorColorHighlight: "RGBA(152,82,242,0.4)",
    svgBackground: "#ff0000"
});

function shuffleArray(array: Array<any>): Array<any> {
    for (let i: number = array.length - 1; i > 0; --i) {
        let j: number = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

const allMatchesQuantity = (firstMatches: number): number => {
    if (firstMatches === 1) return 1;
    return firstMatches + allMatchesQuantity(firstMatches / 2)
}

const genDoubleEliminationBracket = (teams: any[]): { upper: Match[], lower: Match[] } => {
    const shuffle: Match[] = shuffleArray(JSON.parse(JSON.stringify(teams)));
    let matchesUpper: Match[] = []
    let matchesLower: Match[] = []

    const roundsUpper: number = Math.ceil(Math.log2(shuffle.length))
    const firstMatchesUpper: number = Math.pow(2, roundsUpper - 1)
    const allMatchesUpper: number = allMatchesQuantity(firstMatchesUpper)
    for (let i: number = 0; i < shuffle.length - firstMatchesUpper; ++i) {
        matchesUpper.push({
            id: i,
            nextMatchId: firstMatchesUpper + Math.ceil((i + 1) / 2 - 1),
            nextLooserMatchId: allMatchesUpper + Math.ceil((i + 1) / 2 - 1) + 1,
            tournamentRoundText: "1",
            startTime: "2021-05-30",
            state: "SCHEDULED",
            participants: [shuffle[i * 2], shuffle[i * 2 + 1]]
        })
    }
    for (let i: number = shuffle.length - firstMatchesUpper; i < firstMatchesUpper; ++i) {
        matchesUpper.push({
            id: i,
            nextMatchId: firstMatchesUpper + Math.ceil((i + 1) / 2 - 1),
            nextLooserMatchId: allMatchesUpper + Math.ceil((i + 1) / 2 - 1) + 1,
            tournamentRoundText: "1",
            startTime: "2021-05-30",
            state: "SCORE_DONE",
            participants: [{
                ...shuffle[i + shuffle.length - firstMatchesUpper],
                isWinner: true,
                resultText: 'W'
            }]
        })
    }

    let prevMatches: number = firstMatchesUpper
    let currRoundMatches: number = firstMatchesUpper / 2
    for (let i: number = 2; i <= roundsUpper; ++i) {
        for (let j: number = 0; j < currRoundMatches; ++j) {
            const prevIndexLooser: number = matchesUpper[matchesUpper.length - currRoundMatches * 2 + j].nextLooserMatchId as number

            const prevDone1: boolean = matchesUpper[matchesUpper.length - currRoundMatches * 2 + j].state === 'SCORE_DONE'
            const prevDone2: boolean = matchesUpper[matchesUpper.length - currRoundMatches * 2 + j + 1].state === 'SCORE_DONE'
            let participants: any[] = []
            prevDone1 && participants.push({
                ...matchesUpper[matchesUpper.length - currRoundMatches * 2 + j].participants[0],
                isWinner: false,
                resultText: ''
            })
            prevDone2 && participants.push({
                ...matchesUpper[matchesUpper.length - currRoundMatches * 2 + j + 1].participants[0],
                isWinner: false,
                resultText: ''
            })

            matchesUpper.push({
                id: prevMatches + j,
                nextMatchId: prevMatches + currRoundMatches + Math.ceil((j + 1) / 2 - 1),
                nextLooserMatchId: prevIndexLooser + currRoundMatches * 2 + j,
                tournamentRoundText: String(i),
                startTime: "2021-05-30",
                state: "SCHEDULED",
                participants
            })
        }
        prevMatches = prevMatches + currRoundMatches
        currRoundMatches = currRoundMatches / 2
    }

    const roundsLower: number = (roundsUpper - 1) * 2
    prevMatches = allMatchesUpper + 1
    currRoundMatches = firstMatchesUpper / 2
    for (let i: number = 1; i <= roundsLower / 2; ++i) {
        for (let k: number = 1; k <= 2; ++k) {
            for (let j: number = 0; j < currRoundMatches; ++j) {
                matchesLower.push({
                    id: prevMatches + j,
                    nextMatchId: k == 2 ? prevMatches + currRoundMatches + Math.ceil((j + 1) / 2 - 1) : prevMatches + currRoundMatches + j,
                    tournamentRoundText: String(((i - 1) * 2) + k),
                    startTime: "2021-05-30",
                    state: "SCHEDULED",
                    participants: []
                })
            }
            prevMatches = prevMatches + currRoundMatches
        }
        currRoundMatches = currRoundMatches / 2
    }


    matchesLower[matchesLower.length - 1].nextMatchId = allMatchesUpper


    matchesUpper.push({
        id: allMatchesUpper,
        nextMatchId: null,
        tournamentRoundText: String(roundsUpper + 1),
        startTime: "2021-05-30",
        state: "SCHEDULED",
        participants: []
    })

    console.log(matchesUpper, matchesLower)

    return {upper: matchesUpper, lower: matchesLower}
}

const genSingleEliminationBracket = (teams: any[]): Match[] => {
    const shuffle: Match[] = shuffleArray(JSON.parse(JSON.stringify(teams)));
    let matches: Match[] = []
    const rounds: number = Math.ceil(Math.log2(shuffle.length))
    const firstMatches: number = Math.pow(2, rounds - 1)
    for (let i: number = 0; i < shuffle.length - firstMatches; ++i) {
        matches.push({
            id: i,
            nextMatchId: firstMatches + Math.ceil((i + 1) / 2 - 1),
            tournamentRoundText: "1",
            startTime: "2021-05-30",
            state: "SCHEDULED",
            participants: [teams[i * 2], teams[i * 2 + 1]]
        })
    }
    for (let i: number = shuffle.length - firstMatches; i < firstMatches; ++i) {
        matches.push({
            id: i,
            nextMatchId: firstMatches + Math.ceil((i + 1) / 2 - 1),
            tournamentRoundText: "1",
            startTime: "2021-05-30",
            state: "SCORE_DONE",
            participants: [{...teams[i + shuffle.length - firstMatches], isWinner: true, resultText: 'W'}]
        })
    }

    let prevMatches: number = firstMatches
    let currRoundMatches: number = firstMatches / 2
    for (let i: number = 2; i <= rounds; ++i) {
        for (let j: number = 0; j < currRoundMatches; ++j) {
            const prevDone1: boolean = matches[matches.length - currRoundMatches * 2 + j].state === 'SCORE_DONE'
            const prevDone2: boolean = matches[matches.length - currRoundMatches * 2 + j + 1].state === 'SCORE_DONE'
            let participants: any[] = []
            prevDone1 && participants.push({
                ...matches[matches.length - currRoundMatches * 2 + j].participants[0],
                isWinner: false,
                resultText: ''
            })
            prevDone2 && participants.push({
                ...matches[matches.length - currRoundMatches * 2 + j + 1].participants[0],
                isWinner: false,
                resultText: ''
            })

            matches.push({
                id: prevMatches + j,
                nextMatchId: i === rounds ? null : prevMatches + currRoundMatches + Math.ceil((j + 1) / 2 - 1),
                tournamentRoundText: String(i),
                startTime: "2021-05-30",
                state: "SCHEDULED",
                participants
            })
        }
        prevMatches = prevMatches + prevMatches / 2
        currRoundMatches = currRoundMatches / 2
    }
    return matches
}