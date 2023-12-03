// Given arr[N] sort it using Insertion Step

const insertionSort = (arr) => {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(insertionSort([8, 7, 5, 2, 4, 1]));
