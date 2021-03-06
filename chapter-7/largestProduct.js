function largestProduct(array) {
  let largestProductSoFar = array[0] * array[1] * array[2];
  let i = 0;

  while (i < array.length) {
    let j = i + 1;
    while (j < array.length) {
      let k = j + 1;
      while (k < array.length) {
        if (array[i] * array[j] * array[k] > largestProductSoFar) {
          largestProductSoFar = array[i] * array[j] * array[k];
        }
        k++;
      }
      j++;
    }
    i++;
  }
  return largestProductSoFar;
}

const r = largestProduct([2, 4, 4, 5]);
console.log(r);
