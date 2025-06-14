import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import OpportunitiesPage from "../../pages/OpportunitiesPage";
import type { Opportunity } from "../../types/Opportunity";

const mockData: Opportunity[] = [
  {
    id: "1",
    title: "Cleanup Drive",
    description: "Help clean the city park.",
    date: "2024-07-10",
    location: "City Park",
    type: "environment",
  },
  {
    id: "2",
    title: "Food Bank",
    description: "Distribute food packages to the needy.",
    date: "2024-07-12",
    location: "Community Hall",
    type: "community",
  },
];

test("renders a list of opportunities", () => {
  render(<OpportunitiesPage data={mockData} loading={false} error={null} />);
  expect(screen.getByText(/Cleanup Drive/i)).toBeInTheDocument();
  expect(screen.getByText(/Food Bank/i)).toBeInTheDocument();
});

test("renders correct number of cards", () => {
  render(<OpportunitiesPage data={mockData} loading={false} error={null} />);
  const cards = screen.getAllByRole("link"); // assuming OpportunityCard wraps in <Link>
  expect(cards.length).toBe(mockData.length);
});

test("shows loading message if loading is true", () => {
  render(<OpportunitiesPage data={[]} loading={true} error={null} />);
  expect(screen.getByText(/Loading opportunities/i)).toBeInTheDocument();
});

test("shows error message if error is not null", () => {
  render(<OpportunitiesPage data={[]} loading={false} error="Network Error" />);
  expect(screen.getByText(/Error loading opportunities/i)).toBeInTheDocument();
});

test("shows nothing if no data and not loading/error", () => {
  render(<OpportunitiesPage data={[]} loading={false} error={null} />);
  const cards = screen.queryAllByRole("link");
  expect(cards.length).toBe(0);
});

test("handles null data gracefully", () => {
  render(<OpportunitiesPage data={null as any} loading={false} error={null} />);
  const cards = screen.queryAllByRole("link");
  expect(cards.length).toBe(0);
});
