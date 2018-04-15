var numbers = [1, 1, 2, 3, 4, 5]
const uniqueNumbers = []

// function unique(array) {
//     return array.reduce((previous, item) => {
//         if (!previous.find(item2 => {
//             return item2 === item
//         }))
//             previous.push([item])
//         return previous
//     }, [])
// }


console.log(unique(numbers))
//console.log(unique(numbers))

function unique(numbers) {
    return numbers.reduce((previous, number) => {
        if (!previous.find(previousElement => {
            return previousElement === number;
        })) previous.push(number);

        return previous;
    }, [])
}

console.log(unique(numbers))