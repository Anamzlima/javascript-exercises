const convertToCelsius = function(temperature) {
  const celsiusTemperature = (temperature - 32) * 5/9;
  
  return parseFloat(celsiusTemperature.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  const fahrenheitTemp = temperature * 9/5 + 32;
  return parseFloat(fahrenheitTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
