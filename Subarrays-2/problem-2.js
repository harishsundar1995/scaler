// Given arry elements,return Max subarry sum of len = k

// Using Prefix Sum
// const maxSubarrySum = (A, k) => {
//   let pre = [];
//   pre[0] = A[0];
//   for (let i = 1; i < A.length; i++) {
//     pre[i] = pre[i - 1] + A[i];
//   }
//   let maxSum = 0;
//   for (let s = 0; s < k; s++) {
//     if (s == 0) {
//       maxSum = maxSum > pre[s + k] ? maxSum : pre[s + k];
//     } else {
//       if (maxSum < pre[s + k] - pre[s - 1]) {
//         maxSum = pre[s + k] - pre[s - 1];
//       }
//     }
//   }
//   return maxSum;
// };

// const maxSubarrySum = (A, k) => {
//   let maxSum = Number.MIN_SAFE_INTEGER;
//   let N = A.length;
//   let s = 0;
//   let e = k - 1;
//   while (s < k) {
//     let sum = 0;
//     for (let i = s; i <= e; i++) {
//       sum += A[i];
//       if (sum > maxSum) {
//         maxSum = sum;
//       }
//     }
//     s++;
//     e++;
//   }
//   return maxSum;
// };

// Sliding Window Technique only for Fixed K
const maxSubarrySum = (A, k) => {
  let ans = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += A[i];
  }
  if (ans < sum) {
    ans = sum;
  }
  let s = 1,
    e = k;
  while (e < A.length) {
    sum = sum - A[s - 1] + A[e];
    if (ans < sum) {
      ans = sum;
    }
    s++;
    e++;
  }
  return ans;
};

console.log(maxSubarrySum([3, 4, -2, 5, 3, -2, 8, 2, 1, 4], 6));
