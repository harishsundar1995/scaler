// Given rowise columnwise sorted matrix [N][M], find k ?

const matSearch = (arr, k) => {
  let N = arr.length;
  let M = arr[0].length;
  let i = 0,
    j = M - 1;
  while (i < N && j >= 0) {
    if (arr[i][j] === k) {
      return true;
    } else if (arr[i][j] < k) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};

console.log(
  matSearch(
    [
      [1, 2, 6, 7],
      [12, 13, 16, 21],
      [23, 35, 36, 48],
    ],
    0
  )
);
