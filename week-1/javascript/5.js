/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */

const celsiusConverter = (celsius) => {
    const fahrenheit = (9/5 * celsius) + 32
    console.log(`${celsius}°C = ${fahrenheit}°F`);
}

celsiusConverter(60)
