import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const tournamentApi = createApi({
    reducerPath: 'tournamentApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8081/api/tournament',
    }),
    endpoints: (build) => ({
        getAllTournaments: build.query<any[], null>({
            query: (): string => '',
        }),
    }),
});

export const {
    useGetAllTournamentsQuery
} = tournamentApi;
