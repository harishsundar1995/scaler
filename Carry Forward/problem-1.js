// const pairCount = (strArray) => {
//   let count = 0;
//   for (let i = 0; i < strArray.length; i++) {
//     for (let j = i + 1; j < strArray.length; j++) {
//       if (strArray[i] === "a" && strArray[j] === "g") {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// const charArray = ["b", "a", "g", "a", "g", "g"];

// console.log(pairCount(charArray));

// TC = O(N^2)

// const pairCount = (strArray) => {
//   let gCount = 0;
//   let pairs = 0;
//   for (let i = strArray.length - 1; i >= 0; i--) {
//     if (strArray[i] === "g") {
//       gCount++;
//     } else if (strArray[i] === "a") {
//       pairs += gCount;
//     }
//   }
//   return pairs;
// };

// const charArray = ["b", "a", "g", "a", "g", "g"];

// console.log(pairCount(charArray));

// TC = O(N)

const pairCount = (strArray) => {
  let aCount = 0;
  let pairs = 0;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === "a") {
      aCount++;
    } else if (strArray[i] === "g") {
      pairs += aCount;
    }
  }
  return pairs;
};

const charArray = ["b", "a", "g", "a", "g", "g"];

console.log(pairCount(charArray));
