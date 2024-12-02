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

  //remove leading 0s and negative sign if any
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

  quotient = quotient.replace(/^0+/, "") || "0";
  return isNegative ? `-${quotient}` : quotient;
}

function compareStrings(a: string, b: string): number {
  // Compare lengths first
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;

  // If lengths are equal, compare digit by digit
  for (let i = 0; i < a.length; i++) {
    const digitA = parseInt(a[i], 10);
    const digitB = parseInt(b[i], 10);
    if (digitA > digitB) return 1;
    if (digitA < digitB) return -1;
  }

  // If all digits are equal, the numbers are the same
  return 0;
}
