function uniquePaths(rows, grids) {
  // return the number of steps of the posible shortest path
  // Solution: define all posible paths and then compare which is the shortest.
  //                  |S| | | |
  //                  | | | | |
  //                  | | | | |
  //                  | | | |F|
  // start -> rows[0][0]
  // finish -> rows[2][3]
  if (rows === 1 || grids === 1) return 1;
  return uniquePaths(rows - 1, grids) + uniquePaths(rows, grids - 1);
}

const r = uniquePaths(3, 7);
console.log(r);
