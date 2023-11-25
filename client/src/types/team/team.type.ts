import ICreateTeam from "@/types/team/create-team.type";
import IPlayer from "@/types/player.type";

export default interface ITeam extends ICreateTeam{
    teamId: string
    teamUser: IPlayer[]
    teamPhoto: string | null
    teamDrawCount: number
    teamLossCount: number
    teamWinCount: number

    leader?: string;
    win_num?: number;
    captain_email?: string;
    email?: string;
}
