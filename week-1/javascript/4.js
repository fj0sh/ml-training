/**
 * Write a function to display the current date and time in the format
 * 'MM-DD-YYYY HH:MM:SS'.
 * @return {string} The current date and time in the format 'MM-DD-YYYY HH:MM:SS'.
 */

const dateTimefn = () => {
    const date = new Date()
    const month  = date.getMonth()
    const days = date.getDay()
    const year = date.getFullYear()

    const hour  = date.getHours()
    const minute = date.getMinutes()
    const seconds = date.getSeconds()
    
    const dateTimeFormat = `${month}-${days}-${year} ${hour}:${minute}:${seconds}`
    return dateTimeFormat
}
console.log(dateTimefn());