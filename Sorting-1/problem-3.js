/*
Given an array of positive integers A, check and return whether the array elements are consecutive or not.

NOTE: Try this with O(1) extra space.
*/

// Formula to check the sum of consecutive integers (n/2)*(start+end)

const consecutiveCheck = (A) => {
  if (A.length === 0) {
    return false;
  }

  const start = Math.min(...A);
  const end = Math.max(...A);

  if (end - start !== A.length - 1) {
    return false; // The range of consecutive integers should match the array length
  }

  // Check for duplicates using a Set
  const uniqueNumbers = new Set();
  for (let num of A) {
    if (uniqueNumbers.has(num)) {
      return false; // There are duplicate numbers
    }
    uniqueNumbers.add(num);
  }

  // Check for consecutive sequence using actual sum and expected sum
  const expectedSum = (A.length / 2) * (start + end);
  const actualSum = A.reduce((acc, cur) => acc + cur, 0);

  return expectedSum - actualSum === 0;
};

console.log(consecutiveCheck([1, 2, 3, 8, 5]));
