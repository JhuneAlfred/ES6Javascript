const points = [
    [4, 5],
    [10, 1],
    [0, 40]
]

//we would like to convert the structure of the object above to the one below
// [
//     { x: 4, y: 5 },
//     { x: 10, y: 1 },
//     { x: 0, y: 40 }
//]

const result = points.map(([x, y]) => {
    return { x, y }
})

console.log(result)

//output
//[ { x: 4, y: 5 }, { x: 10, y: 1 }, { x: 0, y: 40 } ]