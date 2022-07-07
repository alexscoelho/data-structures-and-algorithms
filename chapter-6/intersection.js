function intersection(firstArray, secondArray) {
  let result = [];
  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i] == secondArray[j]) {
        result.push(firstArray[i]);
        break;
      }
    }
  }
  return result;
}

const r = intersection([65, 55, 45, 35, 25, 15, 10], [1, 2, 3, 4, 5, 10, 55]);
console.log(r);
