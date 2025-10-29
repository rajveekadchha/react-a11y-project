import { add } from "./stringCalculator";

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns sum of comma-separated numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

test("handles newline as a delimiter along with commas", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("throws for negatives (lists all negatives)", () => {
  expect(() => add("1,-2,3,-5")).toThrow(
    "Negative numbers not allowed: -2, -5"
  );
});