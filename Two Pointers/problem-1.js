// Given ar[N] distinct sorted elements check if exists a pair pair(i,j) such that ar[i] + ar[j] = k && i!=j
// Brute force

const checkSum = (A, B) => {
  let N = A.length;
  for (i = 0; i < N; i++) {
    for (j = i + 1; j < N; j++) {
      if (A[i] + A[j] === B) {
        console.log(i, j);
        return 1;
      }
    }
  }
  return 0;
};

let A = [3, 7, 8, 11, 14, 19, 20];
let B = 25;

console.log(checkSum(A, B));

// TC : O(N^2)
// SC : O(1)
