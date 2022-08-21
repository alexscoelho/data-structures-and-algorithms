// function greatestNumber(array) {
//   const sortedArray = array.sort((a, b) => a - b);

//   return sortedArray[sortedArray.length - 1];
// }

// const r = greatestNumber([9, 3, 2, 5, 6, 7, 1, 0, 4]);
// console.log(r);

// function greatestNumber(array) {
//   let greatest = 0;
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] > greatest) {
//       greatest = array[index];
//     }
//   }
//   return greatest;
// }

// const r = greatestNumber([9, 3, 2, 5, 6, 7, 1, 0, 4]);
// console.log(r);

function greatestNumber(array, greatest) {
  if (array.length === 0) return greatest;

  if (array[0] > greatest) {
    greatest = array[0];
  }

  return greatestNumber(array.splice(1), greatest);
}

const r = greatestNumber([9, 3, 2, 5, 6, 7, 1, 20, 0, 4], 0);
console.log(r);
