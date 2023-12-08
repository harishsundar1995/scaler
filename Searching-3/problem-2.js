/*
Given K Cows & N stalls, all stalls are on x axis at different locations, place all K cows in such a way that min distance between 2 cows is maximised. Maximise min distance
Note 1 : In a stall only 1 cow can be present
Note 2 : All cows have to be placed, stall N > cows K
Note 3: All stalls positions are sorted if not sorted we can sort
*/

function isValid(A, B, mid) {
  let cowsPlaced = 1;
  let lastPosition = A[0];

  for (let i = 1; i < A.length; i++) {
    if (A[i] - lastPosition >= mid) {
      cowsPlaced++;
      lastPosition = A[i];
    }
  }

  return cowsPlaced >= B;
}

function largestMinDistance(A, B) {
  A.sort((a, b) => a - b);

  let low = 0;
  let high = A[A.length - 1] - A[0];
  let result = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (isValid(A, B, mid)) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}

console.log(largestMinDistance([1, 2, 3, 4, 5], 3));
