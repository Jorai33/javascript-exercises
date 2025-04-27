const reverseString = function (message) {
  let output = "";

  for (let i = 1; i <= message.length; i++) {
    output += message[message.length - i];
  }

  return output;
};

// Do not edit below this line
module.exports = reverseString;
