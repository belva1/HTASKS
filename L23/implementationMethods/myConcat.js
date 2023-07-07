function myConcat (arr1, arr2){
    newArr = arr1
    for(item of arr2){
        newArr.push(item)
    }
    return newArr
}

console.log(myConcat([1,2], [3,4]))