function greatestProduct(array) {
  let greatestProductSoFar = array[0] * array[1];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let product = array[i] * array[j];
      if (i !== j && product > greatestProductSoFar) {
        greatestProductSoFar = product;
      }
    }
  }
  return greatestProductSoFar;
}

const r = greatestProduct([65, 55, 45, 35, 25, 15, 10]);
const r2 = greatestProduct([6, 5, 3, 2, 9, 8]);
console.log(r2);
