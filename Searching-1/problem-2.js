// Given a sorted arr[] find floor of given num k
// Floor : greatest ele <=k in arr[]

// Brute force
// const findFloor = (A, K) => {
//   let floor = -Infinity;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] <= K) {
//       floor = A[i];
//     }
//   }
//   return floor;
// };

// console.log(findFloor([-5, 2, 3, 6, 9, 10, 11, 14, 18], 12));

// Using Binary Search

const findFloor = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let floor = Number.NEGATIVE_INFINITY;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === k) {
      floor = arr[mid];
    } else if (arr[mid] < k) {
      floor = arr[mid];
      left = mid + 1; // Continue searching in the right subarray
    } else {
      right = mid - 1; // Continue searching in the left subarray
    }
  }

  return floor;
};

console.log(findFloor([-5, 2, 3, 6, 9, 10, 11, 14, 18], 12));
