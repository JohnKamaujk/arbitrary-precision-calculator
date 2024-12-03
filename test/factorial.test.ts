import { factorial } from "../operations/factorial";

describe("factorial function", () => {
  it("should return 1 for factorial of 0", () => {
    expect(factorial("0")).toBe("1");
  });

  it("should return 1 for factorial of 1", () => {
    expect(factorial("1")).toBe("1");
  });

  it("should return 2 for factorial of 2", () => {
    expect(factorial("2")).toBe("2");
  });

  it("should return 6 for factorial of 3", () => {
    expect(factorial("3")).toBe("6");
  });

  it("should return 120 for factorial of 5", () => {
    expect(factorial("5")).toBe("120");
  });

  it("should return 720 for factorial of 6", () => {
    expect(factorial("6")).toBe("720");
  });

  it("should return the correct result for a large number (20!)", () => {
    expect(factorial("20")).toBe("2432902008176640000");
  });

  it("should return the correct result for a very large number (50!)", () => {
    expect(factorial("50")).toBe(
      "30414093201713378043612608166064768844377641568960512000000000000"
    );
  });

  it("should throw an error for negative numbers", () => {
    expect(() => factorial("-5")).toThrowError(
      "Factorial is not defined for negative numbers"
    );
  });

  it("should return the correct result for a number with leading zeros (0003!)", () => {
    expect(factorial("0003")).toBe("6");
  });

  it("should return the correct result for a large number with leading zeros (000050!)", () => {
    expect(factorial("000050")).toBe(
      "30414093201713378043612608166064768844377641568960512000000000000"
    );
  });

  it("should return the correct result for an extremely large number (100!)", () => {
    expect(factorial("100")).toBe(
      "93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000"
    );
  });
});
