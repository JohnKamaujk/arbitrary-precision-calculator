import { subtract } from "./subtract";

export function add(a: string, b: string): string {
  // Remove leading zeros from both numbers
  a = a.replace(/^0+/, "");
  b = b.replace(/^0+/, "");

  // Check for negative numbers
  const isANegative = a.startsWith("-");
  const isBNegative = b.startsWith("-");

  // If both are negative, add absolute values then prepend -ve sign
  if (isANegative && isBNegative) {
    a = a.slice(1);
    b = b.slice(1);
    return "-" + add(a, b);
  }

  // If one number is negative, treat it as subtraction
  if (isANegative || isBNegative) {
    if (isANegative) {
      return subtract(b, a.slice(1)); // Treat subtracting negative a from positive b
    } else {
      return subtract(a, b.slice(1)); // Treat subtracting negative b from positive a
    }
  }

  // If both numbers are positive, perform normal addition
  let carry = 0;
  let result: string[] = [];
  a = a.padStart(Math.max(a.length, b.length), "0");
  b = b.padStart(Math.max(a.length, b.length), "0");

  for (let i = a.length - 1; i >= 0; i--) {
    const sum = parseInt(a[i], 10) + parseInt(b[i], 10) + carry;
    result.push((sum % 10).toString());
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    result.push(carry.toString());
  }

  return result.reverse().join("");
}
