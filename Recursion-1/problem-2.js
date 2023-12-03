// Using Bruteforce

// const fibonacci = (n) => {
//   let fibArr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
//   }
//   return fibArr[n];
// };

// console.log(fibonacci(5));

// Using Recursion

const fibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(5));
