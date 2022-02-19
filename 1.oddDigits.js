// Task1

const isHaveOddDigit = (number) => {
  if (number === 0) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  return isHaveOddDigit(Math.floor(number / 10));
};
