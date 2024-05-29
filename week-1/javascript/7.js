/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */

const integerCheck = (num) => {
    try {
        if(typeof num !== 'number'){
            throw ("The Number Inputted is not an Integer")
        }
    } catch (error) {
        console.log(error);
    }
}

integerCheck('2')