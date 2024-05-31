    /**
     * Write a function that accepts an array of numbers and displays the highest and lowest numbers in the array.
     * @param {number[]} arr The array of numbers.
     * @return {string} The highest and lowest numbers in the array.
     *
     * Example array: [5, 2, 8, 1, 9, 3]
     * Expected output: "The lowest number is 1 and the highest number is 9."
     */

    let arr = [5, 2, 8, 1, 9, 3]

    const arrayCheck = () => {
        const sorted = arr.sort()

        console.log(`The lowest number is ${sorted[0]} and the highest number is ${sorted[arr.length-1]}.`)
    }

arrayCheck(arr);