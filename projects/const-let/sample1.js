function count(targetString) {
    const characters = ['a', 'e', 'i', 'o', 'u']
    let number = 0

    try {
        for (let i = 0; i < targetString.length; i++) {
            if (characters.includes(targetString[i])) {
                number++
            }
        }
        return number
    }
    catch (e) {
        return e
    }

}

console.log(count('asjdfj;aifiodqpiooipqerezai'))

