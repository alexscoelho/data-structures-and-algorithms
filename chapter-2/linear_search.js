function linearSearch(arr, searchValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      return i;
    } else if (arr[i] > searchValue) {
      break;
    }
  }
  return null;
}

const r = linearSearch([3, 17, 75, 80, 202], 80);
console.log(r);
