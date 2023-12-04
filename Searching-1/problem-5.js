// Given a sorted arr[N] find the first occurance index of give element

const findFirstOccurance = (A, B) => {
  let N = A.length;
  let L = 0;
  let R = N - 1;
  let result = -1;
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (A[mid] === B) {
      result = mid;
      R = mid - 1; // to find the last occurence
      // L = mid +1 // to find last occurence
    } else if (A[mid] < B) {
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }
  return result;
};

console.log(
  findFirstOccurance(
    [-5, -5, -3, 0, 0, 1, 1, 5, 5, 5, 5, 5, 5, 8, 10, 10, 15],
    5
  )
);
