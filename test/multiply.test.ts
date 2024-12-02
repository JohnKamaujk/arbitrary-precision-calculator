import { multiply } from "../operations/multiply";

describe("Multiply function", () => {
  test("Multiplying two positive numbers", () => {
    expect(multiply("123", "456")).toBe("56088");
  });

  test("Multiplying a positive and a negative number", () => {
    expect(multiply("123", "-456")).toBe("-56088");
  });

  test("Multiplying two negative numbers", () => {
    expect(multiply("-123", "-456")).toBe("56088");
  });

  test("Multiplying zero and a positive number", () => {
    expect(multiply("0", "123")).toBe("0");
  });

  test("Multiplying zero and a negative number", () => {
    expect(multiply("0", "-123")).toBe("0");
  });

  test("Multiplying large positive numbers", () => {
    expect(multiply("12345678901234567890", "98765432109876543210")).toBe(
      "1219326311370217952237463801111263526900"
    );
  });

  test("Multiplying large negative numbers", () => {
    expect(multiply("-12345678901234567890", "-98765432109876543210")).toBe(
      "1219326311370217952237463801111263526900"
    );
  });

  test("Multiplying a large positive and a large negative number", () => {
    expect(multiply("12345678901234567890", "-98765432109876543210")).toBe(
      "-1219326311370217952237463801111263526900"
    );
  });

  test("Multiplying a large positive number by zero", () => {
    expect(multiply("12345678901234567890", "0")).toBe("0");
  });

  test("Multiplying a large negative number by zero", () => {
    expect(multiply("-12345678901234567890", "0")).toBe("0");
  });

  test("Multiplying numbers with leading zeros", () => {
    expect(multiply("000123", "0456")).toBe("56088");
    expect(multiply("0000123", "00456")).toBe("56088");
  });

  test("Multiplying negative numbers with leading zeros", () => {
    expect(multiply("-000123", "-0456")).toBe("56088");
    expect(multiply("-0000123", "-00456")).toBe("56088");
  });

  test("Multiplying a small positive number with a large negative number", () => {
    expect(multiply("100", "-98765432109876543210")).toBe(
      "-9876543210987654321000"
    );
  });

  test("Multiplying very large numbers", () => {
    const largeNum1 = "123456789012348973851";
    const largeNum2 = "9876543210987653462075";
    expect(multiply(largeNum1, largeNum2)).toBe(
      "1219326311370250388923270885662013795200825"
    );
  });

  test("Multiplying very small and very large numbers", () => {
    const smallNum = "1";
    const largeNum = "9876543210987654321098765432109876543210";
    expect(multiply(smallNum, largeNum)).toBe(largeNum);
  });

  test("Multiplying one and a number", () => {
    expect(multiply("1", "123456")).toBe("123456");
    expect(multiply("1", "-123456")).toBe("-123456");
  });

  test("Multiplying negative one and a number", () => {
    expect(multiply("-1", "123456")).toBe("-123456");
    expect(multiply("-1", "-123456")).toBe("123456");
  });
});
