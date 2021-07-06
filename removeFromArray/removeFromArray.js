const removeFromArray = function (x, ...restParam) {
  let array = x.filter((x) => !restParam.includes(x));
  return array;
};

module.exports = removeFromArray;

//check if item is in array and remove it. ignore everything else.
