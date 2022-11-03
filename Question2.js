const reverseStr = (str, n) => {
  if (str.length <= 1) return str;
  return (str.split('').slice(0, n).reverse().join('') + reverseStr(str.slice(n), n))
};

console.log(reverseStr('Lorem at', 4));

