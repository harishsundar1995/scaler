// Give a string, contains only alphabets, sort the given string in alphabetical order

// const sort = (A) => {
//   return A.split("").sort((a, b) => a.localeCompare(b));
// };

// console.log(sort("bdaec"));

// Using ASCII values
// Time Complexity = O(N)
// Space Complexity = O(1)
const sortString = (A) => {
  let n = A.length;
  let count = Array(256).fill(0);
  let result = [];
  for (i = 0; i < n; i++) {
    let index = A[i].charCodeAt(0);
    count[index] = count[index] + 1;
  }
  for (i = 0; i < 256; i++) {
    if (count[i] !== 0) {
      for (let j = 0; j < count[i]; j++) {
        result.push(String.fromCharCode(i));
      }
    }
  }
  return result;
};

console.log(sortString(["b", "d", "a", "c", "z"]));
