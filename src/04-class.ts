namespace classes {

    class Person {

        name: string  // Default is public
        private type: string
        protected age: number

        constructor(name: string, type: string, age: number, public username: string) {
            // Note: public username: string
            this.name = name
            this.type = type
            this.age = age
        }
    }

    const krish = new Person('Krish', 'Happy', 25, 'imKrish')
    console.log(krish)
    krish.name = 'Keerati'
    krish.username = 'xzodear'
    console.log(krish)
}