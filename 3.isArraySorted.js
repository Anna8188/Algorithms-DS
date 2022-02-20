"use strict";

// Task 3.

const isArraySorted = (arr, index = 0) => {
  if (arr[index + 1] - arr[index] < 0) {
    return index;
  }
  if (arr.length - 1 === index) {
    return -1;
  }
  index++;
  return isArraySorted(arr, index);
};
