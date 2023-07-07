function myPop (arr) {
    let deletedElement = arr[arr.length - 1]
    arr.length--
    return deletedElement
}

arr = [1, 2, 3, 4]
console.log(myPop(arr))
console.log(arr)