import { configureStore } from "@reduxjs/toolkit";

// Slice Reducers
import favoritesReducer from "../features/favorites/favoritesSlice";

// Services
import { starWarsApi } from "../services/starWars";

const store = configureStore({
  reducer: {
    [starWarsApi.reducerPath]: starWarsApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starWarsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
