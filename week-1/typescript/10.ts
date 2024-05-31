/**
 * Write a function that accepts 2 numbers as parameters and throws a custom 'Error' if the second number is 0
 * @param {number} num1 The first number to check.
 * @param {number} num2 The second number to check.
 * @throws {Error} If the second number is 0.
 */

const zeroChecker = (num1: number, num2: number) => {
  try {
    if (num2 === 0) {
      //   throw "Second Number is Zero";
      throw new Error("Second Number is Zero");
    }
    return "number passed";
  } catch (error) {
    return error;
  }
};

console.log(zeroChecker(2, 10));
