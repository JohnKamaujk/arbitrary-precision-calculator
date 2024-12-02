import { add } from "../operations/add"; // Adjust the path if necessary

describe("Add function", () => {
  test("Adding two positive numbers", () => {
    expect(add("123", "456")).toBe("579");
  });

  test("Adding a positive and a negative number", () => {
    expect(add("123", "-456")).toBe("-333");
  });

  test("Adding two negative numbers", () => {
    expect(add("-123", "-456")).toBe("-579");
  });

  test("Adding zero and a positive number", () => {
    expect(add("0", "123")).toBe("123");
  });

  test("Adding zero and a negative number", () => {
    expect(add("0", "-123")).toBe("-123");
  });

  test("Adding large numbers", () => {
    expect(add("12345678901234567890", "98765432109876543210")).toBe(
      "111111111011111111100"
    );
  });

  test("Adding a large positive and a large negative number", () => {
    expect(add("12345678901234567890", "-12345678901234567890")).toBe("0");
  });

  test("Adding a large positive number and a smaller negative number", () => {
    expect(add("98765432109876543210", "-12345678901234567890")).toBe(
      "86419753208641975320"
    );
  });

  test("Adding a small positive number to a large negative number", () => {
    expect(add("100", "-98765432109876543210")).toBe("-98765432109876543110");
  });

  test("Adding zero to a large positive number", () => {
    expect(add("0", "99999999999999999999")).toBe("99999999999999999999");
  });

  test("Adding zero to a large negative number", () => {
    expect(add("0", "-99999999999999999999")).toBe("-99999999999999999999");
  });

  test("Adding numbers with leading zeros", () => {
    expect(add("000123", "456")).toBe("579");
    expect(add("0000123", "0456")).toBe("579");
  });

  test("Adding negative numbers with leading zeros", () => {
    expect(add("-000123", "-0456")).toBe("-579");
    expect(add("-0000123", "-00456")).toBe("-579");
  });

  test("Adding very large numbers", () => {
    const largeNum1 = "1234567890123456789012345678901234567890";
    const largeNum2 = "9876543210987654321098765432109876543210";
    expect(add(largeNum1, largeNum2)).toBe(
      "11111111101111111110111111111011111111100"
    );
  });
});
