const arr = [1, 2, 3, 4]

function processArr() {

    var i = 10

    function multiplyBy10(value: number) {
        return value * i
    }

    for (var i = 0; i < arr.length; i++) {
        arr[i] = multiplyBy10(arr[i])
    }

    return arr
}

console.log(processArr())