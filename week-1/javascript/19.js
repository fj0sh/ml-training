/**
 * Write a function that merges two arrays into a single array and removes duplicates.
 *
 * Example:
 * - merge([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4]
 * - merge([1, 2, 3], [3, 4, 5]) should return [1, 2, 3, 4, 5]
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

const arrMerger = (arr1, arr2) => {

   let newArr = arr1.concat(arr2);
   let mergedArr = [...new Set(newArr)]

   return mergedArr
}

console.log(arrMerger([1,2,3,4,5],[1,2,3,4,5,6]));
