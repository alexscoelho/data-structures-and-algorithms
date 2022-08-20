function evenNumber(array, total = 0) {
  let isEven = array[0] % 2 === 0;
  if (isEven) total++;
  if (array.length === 1) {
    return total;
  }
  return evenNumber(array.slice(1), total);
}

const r = evenNumber([2, 4, 5, 6, 7, 9, 8, 4, 10]);
console.log(r);
