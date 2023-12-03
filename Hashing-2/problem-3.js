// Given an arr[N] check if there exists a subarray with sum=k

const checkSubarray = (arr, k) => {
  let prefixSumSet = new Set();
  let prefixSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let complement = prefixSum - k;
    if (prefixSumSet.has(complement)) {
      return true;
    }
    prefixSumSet.add(prefixSum);
  }
  return false;
};
