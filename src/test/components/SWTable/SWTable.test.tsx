import { describe, expect } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test-utils";
import SWTable from "../../../components/SWTable/SWTable";
import {
  PERSON_1_DATA,
  PERSON_2_DATA,
  PERSON_3_DATA,
} from "../../../data/testData";
import { Person } from "../../../types/people";
import { BrowserRouter } from "react-router-dom";

const people: Person[] = [PERSON_1_DATA, PERSON_2_DATA];

describe("SWTable component", () => {
  test("Should render the component without data", () => {
    renderWithProviders(<SWTable data={[]} />);

    expect(screen.getByText("No Records Found!")).toBeVisible();
  });

  test("Should render the component with data", () => {
    renderWithProviders(
      <BrowserRouter>
        <SWTable data={people} />
      </BrowserRouter>
    );

    expect(screen.getByText("Luke Skywalker")).toBeVisible();
    expect(screen.getByText("19BBY")).toBeVisible();
    expect(screen.getAllByText("male")[0]).toBeVisible();
    expect(screen.getAllByText("View Full Details")[0]).toBeVisible();

    expect(screen.getByText("Darth Vader")).toBeVisible();
    expect(screen.getByText("41.9BBY")).toBeVisible();
    expect(screen.getAllByText("male")[1]).toBeVisible();
    expect(screen.getAllByText("View Full Details")[1]).toBeVisible();

    const addToFavoritesButton = screen.getAllByRole("button", {
      name: "Add To Favorites",
    });
    expect(addToFavoritesButton[0]).toBeInTheDocument();
    expect(addToFavoritesButton[1]).toBeInTheDocument();

    const removeFromFavoritesButton = screen.queryByRole("button", {
      name: "Remove From Favorites",
    });
    expect(removeFromFavoritesButton).not.toBeInTheDocument();
  });

  test("Should click add to favorites and remove from favorites buttons", () => {
    const updatedPeople = [...people, { ...PERSON_3_DATA }];

    renderWithProviders(
      <BrowserRouter>
        <SWTable data={updatedPeople} />
      </BrowserRouter>
    );

    const addToFavoritesButton = screen.getAllByRole("button", {
      name: "Add To Favorites",
    });
    expect(addToFavoritesButton[0]).toBeInTheDocument();
    expect(addToFavoritesButton[1]).toBeInTheDocument();

    const removeFromFavoritesButton = screen.getByRole("button", {
      name: "Remove From Favorites",
    });
    expect(removeFromFavoritesButton).toBeInTheDocument();

    fireEvent.click(addToFavoritesButton[0]);
    fireEvent.click(addToFavoritesButton[1]);
    fireEvent.click(removeFromFavoritesButton);

    expect(
      screen.getByText("Leia Organa is removed from your favorite list!")
    ).toBeVisible();
  });
});
