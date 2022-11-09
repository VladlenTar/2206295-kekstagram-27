const getRandomNumber = function (minVlaue, maxValue) {
  if (minVlaue < 0 || maxValue < 0) {
    return NaN;
  }
  minVlaue = Math.ceil(Math.min(a, b));
  maxValue = Math.floor(Math.max(a, b));
  let randomNumber = Math.floor(Math.random() * (maxValue - minVlaue + 1)) + minVlaue
  return randomNumber;
}

const checkStringLength = function (lenght, maxStringLength) {
  return lenght <= maxStringLength;
}
