// Inversion Count
// Given an arr[N], calculate no of pairs (i,j) such that i<j and arr[i] > arr[j], i & j are index of array

// Bruteforce approach

// const inversionCount = (arr) => {
//   let count = 0;
//   for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

const inversionCount = (arr) => {
    let count = 0;
    for (i = arr.length-2; i >=0; i--) {
      for (j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          count++;
        }
      }
    }
    return count;
  };

console.log(inversionCount([10, 3, 8, 15, 6, 12, 2, 18, 7, 1]));
