function hasDuplicateValueSlow(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        return true;
      }
    }
  }

  return false;
}

function hasDuplicateValueFast(array) {
  let existingNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (existingNumbers[array[i]] === 1) {
      return true;
    } else {
      existingNumbers[array[i]] = 1;
    }
  }

  return false;
}

const r = hasDuplicateValueSlow([1, 4, 5, 2, 9, 4]);
const r2 = hasDuplicateValueFast([1, 4, 5, 2, 9, 4]);
console.log(r);
