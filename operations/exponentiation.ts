import { multiply } from "./multiply";
import { divide } from "./divide";
import { compareStrings } from "./compareStrings";

export function exponentiation(base: string, exponent: string): string {
  base = base.replace(/^0+/, "") || "0";
  exponent = exponent.replace(/^0+/, "") || "0";

  const isNegativeExponent = exponent[0] === "-";
  if (isNegativeExponent) {
    exponent = exponent.slice(1); // Remove the negative sign
  }

  if (exponent === "0") return "1"; // Any number raised to the power of 0 is 1

  if (base === "0") return "0"; // 0 raised to any positive power is 0

  let result = "1";
  let currentExponent = "0";

  while (compareStrings(currentExponent, exponent) < 0) {
    result = multiply(result, base);
    currentExponent = increment(currentExponent);
  }

  // Handle negative exponents
  if (isNegativeExponent) {
    result = divide("1", result); // Take the reciprocal of the result
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
