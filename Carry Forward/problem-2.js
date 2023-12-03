// Brute force approach

// let leaderCount = (arr) => {
//     let count = 1;
//     for (let i = 1; i < arr.length; i++) {
//       let max = arr[0];
//       for (let j = 1; j < i; j++) {
//         if (max < arr[j]) {
//           max = arr[j];
//         }
//       }
//       if (arr[i] > max) {
//         count++;
//       }
//     }
//     return count;
//   };

//   console.log(leaderCount(myArr));

// Leader if its greater than all the elements to its left.
// const countLeader = (arr) => {
//   let maxLeft = arr[0];
//   let count = 1;
//   let leaders = [];
//   leaders.push(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] >= maxLeft) {
//       count++;
//       maxLeft = arr[i];
//       leaders.push(arr[i]);
//     }
//   }
//   return leaders;
// };

// const myArr = [3, 2, 4, 5, 2, 7, 1, 15];

// console.log(countLeader(myArr));
// console.log(countLeader(myArr).length);

// Leader if its greater than all the elements to its right.
// const countLeader = (arr) => {
//     let maxRight = arr[arr.length - 1];
//     let count = 1;
//     for (let i = arr.length - 2; i >= 0; i--) {
//       if (arr[i] >= maxRight) {
//         count++;
//         maxRight = arr[i];
//       }
//     }
//     return count;
//   };

//   const myArr = [1, 2, 3, 4, 5, 2];

//   console.log(countLeader(myArr));
