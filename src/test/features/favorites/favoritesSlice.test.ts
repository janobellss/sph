import { describe, expect } from "vitest";
import reducer, {
  addToFavorites,
  removeFromFavorites,
  FavoritesState,
} from "../../../features/favorites/favoritesSlice";
import { PERSON_1_DATA, PERSON_2_DATA } from "../../../data/testData";

describe("FavoritesSlice", () => {
  test("Should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ people: [] });
  });

  test("Should add a person to the favorites list", () => {
    const previousState: FavoritesState = {
      people: [],
    };

    const updatedPersonData = {
      ...PERSON_1_DATA,
      isFavorite: true,
    };

    expect(reducer(previousState, addToFavorites(PERSON_1_DATA))).toEqual({
      people: [updatedPersonData],
    });
  });

  test("Should remove a person from the favorites list", () => {
    const person1Data = {
      ...PERSON_1_DATA,
      isFavorite: true,
    };

    const person2Data = {
      ...PERSON_2_DATA,
      isFavorite: true,
    };

    const previousState: FavoritesState = {
      people: [person1Data, person2Data],
    };

    expect(
      reducer(previousState, removeFromFavorites("Luke Skywalker"))
    ).toEqual({
      people: [person2Data],
    });
  });
});
