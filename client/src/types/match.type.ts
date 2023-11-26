export default interface IMatch {
    matchId: string;
    matchGame: any;
    matchName: string;
    matchStartDay: string;
    matchEndDay: string;
    matchTournament: any;
    matchTeam1: any;
    matchTeam2: any;
    matchDescription: string;
    matchScoreTeam1: number | null;
    matchScoreTeam2: number | null;
    matchJudge: any;
    matchIsEnded: any;
    matchWinner: any;
    matchResultFeaturesTeam1: any;
    matchResultFeaturesTeam2: any
}
