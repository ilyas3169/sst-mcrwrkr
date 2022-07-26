import { runBuildCommand, clearBuildOutput } from "../helpers";
import { beforeEach, afterAll, test, expect } from "vitest";

beforeEach(async () => {
  await clearBuildOutput(__dirname);
});

afterAll(async () => {
  await clearBuildOutput(__dirname);
});

/**
 * Test that the config.json is getting picked up
 */
test("config", async () => {
  const result = await runBuildCommand(__dirname);

  expect(result).toContain("krusty-krab-prod-jest-us-west-2");
});
