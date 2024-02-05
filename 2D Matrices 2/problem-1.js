// Find sum of all the elements in given submatrix

const submatrixSum = (A, R1, C1, R2, C2) => {
  let sum = 0;

  for (let i = R1; i < R2; i++) {
    for (let j = C1; j < C2; j++) {
      sum += A[i][j];
    }
  }

  return sum;
};
