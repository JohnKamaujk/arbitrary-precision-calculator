import { subtract } from "./subtract";
import { compareStrings } from "./compareStrings";
import { multiply } from "./multiply";

export function modulo(dividend: string, divisor: string): string {
  if (divisor === "0") {
    throw new Error("Modulo by zero is undefined");
  }

  // remove leading zeros
  dividend = dividend.replace(/^0+/, "") || "0";
  divisor = divisor.replace(/^0+/, "") || "0";

  if (compareStrings(dividend, divisor) < 0) {
    return dividend;
  }

  let remainder = dividend;

  while (compareStrings(remainder, divisor) >= 0) {
    remainder = subtract(remainder, divisor);
  }

  return remainder;
}

