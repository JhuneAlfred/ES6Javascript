function* numbers(number) {
    return number * 2
    yield
}


const gen = numbers(32)

console.log(gen.next(3))
gen.number = 3
console.log(gen.next(1))