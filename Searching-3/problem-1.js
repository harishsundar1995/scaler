/*
Painter Problem
Given N tasks, K workers and time taken for each task
Find min time, in which we can complete all tasks
1. A single worker can only do continoue set of tasks
2. We cannot chagne order of tasks.
3. A tasks can only be assigned to 1 worker.
4. A worker can take multiple taks.
5. All workers start their assinged task at same time. 
*/

const painter = (A, B, C) => {
  let L = Math.max(...C);
  let R = C.reduce((acc, cur) => acc + cur, 0);
  let ans = R;
  while (L <= R) {
    let mid = Math.floor((L + H) / 2);
    if (check(C, A, mid)) {
      ans = mid;
      R = mid - 1;
    } else {
      L = mid + 1;
    }
  }
  return ans;
};

const check = (time, k, mid) => {
  let N = time.length;
  let S = 0;
  let P = 1;
  for (let i = 0; i < N; i++) {
    S = S + time[i];
    if (S > mid) {
      S = time[i];
      P++;
    }
  }
  if (P > k) {
    return false;
  } else {
    true;
  }
};
