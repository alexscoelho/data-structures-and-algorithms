function chessBoardSpaces(numberOfGrains) {
  let chessBoardSpaces = 1;
  let placedGrains = 1;

  while (placedGrains < numberOfGrains) {
    placedGrains *= 2;
    chessBoardSpaces += 1;
  }
  return chessBoardSpaces;
}

const r = chessBoardSpaces(200);
console.log(r);
