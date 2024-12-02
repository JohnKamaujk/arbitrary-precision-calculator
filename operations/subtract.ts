import { add } from "./add";

export function subtract(a: string, b: string): string {
  // Handle negative numbers: Determine the sign of each number
  let isNegativeA = a.startsWith("-");
  let isNegativeB = b.startsWith("-");

  // Remove leading negative sign for comparison and subtraction
  if (isNegativeA) a = a.slice(1);
  if (isNegativeB) b = b.slice(1);

  if (isNegativeA && isNegativeB) {
    // Reverse the order and treat as a positive number operation, -a-(-b) == -a+b == b-a
    return subtractPositive(b, a);
  }

  if (isNegativeA) {
    // Add b to negative a on the left(-ve side) of the number line
    return "-" + add(a, b);
  }

  if (isNegativeB) {
    // Add +b to a on the right(+ve side) of the number line, a-(-b) equals a+b
    return add(a, b);
  }

  // Both numbers are positive, subtract directly
  return subtractPositive(a, b);
}

// Helper function for positive number subtraction (both a and b are positive)
function subtractPositive(a: string, b: string): string {
  let isNegative = false;
  if (compare(a, b) < 0) {
    isNegative = true;
    let temp = a;
    a = b;
    b = temp;
  }

  a = a.padStart(Math.max(a.length, b.length), "0");
  b = b.padStart(Math.max(a.length, b.length), "0");

  let result: string[] = [];
  let borrow = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    let diff = parseInt(a[i], 10) - parseInt(b[i], 10) - borrow;

    if (diff < 0) {
      diff += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }

    result.push(diff.toString());
  }

  while (result[result.length - 1] === "0" && result.length > 1) {
    result.pop();
  }

  let finalResult = result.reverse().join("");

  if (isNegative) {
    finalResult = "-" + finalResult;
  }

  return finalResult;
}

// Helper function to compare two arbitrary precision numbers
function compare(a: string, b: string): number {
  // Remove leading zeros
  a = a.replace(/^0+/, "");
  b = b.replace(/^0+/, "");

  // Compare lengths
  if (a.length < b.length) return -1;
  if (a.length > b.length) return 1;

  // Compare lexicographically
  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) return -1;
    if (a[i] > b[i]) return 1;
  }

  return 0;
}
