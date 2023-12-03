// Power Function

// const pow = (base, power) => {
//   if (power === 0) {
//     return 1;
//   }
//   return base * pow(base, power - 1);
// };

// console.log(pow(6, 2));

// Alternate version

const pow = (base, power) => {
  if (power < 1) {
    return 1;
  }
  let subSolution = pow(base, power / 2);
  if (power % 2 === 0) {
    return subSolution * subSolution;
  } else {
    return subSolution * subSolution * base;
  }
};

console.log(pow(3, 4));
