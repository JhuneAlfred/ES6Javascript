createBookShop = (inventory) => {
    return {
        inventory,  //same as "inventory: inventory" //Since the key and value have the same name, we can condense this to "inventory"
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0)
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price
        }
    }
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent JS', price: 15 }
]

const bookShop = createBookShop(inventory)

console.log(bookShop.inventoryValue())
console.log(bookShop.priceForTitle('Eloquent JS'))