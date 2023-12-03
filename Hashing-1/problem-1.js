const getUniqueElements = (A) => {
  const myMap = new Map();
  for (let el of A) {
    if (!myMap.has(el)) {
      myMap.set(el, 1);
    } else {
      myMap.set(el, myMap.get(el) + 1);
    }
  }
  let counter = 0;
  for (let [el, val] of myMap.entries()) {
    if (val === 1) {
      counter++;
    }
  }
  console.log(myMap.entries());
  return counter;
};

console.log(getUniqueElements([3, 3, 3, 9, 0, 1, 0]));
