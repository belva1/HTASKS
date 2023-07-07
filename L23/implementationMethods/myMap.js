function myMap(arr, func){
    let newArr = []
    for(let index in arr){
        newArr.push(func(arr[index], index, arr))
    }
    return newArr
}

console.log(myMap([1, 2, 3, 4, 5], el => el ** 2))