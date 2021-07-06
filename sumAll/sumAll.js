const sumAll = function (x, y) {
  if (x < y) {
    for (let i = x; i <= y; i++) {
      x += i;
    }
    return x - 1;
  } else {
    for (let i = y; i <= x; i++) {
      y += i;
    }
    return y - 1;
  }
};
module.exports = sumAll;
