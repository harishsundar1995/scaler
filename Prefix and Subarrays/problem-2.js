// Given A[] = 0, all zeroes & Q queries, for every query Given (s,v) add element v to all index elements from [s...N-1]. Once all queries are done return final ans
// Brute Force Approach
// const zeroQueries = (L, B) => {
//   let A = Array(L).fill(0);
//   console.log(A);
//   for (let i = 0; i < B.length; i++) {
//     for (let s = B[i][0]; s < A.length; s++) {
//       A[s] += B[i][1];
//     }
//   }
//   return A;
// };

// console.log(
//   zeroQueries(7, [
//     [2, 6],
//     [0, -1],
//     [3, 2],
//     [5, 4],
//     [3, 3],
//   ])
// );

// TC O(N^2)

// Using Prefix Sum
const zeroQueries = (L, B) => {
  let A = Array(L).fill(0);
  console.log(A);
  for (let i = 0; i < B.length; i++) {
    A[B[i][0]] += B[i][1];
  }
  console.log(A);
  let result = [];
  result[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    result[i] = result[i - 1] + A[i];
  }
  return result;
};

console.log(
  zeroQueries(7, [
    [2, 6],
    [0, -1],
    [3, 2],
    [5, 4],
    [3, 3],
  ])
);
