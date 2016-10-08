namespace generics {

    // Simple Generic
    function echo(data: any) {
        return data
    }

    console.log(echo('Krish').length)
    console.log(echo([1, 2, 3]).length)
    console.log(echo(true))  // console.log(echo(true).length) ??
    console.log(echo(5))
    console.log(echo({name: 'Krish', age: 25}))

    // Better Generic
    function betterEcho<T>(data: T): T {
        return data
    }
    console.log(betterEcho('Krish').length)                 // IDE support
    console.log(betterEcho(5).toFixed(2))                   // IDE support
    console.log(betterEcho({name: 'Krish', age: 25}).age)   // IDE support
    // betterEcho<number>('string')

    // Built-in Generics
    const testResult: Array<number> = [1.94, 2.44]
    console.log(testResult)

    // Arrays
    function printAll<T>(args: T[]) {
        args.forEach(
            item => console.log(item)
        )
    }
    printAll<number>([1, 2]) // <number> is optional

    // Generic Types
    const echo2: <T>(data: T) => T = betterEcho  // make echo2 to be generic
    console.log(echo2<string>('Yeah'))
}