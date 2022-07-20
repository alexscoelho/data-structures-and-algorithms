function exceptOne(string) {
  let albhabet = "abcdefghijklmnopqrstuvwxyz";
  let map = {};
  for (let i = 0; i < string.length; i++) {
    map[string[i]] = true;
  }
  for (let i = 0; i < albhabet.length; i++) {
    if (!map[albhabet[i]]) return albhabet[i];
  }
}

const r = exceptOne("the quick brown box jumps over a lazy dog");
console.log(r);
