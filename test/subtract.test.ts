import { subtract } from "../operations/subtract";

describe("Subtract function", () => {
  test("Subtracting two positive numbers", () => {
    expect(subtract("456", "123")).toBe("333");
  });

  test("Subtracting a smaller number from a larger number", () => {
    expect(subtract("123", "456")).toBe("-333");
  });

  test("Subtracting two equal positive numbers", () => {
    expect(subtract("123", "123")).toBe("0");
  });

  test("Subtracting a positive number from zero", () => {
    expect(subtract("0", "123")).toBe("-123");
  });

  test("Subtracting zero from a positive number", () => {
    expect(subtract("123", "0")).toBe("123");
  });

  test("Subtracting a negative number from a positive number", () => {
    expect(subtract("123", "-456")).toBe("579");
  });

  test("Subtracting a positive number from a negative number", () => {
    expect(subtract("-123", "456")).toBe("-579");
  });

  test("Subtracting two negative numbers", () => {
    expect(subtract("-456", "-123")).toBe("-333");
    expect(subtract("-123", "-456")).toBe("333");
  });

  test("Subtracting large positive numbers", () => {
    expect(subtract("98765432109876543210", "12345678901234567890")).toBe(
      "86419753208641975320"
    );
  });

  test("Subtracting large negative numbers", () => {
    expect(subtract("-98765432109876543210", "-12345678901234567890")).toBe(
      "-86419753208641975320"
    );
  });

  test("Subtracting a large positive number from a smaller positive number", () => {
    expect(subtract("12345678901234567890", "98765432109876543210")).toBe(
      "-86419753208641975320"
    );
  });

  test("Subtracting zero from a large positive number", () => {
    expect(subtract("99999999999999999999", "0")).toBe("99999999999999999999");
  });

  test("Subtracting zero from a large negative number", () => {
    expect(subtract("-99999999999999999999", "0")).toBe(
      "-99999999999999999999"
    );
  });

  test("Subtracting numbers with leading zeros", () => {
    expect(subtract("000456", "123")).toBe("333");
    expect(subtract("123", "000456")).toBe("-333");
  });

  test("Subtracting negative numbers with leading zeros", () => {
    expect(subtract("-000456", "-123")).toBe("-333");
    expect(subtract("-123", "-000456")).toBe("333");
  });

  test("Subtracting very large numbers", () => {
    const largeNum1 = "1234567890123456789012345678901234567890";
    const largeNum2 = "9876543210987654321098765432109876543210";
    expect(subtract(largeNum2, largeNum1)).toBe(
      "8641975320864197532086419753208641975320"
    );
  });

  test("Subtracting very large negative numbers", () => {
    const largeNum1 = "-1234567890123456789012345678901234567890";
    const largeNum2 = "-9876543210987654321098765432109876543210";
    expect(subtract(largeNum2, largeNum1)).toBe(
      "-8641975320864197532086419753208641975320"
    );
  });

  test("Subtracting a small positive number from a large negative number", () => {
    expect(subtract("-98765432109876543210", "100")).toBe(
      "-98765432109876543310"
    );
  });

  test("Subtracting a large negative number from a small positive number", () => {
    expect(subtract("100", "-98765432109876543210")).toBe(
      "98765432109876543310"
    );
  });
});
