// Given an arr[N], first N-1 elements are sorted, sort entire arr[]
// Note : No extra space is allowed
// Insertion Step

const sortStep = (arr) => {
  let len = arr.length;
  let count = 0;
  for (let i = len - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      count++;
    }
  }
  return {
    arr,
    count,
  };
};

console.log(sortStep([2, 6, 10, 14, 20, 7]));
