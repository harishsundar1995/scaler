// Given arr[N], check if there exists a pair(i,j) such that arr[i] + arr[j] === k where i !== j

// Brute Force
// const checkPair = (arr, k) => {
//   for (let i = 0; i < arr.length; i++) {
//     // for (let j = i + 1; j < arr.length; j++) {
//     for (let j = 0; j < i; j++) {
//       if (i !== j) {
//         if (arr[i] + arr[j] === k) {
//           return { i, j };
//         }
//       }
//     }
//   }
//   return false;
// };

// console.log(checkPair([3, 2, 6, 8, 4], 7));

// TC:O(N^2) SC: O(1)

// Using HashSet

const checkPair = (arr, k) => {
  let seenNumber = new Set();
  for (let i = 0; i < arr.length; i++) {
    let complement = k - arr[i];

    if (seenNumber.has(complement)) {
      return true;
    }
    seenNumber.add(arr[i]);
    console.log(seenNumber);
  }
  return false;
};

console.log(checkPair([3, 2, 6, 8, 4], 7));

// TC : O(N), SC: O(N)

// Using Hashmap

// const checkPair = (arr, k) => {
//   let seenNumber = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let complement = k - arr[i];

//     if (seenNumber.has(complement)) {
//       return { j: seenNumber.get(complement), i };
//     }
//     seenNumber.set(arr[i], i);
//   }
//   return false;
// };

// console.log(checkPair([3, 2, 6, 8, 4], 10));
