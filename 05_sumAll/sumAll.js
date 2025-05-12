const sumAll = function (num1, num2) {
  let sum = 0;
  let difference = 0;
  let hasNegativeNumbers = num1 < 0 || num2 < 0;
  let isNotInteger = !Number.isInteger(num1) || !Number.isInteger(num2);

  if (hasNegativeNumbers || isNotInteger) {
    return "ERROR";
  }

  if (num1 < num2) {
    difference = num2 - num1;
    for (let i = 0; i <= difference; i++) {
      sum += num1 + i;
    }
  } else {
    difference = num1 - num2;
    for (let i = 0; i <= difference; i++) {
      sum += num2 + i;
    }
  }
  const result = sum;
  return result;
};

// Do not edit below this line
module.exports = sumAll;
