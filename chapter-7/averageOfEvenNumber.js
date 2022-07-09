function averageOfEvenNumbers(array) {
    let sum = 0
    let countOfEvenNumbers = 0

    for (let number of array) {
        if (number % 2 === 0) {
            sum += number
            countOfEvenNumbers++
        }
    }

    return sum / countOfEvenNumbers
}

const r = averageOfEvenNumbers([2,3,4,6,8]);
console.log(r)