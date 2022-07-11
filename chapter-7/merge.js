function merge(array1, array2) {
  let newArray = [];
  let arrayPointer1 = 0;
  let arrayPointer2 = 0;

  while (arrayPointer1 < array1.length || arrayPointer2 < array2.length) {
    if (!array1[arrayPointer1]) {
      newArray.push(array2[arrayPointer2]);
      arrayPointer2 += 1;
    } else if (!array2[arrayPointer2]) {
      newArray.push(array1[arrayPointer1]);
      arrayPointer1 += 1;
    } else if (array1[arrayPointer1] < array2[arrayPointer2]) {
      newArray.push(array1[arrayPointer1]);
      arrayPointer1 += 1;
    } else {
      newArray.push(array2[arrayPointer2]);
      arrayPointer2 += 1;
    }
  }
  return newArray;
}

const r = merge([1, 2, 3, 4], [2, 4, 5, 6, 7]);
console.log(r);
