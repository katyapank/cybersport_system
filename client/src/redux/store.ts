import {configureStore} from '@reduxjs/toolkit';
import {teamApi} from '@/redux/team/team.api';
import {matchApi} from "@/redux/match/match.api";
import {tournamentApi} from "@/redux/tournament/tournament.api";

const store = configureStore({
    reducer: {
        [teamApi.reducerPath]: teamApi.reducer,
        [matchApi.reducerPath]: matchApi.reducer,
        [tournamentApi.reducerPath]: tournamentApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        teamApi.middleware,
        matchApi.middleware,
        tournamentApi.middleware
    ),
});

export default store;
