function findMissingNumber(array) {
  const sortedArray = array.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    if (!sortedArray.includes(i)) {
      return i;
    }
  }
  return null;
}

const r = findMissingNumber([9, 3, 2, 5, 6, 7, 1, 0, 4]);
console.log(r);
