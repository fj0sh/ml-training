/**
 * Write a function that prints the numbers from 1 to a given number.
 * But for multiples of three print 'Fizz' instead of the number and for the
 * multiples of five print 'Buzz'.
 * For numbers which are multiples of both three and five print 'FizzBuzz'.
 * @param {number} n The number to print.
 */

const fizzBuzz = (n: number) => {
  for (let x = 1; x <= n; x++) {
    if (x % 15 == 0) {
      console.log("fizzbuzz");
    } else if (x % 3 == 0) {
      console.log("fizz");
    } else if (x % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(x);
    }
  }
};

fizzBuzz(20);
