const convertToCelsius = function(tempF) {
  const RATIO = 5/9;
  const OFFSET = -32;
  
  let outTemp = (tempF + OFFSET) * RATIO;

  return Math.round(outTemp * 10) / 10
};

const convertToFahrenheit = function(tempC) {
  const RATIO = 9/5;
  const OFFSET = 32;

  let outTemp = (tempC * RATIO) + OFFSET;

  return Math.round(outTemp * 10) / 10

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
