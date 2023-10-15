import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "../../../components/Card/Card";

describe("Card component", () => {
  test("Should render the component with children", () => {
    render(
      <Card>
        <h1>Title</h1>
        <p>Description</p>
      </Card>
    );

    expect(screen.getByText(/Title/i)).toBeDefined();
    expect(screen.getByText(/Title/i)).toBeVisible();
    expect(screen.getByText(/Description/i)).toBeDefined();
    expect(screen.getByText(/Description/i)).toBeVisible();
  });
});
