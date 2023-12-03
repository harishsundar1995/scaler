// Even numbers of q query

// const evenNumbers = (A, B) => {
//   let preCount = [];
//   preCount[0] = A[0] % 2 === 0 ? 1 : 0;
//   for (let i = 1; i < A.length; i++) {
//     if (BigInt(A[i]) % 2n === 0n) {
//       preCount[i] = preCount[i - 1] + 1;
//     } else {
//       preCount[i] = preCount[i - 1];
//     }
//   }
//   let evenCount = [];
//   for (let i = 0; i < B.length; i++) {
//     evenCount[i] = preCount[B[i][1]] - preCount[B[i][0] - 1];
//   }
//   return evenCount;
// };

// console.log(
//   evenNumbers(
//     [3, 5, 8, 9, 16, 14, 13, 12],
//     [
//       [1, 5],
//       [2, 6],
//       [4, 5],
//       [4, 4],
//       [3, 6],
//     ]
//   )
// );
// TC =O(N)
// Issue with BigInt

const evenNumbers = (A, B) => {
  const N = A.length;

  // Calculate the prefix count of even numbers
  const evenCount = new Array(N).fill(0n);
  for (let i = 0; i < N; i++) {
    evenCount[i] =
      (i > 0 ? evenCount[i - 1] : 0n) + (BigInt(A[i]) % 2n === 0n ? 1n : 0n);
  }

  const results = [];

  for (let i = 0; i < B.length; i++) {
    const left = B[i][0];
    const right = B[i][1];

    // Calculate the count of even numbers in the range [left, right]
    const countInRight = evenCount[right];
    const countInLeft = left > 0 ? evenCount[left - 1] : 0n;

    const result = countInRight - countInLeft;
    results.push(result.toString()); // Convert the result back to string for compatibility
  }

  return results;
};

console.log(
  evenNumbers(
    [3, 5, 8, 9, 16, 14, 13, 12],
    [
      [1, 5],
      [2, 6],
      [4, 5],
      [4, 4],
      [3, 6],
    ]
  )
);
