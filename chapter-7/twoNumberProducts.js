function twoNumberProducts(array) {
  let products = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      products.push(array[i] * array[j]);
    }
  }
  return products;
}

const r = twoNumberProducts([1, 3, 4, 7, 8]);
console.log(r);
