var computers = [
    {name: 'Apple', ram: 4 },
    {name: 'Compaq', ram: 14 },
    {name: 'Dell', ram: 12 },
    {name: 'HP', ram: 8 },
]

let allComputersCanRunProgram = computers.every(computer => {
    return computer.ram > 16
})

let onlySomeComputerCanRunProgram = computers.some(computer => {
    return computer.ram > 16
})

console.log(`All computers can run program: ${allComputersCanRunProgram}`)
console.log(`Some computers can run program: ${onlySomeComputerCanRunProgram}`)