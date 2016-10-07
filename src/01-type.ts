namespace type {
    
// string
let myName = 'Krish'
// myName = 5 
// myName = true

// number
let myAge = 27
myAge = 27.5
// myAge = true
// myAge = 'Krish'

// boolean
let hasHobbies = true
hasHobbies = false
// hasHobbies = 'Krish'
// hasHobbies = 1

// ------------------------------------------------------------------------

// assign types explicitly
let myRealAge: any  // treat to 'any' type, back to javascript world
myRealAge = 27
myRealAge = '27'

let firstName: string
firstName = 'Keerati'

let lastName: string = 'Limkulphong'

// array
let hobbies: string[] = ['Cooking', 'Sports']
// hobbies = [100]  // Array of number
// hobbies = 100
console.log(typeof hobbies)  // Object

// tuple
let address: [string, number] = ['Superstreet', 99]
// address = [99, 'Thailand']

// enum
enum Color {
    Red,          // 0
    Green = 100,  // 100
    Blue,         // 101
    Grey = 3,     // 3
    Yellow        // 4
}
let myColor: Color = Color.Blue  // Can assign any numbers
console.log(myColor)
console.log(Color.Blue)
console.log(Color.Grey)
console.log(Color.Yellow)
console.log(Color[0])
console.log(Color[100])
console.log(Color[55])

// any - Give up all of the valuable things from TypeScript :(
let car: any = 'BMW'
console.log(car)
car = { brand: 'BMW', series: 3}
console.log(car)

// function
function returnMyName(): string {
    // return myAge  // myAge is a number
    return myName
}
console.log(returnMyName())

// void
function sayHello(): void {
    console.log('Hello')
    // return myName
}

// argument types
function multiply(value1: number, value2: number): number {
    // if number * string, will get NaN
    return value1 * value2
}
console.log(multiply(2, 5))

// function types
let myMultiply: (value1: number, value2: number) => number
// myMultiply = sayHello
// myMultiply()
myMultiply = multiply
console.log(myMultiply(10, 5))

// objects
let userData: { name: string, age: number } = {
    name: 'Krish',
    age: 27
}
// userData = {}
// userData = {
//     a: 'test',
//     b: 5
// }

// complext object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: (all: boolean): number[] => {
        if (all) {
            return complex.data
        }
        return []
    }  // this.data will return undefined
}
console.log(complex.output(true))

let complex2: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[] {
        if (all) {
            return this.data  // this.data ???
        }
        return []
    }
}
console.log(complex2.output(true))

// type alias
type complexType = { data: number[], output: (all: boolean) => number[] }
let complex3: complexType = {
    data: [100, 3.99, 10],
    output: (all: boolean): number[] => {
        if (all) {
            return complex.data
        }
        return []
    }
}
let complex4: complexType = {
    data: [100, 3.99, 10],
    output: (all: boolean): number[] => {
        if (all) {
            return complex.data
        }
        return []
    }
}

// union types
let myRealRealAge: number | string = 27 // can also be '27
myRealRealAge = '27'
// myRealRealAge = true

// check types
let finalValue = 'A string'
if (typeof finalValue === 'string') {
    console.log(finalValue)
}

// never
function neverReturn(): never {
    throw new Error('An error!')
}

// Nullable Types
let canBeNull: number | null = 12
canBeNull = null
let canAlsoBeNull: any
canAlsoBeNull = null
let canThisBeAny = null
// canThisBeAny = 12
}