function everyOther(array) {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < array.length; j++) {
        console.log(array[i] + array[j]);
      }
    }
  }
}

const r = everyOther([2, 3, 4]);
console.log(r);
