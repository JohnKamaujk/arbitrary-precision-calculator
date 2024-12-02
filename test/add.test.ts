import { add } from "../operations/add";

test("adds small numbers correctly", () => {
  expect(add("123", "456")).toBe("579");
});

test("adds large numbers correctly", () => {
  expect(add("12345678901234567890", "98765432109876543210")).toBe(
    "111111111011111111100"
  );
});

test("adds numbers with different lengths", () => {
  expect(add("123", "12345")).toBe("12468");
});
