/// <reference path="./circle.ts" />
/// <reference path="./rectangle.ts" />

// tsc main.ts --outFile main.js       

import circle = my_math.circle

namespace namespaces {

    const PI = 3.1416
    console.log(PI)
    // console.log(my_math.PI) // have to be exported first
    console.log(my_math.calculateRectangle(10, 20))
    console.log(my_math.circle.calCircumference(3))
    console.log(circle.calCircumference(5))
    
    // If no refernce path
    // tsc --outFile main.js circle.ts rectangle.ts main.ts   
}