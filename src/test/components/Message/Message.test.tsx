import { describe, expect, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
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

  test("Should render the component and close after 4 seconds", () => {
    vi.useFakeTimers();

    render(
      <Message
        message="This is a new message alert"
        onClose={onClose}
      ></Message>
    );

    act(() => {
      vi.advanceTimersByTime(4000);
    });

    expect(
      screen.queryByText(/This is a new message alert/i)
    ).not.toBeInTheDocument();
  });
});
