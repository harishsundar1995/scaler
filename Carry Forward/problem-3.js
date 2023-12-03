const bulb = (A) => {
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      count++;
      bulb[i] = 1;
      for (let j = i + 1; j < A.length; j++) {
        if (bulb[j] === 1) {
          bulb[j] = 0;
        } else {
          bulb[j] = 1;
        }
      }
    }
  }
  return count;
};

console.log(bulb([0, 1, 1, 0, 1, 0]));
