// Optimising Max Sum of Subarray

const maxSumSubArray = (A) => {
  let sum = A[0];
  let ans = A[0];
  for (let i = 1; i < A.length; i++) {
    if (sum < 0) {
      sum = 0;
    }
    sum += A[i];
    if (ans < sum) {
      ans = sum;
    }
  }
  return ans;
};

// console.log(maxSumSubArray([5, 6, 7, -3, 2, -10, -12, 8, 12, -4, 7]));
console.log(maxSumSubArray([-3, -6, -40, -30, -2]));
