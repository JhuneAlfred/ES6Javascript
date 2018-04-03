
const numbers = [ 10, 20, 30, 40, 50]

const sum = numbers.reduce((sum, number) => {
    return sum + number
}, 0)

console.log(sum)