// __tests__/SignupPage.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import SignupPage from "../SignupPage";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";

const renderSignup = () =>
  render(
    <BrowserRouter>
      <SignupPage />
    </BrowserRouter>
  );

describe("SignupPage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders signup form", () => {
    renderSignup();
    expect(
      screen.getByPlaceholderText(/choose a username/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
  });

  it("shows error if username is too short", () => {
    renderSignup();
    fireEvent.change(screen.getByPlaceholderText(/choose a username/i), {
      target: { value: "ab" },
    });
    fireEvent.click(screen.getByRole("button", { name: /sign up/i }));
    expect(screen.getByText(/at least 3 characters/i)).toBeInTheDocument();
  });

  it("stores valid username and redirects", () => {
    renderSignup();
    fireEvent.change(screen.getByPlaceholderText(/choose a username/i), {
      target: { value: "testuser" },
    });
    fireEvent.click(screen.getByRole("button", { name: /sign up/i }));
    expect(localStorage.getItem("registered-user")).toBe("testuser");
  });
});
