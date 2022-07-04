function greatestNumberSlow(array) {
  for (let i = 0; i < array.length; i++) {
    let isValTheGreatest = true;

    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[i]) {
        isValTheGreatest = false;
      }
    }
    if (isValTheGreatest) {
      return array[i];
    }
  }
}

function greatestNumberFast(array) {
  let greatestVal = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > greatestVal) {
      greatestVal = array[i];
    }
  }
  return greatestVal;
}
const r = greatestNumberSlow([65, 55, 45, 35, 25, 15, 10, 80, 82]);
const r2 = greatestNumberFast([65, 55, 45, 35, 25, 15, 10, 80, 82]);
console.log(r);
