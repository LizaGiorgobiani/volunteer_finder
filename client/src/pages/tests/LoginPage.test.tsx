import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../LoginPage";
import { AuthProvider } from "../../context/AuthContext";
import { expect } from "vitest";

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <AuthProvider>
      <BrowserRouter>{ui}</BrowserRouter>
    </AuthProvider>
  );
};

describe("LoginPage with password", () => {
  beforeEach(() => {
    localStorage.setItem(
      "registered-user",
      JSON.stringify({ username: "testuser", password: "secret123" })
    );
  });

  it("renders login form", () => {
    renderWithProviders(<LoginPage />);
    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  it("shows error for invalid credentials", () => {
    renderWithProviders(<LoginPage />);
    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "wrongpass" },
    });
    fireEvent.click(screen.getByText(/sign in/i));

    expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
  });

  it("logs in with correct credentials", () => {
    renderWithProviders(<LoginPage />);
    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "secret123" },
    });
    fireEvent.click(screen.getByText(/sign in/i));

    expect(localStorage.getItem("user")).toBe("testuser");
  });
});
