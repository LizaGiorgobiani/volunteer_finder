import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "../LoginPage";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import { expect } from "vitest";

const renderLogin = () =>
  render(
    <AuthProvider>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </AuthProvider>
  );

describe("LoginPage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders login form", () => {
    renderLogin();
    expect(
      screen.getByPlaceholderText(/enter your username/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
  });

  it("shows error for unregistered user", () => {
    renderLogin();
    fireEvent.change(screen.getByPlaceholderText(/enter your username/i), {
      target: { value: "unknown" },
    });
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));
    expect(screen.getByText(/user not found/i)).toBeInTheDocument();
  });

  it("logs in valid user and updates context", () => {
    localStorage.setItem("registered-user", "testuser");
    renderLogin();
    fireEvent.change(screen.getByPlaceholderText(/enter your username/i), {
      target: { value: "testuser" },
    });
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));
    expect(localStorage.getItem("user")).toBe("testuser");
  });
});
