function myUnshift (arr, element){
    let newArr = [element]
    for (let item of arr){
        newArr.push(item)
    }
    return newArr
}

console.log(myUnshift([1, 2, 3, 4, 5], 6))