function calculate (arr) {
    let result = 0
    arr.map((item, index) =>{
        result += item * 2 ** (arr.length - 1 - index)
    })
    return result
}

console.log(calculate([1, 0, 1, 1]))