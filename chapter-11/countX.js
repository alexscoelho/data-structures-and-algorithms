function countX(string) {
  if (string.length === 0) {
    return 0;
  }
  if (string[0] == "x") {
    return 1 + countX(string.slice(1));
  }
  return countX(string.slice(1));
}

const r = countX("xjhjxhex");
console.log(r);
