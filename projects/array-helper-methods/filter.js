//filter returns an array of filtered values
const products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
    { name: 'banana', type: 'fruit', quantity: 10, price: 15},
    { name: 'celery', type: 'vegetable', quantity: 30, price: 9},
    { name: 'orange', type: 'fruit', quantity: 3, price: 5},
    { name: 'cashew', type: 'nut', quantity: 30, price: 10},
    { name: 'peanut', type: 'nut', quantity: 25, price: 8},
]

const fruits = products.filter( product => {
    return product.type === 'vegetable' && product.quantity > 0 &&
        product.price < 10
})

console.log(fruits)