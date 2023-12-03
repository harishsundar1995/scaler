/*
Given arr[N] = 0, all zeros and q queries
for every query : Given (start, end, value) add element value to all index elements from [start to end]
Once all queries are done return final ans
Constraints

1<=N,Q<=10^5
1<= Value <=10^6
0<=S<N
*/

const sumQuery = (A, B) => {
  let result = Array(A).fill(0);
  for (let i = 0; i < B.length; i++) {
    let start = B[i][0] - 1;
    let end = B[i][1] - 1;
    let value = B[i][2];
    result[start] += value;
    if (end + 1 < A) {
      result[end + 1] -= value;
    }
  }

  for (let i = 1; i < A; i++) {
    result[i] += result[i - 1];
  }
  return result;
};

console.log(
  sumQuery(7, [
    [1, 3, 2],
    [2, 5, 3],
    [2, 4, -1],
    [3, 6, 2],
  ])
);
