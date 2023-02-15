
function fibonacci(num) {

    let array = []
    for (let i = 0; i < num; i++) {
        if (array.length > 1) {
            array.push(array[array.length - 2] + array[array.length - 1])
        } else {

            array.push(i)
        }


    }
    
    return array
}

console.log(fibonacci(1));
console.log(fibonacci(5))
console.log(fibonacci(10))
