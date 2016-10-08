// Contract
// Note: strictly check only when pass object literal directly

namespace interfaces {

    const krish = {
        name: 'Krish',
        age: 24
    }

    const keerati = {
        firstName: 'Keerati',
        age: 25,
        hobbies: 'Sport'
    }
    
    function greet(person: any) {
        console.log('Hello, ' + person.name)
    }

    greet(krish)
    greet(keerati)  // Hello, undefined

    function greetName(person: {name: string}) {
        console.log('Hello, ' + person.name)
    }

    greetName(krish)
    // greetName(keerati)

    function changeName(person: {name: string}) {
        person.name = 'new name'
    }
    changeName(krish)
    greetName(krish)

    interface NamedPerson {
        firstName: string,
        age?: number,  // optional
        [propName: string]: any
    }

    function greetNameWithInterface(person: NamedPerson) {
        console.log('Hello, ' + person.firstName)
    }

    // greetNameWithInterface(krish)
    greetNameWithInterface(keerati)

    function changeNameWithInterface(person: NamedPerson) {
        person.firstName = 'new name'
    }
    // changeNameWithInterface(krish)
    changeNameWithInterface(keerati)
    // greetNameWithInterface(krish)
    greetNameWithInterface(keerati)  // not strictly check

    greetNameWithInterface({
        firstName: 'test',
        age: 55, // Check strictly here, pass object literal directly
        nickName: 'Krish',
        hobbies: ['Sport']
    })

    // ---------------------------------------------------
    interface PopularPerson {
        firstName: string
        age?: number

        greet(lastName: string): void
    }

    const popularPerson: PopularPerson = {
        firstName: 'Keerati',
        greet(lastName: string) {
            console.log('Hi', this.firstName, lastName)
        }
    }

    popularPerson.greet('Limkulphong')

    class Actor implements PopularPerson {

        firstName: string
        lastName: string

        greet(lastName: string) {
            console.log('Hi', this.firstName, lastName)
        }
    }

    const dave = new Actor()
    dave.firstName = 'Dave'
    dave.greet('Lastname')

    // Function Types
    interface DoubleValueFunc {
        (number1: number, number2: number): number
    }

    const myDoubleFunction: DoubleValueFunc = (number1: number, number2: number) => {
        return number1 * number2
    }

    console.log(myDoubleFunction(10, 10))

    // Interface Inheritance
    interface IPerson {
        name: string
        age?: number
        [prop: string]: any
    }

    interface IDeveloper extends IPerson {
        age: number // Overide age? in IPerson
    }

    const dev: IDeveloper = {
        name: 'Krish',
        age: 5
    }

}