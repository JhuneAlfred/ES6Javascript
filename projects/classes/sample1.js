class Car {
    constructor(options) {
        this.title = options.title
        this.color = options.color
    }

    drive() {
        return 'vroom'
    }
}

class Toyota extends Car {
    constructor(options) {
        super(options) //super menas call constructor method
        this.color = options.color
    }

    honk() {
        return 'beep'
    }
}

const car = new Car({ title: 'Nissan', color: 'white' })

//console.log(car)
//console.log(car.drive())

const toyota = new Toyota({ color: 'yellow', title: 'Toyota' })

console.log(toyota)
console.log(toyota.honk())

//outpu
//Toyota { title: 'Toyota', color: 'yellow' }
//beep
