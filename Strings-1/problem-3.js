const isPalindrome = (S, i, j) => {
  const A = S.split("");
  while (i <= j) {
    if (A[i] !== A[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

// Given a sting, calculate length of longest palindromic substring
// Idea 1
// Generate all the substrings, for each esubstring check if its palidrome or not
// If yes, keep track of max length.
// TC : O(n^3)
// SC : O(1)

// const getLongestPalindromicSubstring = (A) => {
//   let n = A.length;
//   let ans = 0;
//   for (i = 0; i < n; i++) {
//     for (j = 1; j < n; j++) {
//       if (isPalindrome(A, i, j)) {
//         ans = Math.max(ans, j - i + 1);
//       }
//     }
//   }
//   return ans;
// };

// console.log(getLongestPalindromicSubstring("Gacivictg"));

//  Idea 2
// For odd length palindrome
// Consider every element as middle element and expand , find the max length
// For even length palidrome
// Consider every element and next element as center and expand.
// Time Complexity = O(n^2)
// Space complexity = O(1)
const expand = (S, P1, P2) => {
  let N = S.length;
  while (P2 < N && P1 >= 0 && S[P1] === S[P2]) {
    P1 = P1 - 1;
    P2 = P2 + 1;
  }
  return P2 - P1 - 1;
};

const longestPalidromeSubstring = (A) => {
  let n = A.length;
  let S = A.split("");
  let ans = 0;
  // Odd length
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, expand(S, i, i));
  }
  //  Even length
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, expand(S, i, i + 1));
  }

  return ans;
};

console.log(longestPalidromeSubstring("Goggot"));
