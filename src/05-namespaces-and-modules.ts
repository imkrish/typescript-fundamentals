/// <reference path="05-circle-math.ts" />
/// <reference path="05-rectangle-math.ts" />

// tsc 05-namespaces-and-modules.ts --outFile 05-namespaces-and-modules.js       

import circle = my_math.circle

namespace namespaces_and_modules {

    namespace program {
        const PI = 3.1416
        console.log(PI)
        // console.log(my_math.PI) // have to be exported first
        console.log(my_math.calculateRectangle(10, 20))
        console.log(my_math.circle.calCircumference(3))
        console.log(circle.calCircumference(5))
    }
    
    // If no refernce path
    // tsc --outFile app.js 05-circle-math.ts 05-rectangle-math.ts 05-namespaces-and-modules.ts   
}