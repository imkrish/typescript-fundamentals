import { calCircumference } from './math/circle'
import { calculateRectangle } from './math/rectangle'

// install SystemJS and setup in index.html
// <script src="node_modules/systemjs/dist/system.js"></script>
// <script>
//     SystemJS.config({
//         baseURL: '/src/06-module',
//         defaultJSExtensions: true
//     })

//     SystemJS.import('main.js')
// </script>

namespace modules {

    console.log(calCircumference(5))
    console.log(calculateRectangle(10, 20))
}