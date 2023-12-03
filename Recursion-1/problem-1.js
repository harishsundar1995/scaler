function printNumbersFromAto1(A) {
  const helper = (currentA, result = "") => {
    if (currentA === 0) {
      console.log(result);
    } else {
      helper(currentA - 1, result + `${currentA} `);
    }
  };
  helper(A);
}

printNumbersFromAto1(5);
