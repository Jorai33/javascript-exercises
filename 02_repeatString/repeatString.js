const repeatString = function (string, num) {
  let output = "";

  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      output += string;
    }
  } else {
    output = "ERROR";
  }

  const repeatedString = output;

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
