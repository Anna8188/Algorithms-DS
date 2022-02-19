// Task2
const getArr = (arr, minEl = Infinity) => {
  let newArr = arr;

  if (newArr.length === 0) {
    if (minEl === Infinity) {
      return -1;
    }
    return minEl;
  }

  let currentEl = newArr.pop();

  if (currentEl >= 0 && currentEl < minEl) {
    minEl = currentEl;
  }

  return getArr(newArr, minEl);
};
