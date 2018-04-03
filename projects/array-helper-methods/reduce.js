
const numbers = [ 10, 20, 30, 40, 50]

const sum = numbers.reduce((sum, number) => {
    return sum + number
}, 0)

console.log(sum)

///*******************************************************

const primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'},
]

const newColors = primaryColors.reduce( (lastValue, primaryColor) => {
    lastValue.push(primaryColor.color)
    return lastValue
}, [])


console.log(newColors)