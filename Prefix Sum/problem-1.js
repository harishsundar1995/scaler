// Prefix Sum Array

// const prefixSum = (arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let tempSum = 0;
//     for (j = 0; j <= i; j++) {
//       tempSum += arr[j];
//     }
//     result.push(tempSum);
//   }
//   return result;
// };

// console.log(prefixSum([2, 9, -3, 5, 1]));

// TC = O(N^2)

// Optimized Approach

// const prefixSum = (arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr.slice(0, i + 1).reduce((acc, cur) => acc + cur, 0));
//   }
//   return result;
// };

// console.log(prefixSum([2, 9, -3, 5, 1]));

// TC =  O(N)

// const prefixSum = (arr) => {
//   let result = [];
//   result.push(arr[0]);
//   let temp = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     temp += arr[i];
//     result.push(temp);
//   }
//   return result;
// };

// console.log(prefixSum([2, 9, -3, 5, 1]));
// TC =  O(N)

const prefixSum = (arr) => {
  let psum = [];
  psum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    psum[i] = psum[i - 1] + arr[i];
  }
  return psum;
};

// console.log(prefixSum([2, 9, -3, 5, 1]));
console.log(prefixSum([-7, 5, 1, 2, -4, 3, 0]));
console.log(prefixSum([5, 1, 3, 2, 9]));
// TC =  O(N)
