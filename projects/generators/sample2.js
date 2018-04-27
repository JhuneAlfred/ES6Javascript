function* colors() {
    yield 'red'
    yield 'blue'
    yield 'green'
}

const myColors = []

for (let color of colors()) {
    myColors.push(color)
}

console.log(myColors)

//output
//[ 'red', 'blue', 'green' ]