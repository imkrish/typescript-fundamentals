namespace Decorator {

    // Class Decorator

    function logged(constructorFn: Function) {  // the constructor of class is passed to the first parameter
        console.log(constructorFn)
    }


    function logging(value: boolean): Function | undefined {
        if (value)
            return logged
    }

    function printable(constructorFn: Function) {
        constructorFn.prototype.print = function() {
            console.log(this)
        }
    }

    @logging(false)
    @printable
    class Plant {
        name = 'Green Plant'
    }

    const plant = new Plant()

    plant.print()


    // Method Decorator
    // Property Decorator

    function editable(value: boolean) {
        return function(target: any, propName: string, descriptor: PropertyDescriptor) {
            descriptor.writable = value
        }
    }

    function overwritable(value: boolean): Function {
        return function(target: any, propName: string) {
            const newDescriptor: PropertyDescriptor = {
                writable: value
            }
            return newDescriptor
        }
    }

    class Project {

        @overwritable(true)
        projectName: string

        constructor(name: string) {
            this.projectName = name
        }

        @editable(false)
        calcBudget() {
            console.log(1000)
        }
    }

    const project = new Project('Super Project')
    project.calcBudget()
    project.calcBudget()
    console.log(project)

    // Parameter Decorator
    function printInfo(target: any, methodName: string, paramIndex: number) {
        console.log('target: ', target)
        console.log('methodName', methodName)
        console.log('paramIndex', paramIndex)
    }

    class Course {
        name: string

        constructor(name: string) {
            this.name = name
        }

        printStudentNumbers(mode: string, @printInfo printAll: boolean) {
            if (printAll) {
                console.log(1000)
            } else {
                console.log(2000)
            }
        }
    }

    const course = new Course('eiei')
    course.printStudentNumbers('anything', true)

}