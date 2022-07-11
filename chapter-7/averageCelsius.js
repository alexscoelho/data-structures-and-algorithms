function averageCelsius(farenheitReadings) {
  let celsiusNumbers = farenheitReadings.map((f) => Math.floor((f - 32) / 1.8));

  let sum = celsiusNumbers.reduce((a, c) => a + c);

  return Math.floor(sum / celsiusNumbers.length);
}

const r = averageCelsius([70, 65, 80, 91]);
console.log(r);
