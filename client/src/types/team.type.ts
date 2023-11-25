export default interface ITeam {
    name: string;
    leader: string;
    win_num: number;
    password?: string;
    captain_email?: string;
    email?: string;
    description?: string;
    /*players: IPlayer[];*/
}
