// Quick Sort

const quickSort = (A, S, E) => {
  if (S >= E) {
    return;
  }
  let x = A[E];
  let j = S;
  for (let i = S; i < E; i++) {
    if (A[i] < x) {
      [A[i], A[j]] = [A[j], A[i]];
    }
    j++;
  }
  [A[j], A[E]] = [A[E], A[j]];
  let p = j;
  let left = quickSort(A, S, p - 1);
  let right = quickSort(A, p + 1, E);
  return left.concat(A[p]).concat(right);
};

console.log(quickSort([9, 8, 1, 6, 5, 11, 4, 7]));
