function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number
    }, 0)
}

const result = addNumbers(1, 2, 3, 4, 5)

console.log(result)

// output:
// 15