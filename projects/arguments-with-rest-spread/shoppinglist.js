function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0)
        return ['milk', ...items]

}

const result = validateShoppingList('oranges', 'bread', 'eggs')

console.log(result)

// output:
// [ 'milk', 'oranges', 'bread', 'eggs' ]