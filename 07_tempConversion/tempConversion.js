const convertToCelsius = function(temp) {
  temp = (temp - 32)/1.8;
  temp = Math.round(temp * 10) / 10;
  return temp;
};

const convertToFahrenheit = function(temp) {
  temp = (temp * 1.8) + 32;
  temp = Math.round(temp * 10)/10;
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
