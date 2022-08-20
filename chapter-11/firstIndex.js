function firstIndex(string) {
  if (string[0] === "x") return 0;
  return firstIndex(string.slice(1)) + 1;
}

const r = firstIndex("abxcdefghijk");
console.log(r);
