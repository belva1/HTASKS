function myPush (arr, element){
    arr[arr.length] = element
    return arr
}


console.log(myPush([1, 2, 3, 4], 'a'))