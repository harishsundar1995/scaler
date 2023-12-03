// Given an arr[N], evaluate no of distinct elements in every subarray of size B

const subfreq = (A, B) => {
  let result = [];
  let subarrMap = new Map();
  for (let i = 0; i < B; i++) {
    if (subarrMap.has(A[i])) {
      subarrMap.set(A[i], subarrMap.get(A[i]) + 1);
    } else {
      subarrMap.set(A[i], 1);
    }
  }
  result.push(subarrMap.size);
  let e = B;
  let s = 1;
  while (e < A.length) {
    subarrMap.set(A[s - 1], subarrMap.get(A[s - 1]) - 1);
    if (subarrMap.get(A[s - 1]) === 0) {
      subarrMap.delete(A[s - 1]);
    }
    if (subarrMap.has(A[e])) {
      subarrMap.set(A[e], subarrMap.get(A[e]) + 1);
    } else {
      subarrMap.set(A[e], 1);
    }
    result.push(subarrMap.size);
    s++;
    e++;
  }
  return result;
};

console.log(subfreq([1, 2, 1, 3, 4, 3], 3));
