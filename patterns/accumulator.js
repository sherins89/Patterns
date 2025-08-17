/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") return NaN;
  if (n < 0) return undefined;
  if (typeof n === 0) return 1;
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i; // update the ingredients or the value //
  }
  return product;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== "number") return null;
  if (n <= 0) return [];

  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i); // list of arr are updated //
  }
  return arr;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  if (!Array.isArray(strings) || strings.length === 0) return ""; //avoid length on not an array item//
  let longest = "";
  for (let string of strings) {
    if (typeof str === "strings" && str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  if (!Array.isArray(attendance)) return 0;
  return attendance.filter(Boolean).length;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== "string") return null;

  let complementaryDNA = "";
 for (let base of dna) {
  switch (base){
    case "A": complementaryDNA += "T"; break;
    case "T": complementaryDNA += "A"; break;
        case "C": complementaryDNA += "G"; break;
            case "G": complementaryDNA += "C"; break;
            default; complementaryDNA += base;
  }
 } 
 return complementaryDNA;
}
