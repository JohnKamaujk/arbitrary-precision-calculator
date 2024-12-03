import { compareStrings } from "./compareStrings";
import { subtract } from "./subtract";

export function divide(
  dividend: string,
  divisor: string,
  precision = 10
): string {
  if (divisor === "0") {
    throw new Error("Division by zero is undefined");
  }

  const isNegative =
    (dividend[0] === "-" ? 1 : 0) + (divisor[0] === "-" ? 1 : 0) === 1;

  // Normalize inputs: remove leading zeros and handle signs
  const normalize = (num: string) => num.replace(/^0+/, "") || "0";
  dividend = normalize(dividend.replace("-", ""));
  divisor = normalize(divisor.replace("-", ""));

  if (divisor === "0") throw new Error("Division by zero is undefined");

  if (dividend === "0") return "0";

  if (compareStrings(divisor, dividend) > 0) {
    // If divisor > dividend, result starts as fractional
    dividend = "0".repeat(divisor.length - dividend.length) + dividend;
  }

  let quotient = "";
  let remainder = "0";
  let isFractional = false;
  let decimalPlaces = 0;

  for (
    let i = 0;
    i < dividend.length || (isFractional && decimalPlaces < precision);
    i++
  ) {
    remainder += dividend[i] || "0";
    remainder = remainder.replace(/^0+/, "") || "0";

    let count = 0;
    while (compareStrings(remainder, divisor) >= 0) {
      remainder = subtract(remainder, divisor);
      count++;
    }

    quotient += count.toString();

    // Check for fractional part
    if (i >= dividend.length - 1 && remainder !== "0" && !isFractional) {
      isFractional = true;
      quotient += ".";
    }

    if (isFractional) {
      decimalPlaces++;
    }
  }

  // Remove trailing zeroes from the fractional part
  if (quotient.includes(".")) {
    quotient = quotient.replace(/\.?0+$/, "");
  }

  quotient = quotient.replace(/^0+/, "") || "0";
  return isNegative ? `-${quotient}` : quotient;
}
