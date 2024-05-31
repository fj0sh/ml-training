/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */

const intCheck = (num: number | any) => {
  try {
    if (typeof num !== "number") {
      //   throw new Error("The Number Inputted is not an Integer");
      throw "The Number Inputted is not an Integer";
    }
    console.log("pass");
  } catch (error) {
    console.log(error);
  }
};

intCheck("12");
