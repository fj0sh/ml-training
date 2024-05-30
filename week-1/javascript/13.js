/**
 * Write a function that accepts a string and converts the first letter of each word to uppercase.
 * @param {string} str The string to convert.
 * @return {string} The string with the first letter converted to uppercase.
 *
 * Example string: "The quick brown fox jumps over the lazy dog"
 * Expected output: "The Quick Brown Fox Jumps Over The Lazy Dog"
 */

function upperCaser(str) {
    let words = str.split(" ");
    for (let x = 0; x < words.length; x++) {
      words[x] = words[x][0].toUpperCase() + words[x].substring(1);
    }
  
    return words.join(" ");
  }
  
  console.log(upperCaser("The quick brown fox jumps over the lazy dog"));

  