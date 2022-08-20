function uniquePaths(rows, columns, memo) {
  if (rows === 1 || columns === 1) return 1;

  if (!memo[rows]) {
    memo[[rows, columns]] =
      uniquePaths(rows - 1, columns, memo) +
      uniquePaths(rows, columns - 1, memo);
  }

  return memo[[rows, columns]];
}

const r = uniquePaths(5, 6, {});
console.log(r);
