const reverseString = function (stg) {
  let newString = '';
  for (let i = stg.length - 1; i >= 0; i--) {
    newString += stg[i];
  }
  return newString;
};

module.exports = reverseString;
