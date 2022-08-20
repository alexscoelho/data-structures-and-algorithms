function addUntilHundred(array) {
  if (array.length === 0) {
    return 0;
  }
  const sumOfRemainingNumbers = addUntilHundred(
    array.splice(1, array.length - 1)
  );

  if (array[0] + sumOfRemainingNumbers > 100) {
    return sumOfRemainingNumbers;
  } else {
    return array[0] + sumOfRemainingNumbers;
  }
}

const r = addUntilHundred([40, 30, 50]);
console.log(r);
