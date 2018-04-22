//ES5
// function signup(username, password, email, dob, city) {
//     //create user
// }

//ES6
//order of the arguments does not matter by adding curly braces 
function signup({ password, username, dob, city, email }) {
    //create user
}

const user = {
    username: 'name',
    password: 'password',
    email: 'mail@email.com',
    dob: '1/1/1980',
    city: 'New York'
}

//ES5
//signup('john', 'password', 'mail@email.com', '1/1/1980', 'Las Vegas')

//ES6
signup(user)

