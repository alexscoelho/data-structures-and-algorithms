function firstDuplicate(array) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) return array[i];
    map[array[i]] = true;
  }
}

const r = firstDuplicate(["a", "b", "c", "b", "d", "c"]);
console.log(r);
