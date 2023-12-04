// Given an unsorted arr[] with all distinct elements, return any ans local maxima
// Local maxima : An element is considered local maxima, if its > grater than its adjacent elements {immediate left or right}

const localMaxima = (A) => {
  let N = A.length;
  let L = 1;
  let R = N - 2;
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) {
      return A[mid];
    } else if (A[mid] > A[mid - 1]) {
      // Continue searching in the increasing subarray
      L = mid + 1;
    } else {
      // Continue searching in the decreasing subarray
      R = mid - 1;
    }
  }
  return -1;
};

console.log(localMaxima([5, 17, 100, 11]));
