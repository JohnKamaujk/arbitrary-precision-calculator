import { subtract } from "./subtract";
import { compareStrings } from "./compareStrings";

export function modulo(dividend: string, divisor: string): string {
  const isNegativeDividend = dividend.startsWith("-");
  const isNegativeDivisor = divisor.startsWith("-");

  // Remove signs and leading zeros from both dividend and divisor
  dividend = dividend.replace(/^0+/, "").replace("-", "") || "0";
  divisor = divisor.replace(/^0+/, "").replace("-", "") || "0";

  if (divisor === "0") {
    throw new Error("Modulo by zero is undefined");
  }

  if (dividend === "0") return "0";

  let remainder = dividend;

  while (compareStrings(remainder, divisor) >= 0) {
    remainder = subtract(remainder, divisor);
  }

  // Adjust sign of the remainder based on the divisor
  if (isNegativeDivisor && isNegativeDividend && remainder !== "0") {
    remainder = `-${remainder}`;
  }

  if (isNegativeDivisor && !isNegativeDividend && remainder !== "0") {
    remainder = subtract(divisor, remainder);
    remainder = `-${remainder}`;
  }

  if (isNegativeDividend && !isNegativeDivisor && remainder !== "0") {
    remainder = subtract(divisor, remainder);
  }

  return remainder.replace(/^0+/, "") || "0";
}
