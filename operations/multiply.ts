export function multiply(a: string, b: string): string {
  a = a.replace(/^0+/, "") || "0";
  b = b.replace(/^0+/, "") || "0";

  if (a === "0" || b === "0") return "0";

  // Determine the sign of the result
  const isNegative = (a[0] === "-" ? 1 : 0) + (b[0] === "-" ? 1 : 0) === 1;

  // Remove signs for calculation
  a = a.replace("-", "");
  b = b.replace("-", "");

  const result = Array(a.length + b.length).fill(0);

  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      const product =
        parseInt(a[i], 10) * parseInt(b[j], 10) + result[i + j + 1];
      result[i + j + 1] = product % 10; // Store the unit digit
      result[i + j] += Math.floor(product / 10); // Carry over the rest
    }
  }

  // Convert result array to string, remove leading zeros
  let finalResult = result.join("").replace(/^0+/, "");

  if (isNegative) finalResult = "-" + finalResult;

  return finalResult;
}
