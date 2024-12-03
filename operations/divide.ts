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

  // Remove leading 0s and negative sign if any
  const normalize = (num: string) => num.replace(/^0+/, "") || "0";
  dividend = normalize(dividend.replace("-", ""));
  divisor = normalize(divisor.replace("-", ""));

  if (compareStrings(divisor, dividend) > 0) return "0";

  let quotient = "";
  let remainder = "";
  let isFractional = false;
  let decimalPlaces = 0;

  for (
    let i = 0;
    i < dividend.length || (isFractional && decimalPlaces < precision);
    i++
  ) {
    remainder += dividend[i] || "0";
    remainder = remainder.replace(/^0+/, "");

    let count = 0;
    while (compareStrings(remainder, divisor) >= 0) {
      remainder = subtract(remainder, divisor);
      count++;
    }

    quotient += count.toString();

    if (i >= dividend.length - 1 && remainder !== "0" && !isFractional) {
      isFractional = true;
      quotient += ".";
    }

    if (isFractional) decimalPlaces++;
  }

  // Trim trailing zeroes in the fractional part
  if (quotient.includes(".")) {
    quotient = quotient.replace(/\.?0+$/, "");
  }

  quotient = quotient.replace(/^0+/, "") || "0";
  return isNegative ? `-${quotient}` : quotient;
}
