function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  // var sums = 0;
  // for (var i = fromN; i <= toN; i++) {
  //   sums += i;
  // }
  // return sums;
  if (fromN === toN) {
    return fromN;
  }
  return fromN + sum(fromN + 1, toN);
}
// 3,7 = 3 + 4 + 5 + 6 + 7
// fromN + toN-1

module.exports = sum;
