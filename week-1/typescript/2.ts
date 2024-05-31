/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */

function Sum(...arr: number[]): number {
  let total: number = 0;
  for (const n of arr) {
    total += n;
  }
  return total;
}
console.log(Sum(5, 20));
