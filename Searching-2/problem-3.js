// Give +ve find sqrt(N), find greatest i such that i*i<=N

// Brute force
// const sqrt = (A) => {
//   let i = 1;
//   let result = 1;
//   while (i * i <= A) {
//     result = i;
//     i++;
//   }
//   return result;
// };

// console.log(sqrt(30));

// Using Binary Search
const sqrt = (A) => {
  let N = A;
  let L = 1;
  let R = N;
  let result = 0;
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);

    if (mid * mid <= A) {
      result = mid;
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }
  return result;
};

console.log(sqrt(9));
