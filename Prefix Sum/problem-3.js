// Equilibrium Index

// Bruteforce Approach
// const equilibriumIndex = (A) => {
//   for (let i = 0; i < A.length; i++) {
//     let lSum = 0;
//     let rSum = 0;
//     for (j = 0; j < i; j++) {
//       lSum += A[j];
//     }
//     for (j = i + 1; j < A.length; j++) {
//       rSum += A[j];
//     }
//     if (lSum == rSum) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(equilibriumIndex([-7, 5, 1, 2, -4, 3, 0]));
// TC = O(N^2)

// Optimised Approach
const equilibriumIndex = (A) => {
  let preSum = [];
  preSum[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    preSum[i] = preSum[i - 1] + A[i];
  }
  for (let i = 0; i < A.length; i++) {
    let lSum = 0;
    if (i > 0) {
      lSum = preSum[i - 1];
    }
    let rSum = preSum[A.length - 1] - preSum[i];
    if (lSum === rSum) {
      return i;
    }
  }
  return -1;
};
console.log(equilibriumIndex([-7, 5, 1, 2, -4, 3, 0]));
// TC = O(N)
