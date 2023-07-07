function myFilter (arr, func) {
    let newArr = []
    for (let index in arr) {
        if (func(arr[index], index, arr)){
            newArr.push(arr[index])
        }
    }
    return newArr
}

function name(param){
    return param > 20
}

console.log(myFilter([18, 19, 20, 21, 22, 23], el => el < 21))