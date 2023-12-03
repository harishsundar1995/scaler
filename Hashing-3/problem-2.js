// Given a 2D array A of integer points on a 2D plane. Find and return the number of unique points in the array.
// The ith point in the array is (A[i][0], A[i][1])

const distinctPoints = (A) => {
  let outputSet = new Set();
  for (let i = 0; i < A.length; i++) {
    outputSet.add(A[i].join("#"));
  }
  return outputSet.size;
};
