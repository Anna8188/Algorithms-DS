"use strict";

// Task 6.

const rotate = (arr, N) => {
  if (N === 0) {
    return arr;
  }
  if (N < 0) {
    var el = arr.pop();
    arr.unshift(el);
    N++;
  } else {
    var el = arr.shift();
    arr.push(el);
    N--;
  }
  return rotate(arr, N);
};
