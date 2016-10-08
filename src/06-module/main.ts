// import { calCircumference } from './math/circle'  // 1
import calRectangleArea from './math/rectangle'      // 2 needs export default
import * as Circle from './math/circle'              // 3

// import { Component } from '@angular/core'  // Describe

// Install SystemJS and setup in index.html
// <script src="node_modules/systemjs/dist/system.js"></script>
// <script>
//     SystemJS.config({
//         baseURL: '/src/06-module',
//         defaultJSExtensions: true
//     })

//     SystemJS.import('main.js')
// </script>

namespace modules {

    console.log(Circle.calCircumference(5))
    console.log(calRectangleArea(10, 20))
}