function Field(value) {
    this.value = value
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

const username = new Field("myusername")
const password = new Field("mypassword")
const birthdate = new Field("10/10/2010")

console.log(username.validate() && password.validate())

var fields = [username, password, birthdate]

const formIsValid = fields.every(field => {
    return field.validate()
})

console.log(formIsValid)