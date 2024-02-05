// Length of the longest substring with all distinct characters
// Substring
// 1. Continues part of a string
// 2. Entire string is also substring
// 3. Single character is also a substring

// Idea 1
// Brute Force
//  Time Complexity: O(n^2)
//   Space Complexity: O(n)
// Create  all possible substrings and check if they have unique characters or not. Keep track of maximum length.
// const getLongestSubstring = (A) => {
//   let ans = 0;
//   for (let i = 0; i < A.length; i++) {
//     for (let j = 1; j < A.length; j++) {
//       let tempSet = new Set(A.slice(i, j + 1));
//       if (tempSet.size === j - i + 1) {
//         ans = Math.max(ans, tempSet.size);
//       }
//     }
//   }
//   return ans;
// };

// console.log(getLongestSubstring(["a", "b", "c", "b"]));

// Idea 2
// Time complexity = O(n^2)
// Space Complexity = O(n)
// Check max length of distinct charatcters which starts with A[i]
// const getLongestDistinctSubstring = (A) => {
//   let n = A.length;
//   let ans = 0;
//   for (i = 0; i < n; i++) {
//     const currCharCounts = new Set();
//     for (j = i; j < n; j++) {
//       if (currCharCounts.has(A[j])) {
//         break;
//       } else {
//         currCharCounts.add(A[j]);
//       }
//       ans = Math.max(ans, currCharCounts.size);
//     }
//   }
//   return ans;
// };

// console.log(getLongestDistinctSubstring(["a", "b", "c", "b", "e", "a"]));

// Idea 3
// Time complexity O(n)
// Space Complexity O(n)
const getLongestDistinctSubstring = (A) => {
  let n = A.length;
  let ans = 0;
  let i = 0,
    j = 0;
  let tempSet = new Set();
  while (j < n) {
    if (!tempSet.has(A[j])) {
      tempSet.add(A[j]);
      j++;
      ans = Math.max(ans, tempSet.size);
    } else {
      tempSet.delete(A[i]);
      i++;
    }
  }
  return ans;
};

console.log(getLongestDistinctSubstring(["a", "b", "b", "b", "b", "a"]));

// Idea 4
// Binary Search
