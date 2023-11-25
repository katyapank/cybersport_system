import {createApi, FetchArgs, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import ICreateTeam from "@/types/team/create-team.type";
import ITeam from "@/types/team/team.type";
import ILoginTeam from '@/types/team/login-team.type';

export const projectApi = createApi({
    reducerPath: 'projectApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8081/api/team/',
    }),
    endpoints: (build) => ({
        registerTeam: build.mutation<string, ICreateTeam>({
            query: (body: ICreateTeam): FetchArgs => ({
                url: 'registration',
                method: 'post',
                body,
            }),
        }),
        loginTeam: build.mutation<ILoginTeam, { teamLogin: string, teamPassword: string }>({
            query: (body: { teamLogin: string, teamPassword: string }): FetchArgs => ({
                url: 'login',
                method: 'post',
                body,
            }),
        }),

        authMyTeam: build.mutation<ITeam, string>({
            query: (token: string): FetchArgs => ({
                url: token,
                method: 'get',
            }),
        }),
    }),
});

export const {
    useRegisterTeamMutation,
    useLoginTeamMutation,
    useAuthMyTeamMutation
} = projectApi;
