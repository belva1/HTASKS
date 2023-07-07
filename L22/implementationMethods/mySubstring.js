function mySubstring (str, index1, index2){
    let result = ''
    if (index1 < 0 || index2 < 0){
        return ''
    }
    if (index1 > str.length - 1){
        return ''
    }

    if (typeof(index2) === 'undefined' || index2 > str.length - 1){
        index2 = str.length
    }
    for(let index = index1; index < index2; index++){
        result += str[index]
    }
    return result
}


// function numbers(a, b){
//     return `${a}, ${b}`
// }
str = 'Hello'
console.log(mySubstring(str, 5, -1))