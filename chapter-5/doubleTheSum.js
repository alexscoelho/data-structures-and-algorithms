function doubleTheSum(array) {
  doubledArray = [];
  for (let val of array) {
    let product = val * 2;
    doubledArray.push(product);
  }
  let sum = 0;
  for (let val of doubledArray) {
    sum += val;
  }
  return sum;
}

const r = doubleTheSum([2, 3, 4]);
console.log(r);
