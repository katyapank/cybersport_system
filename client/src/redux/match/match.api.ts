import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import IMatch from "@/types/match.type";

export const matchApi = createApi({
    reducerPath: 'matchApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8081/api/match',
    }),
    endpoints: (build) => ({
        getAllMatches: build.query<IMatch[], null>({
            query: (): string => '',
        }),
    }),
});

export const {
   useGetAllMatchesQuery
} = matchApi;
