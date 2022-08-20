function fibBottomUp(n) {
  if (n === 0) return 0;

  let a = 0;
  let b = 1;

  for (let i = 1; i < n; i++) {
    let temp = a;
    a = b;
    b = temp + a;
  }

  return b;
}

const r = fibBottomUp(10);
console.log(r);
