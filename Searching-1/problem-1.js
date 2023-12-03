// Given a sorted arr[N] search if k is present or not
// L = Left most
// H = Right most

const binarySearch = (A, K) => {
  let N = A.length;
  let L = 0,
    H = N - 1;
  while (L <= H) {
    let middle = Math.floor((L + H) / 2);
    if (A[middle] === K) {
      return middle;
    } else if (A[middle] > K) {
      H = middle - 1;
    } else {
      L = middle + 1;
    }
  }
  return false;
};

console.log(binarySearch([3, 6, 9, 13, 14, 19, 20, 23, 25, 27], 13));
