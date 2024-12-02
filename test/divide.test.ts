import { divide } from "../operations/divide";

describe("Divide function", () => {
  test("Dividing two positive numbers", () => {
    expect(divide("456", "123")).toBe("3.707317073");
  });

  test("Dividing a positive and a negative number", () => {
    expect(divide("456", "-123")).toBe("-3.707317073");
  });

  test("Dividing two negative numbers", () => {
    expect(divide("-456", "-123")).toBe("3.707317073");
  });

  test("Dividing zero by a positive number", () => {
    expect(divide("0", "123")).toBe("0");
  });

  test("Dividing zero by a negative number", () => {
    expect(divide("0", "-123")).toBe("0");
  });

  test("Dividing large positive numbers", () => {
    expect(
      divide("1219326311370217952237463801111263526900", "98765432109876543210")
    ).toBe("12345678901234567890");
  });

  test("Dividing large negative numbers", () => {
    expect(
      divide(
        "-1219326311370217952237463801111263526900",
        "-98765432109876543210"
      )
    ).toBe("12345678901234567890");
  });

  test("Dividing a large positive number by a large negative number", () => {
    expect(
      divide(
        "1219326311370217952237463801111263526900",
        "-98765432109876543210"
      )
    ).toBe("-12345678901234567890");
  });

  test("Dividing a large positive number by one", () => {
    expect(divide("12345678901234567890", "1")).toBe("12345678901234567890");
  });

  test("Dividing a large negative number by one", () => {
    expect(divide("-12345678901234567890", "1")).toBe("-12345678901234567890");
  });

  test("Dividing a large positive number by zero", () => {
    expect(() => divide("12345678901234567890", "0")).toThrow(
      "Division by zero is undefined"
    );
  });

  test("Dividing numbers with leading zeros", () => {
    expect(divide("000456", "00123")).toBe("3.707317073");
    expect(divide("0000456", "-00123")).toBe("-3.707317073");
  });

  test("Dividing negative numbers with leading zeros", () => {
    expect(divide("-000456", "-00123")).toBe("3.707317073");
    expect(divide("-0000456", "00123")).toBe("-3.707317073");
  });

  test("Dividing a small positive number by a large positive number", () => {
    expect(divide("100", "98765432109876543210")).toBe("0");
  });

  test("Dividing a small negative number by a large negative number", () => {
    expect(divide("-100", "-98765432109876543210")).toBe("0");
  });

  test("Dividing a very large number by one", () => {
    const largeNum = "9876543210987654321098765432109876543210";
    expect(divide(largeNum, "1")).toBe(largeNum);
  });

  test("Dividing one by a large number", () => {
    const largeNum = "9876543210987654321098765432109876543210";
    expect(divide("1", largeNum)).toBe("0");
  });

  test("Dividing one by itself", () => {
    expect(divide("1", "1")).toBe("1");
  });

  test("Dividing a number by itself", () => {
    expect(divide("123456", "123456")).toBe("1");
  });

  test("Dividing negative one by a number", () => {
    expect(divide("-1", "123456")).toBe("0");
    expect(divide("-1", "-123456")).toBe("0");
  });

  test("Dividing by a number with a result in fractions (truncated to integer)", () => {
    expect(divide("123", "10")).toBe("12.3");
    expect(divide("123", "-10")).toBe("-12.3");
    expect(divide("-123", "10")).toBe("-12.3");
    expect(divide("-123", "-10")).toBe("12.3");
  });
});
