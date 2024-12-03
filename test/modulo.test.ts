import { modulo } from "../operations/modulo";

describe("Modulo function", () => {
  it("should handle large dividend and small divisor", () => {
    expect(modulo("5678787", "17")).toBe("5");
  });
  it("should handle small dividend and large divisor", () => {
    expect(modulo("32", "5678956432467")).toBe("32");
  });
  it("should handle positive dividend and negative divisor", () => {
    expect(modulo("7", "-3")).toBe("-2");
  });

  it("should handle negative dividend and negative divisor", () => {
    expect(modulo("-7", "-3")).toBe("-1");
  });

  it("should handle negative dividend and positive divisor", () => {
    expect(modulo("-7", "3")).toBe("2");
  });

  it("should handle positive dividend and positive divisor", () => {
    expect(modulo("7", "3")).toBe("1");
  });

  it("should handle zero dividend", () => {
    expect(modulo("0", "3")).toBe("0");
  });

  it("should handle divisor larger than dividend", () => {
    expect(modulo("2", "3")).toBe("2");
  });

  it("should handle negative divisor larger than dividend", () => {
    expect(modulo("2", "-3")).toBe("-1");
  });
});
