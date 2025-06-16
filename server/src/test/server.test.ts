import { describe, test, expect, beforeAll, afterAll } from "vitest";
import axios from "axios";
import { spawn } from "child_process";

let serverProcess: any;

beforeAll(() => {
  serverProcess = spawn("node", ["index.ts"], {
    stdio: "inherit",
    env: { ...process.env, NODE_ENV: "test" },
  });

  // Wait for server to be ready (quick and dirty)
  return new Promise((resolve) => setTimeout(resolve, 1000));
});

afterAll(() => {
  serverProcess.kill();
});

describe("GET /api/opportunities", () => {
  test("returns 200 and array of opportunities", async () => {
    const res = await axios.get("http://localhost:3001/api/opportunities");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
    expect(res.data.length).toBeGreaterThan(0);
    expect(res.data[0]).toHaveProperty("id");
    expect(res.data[0]).toHaveProperty("title");
  });
});
