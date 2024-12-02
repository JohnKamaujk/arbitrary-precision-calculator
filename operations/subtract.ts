export function subtract(a: string, b: string): string {
  // Check if a is smaller than b and needs to return a negative result
  let isNegative = false;

  // Compare the numbers by their lengths and lexicographically
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

  return 0; // Equal
}
