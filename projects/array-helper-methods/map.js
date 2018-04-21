//returns a new array
const numbers = [1, 2, 3, 4]


const doubledNumbers = numbers.map(number => {
    return number * 2
})

console.log(doubledNumbers)

const colors = [{ name: 'red' }, { name: 'blue' }, { name: 'yellow' }]

function pluck(color) {
    return color['name']
}
console.log(colors.map(pluck))

// console.log(colors.map(color => {
//     return color.name
// }))

// output: 
// [ 2, 4, 6, 8 ]
// [ 'red', 'blue', 'yellow' ]