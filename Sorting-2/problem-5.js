// B Closest Points to Origin

const closestPoint = (A, B) => {
  // Custom comparison function for sorting based on distance
  const compareDistance = (a, b) => {
    const distanceA = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
    const distanceB = Math.sqrt(b[0] * b[0] + b[1] * b[1]);
    return distanceA - distanceB;
  };

  // Sort the points array based on distance
  A.sort(compareDistance);

  // Return the first B points
  return A.slice(0, B);
};

const points = [
  [1, 3],
  [-2, 2],
  [5, 8],
  [0, 1],
];
const B = 2;
const result = closestPoint(points, B);
console.log("B closest points to the origin:", result);
