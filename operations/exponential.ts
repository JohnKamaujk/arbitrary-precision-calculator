import { compareStrings } from "./compareStrings";
import { multiply } from "./multiply";

export function exponential(base: string, exponent: string): string {
  // Remove leading zeros from base and exponent
  base = base.replace(/^0+/, "") || "0";
  exponent = exponent.replace(/^0+/, "") || "0";

  if (exponent === "0") {
    return "1"; // Any number raised to the power of 0 is 1
  }

  if (base === "0") {
    return "0"; // 0 raised to any positive power is 0
  }

  let result = "1"; // Start with 1
  let currentExponent = "0"; // Initialize current exponent to 0

  while (compareStrings(currentExponent, exponent) < 0) {
    result = multiply(result, base); // Multiply result by base
    currentExponent = increment(currentExponent); // Increment exponent
  }

  return result;
}

// Helper function to increment a string-based number by 1
function increment(num: string): string {
  let carry = 1;
  let result = "";

  for (let i = num.length - 1; i >= 0; i--) {
    let digit = parseInt(num[i], 10) + carry;
    if (digit === 10) {
      result = "0" + result;
      carry = 1;
    } else {
      result = digit.toString() + result;
      carry = 0;
    }
  }

  if (carry === 1) {
    result = "1" + result;
  }

  return result;
}

