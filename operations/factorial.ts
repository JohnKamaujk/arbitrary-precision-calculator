import { compareStrings } from "./compareStrings";
import { multiply } from "./multiply";

export function factorial(n: string): string {
  if (n[0] === "-") {
    throw new Error("Factorial is not defined for negative numbers");
  }

  n = n.replace(/^0+/, "") || "0";

  if (n === "0" || n === "1") {
    return "1";
  }

  let result = "1"; // Start with 1 (factorial of 0 and 1)

  let current = "2"; // Start from 2 as multiplication with 1 doesn't change the result

  while (compareStrings(current, n) <= 0) {
    result = multiply(result, current); // Multiply the result by the current number
    current = increment(current); // Increment the current number by 1
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
