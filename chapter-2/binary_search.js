function binarySearch(arr, searchValue) {
  let lowerBound = 0;
  let upperBound = arr.length - 1;

  while (lowerBound <= upperBound) {
    let midpoint = Math.floor((upperBound + lowerBound) / 2);

    let valueAtMidpoint = arr[midpoint];

    if (searchValue === valueAtMidpoint) {
      return midpoint;
    } else if (searchValue < valueAtMidpoint) {
      upperBound = midpoint - 1;
    } else if (searchValue > valueAtMidpoint) {
      lowerBound = midpoint + 1;
    }
  }
  return null;
}

const r = binarySearch([3, 17, 75, 80, 202], 3);
console.log(r);
