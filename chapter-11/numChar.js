function numChar(array) {
  if (array.length === 1) return array[0].length;
  return numChar(array.slice(1)) + array[0].length;
}

const r = numChar(["ab", "c", "def", "ghij", "jhg"]);
console.log(r);
