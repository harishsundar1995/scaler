// Spiral Printing

const spiralPrinting = (arr) => {
  let result = [];
  let N = arr[0].length;
  let i = 0;
  let j = 0;
  while (N > 1) {
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
    i++;
    j++;
    N = N - 2;
  }
  if (N === 1) {
    result.push(arr[i][j]);
  }
  return result;
};

console.log(
  spiralPrinting([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

console.log(
  spiralPrinting([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
