const convertToCelsius = function (number) {
  const equation = ((number - 32) * 5) / 9;
  const fmtEquation = equation.toFixed(1);
  const output = parseFloat(fmtEquation);

  return output;
};

const convertToFahrenheit = function (number) {
  const equation = (number * 9) / 5 + 32;
  const fmtEquation = equation.toFixed(1);
  const output = parseFloat(fmtEquation);

  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
