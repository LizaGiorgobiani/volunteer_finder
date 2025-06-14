import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import OpportunityCard from "../OpportunityCard";
import type { Opportunity } from "../../types/Opportunity";
import { expect } from "vitest";

// Mock data
const mockOpportunity: Opportunity = {
  id: "1",
  title: "Test Opportunity",
  description: "Test description",
  date: "2024-07-01",
  location: "Test Location",
  type: "community",
};

test("renders opportunity title, description, date, location, and type", () => {
  render(
    <BrowserRouter>
      <OpportunityCard opportunity={mockOpportunity} />
    </BrowserRouter>
  );

  expect(screen.getByText(/Test Opportunity/i)).toBeInTheDocument();
  expect(screen.getByText(/Test description/i)).toBeInTheDocument();
  expect(screen.getByText(/2024-07-01/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Location/i)).toBeInTheDocument();
  expect(screen.getByText(/community/i)).toBeInTheDocument();
});

test("wraps content in a link to the detail page", () => {
  render(
    <BrowserRouter>
      <OpportunityCard opportunity={mockOpportunity} />
    </BrowserRouter>
  );

  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", "/opportunities/1");
});

test("has semantic heading tag for the title", () => {
  render(
    <BrowserRouter>
      <OpportunityCard opportunity={mockOpportunity} />
    </BrowserRouter>
  );

  const heading = screen.getByRole("heading", { name: /Test Opportunity/i });
  expect(heading).toBeInTheDocument();
});
