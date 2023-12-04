/*
Given a sorted array of integers A (0-indexed) of size N, find the left most and the right most index of a given integer B in the array A.

Return an array of size 2, such that 
          First element = Left most index of B in A
          Second element = Right most index of B in A.
If B is not found in A, return [-1, -1].

Note : Your algorithm's runtime complexity must be in the order of O(log n).
*/

function searchRange(A, B) {
  function binarySearch(isLeftmost) {
    let left = 0;
    let right = A.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (A[mid] === B) {
        result = mid;

        if (isLeftmost) {
          right = mid - 1; // Continue searching in the left subarray
        } else {
          left = mid + 1; // Continue searching in the right subarray
        }
      } else if (A[mid] < B) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  const leftmostIndex = binarySearch(true);
  const rightmostIndex = binarySearch(false);

  return [leftmostIndex, rightmostIndex];
}

console.log(searchRange([4, 5, 6, 7, 20, 20, 20], 20));
