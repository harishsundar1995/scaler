/*
 Given an array A of non-negative integers, arrange them such that they form the largest number.

Note: The result may be very large, so you need to return a string instead of an integer.
*/

// Alternate
/* 
const result = myNums.sort((a,b)=>{
    let xy = a.toString() + b.toString()
    let yx = b.toString() + a.toString()
    return yx - xy
})
*/

const largestNumber = (A) => {
  // Custom comparison function for sorting
  A.sort((a, b) => {
    const order1 = a.toString() + b.toString();
    const order2 = b.toString() + a.toString();
    return order2.localeCompare(order1);
  });

  // Concatenate the sorted numbers to form the largest number
  const result = A.join("");

  // Handle leading zeros in the result
  return result[0] === "0" ? "0" : result;
};

console.log(largestNumber([3, 30, 34, 5, 9]));
