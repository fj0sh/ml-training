/**
 * Write a function that accepts a string as input and swaps the case of each character in the string.
 *
 * Example:
 * - swapCase("Hello World") should return "hELLO wORLD"
 *
 * @param {string} str
 * @returns {string}
 */

function caseSwapper(str){
    let res = ''

    for(let x of str){
        if(x === x.toUpperCase()){
            res += x.toLowerCase()
        }else{
            res +=x.toUpperCase()
        }
    }
    return res
}

console.log(caseSwapper("WeLLo HorlD"))