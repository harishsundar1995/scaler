const subArrayFind = (A, B, C) => {
  let pre = [];
  pre[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    pre[i] = pre[i - 1] + A[i];
  }

  for (let s = 0; s < A.length; s++) {
    for (let e = s; e < A.length; e++) {
      if (s === 0) {
        if (pre[e] === C && B === e - s + 1) {
          console.log(pre[e], e - s + 1, "First");
          return 1;
        }
      } else {
        if (pre[e] - pre[s - 1] === C && B === e - s + 1) {
          console.log(pre[e] - pre[s - 1], e - s + 1, "Second");
          return 1;
        }
      }
    }
  }
  return 0;
};

console.log(subArrayFind([4, 2, 2, 5, 1], 4, 6));
