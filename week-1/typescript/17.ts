/**
 * Write a function that takes a password input and validates it based on the following rules:
 * - The password must be at least 8 characters long.
 * - The password must contain at least one uppercase letter.
 * - The password must contain at least one lowercase letter.
 * - The password must contain at least one number.
 * - The password must contain at least one special character.
 *
 * It must return a message whether the password is valid or not.
 *
 * Example:
 * - if less than 8 characters, return "Password must be at least 8 characters long"
 * - if no uppercase letter, return "Password must contain at least one uppercase letter"
 * - if no lowercase letter, return "Password must contain at least one lowercase letter"
 * - if no number, return "Password must contain at least one number"
 * - if no special character, return "Password must contain at least one special character"
 * - if all rules are met, return "Password is valid"
 *
 * @param {string} password
 * @returns {string}
 */

const char = '!@#$%^&*()_+=<>/:"[]?';
const arrChar = char.split("");

function passValidator(password:string):string {
  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }

  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  let hasChar = false;

  for (let i of password) {
    if (i >= "a" && i <= "z") {
      hasLower = true;
    } else if (i >= "A" && i <= "Z") {
      hasUpper = true;
    } else if (!isNaN(parseInt(i))) {
        hasNum = true;
    } else if (char.includes(i)) {
      hasChar = true;
    }
  }

  if (hasUpper && hasLower && hasNum && hasChar) {
    return "Password is valid";
  }

  if (!hasLower) {
    return "Password must contain at least one lowercase letter";
  } else if (!hasUpper) {
    return "Password must contain at least one uppercase letter";
  } else if (!hasNum) {
    return "Password must contain at least one number";
  } else if (!hasChar) {
    return "Password must contain at least one special character";
  }

  return "";
}
console.log(passValidator("?Password123"));
