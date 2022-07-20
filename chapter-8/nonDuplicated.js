function nonDuplicated(string) {
  let map = {};
  for (let i = 0; i < string.length; i++) {
    if (map[string[i]]) {
      map[string[i]] = map[string[i]] + 1;
    } else {
      map[string[i]] = 1;
    }
  }
  for (let i in map) {
    if (map[i] === 1) return i;
  }
}

const r = nonDuplicated("minimumn");
console.log(r);
