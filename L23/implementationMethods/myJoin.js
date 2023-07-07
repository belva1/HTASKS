function myJoin (arr, separator) {
    let newStr = ''
    for(let index = 0; index < arr.length; index++){
        newStr += arr[index]
        if(index < arr.length - 1){
            newStr += separator
        }
    }
    return newStr
}

console.log(myJoin([1, 2, 3, 4, 5, true, 'hello', [1, 2], {1: 'a', 2: 'b'}], '|'))

console.log([1, 2, 3, 4, 5, true, 'hello',[1, 2], {1: 'a', 2: 'b'}].join('|'))