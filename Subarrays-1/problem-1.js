// Print Subarray
// BruteForce
// const printSubarray = (A, S, E) => {
//   const subArray = [];
//   for (i = S; i <= E; i++) {
//     subArray.push(A[i]);
//   }
//   console.log(subArray);
// };

// printSubarray([4, 1, 2, 3, -1, 6, 9, 8, 12], 2, 4);

// TC = O(N)

// Only length is given
// const printSubarray = (A, S, E) => {
//   const subArray = [];
//   for (i = S; i <= S + E - 1; i++) {
//     subArray.push(A[i]);
//   }
//   console.log(subArray);
// };

// printSubarray([4, 1, 2, 3, -1, 6, 9, 8, 12], 1, 6);
// TC = O(N)

// Print all SubArrays
// Brute Force

// const printAllSubArrays = (A) => {
//   for (let s = 0; s < A.length; s++) {
//     for (let e = s; e < A.length; e++) {
//       let string = "";
//       for (let i = s; i <= e; i++) {
//         string += A[i] + " ";
//         console.log(string);
//       }
//     }
//   }
// };
// TC = O(N^3)

const printAllSubArrays = (A) => {
  let result = [];
  for (i = 0; i < A.length; i++) {
    let subArray = [];
    for (j = i; j < A.length; j++) {
      subArray.push(A[j]);
      //   console.log(subArray);
    }
    result[i] = subArray;
  }
  return result;
};
// TC = O(N^2)
// Does not work for all conditoins
// printAllSubArrays([2, 8, -1, 4]);
// console.log(printAllSubArrays([2, 8, -1, 4]));
// console.log(printAllSubArrays([36, 63, 63, 26, 87, 28, 77, 93, 7]));
