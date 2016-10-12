// for impor 'jQuery
// SystemJS.config({
//     map: {
//         'jQuery': '/node_modules/jquery/dist/jquery.min.js'
//     },
//     baseURL: '/src/10-jquery',
//     defaultJSExtensions: true
// })

// 2nd way
// sudo npm install --global typings
// typings install dt~jquery --global --save    

// best way
// npm install --save-dev @types/jquery   

import 'jQuery'

namespace jquery {

    $('#app').css({
        'background-color': 'green'
    })

}

