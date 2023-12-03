/*
There are A beggars sitting in a row outside a temple. Each beggar initially has an empty pot. When the devotees come to the temple, they donate some amount of coins to these beggars. Each devotee gives a fixed amount of coin(according to their faith and ability) to some K beggars sitting next to each other.

Given the amount P donated by each devotee to the beggars ranging from L to R index, where 1 <= L <= R <= A, find out the final amount of money in each beggar's pot at the end of the day, provided they don't fill their pots by any other means.
For ith devotee B[i][0] = L, B[i][1] = R, B[i][2] = P, given by the 2D array B 

Problem Constraints
1 <= A <= 2 * 105
1 <= L <= R <= A
1 <= P <= 103
0 <= len(B) <= 105
*/

const sumQuery = (A, B) => {
  let result = Array(A).fill(0);

  // Update the starting and ending positions of the ranges in A
  for (let i = 0; i < B.length; i++) {
    let start = B[i][0] - 1; // Adjust indices to be 0-based
    let end = B[i][1] - 1;
    let value = B[i][2];

    result[start] += value;

    // If the ending position is not the last element, subtract the value from the next position
    if (end < A - 1) {
      result[end + 1] -= value;
    }
  }

  console.log(result);

  // Calculate the prefix sum to get the final result
  for (let i = 1; i < A; i++) {
    result[i] += result[i - 1];
  }

  return result;
};

console.log(
  sumQuery(5, [
    [1, 2, 10],
    [2, 3, 20],
    [2, 5, 25],
  ])
);
