function greatestProduct(array) {
  const sortedArray = array.sort((a, b) => a - b);
  return (
    sortedArray[sortedArray.length - 1] * sortedArray[sortedArray.length - 2]
  );
}

const r = greatestProduct([9, 1, 5, 3, 2, 8]);
console.log(r);
