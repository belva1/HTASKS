function mySubstr(str, index, wordLength){
    let result = ''
    if(typeof(wordlength) === 'undefined'){
        wordLength = str.length - index
    }
    for (let i = 0; i < wordLength; i++){
        result += str[index + i]
    }
    return result
}

let str = 'Hello world'
console.log(mySubstr(str, 3, 15))