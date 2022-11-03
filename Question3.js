const sumArr = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
}

console.log(sumArr([1, 2, 4, 7]));