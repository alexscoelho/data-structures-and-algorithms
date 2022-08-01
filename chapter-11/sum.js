function sum(array) {
  if (array.length === 1) return array[0]; // base case
  return array[0] + sum(array.slice(1));
}

const r = sum([2, 3, 4, 5]);
console.log(r);
