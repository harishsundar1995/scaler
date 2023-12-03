// Given an array print all subarray sums starting at index 3.

const subArraySums = (A, N) => {
  let result = [];
  let sum = 0;
  for (i = N; i < A.length; i++) {
    sum += A[i];
    result.push(sum);
  }
  return result;
};

console.log(subArraySums([3, 8, 4, 7, 9, 4, 3, 2, 10, 6], 3));
