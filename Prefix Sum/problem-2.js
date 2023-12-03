// Range Sum Queries

// Brute Force approach
// const findRangeQuery = (A, query) => {
//   let result = [];
//   for (let i = 0; i < query.length; i++) {
//     let L = query[i][0];
//     let R = query[i][1];
//     let sum = 0;
//     for (let j = L; j <= R; j++) {
//       sum += A[j];
//     }
//     result[i] = sum;
//   }
//   return result;
// };

// let arrayGiven = [3, 4, -2, 6, 8, 10, 13];
// let queryArray = [
//   [1, 3],
//   [2, 6],
//   [5, 5],
//   [0, 3],
// ];

// console.log(findRangeQuery(arrayGiven, queryArray));
// TC = O(N^2)

// Use Prefix Sum

const findRangeQuery = (A, query) => {
  let pre = [];
  let result = [];
  pre[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    pre[i] = pre[i - 1] + A[i];
  }
  console.log(pre);
  for (let i = 0; i < query.length; i++) {
    if (query[i][0] === 0) {
      result[i] = pre[query[i][1]];
    } else {
      result[i] = pre[query[i][1]] - pre[query[i][0] - 1];
    }
  }
  return result;
};

let arrayGiven = [3, 4, -2, 6, 8, 10, 13, 1];
let queryArray = [
  [1, 3],
  [2, 6],
  [5, 5],
  [0, 3],
];

console.log(findRangeQuery(arrayGiven, queryArray));

// TC = O(N)
