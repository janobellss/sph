import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";

// Slice Reducers
import favoritesReducer from "../features/favorites/favoritesSlice";

// Services
import { starWarsApi } from "../services/starWars";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  [starWarsApi.reducerPath]: starWarsApi.reducer,
  favorites: favoritesReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(starWarsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
