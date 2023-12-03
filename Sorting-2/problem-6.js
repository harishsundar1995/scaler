/* 
You are given an array A of N elements. Sort the given array in increasing order of number of distinct factors of each element, i.e., element having the least number of factors should be the first to be displayed and the number having highest number of factors should be the last one. If 2 elements have same number of factors, then number with less value should come first.

Note: You cannot use any extra space
*/

function countFactors(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  return count;
}

function compareByFactorCount(a, b) {
  const factorCountA = countFactors(a);
  const factorCountB = countFactors(b);

  // Compare based on factor count
  if (factorCountA !== factorCountB) {
    return factorCountA - factorCountB;
  } else {
    // If factor counts are the same, compare based on numerical values
    return a - b;
  }
}

// Example usage:
const arrayToSort = [12, 7, 18, 24, 10, 8];
arrayToSort.sort(compareByFactorCount);

console.log("Sorted Array:", arrayToSort);
