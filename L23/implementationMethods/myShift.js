function myShift (arr) {
    if(arr.length === 0){
        return
    }
    let deletedElement = arr[0]
    for(let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length--
    return deletedElement
}

let arr = [1, 2, 3]
console.log(myShift(arr))
console.log(arr)