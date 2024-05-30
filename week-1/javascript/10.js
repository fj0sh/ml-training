/**
 * Write a function that accepts 2 numbers as parameters and throws a custom 'Error' if the second number is 0
 * @param {number} num1 The first number to check.
 * @param {number} num2 The second number to check.
 * @throws {Error} If the second number is 0.
 */


const secondNumberChecker = (num1, num2) => {
    try {
        if(num2 === 0){
            throw("Second Number is Zero")
        }
            return "number passed"
    } catch (error) {
        return error
    }
}

console.log(secondNumberChecker(5,0))