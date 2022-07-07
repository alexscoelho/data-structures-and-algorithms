function containsX(string) {
  foundX = false;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "X") {
      foundX = true;
      break;
    }
  }
  return foundX;
}

const r = containsX("CapiXtan");
console.log(r);
