function* shopping() {
    //stuff in the sidewalk


    //walking down the sidewalk

    //go into the store with cash
    const stuffFromStore = yield 'cash'

    const stuffFromLaundry = yield 'laundry'

    //walking back home'
    return [stuffFromStore, stuffFromLaundry]
}

//stuff in the store
const gen = shopping()

console.log(gen.next())  //leaving our hose
console.log(gen.next('groceries')) //leaving the store with groceries
console.log(gen.next('clean clothes'))
//console.log(gen.next('pickup clothes'))  //laundry

//Output
// { value: 'cash', done: false }
// { value: 'groceries', done: true }