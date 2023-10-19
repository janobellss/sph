import { describe, expect } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test-utils";
import PersonDetail from "../../../components/PersonDetails/PersonDetails";
import { PERSON_1_DATA } from "../../../data/testData";

describe("PersonDetail component", () => {
  test("Should render the component with data", () => {
    renderWithProviders(<PersonDetail person={PERSON_1_DATA} />);

    const name = "Luke Skywalker";
    const height = "172";
    const mass = "77";
    const hairColor = "blond";
    const skinColor = "fair";
    const eyeColor = "blue";
    const birthYear = "19BBY";
    const gender = "male";

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(name)).toBeVisible();

    expect(screen.getByText(height)).toBeInTheDocument();
    expect(screen.getByText(height)).toBeVisible();

    expect(screen.getByText(mass)).toBeInTheDocument();
    expect(screen.getByText(mass)).toBeVisible();

    expect(screen.getByText(hairColor)).toBeInTheDocument();
    expect(screen.getByText(hairColor)).toBeVisible();

    expect(screen.getByText(skinColor)).toBeInTheDocument();
    expect(screen.getByText(skinColor)).toBeVisible();

    expect(screen.getByText(eyeColor)).toBeInTheDocument();
    expect(screen.getByText(eyeColor)).toBeVisible();

    expect(screen.getByText(birthYear)).toBeInTheDocument();
    expect(screen.getByText(birthYear)).toBeVisible();

    expect(screen.getByText(gender)).toBeInTheDocument();
    expect(screen.getByText(gender)).toBeVisible();

    const addToFavoritesButton = screen.getByRole("button", {
      name: "Add To Favorites",
    });
    expect(addToFavoritesButton).toBeInTheDocument();

    const removeFromFavoritesButton = screen.queryByRole("button", {
      name: "Remove From Favorites",
    });
    expect(removeFromFavoritesButton).not.toBeInTheDocument();
  });

  test("Should click add to favorites and remove from favorites buttons", () => {
    renderWithProviders(<PersonDetail person={PERSON_1_DATA} />);

    const addToFavoritesButton = screen.getByRole("button", {
      name: "Add To Favorites",
    });
    expect(addToFavoritesButton).toBeInTheDocument();

    const removeFromFavoritesButton = screen.queryByRole("button", {
      name: "Remove From Favorites",
    });
    expect(removeFromFavoritesButton).not.toBeInTheDocument();

    fireEvent.click(addToFavoritesButton);

    const addToFavoritesButton2 = screen.queryByRole("button", {
      name: "Add To Favorites",
    });
    expect(addToFavoritesButton2).not.toBeInTheDocument();

    const removeFromFavoritesButton2 = screen.getByRole("button", {
      name: "Remove From Favorites",
    });
    expect(removeFromFavoritesButton2).toBeInTheDocument();

    fireEvent.click(removeFromFavoritesButton2);

    const addToFavoritesButton3 = screen.getByRole("button", {
      name: "Add To Favorites",
    });
    expect(addToFavoritesButton3).toBeInTheDocument();

    const removeFromFavoritesButton3 = screen.queryByRole("button", {
      name: "Remove From Favorites",
    });
    expect(removeFromFavoritesButton3).not.toBeInTheDocument();
  });
});
