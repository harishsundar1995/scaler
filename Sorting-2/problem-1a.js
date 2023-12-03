function countInversions(A) {
  const MOD = 1000000007;
  return mergeSort(A, 0, A.length - 1) % MOD;
}

function mergeSort(A, left, right) {
  let count = 0;
  if (left < right) {
    const mid = Math.floor((left + right) / 2);

    count = (count + mergeSort(A, left, mid)) % MOD;
    count = (count + mergeSort(A, mid + 1, right)) % MOD;
    count = (count + merge(A, left, mid, right)) % MOD;
  }
  return count;
}

function merge(A, left, mid, right) {
  let count = 0;
  const leftArray = A.slice(left, mid + 1);
  const rightArray = A.slice(mid + 1, right + 1);

  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      A[k] = leftArray[i];
      i++;
    } else {
      A[k] = rightArray[j];
      j++;
      count = (count + mid - left + 1 - i) % MOD; // Count inversions during merge
    }
    k++;
  }

  while (i < leftArray.length) {
    A[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightArray.length) {
    A[k] = rightArray[j];
    j++;
    k++;
  }

  return count;
}

// Example usage:
const unsortedArray = [1, 9, 6, 4, 5];
console.log(countInversions(unsortedArray));
