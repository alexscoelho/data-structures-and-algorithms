function triangular(n) {
  if (n === 1) return 1;
  return triangular(n - 1) + n;
}

const r = triangular(6);
console.log(r);
