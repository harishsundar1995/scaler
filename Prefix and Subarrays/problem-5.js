// Given arr[N] create PM(N) such tat pM[i] = max of all the elements from [0-i]

const maxSum = (A) => {
  let result = [...A];
  for (i = 1; i < A.length; i++) {
    result[i] = Math.max(A[i], A[i - 1]);
  }
  return result;
};

// console.log(maxSum([1, -6, 3, 3, 8, 7]));
console.log(maxSum([3, -2, 6, 2, 8]));
