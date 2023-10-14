import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritePerson, Person } from "../../types/people";

type FavoritesState = {
  people: FavoritePerson[];
};

const favoritesStoredValue = localStorage.getItem("favorites");
const initialState: FavoritesState = favoritesStoredValue
  ? JSON.parse(favoritesStoredValue)
  : { people: [] };

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Person>) => {
      const item = action.payload;
      const existItem = state.people.find(
        (person) => person.name === item.name
      );

      const updatedItem = { ...item, isFavorite: true };

      if (!existItem) state.people = [...state.people, updatedItem];

      localStorage.setItem("favorites", JSON.stringify(state));

      return state;
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.people = state.people.filter(
        (person) => person.name !== action.payload
      );

      localStorage.setItem("favorites", JSON.stringify(state));

      return state;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
