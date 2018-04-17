function getmessage() {
    //just a side note
    const obj = {}
    //dot notation
    obj.one = '343434'
    //bracket notation
    obj['32#$#$#'] = 'dfadfasfdsfsdfsdfsdf'

    console.log(obj.one)
    console.log(obj['32#$#$#'])
    return `the value is ${obj['32#$#$#']}`
}

console.log(getmessage())