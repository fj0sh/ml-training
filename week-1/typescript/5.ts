/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */

const celsiusConvert = (celsius: number): number => {
  const fahrenheit = (9 / 5) * celsius + 32;
  return fahrenheit;
};

console.log(`${celsiusConvert(60)}°F`);
