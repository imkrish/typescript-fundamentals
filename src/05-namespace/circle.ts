namespace my_math {    
    
    export namespace circle {  // Don't forget to export

        const PI = 3.14

        export function calCircumference(diameter: number) {
            return diameter * PI
        }
    }
}