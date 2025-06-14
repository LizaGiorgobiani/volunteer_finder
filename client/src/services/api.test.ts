import { vi, test, expect, beforeEach } from "vitest";
import axios from "axios";
import { getOpportunities } from "../services/api";
import type { Opportunity } from "../types/Opportunity";

const mockData: Opportunity[] = [
  {
    id: "1",
    title: "Mock Opportunity",
    description: "Mock description",
    date: "2024-07-01",
    location: "Mocktown",
    type: "community",
  },
];

beforeEach(() => {
  vi.resetAllMocks();
});

test("fetches opportunity data successfully", async () => {
  vi.spyOn(axios, "get").mockResolvedValueOnce({ data: mockData });

  const data = await getOpportunities();
  expect(data).toEqual(mockData);
  expect(axios.get).toHaveBeenCalledWith(
    "http://localhost:3001/api/opportunities"
  );
});

test("handles empty array response", async () => {
  vi.spyOn(axios, "get").mockResolvedValueOnce({ data: [] });

  const data = await getOpportunities();
  expect(data).toEqual([]);
  expect(data.length).toBe(0);
});

test("handles 500 error response gracefully", async () => {
  vi.spyOn(axios, "get").mockRejectedValueOnce({
    response: { status: 500 },
    message: "Request failed with status code 500",
  });

  try {
    await getOpportunities();
    throw new Error("Expected API to throw an error");
  } catch (error: any) {
    expect(error.response.status).toBe(500);
    expect(error.message).toContain("Request failed with status code 500");
  }
});

test("handles malformed response", async () => {
  vi.spyOn(axios, "get").mockResolvedValueOnce({ data: { not: "an array" } });

  const result = await getOpportunities();
  expect(Array.isArray(result)).toBe(false);
});

test("handles delayed responses properly", async () => {
  vi.useFakeTimers();

  vi.spyOn(axios, "get").mockImplementationOnce(() => {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: mockData }), 300)
    );
  });

  const promise = getOpportunities();

  vi.advanceTimersByTime(300);

  const data = await promise;
  expect(data).toEqual(mockData);

  vi.useRealTimers();
});
