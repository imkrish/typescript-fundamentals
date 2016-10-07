namespace class_exercise {

    class Car {

        acceleration: number = 0

        constructor(public name: string) {}

        honk(): void {
            console.log('Tooooooooot')
        }

        accelerate(speed: number): void {
            this.acceleration += speed
        }
    }

    const car = new Car('BMW')
    car.honk()
    console.log(car)
    car.accelerate(10)
    console.log(car)

    abstract class BaseClass {
        protected width: number
        protected length: number

        abstract calSize(): number
    }

    class Rectangle extends BaseClass {

        width: number = 5
        length: number = 2

        calSize() {
            return this.width * this.length
        }
    }

    const rectangle = new Rectangle()
    console.log(rectangle.calSize())

    class Person {

        private _firstName: string = ''

        get firstName(): string {
            return this._firstName
        }

        set firstName(firstName: string) {
            if (firstName.length > 3) {
                this._firstName = firstName
            } else {
                this._firstName = ''
            }
        }
    }

    const person = new Person()
    console.log(person)
    person.firstName = 'Kri'
    console.log(person)
    person.firstName = 'Krish'
    console.log(person)

}