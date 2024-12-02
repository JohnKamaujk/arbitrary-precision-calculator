import { subtract } from "../operations/subtract";

describe("subtract function", () => {
  // Test: Subtract small numbers
  it("should correctly subtract small numbers", () => {
    expect(subtract("100", "50")).toBe("50");
    expect(subtract("50", "100")).toBe("-50");
  });

  // Test: Subtract where 'a' is smaller than 'b'
  it("should return negative result when 'a' is smaller than 'b'", () => {
    expect(subtract("100", "200")).toBe("-100");
    expect(subtract("123", "456")).toBe("-333");
  });

  // Test: Subtract with leading zeros
  it("should handle numbers with leading zeros", () => {
    expect(subtract("000100", "50")).toBe("50");
    expect(subtract("000050", "000100")).toBe("-50");
    expect(subtract("0000123", "0123")).toBe("0");
  });

  // Test: Subtract equal numbers
  it("should return 0 when both numbers are equal", () => {
    expect(subtract("1000", "1000")).toBe("0");
    expect(subtract("123456789", "123456789")).toBe("0");
  });

  // Test: Subtract numbers with equal lengths
  it("should subtract correctly for numbers with equal lengths", () => {
    expect(subtract("5678", "1234")).toBe("4444");
    expect(subtract("10000", "99999")).toBe("-89999");
  });

  // Test: Subtract numbers with unequal lengths
  it("should subtract correctly for numbers with unequal lengths", () => {
    expect(subtract("1234", "567")).toBe("667");
    expect(subtract("999", "1000")).toBe("-1");
  });

  // Test: Subtract large numbers
  it("should correctly subtract large numbers", () => {
    expect(subtract("12345678901234567890", "98765432109876543210")).toBe(
      "-86419753208641975320"
    );
    expect(subtract("98765432109876543210", "12345678901234567890")).toBe(
      "86419753208641975320"
    );
  });
});
