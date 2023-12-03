// Given arr[N] : re-arrange it such that
// Bring last element to its corrected sorted position
// All values < last element ar continously on leftside of the last element.
// All values >= las element are continously on rigistratio of last element

const rearrange = (A) => {
  let N = A.length;
  let i = 0;
  let j = 0;
  while (i < A.length) {
    if (A[i] < A[N - 1]) {
      [A[i], A[j]] = [A[j], A[i]];
      j++;
    }
    i++;
  }
  [A[j], A[N - 1]] = [A[N - 1], A[j]];
  return A;
};

console.log(rearrange([9, 8, 1, 6, 5, 11, 4, 7]));
