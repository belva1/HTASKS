class CustomString {
    constructor(str){
        this.str = str
    }

    methodReverse () {
        let newStr = ''
        for(let i = this.str.length - 1; i >= 0; i--){
            newStr += this.str[i]
        }
        return newStr
    }

    methodUcFirst() {
        return this.str.charAt(0).toUpperCase() + this.str.slice(1)
    }

    methodUcWords() {
        return this.str.split(' ').map((item) => {
            let newStr = new CustomString(item)
            return newStr.methodUcFirst()
        }).join(' ')
    }
}

customObj = new CustomString('hello everyone')
console.log(customObj.methodReverse())
console.log(customObj.methodUcFirst())
console.log(customObj.methodUcWords())


