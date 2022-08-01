function numberOfPaths(n) {
  if (n < 0) return 0;
  if (n === 1 || n === 0) return 1;
  return numberOfPaths(n - 1) + numberOfPaths(n - 2) + numberOfPaths(n - 3);
}

const r = numberOfPaths(4);
console.log(r);
