function User(id) {
    this.id = id
}

function generateId() {
    return Math.random() * new Date().getMilliseconds()  //9999999
}

function createAdminUser(user = new User(generateId())) {
    user.admin = true

    return user
}

const newUser = createAdminUser()

console.log(newUser)