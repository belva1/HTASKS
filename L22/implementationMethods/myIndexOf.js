function myIndexOf (str, s){
    let newStr = ''
    for(let index = 0; index < str.length; index++){
        if (s === str.substr(index, s.length)){
            return index
        }
    }
    return false
}
console.log(myIndexOf('Hellojjjjj', 'jj'))