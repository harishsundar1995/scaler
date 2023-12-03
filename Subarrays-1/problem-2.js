// Given an array of elements print each subarray sum.
// Bruteforce
// const printSubArraySum = (A) => {
//   for (s = 0; s < A.length; s++) {
//     let subArray = [];
//     for (e = s; e < A.length; e++) {
//       subArray.push(A[e]);
//       let subsum = 0;
//       for (let i = s; i <= e; i++) {
//         subsum += A[i];
//       }
//       console.log(subArray);
//       console.log(subsum);
//     }
//   }
// };

// printSubArraySum([2, 8, -1, 4]);
// TC = O(N^3)

// Using Prefix Sum

// const printSubArraySum = (A) => {
//   const pre = [];
//   pre[0] = A[0];
//   for (let i = 1; i < A.length; i++) {
//     pre[i] = pre[i - 1] + A[i];
//   }
//   for (s = 0; s < A.length; s++) {
//     for (e = s; e < A.length; e++) {
//       if (s === 0) {
//         console.log(pre[e]);
//       } else {
//         console.log(pre[e] - pre[s - 1]);
//       }
//     }
//   }
// };

// printSubArraySum([2, 8, -1, 4]);
//  TC = O(N^2), SC = O(N)

// Without prefix Sum Array

const printSubArraySum = (A) => {
  for (i = 0; i < A.length; i++) {
    let subArray = [];
    let subSum = 0;
    for (j = i; j < A.length; j++) {
      subArray.push(A[j]);
      subSum += A[j];
      console.log(subSum);
    }
  }
};

printSubArraySum([2, 8, -1, 4]);

// TC = O(N^2) SC= O(1)
