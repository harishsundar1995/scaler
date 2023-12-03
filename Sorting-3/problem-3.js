// Given arr[N], all elements in range [2-6] sort arr[]
// Count Sort

const countSort = (arr) => {
  const countMap = new Map();

  // Find the maximum value in the array
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  // Count occurrences of each element using Map
  for (let i = 0; i < arr.length; i++) {
    countMap.set(arr[i], (countMap.get(arr[i]) || 0) + 1);
  }

  // Reconstruct the sorted array
  let sortedIndex = 0;
  for (let i = min; i <= max; i++) {
    while (countMap.has(i) && countMap.get(i) > 0) {
      arr[sortedIndex] = i;
      sortedIndex++;
      countMap.set(i, countMap.get(i) - 1);
    }
  }

  return arr;
};

console.log(countSort([4, 3, 3, 5, 6, 7, 4, 2, 4]));
