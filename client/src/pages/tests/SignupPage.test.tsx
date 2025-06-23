import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignupPage from "../SignupPage";
import { expect } from "vitest";

describe("SignupPage", () => {
  it("renders sign up form", () => {
    render(
      <BrowserRouter>
        <SignupPage />
      </BrowserRouter>
    );
    expect(
      screen.getByPlaceholderText("Choose a username")
    ).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  it("shows error for short username", () => {
    render(
      <BrowserRouter>
        <SignupPage />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByPlaceholderText("Choose a username"), {
      target: { value: "ab" },
    });
    fireEvent.click(screen.getByText("Sign Up"));
    expect(screen.getByText(/at least 3 characters/i)).toBeInTheDocument();
  });

  it("saves user to localStorage", () => {
    render(
      <BrowserRouter>
        <SignupPage />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByPlaceholderText("Choose a username"), {
      target: { value: "validuser" },
    });
    fireEvent.click(screen.getByText("Sign Up"));
    expect(localStorage.getItem("registered-user")).toBe("validuser");
  });
});
