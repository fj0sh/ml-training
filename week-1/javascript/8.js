/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels.
 */

const vowels = ['a','e','i','o','u']

const vowelReturner = (str) => {
    let inp = str.toLowerCase()
    for(x in inp){
        for(i in vowels){
            if(inp[x].includes(vowels[i])){
                console.log(inp[x]);
            }
        }
    }
}

vowelReturner('Hello Warld!')