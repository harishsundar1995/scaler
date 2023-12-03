// Given an arr[N], check if there exists a subsequence with sum = k

const subsequence = (A, B) => {
  let N = A.length;

  // Iterate through all possible subsets using bitwise operators
  for (let i = 0; i < Math.pow(2, N); i++) {
    let currentSum = 0;

    for (let j = 0; j < N; j++) {
      // Check if the jth bit is set in the subset
      if (i & (1 << j)) {
        currentSum += A[j];
      }
    }

    // Check if the current subset has the target sum
    if (currentSum === B) {
      return true;
    }
  }

  // No subset found with the target sum
  return false;
};

console.log(subsequence([1, 20, 13, 4, 5], 18));
