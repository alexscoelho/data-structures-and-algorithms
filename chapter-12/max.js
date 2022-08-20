function max(array) {
  if (array.length === 1) return array[0];

  let maxOfRemainder = max(array.slice(1));

  if (array[0] > maxOfRemainder) {
    return array[0];
  } else {
    return maxOfRemainder;
  }
}

const r = max([2, 4, 6, 9]);
console.log(r);
