/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels removed.
 */

const vowelArr = ["a", "e", "i", "o", "u"];

const constantRemover = (str: string): string => {
  let inp = str.toLowerCase();
  let res = '';
  for (let char of inp) {
    for (let vowel of vowelArr) {
      if (char.includes(vowel)) {
        res += char;
      }
    }
  }

  return res;
};

console.log(constantRemover("Hello Ward!"));