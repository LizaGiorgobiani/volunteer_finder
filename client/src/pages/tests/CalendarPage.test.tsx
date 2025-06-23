import { render, screen } from "@testing-library/react";
import CalendarPage from "../CalendarPage";
import { useOpportunities } from "../hooks/useOpportunities";
import { expect, vi } from "vitest";

// Mock opportunity data
vi.mock("../hooks/useOpportunities", () => ({
  useOpportunities: () => ({
    data: [
      {
        id: "1",
        title: "Test Event",
        location: "Test Location",
        date: new Date().toISOString().split("T")[0],
        type: "test",
      },
    ],
    loading: false,
    error: null,
  }),
}));

describe("CalendarPage", () => {
  it("renders calendar and shows today's opportunity", () => {
    render(<CalendarPage />);
    const today = new Date().toISOString().split("T")[0];
    expect(
      screen.getByText("📅 Volunteer Opportunities Calendar")
    ).toBeInTheDocument();
    expect(screen.getByText(`Opportunities on ${today}:`)).toBeInTheDocument();
    expect(screen.getByText("Test Event")).toBeInTheDocument();
  });
});
