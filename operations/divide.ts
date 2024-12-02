import { subtract } from "./subtract";

export function divide(dividend: string, divisor: string): string {
  if (divisor === "0") {
    throw new Error("Division by zero is undefined");
  }

  // Remove leading zeros
  dividend = dividend.replace(/^0+/, "") || "0";
  divisor = divisor.replace(/^0+/, "") || "0";

  if (dividend === "0") return "0"; // 0 divided by any number is 0

  // Determine the sign of the result
  const isNegative =
    (dividend[0] === "-" ? 1 : 0) + (divisor[0] === "-" ? 1 : 0) === 1;

  // Remove signs for calculation
  dividend = dividend.replace("-", "");
  divisor = divisor.replace("-", "");

  // If the divisor is greater than the dividend, the result is 0
  if (compareStrings(divisor, dividend) > 0) return "0";

  let quotient = "";
  let remainder = "";

  for (let i = 0; i < dividend.length; i++) {
    remainder += dividend[i];
    remainder = remainder.replace(/^0+/, ""); // Remove leading zeros

    let count = 0;
    while (compareStrings(remainder, divisor) >= 0) {
      remainder = subtract(remainder, divisor);
      count++;
    }

    quotient += count.toString();
  }

  // Remove leading zeros from the quotient
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


// function subtractStrings(a: string, b: string): string {
//   let result = "";
//   let carry = 0;

//   while (a.length < b.length) a = "0" + a;
//   while (b.length < a.length) b = "0" + b;

//   for (let i = a.length - 1; i >= 0; i--) {
//     let diff = parseInt(a[i], 10) - parseInt(b[i], 10) - carry;
//     if (diff < 0) {
//       diff += 10;
//       carry = 1;
//     } else {
//       carry = 0;
//     }
//     result = diff.toString() + result;
//   }

//   return result.replace(/^0+/, "") || "0";
// }
