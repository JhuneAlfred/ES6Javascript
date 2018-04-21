var numbers = [1, 1, 2, 3, 4, 5]

function unique(array) {
    return array.reduce((previous, item) => {
        if (!previous.find(previousItem => {
            return previousItem === item
        }))
            previous.push(item)
        return previous
    }, [])
}

console.log(unique(numbers))

// output:
// [ 1, 2, 3, 4, 5 ]