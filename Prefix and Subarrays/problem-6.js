/*
Given an array A of length N, For every index i, you need to find the maximum value in subarray from i to N-1.
*/
const suffixMaximum = (A) => {
  let result = [...A];
  for (let i = A.length - 2; i >= 0; i--) {
    result[i] = Math.max(A[i], result[i + 1]);
  }
  return result;
};

console.log(suffixMaximum([3, 10, 6, 7, 0, 2, -1]));
