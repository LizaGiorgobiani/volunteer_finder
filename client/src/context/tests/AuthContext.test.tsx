// __tests__/AuthContext.test.tsx
import { renderHook, act } from "@testing-library/react";
import { useAuth, AuthProvider } from "../AuthContext";
import type { ReactNode } from "react";
import { expect } from "vitest";

const wrapper = ({ children }: { children: ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe("AuthContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("initializes user from localStorage", () => {
    localStorage.setItem("user", "testuser");
    const { result } = renderHook(() => useAuth(), { wrapper });
    expect(result.current.user).toBe("testuser");
  });

  it("logs in correctly", () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    act(() => result.current.login("john"));
    expect(result.current.user).toBe("john");
    expect(localStorage.getItem("user")).toBe("john");
  });

  it("logs out correctly", () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    act(() => {
      result.current.login("john");
      result.current.logout();
    });
    expect(result.current.user).toBeNull();
    expect(localStorage.getItem("user")).toBeNull();
  });
});
