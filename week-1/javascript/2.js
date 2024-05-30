/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */

function arrSum(...arr){
    let total = 0;
    for (const n of arr){
        total += n;
    }
    return total;
}
console.log(arrSum(5,5))
