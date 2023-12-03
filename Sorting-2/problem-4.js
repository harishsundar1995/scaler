// Max Chunks To Make Sorted
const maxChunk = (A) => {
  let count = 0;
  let maxElement = 0;
  for (i = 0; i < A.length; i++) {
    maxElement = Math.max(maxElement, A[i]);
    if (maxElement === i) {
      count += 1;
    }
  }
  return count;
};

console.log(maxChunk([1, 2, 0, 3, 5, 4]));
