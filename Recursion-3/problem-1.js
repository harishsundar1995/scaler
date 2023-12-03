// Tower of henoi problem

const towerOfHenoi = (A) => {
  let moves = [];
  const recursiveHenoi = (disks, source, helper, destination) => {
    if (disks === 1) {
      moves.push([1, source, destination]);
      return;
    }
    recursiveHenoi(disks - 1, source, destination, helper);
    moves.push([disks, source, destination]);
    recursiveHenoi(disks - 1, helper, source, destination);
  };
  recursiveHenoi(A, 1, 2, 3);
  return moves;
};

console.log(towerOfHenoi(2));
