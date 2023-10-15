import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Message from "../../../components/Message/Message";

const onClose = () => {};

describe("Message component", () => {
  test("Should render the component with message", () => {
    render(
      <Message
        message="This is a new message alert"
        onClose={onClose}
      ></Message>
    );

    expect(screen.getByText(/This is a new message alert/i)).toBeDefined();
    expect(screen.getByText(/This is a new message alert/i)).toBeVisible();
  });
});
