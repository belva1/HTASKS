function mySlice (str, index1, index2){
    let result = ''
    if (index1 < 0) {
        index1 += str.length
    }
    if (index2 < 0) {
        index2 += str.length
    }
    for (let index = index1; index < index2; index++){
        result += str[index]
    }
    return result
}


let str = 'Hello. My name is Molly.'
console.log(mySlice(str, -6, 1))

console.log(str.slice(-6, 1))