// Given an arr[N] count no of pairs such that arr[i] + arr[j] === k where i !==k

// Brute force

// const countPairs = (arr, k) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr[i] + arr[j] === k) {
//         console.log(arr[i], arr[j]);
//         count++;
//       }
//     }
//   }
//   return count;
// };

// console.log(countPairs([1, 2, 3, 4, 2, 6, 4], 8));

// TC: O(N^2), SC:O(N)

// Using HashMap
const countPairs = (arr, k) => {
  let seenNumbers = new Map();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let complement = k - arr[i];
    if (seenNumbers.has(complement)) {
      count += seenNumbers.get(complement);
    }
    if (seenNumbers.has(arr[i])) {
      seenNumbers.set(arr[i], seenNumbers.get(arr[i]) + 1);
    } else {
      seenNumbers.set(arr[i], 1);
    }
  }
  return count;
};

console.log(countPairs([2, 5, 2, 5, 8, 5, 2, 8], 10));

// TC: O(N), SC: O(N)
