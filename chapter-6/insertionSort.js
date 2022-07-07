// Best Case N
// Average Case N2/2
// Wort Case N2

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    tempValue = array[i]; //value temporary "removed"
    position = i - 1; // represent each value compared against tempValue

    while (position >= 0) {
      if (array[position] > tempValue) {
        array[position + 1] = array[position];
        position = position - 1;
      } else {
        break;
      }
    }
    array[position + 1] = tempValue; //move tempValue into the gap
  }
  return array;
}

const r = insertionSort([65, 55, 45, 35, 25, 15, 10]);
console.log(r);
