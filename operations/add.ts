export function add(a: string, b: string): string {
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
