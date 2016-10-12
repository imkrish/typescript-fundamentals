namespace generics {

    // Simple Generic
    function echo(data: any) {
        return data
    }

    console.log(echo('Krish').length)
    console.log(echo(27).length)  // doesn't make sense because int object doesn't have length property.
    console.log(echo(true))
    console.log(echo({name: 'Krish'}))

    // Better Generic
    function betterEcho<T>(data: T) {
        return data
    }
    console.log(betterEcho('Krish').length) // IDE support
    console.log(betterEcho<number>(5).toFixed(4)) // IDE support

    // Built-in Generics
    const testResults: Array<number> = [1.25, 2.33, 3.13]
    // testResults.push('2')  // cannot push string in an array of numbers
    testResults.push(-2)
    console.log(testResults)

    // Arrays
    function printAll<T>(args: T[]) {
        args.forEach((element) => console.log(element))
    }

    printAll<string|number>(['Apple', 'haha', 1, 'Yo'])

    // Generic Types
    const echo2: <T>(data: T) => T = echo
    console.log(echo2<string>('test'))

    // Generic Classes
    class SimpleMath {
        
        baseValue: any
        multiplyValue: any

        calculate() {
            return this.baseValue * this.multiplyValue
        }
    }

    const simpleMath = new SimpleMath()
    simpleMath.baseValue = 'something' // not make sense.
    simpleMath.multiplyValue = 5
    console.log(simpleMath.calculate())

    class BetterSimpleMath<T extends number | string, U extends number | string> {
        baseValue: T
        multiplyValue: U

        calculate(): number {
            return +this.baseValue * +this.multiplyValue
        }
    }

    const betterSimpleMath = new BetterSimpleMath<string, number>() // if not specity it will be <any>
    betterSimpleMath.baseValue = "5"
    betterSimpleMath.multiplyValue = 5
    console.log(betterSimpleMath.calculate())

}