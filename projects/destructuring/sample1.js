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

const numbers = [1,2,3];

const double = (numbers) => {
    const [a,b,c] = numbers;
    return [a*2,b*2,c*2];
}

console.log(double(numbers))

//output
//[ 2, 4, 6 ]