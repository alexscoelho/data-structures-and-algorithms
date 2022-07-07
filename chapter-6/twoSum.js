function twoSum(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] + array[j] === 10) {
        return true;
      }
    }
  }
  return false;
}

const r = twoSum([65, 55, 45, 35, 25, 15, 10]);
console.log(r);

// Best Case -> N
//  Average Case -> N2/2
//  Worst Case -> O(N2)
