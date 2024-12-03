/**
 * Compares two strings representing large numbers.
 *
 * This function is used to compare two arbitrary-precision numbers represented as strings.
 * It performs the comparison by checking the length of the strings first, and if the lengths
 * are equal, it compares the individual digits from left to right.
 *
 * @param {string} a - The first string representing the large number to compare.
 * @param {string} b - The second string representing the large number to compare.
 *
 * @returns {number} - Returns:
 *   - `1` if `a` is greater than `b`.
 *   - `-1` if `a` is less than `b`.
 *   - `0` if both numbers are equal.
 *
 * @example
 * compareStrings("12345", "12346"); // Returns -1
 * compareStrings("12346", "12345"); // Returns 1
 * compareStrings("12345", "12345"); // Returns 0
 */
export function compareStrings(a: string, b: string): number {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;

  for (let i = 0; i < a.length; i++) {
    const digitA = parseInt(a[i], 10);
    const digitB = parseInt(b[i], 10);
    if (digitA > digitB) return 1;
    if (digitA < digitB) return -1;
  }

  return 0;
}
