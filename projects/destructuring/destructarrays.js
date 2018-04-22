const companies = [
    'Google',
    'Facebook',
    'Uber',
    'Amazon',
    'Twitter'
]

const [name, name2, ...name3] = companies

console.log(name, name2, name3)

// output
// Google Facebook [ 'Uber', 'Amazon', 'Twitter' ]