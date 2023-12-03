// Given an arr[n] return sum of all subarray sum

// Bruteforce Approach
// const subarraySums = (A) => {
//   let result = [];
//   for (let s = 0; s < A.length; s++) {
//     for (let e = s; e < A.length; e++) {
//       let sum = 0;
//       for (let i = s; i <= e; i++) {
//         sum += A[i];
//       }
//       result.push(sum);
//     }
//   }
//   return result;
// };

// Using Prefix Sum

// const subarraySums = (A) => {
//   let pre = [];
//   pre[0] = A[0];
//   for (let i = 1; i < A.length; i++) {
//     pre[i] = pre[i - 1] + A[i];
//   }

//   let result = [];
//   //   let result = 0;
//   for (let s = 0; s < A.length; s++) {
//     for (let e = s; e < A.length; e++) {
//       if (s === 0) {
//         result.push(pre[e]);
//         // result += pre[e];
//       } else {
//         result.push(pre[e] - pre[s - 1]);
//         // result += pre[e] - pre[s - 1];
//       }
//     }
//   }
//   return {
//     sum: result.reduce((acc, cur) => acc + cur, 0),
//     sumArray: result,
//   };
//   //   return result;
// };

// console.log(subarraySums([3, 4, 2]));
// TC = O(N^2)

// Using Contribution technique

const subarraySums = (A) => {
  let total = 0;
  let N = A.length;
  for (let i = 0; i < N; i++) {
    let freq = (i + 1) * (N - i);
    let cont = A[i] * freq;
    total += cont;
  }
  return total;
};

console.log(subarraySums([3, 4, 2]));
