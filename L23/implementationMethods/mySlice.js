function mySlice(arr, index1, index2) {
    let newArr = []
    if(!index2){
        index2 = arr.length
    }
    for(let index = index1; index < index2; index++){
        newArr.push(arr[index])
    }
    return newArr
}

console.log(mySlice([1, 2, 3, 4, 5], 2, 4))