function oneHundredSum(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    if (array[leftIndex] + array[rightIndex] !== 100) {
      return false;
    }
    leftIndex += 1;
    rightIndex -= 1;
  }
  return true;
}

const r = oneHundredSum([50, 2, 5, 95, 98, 51]);
console.log(r);
