import { configureStore } from '@reduxjs/toolkit';
import { projectApi } from '@/redux/team/project.api';

const store = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    projectApi.middleware,
  ),
});

export default store;
