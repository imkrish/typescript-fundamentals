namespace ts_and_es6 {
    
// let & const
// var -> global scope
// let -> block scope
let variable = 'Test'
console.log(variable)
variable = 'Another value'
console.log(variable)

const maxLevel = 100
console.log(maxLevel)
// maxLevel = 99

// Block Scope
function reset() {
    // console.log(variable)  // cannot access to this variable because it is from outside this block (let variable = 'Test')
    let variable = 'Inside reset function'
    console.log(variable)
}
reset()
console.log(variable)

// Arrow Functions
console.log('Arrow Functions')

const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2
}
console.log(addNumbers(4, 5))

const multiplyNumbers = (number1: number, number2: number): number => number1 * number2 
// The same as ...
const multiplyNumbers2 = (number1: number, number2: number): number => {
    return number1 * number2 
}
console.log(multiplyNumbers(4, 5))

const greet = () => console.log('Hello world')
greet()

const greetFriend = (friendName: string) => console.log('Hello', friendName)
greetFriend('Mew')

// Default Parameters
const countdown = (start: number = 10, end: number = start - 5): void => {
    console.log(start)
    console.log(end)
    while (start > 0) {
        start--
    }
    console.log("Done!!", start)
}
countdown()
countdown(20)

// Spread operator
const numbers = [1, 10, 99, -5]
// console.log(Math.max(numbers))
console.log(Math.max(1, 5, 2, 9))
console.log(Math.max(...numbers))  // spread out an array to single values

// Rest operator
// function makeArray(arg1: number, arg2: number)
function makeArray(name: string, ...args: number[]) {  // combine the arguments to one single array
    console.log(name)
    return args
}
console.log(makeArray('Krish', 1, 2, 3, 4, 5))

// Destructuring Array
const myHobbies = ['Cooking', 'Sports', 'Fishing']
const hobby1 = myHobbies[0]
const hobby2 = myHobbies[1]
const [hob1, hob2] = myHobbies
console.log(myHobbies[0], myHobbies[1])
console.log(hobby1, hobby2)
console.log(hob1, hob2)

// Destructing Object
const userDetails: {userName: string, age: number} = {userName: 'Krish', age: 25}
const {userName: myName, age: myAge} = userDetails
console.log(myName, myAge)

// Template Literals
const userName = 'Max'
const greeting = 'Hello, I\'m ' + userName
const longGreeting = `This is a heading!
I'm ${userName}.
This is cool!
`
console.log(greeting)
console.log(longGreeting)

}