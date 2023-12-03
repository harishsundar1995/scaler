// Sum of Digits
// Given a number N, find sum of digits using recursion

// My Solution

// const sumOfDigits = (A) => {
//   if (A.toString().length === 1) {
//     return A;
//   }
//   let temp = A.toString();
//   let first = parseFloat(temp.charAt(0));
//   let rest = parseFloat(temp.slice(1));
//   return first + this.solve(rest);
// };

// Actual Solution

const sumOfDigits = (A) => {
  if (A === 0) {
    return 0;
  }
  return (A % 10) + sumOfDigits(A / 10);
};
