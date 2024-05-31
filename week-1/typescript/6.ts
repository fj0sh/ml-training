/**
 * Write a function that converts Fahrenheit to Celsius.
 * Expected output: 140°F = 60°C.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */

const fahrenheitConvert = (fahrenheit: number): number => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit}°F = ${celsius}°C`);
  return fahrenheit;
};

fahrenheitConvert(140);
