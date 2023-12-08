// Every element occurs twice except for 1, find unique element
// Note: Duplicates are adjacent to each other

const findUnique = (A) => {
  let N = A.length;
  let L = 1;
  let R = N - 2;
  if (A[0] !== A[1]) {
    return A[0];
  }
  if (A[N - 1] !== A[N - 2]) {
    return A[N - 1];
  }
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (A[mid] !== A[mid - 1] && A[mid] !== A[mid + 1]) {
      return A[mid];
    }
    if (A[mid] === A[mid - 1]) {
      mid = mid - 1;
    }
    if (mid % 2 == 0) {
      L = mid + 2;
    } else {
      R = mid - 1;
    }
  }
};

console.log(findUnique([2, 3, 3]));
