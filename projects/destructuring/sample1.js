var expense = {
    type: 'Business',
    amount: '$45. USD'
}

//ES5
// var type = expense.type
// var amount = expense.amount

//ES6
const { type, amount } = expense;

console.log(type)
console.log(amount)

//Output
// Business
// $45. USD