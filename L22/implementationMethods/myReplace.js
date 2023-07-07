function myReplace(str, oldWord, newWord){
    let newStr = ''
    index = str.indexOf(oldWord)
    len = oldWord.length
    newStr = str.slice(0, index) + newWord + str.slice(len + index)
    return newStr
}


console.log(myReplace('Hello world!', 'world', 'everyone'))