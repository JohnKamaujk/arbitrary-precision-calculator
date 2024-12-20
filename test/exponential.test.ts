import { exponentiation } from "../operations/exponentiation";

describe("Exponentiation Function", () => {
  it("should handle small positive integer exponents", () => {
    expect(exponentiation("2", "3")).toBe("8");
    expect(exponentiation("5", "4")).toBe("625");
  });

  it("should handle zero as an exponent (any number raised to zero is 1)", () => {
    expect(exponentiation("2", "0")).toBe("1");
    expect(exponentiation("123456789", "0")).toBe("1");
    expect(exponentiation("-5", "0")).toBe("1");
    expect(exponentiation("0", "0")).toBe("1");
  });

  it("should handle zero as the base (zero raised to any positive exponent is 0)", () => {
    expect(exponentiation("0", "1")).toBe("0");
    expect(exponentiation("0", "100")).toBe("0");
  });

  it("should handle negative integer exponents", () => {
    expect(exponentiation("2", "-2")).toBe(".25");
    expect(exponentiation("5", "-3")).toBe(".008");
    expect(exponentiation("-2", "-3")).toBe("-.125");
    expect(exponentiation("-2", "-4")).toBe(".0625");
  });

  it("should handle large numbers as the base", () => {
    expect(exponentiation("123456789", "2")).toBe("15241578750190521");
    expect(exponentiation("987654321", "3")).toBe("963418328693495609108518161");
  });

  it("should handle large numbers as the exponent", () => {
    expect(exponentiation("2", "50")).toBe("1125899906842624");
    expect(exponentiation("10", "20")).toBe("100000000000000000000");
  });

  it("should handle both base and exponent with leading zeros", () => {
    expect(exponentiation("00002", "0003")).toBe("8");
    expect(exponentiation("00010", "0004")).toBe("10000");
  });

  it("should handle negative base with positive exponents", () => {
    expect(exponentiation("-2", "3")).toBe("-8");
    expect(exponentiation("-2", "4")).toBe("16");
  });
});
