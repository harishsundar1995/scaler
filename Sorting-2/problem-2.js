/*
You are given an array A of N elements. You have to make all elements unique. To do so, in one step you can increase any number by one.

Find the minimum number of steps.

Problem Constraints
1 <= N <= 105
1 <= A[i] <= 109

*/

const uniqueElement = (arr) => {
  const n = arr.length;
  arr.sort((a, b) => a - b); // Step 1: Sort the array
  let steps = 0;

  for (let i = 1; i < n; i++) {
    if (arr[i] <= arr[i - 1]) {
      steps += arr[i - 1] - arr[i] + 1;
      arr[i] = arr[i - 1] + 1; // Update the current element
    }
  }

  return arr;
};

console.log(uniqueElement([1, 1, 3]));
