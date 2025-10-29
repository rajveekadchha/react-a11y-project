import { add } from "./stringCalculator";

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns sum of comma-separated numbers", () => {
  expect(add("1,2,3")).toBe(6);
});