/**
 * Write a function for loop that iterates from 1 to a given number. It then checks and outputs whether the number is even or odd.
 * @param {number} n The number to check.
 */


function numberIterator(n){
    for(x = 1; x <= n; x++){
        if (x % 2 == 0) {
            console.log("even");
        }else{
            console.log("odd");
        }
    }
}

console.log(numberIterator(20));

