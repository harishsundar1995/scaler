/*
Problem Description
Given a sorted array B of integers of size A, and a integer value C, return the ceiling of C which is present in array B.


Problem Constraints
1 <= A <= 105,
-109 <= B[i] <= 109,
-109 <= C <= 109
*/

// Find Ceiling

const findCeiling = (A, B, C) => {
  let result = -1;
  let L = 0;
  let R = A - 1;

  while (L <= R) {
    let mid = Math.floor((L + R) / 2);

    if (B[mid] === C) {
      // If an exact match is found, return it as the ceiling
      return B[mid];
    } else if (B[mid] < C) {
      // Continue searching in the right subarray
      L = mid + 1;
    } else {
      // Update result and continue searching in the left subarray
      result = B[mid];
      R = mid - 1;
    }
  }

  return parseInt(result);
};

console.log(findCeiling(6, [3, 7, 9, 11, 19, 20], 18));
