// Merge Sort
function recursiveMergeSort(A) {
  // Base case: return the array if it has 0 or 1 element
  if (A.length <= 1) {
    return A;
  }

  // Split the array into two halves
  const middle = Math.floor(A.length / 2);
  const left = A.slice(0, middle);
  const right = A.slice(middle);

  // Recursively sort each half
  const sortedLeft = recursiveMergeSort(left);
  const sortedRight = recursiveMergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from both arrays
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage:
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = recursiveMergeSort(unsortedArray);
console.log(sortedArray);
