// Count subarray sum == k

const countSubarrays = (arr, k) => {
  let prefixSumMap = new Map();
  let prefixSum = 0;
  let count = 0;
  prefixSumMap.set(prefixSum, 1);
  for (let i = 0; i < arr.length; i++) {
    prefixSum = prefixSum + arr[i];
    let complement = prefixSum - k;
    if (prefixSumMap.has(complement)) {
      count += prefixSumMap.get(complement);
    }
    if (prefixSumMap.has(prefixSum)) {
      prefixSumMap.set(prefixSum, prefixSumMap.get(prefixSum) + 1);
    } else {
      prefixSumMap.set(prefixSum, 1);
    }
  }
  return count;
};

console.log(countSubarrays([3, 7, 4, -4, 1, -2, 5, 6, 2, -8, -10], 6));
