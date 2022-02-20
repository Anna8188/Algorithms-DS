"use strict";

// Task 4.

const removeFirstEl = (arr, newArr = [], index = 1) => {
  if (newArr.length + 1 === arr.length) {
    return newArr;
  }
  newArr.push(arr[index]);
  index++;
  return removeFirstEl(arr, newArr, index);
};
