// Check if give string is palindrome or not

// Idea 1
// const palindrome = (A) => {
//   return A.toLowerCase() === A.toLowerCase().split("").reverse().join("");
// };

// console.log(palindrome("civic"));

// Idea 2
// Time Complexity = O(N)
// Space Complexity = O(1)
const palindrome = (A) => {
  let i = 0;
  let j = A.length - 1;
  while (i <= j) {
    if (A[i] !== A[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(palindrome("civic"));
