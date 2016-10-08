namespace compiler {
    
let maName: string = 'Krish'
let maAge: number = 27
let anything: any
anything = 12

function controlMe(isTrue: boolean) {
    let result: number = 0
    if (isTrue) {
        result = 12
    }
    return result
}

// tsconfig.json
// "compilerOptions": {
//     "module": "commonjs",
//     "target": "es5",
//     "noImplicitAny": true,
//     "sourceMap": false,
//     "strictNullChecks": true, // if type is not null, the compiler will warn
//     "noEmitOnError": true, // don't create js files, if there are errors in TypeScript'
//     "noUnusedParameters": true
// }
}