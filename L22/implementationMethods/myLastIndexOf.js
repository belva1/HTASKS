function myLastIndexOf (str, s){
    for(let index = str.length - 1; index >= 0; index--){
        if (s === str.substr(index, s.length)){
            return index
        }
    }
    return false
}


console.log(myLastIndexOf('Hello Hello Hello', 'Hello'))