/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is less than 0
 * @param {number} num The number to check.
 * @throws {Error} If the number is not a positive integer.
 */

const negativeError = (num) => {
    try {
        if(num < 0){throw( "Number is less than Zero")}  
        return "Number passed"
    } catch (error) {
        return error
    }
}

console.log(negativeError(-5));
