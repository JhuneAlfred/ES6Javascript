//find returns the first occurrence of matching value, no match will return "undefined"
const users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { name: 'Jack' },
    { name: 'William' },
    { name: 'Juliana' },
]

const user = users.find(user => {
    return user.name === 'Alex'
})

console.log(user)

// output:
// { name: 'Alex' }