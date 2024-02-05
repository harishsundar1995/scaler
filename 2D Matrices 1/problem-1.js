// Given a mat[N][N], print boundary in clockwise direction

const printBoundaryElements = (arr) => {
  let N = arr[0].length;
  let result = [];
  let i = 0;
  let j = 0;
  if (N === 1) {
    result.push(arr[i][j]);
    return result;
  }
  for (let k = 1; k < N; k++) {
    result.push(arr[i][j]);
    j++;
  }
  for (let k = 1; k < N; k++) {
    result.push(arr[i][j]);
    i++;
  }
  for (let k = 1; k < N; k++) {
    result.push(arr[i][j]);
    j--;
  }
  for (let k = 1; k < N; k++) {
    result.push(arr[i][j]);
    i--;
  }
  return result;
};

console.log(
  printBoundaryElements([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

console.log(
  printBoundaryElements([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
