function median(array) {
  const middle = Math.floor(array.length / 2);

  // if array has even amount of numbers
  if (array.length % 2 === 0) {
    return (array[middle - 1] + array[middle]) / 2;
  } else {
    // array has odd amount of numbers
    return array[middle];
  }
}

const r = median([1, 2, 3, 5, 6, 4, 5]);
console.log(r);
