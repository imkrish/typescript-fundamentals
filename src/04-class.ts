namespace classes {

    // Class

    class Person {

        name: string  // Default is public
        private type: string
        protected age: number

        constructor(name: string, type: string, age: number, public username: string) {
            // Note: public username: string
            this.name = name
            this.age = age
            this.type = type
        }

        printAge() {
            console.log(this.age)
        }

        // methods can also be private or protected

        setType(type: string) {
            this.type = type
        }

        getType() {
            return this.type
        }
    }

    const krish = new Person('Krish', 'Person', 25, 'imKrish')
    krish.name = 'Keerati'
    krish.username = 'xzodear'
    krish.printAge()
    krish.setType('Amazing')
    console.log(krish)
    console.log(krish.getType())

    // Inheritance
    class Developer extends Person {

        constructor(name: string, age: number, username: string) {
            super(name, 'Developer', age, username)
            this.age = 24  // cannot access to this.type
        }
    }

    // const krishDev = new Developer('Krish', 'Person', 25, 'imKrish') // before having constructor
    // console.log(krishDev)  // Get type 'Developer' ??
    const krishDev = new Developer('Krish', 25, 'imKrish')
    console.log(krishDev)

}

// Getters & Setters
class Plant {

    private _species: string = 'Default'

    get species(): string {
        return 'Hi ' + this._species
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value
        } else {
            this._species = 'Default'
        }
    }
}

const plant = new Plant()
console.log(plant.species)
plant.species = 'ha'  // become an argument of set species()
console.log(plant.species)
plant.species = 'Homosapien'  // become an argument of set species()
console.log(plant.species)