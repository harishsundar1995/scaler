/* 
You are given a sorted array A of size N and a target value B.
Your task is to find the index (0-based indexing) of the target value in the array.

If the target value is present, return its index.
If the target value is not found, return the index of least element greater than equal to B.
Your solution should have a time complexity of O(log(N)).


Problem Constraints
1 <= N <= 106
1 <= A[i] <= 105
1 <= B <= 105
*/

const sortedInsertion = (A, B) => {
  let N = A.length;
  let L = 0;
  let R = N - 1;
  if (B < A[0]) {
    return 0;
  } else if (B > A[N - 1]) {
    return N;
  }
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (A[mid] === B) {
      return mid;
    } else if (A[mid] < B) {
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }
  return L;
};

console.log(sortedInsertion([1, 4, 9], 5));
