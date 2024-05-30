/**
 * Write a function that takes an array of numbers and throws a custom 'Error' if the array is empty.
 * @param {number[]} arr The array to check.
 * @throws {Error} If the array is empty.
 */

function arrayHandler(...arr){
    try {
        if(arr.length === 0){
            throw "Array is Empty"
        }

        return arr.length
    } catch (error) {
        return error
    }
}

console.log(arrayHandler()); 