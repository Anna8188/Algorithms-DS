"use strict";

// Task 7.

const getSum = (number, count = 0) => {
  if (10 > count > 0 && number === 0) {
    return count;
  } else if (count >= 10) {
    return getSum(count);
  }
  count = count + (number % 10);
  return getSum(Math.floor(number / 10), count);
};
