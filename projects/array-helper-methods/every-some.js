//every and some returns a boolean value
//every all must match the criteria to return true
//some must match at least one to return true
const computers = [
    { name: 'Apple', ram: 4 },
    { name: 'Compaq', ram: 14 },
    { name: 'Dell', ram: 12 },
    { name: 'HP', ram: 8 },
]

let allComputersCanRunProgram = computers.every(computer => {
    return computer.ram > 16
})

let onlySomeComputerCanRunProgram = computers.some(computer => {
    return computer.ram > 16
})

console.log(`All computers can run program: ${allComputersCanRunProgram}`)
console.log(`Some computers can run program: ${onlySomeComputerCanRunProgram}`)


//******************************************************************************

const names = [
    "Matthew",
    "Jane",
    "Alexandra"
]

const allNamesGT4 = names.every(name => {
    return name.length > 4
})

const someNamesGT4 = names.some(name => {
    return name.length > 4
})

console.log(allNamesGT4)
console.log(someNamesGT4)

// output:
// false
// true