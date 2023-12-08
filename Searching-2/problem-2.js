// Given an input arr[] formed by rotating a distinct sorted array right to left by some no of times.
// Search ele and return index in input arr[] if ele is not present return -1

const searchRotated = (A, B) => {
  const N = A.length;
  let L = 0;
  let R = N - 1;
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (A[mid] === B) {
      return mid;
    }
    if (A[mid] >= A[L]) {
      if (A[L] <= B && B <= A[mid]) {
        R = mid - 1;
      } else {
        L = mid + 1;
      }
    } else {
      if (A[mid] <= B && B <= A[R]) {
        L = mid + 1;
      } else {
        R = mid - 1;
      }
    }
  }
  return -1;
};

console.log(searchRotated([10, 11, 12, 13, 14, 15, 1, 2, 3, 4], 2));
