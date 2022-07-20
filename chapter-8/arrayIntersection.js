function arrayIntersection(array1, array2) {
  let intersection = [];
  let map = {};
  for (let i = 0; i < array1.length; i++) {
    map[array1[i]] = true;
  }
  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) {
      intersection.push(array2[j]);
    }
  }
  return intersection;
}

const r = arrayIntersection([1, 2, 3, 4, 5, 7, 8], [0, 2, 4, 6, 8]);
console.log(r);
