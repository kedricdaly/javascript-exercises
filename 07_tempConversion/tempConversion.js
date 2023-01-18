const convertToCelsius = function(tempF) {
  const RATIO = 5/9;
  const OFFSET = -32;
  
  return (tempF + OFFSET) * RATIO;
};

const convertToFahrenheit = function(tempC) {
  const RATIO = 9/5;
  OFFSET = 32;

  return (tempC * RATIO) + OFFSET;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
