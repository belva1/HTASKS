class Validator{
    constructor(str) {
        this.str = str
        this.DOMAIN = '.com'
    }

    checkIsEmail() {
        if(this.str.includes(' ')) {
            return false
        }
        if(!(this.str.includes('@'))) {
            return false
        }
        if(this.str[0] === '@' || this.str[0] === '.') {
            return false
        }
        let amount = 0
        for (let item of this.str) {
            if (item === '@') {
                amount++
            }
        }
        if (amount > 1) {
            return false
        }
        let index = this.str.indexOf('@')
        if(!(this.str.slice(index) === '@gmail.com')) {
            return false
        }
        return true
    }

    checkIsDomain() {
        if(this.str.includes(' ')) {
            return false
        }
        if(this.str[0] === '.') {
            return false
        }
        let dotAmount = 0
        for(let item of this.str) {
            if(item === '.'){
                dotAmount++
            }
        }
        if (dotAmount > 1) {
            return false
        }
        let index = this.str.indexOf('.')
        if(!(this.str.slice(index) === this.DOMAIN)) {
            return false
        }
        return true
    }

     checkIsDate () {
        if(this.str.length !== 10){
            return false
        }
        let arr = this.str.split('.')
        if(arr.length !== 3){
            return false
        }
        if(Number(arr[0]) == NaN || Number(arr[1]) == NaN || Number(arr[2]) == NaN){
            return false
        }
        if(arr[0].length !== 2 || arr[1].length !== 2 || arr[2].length !== 4){
            return false
        }
        let day = Number(arr[0])
        let month = Number(arr[1])
        let year =Number(arr[2])
        if(month < 1 || month > 12){
            return false
        }
        // месяца по 31 день
        if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
            if(day < 1 || day > 31){
                return false
            }
        }
        // месяца по 30 дней
        if(month === 4 || month === 6 || month === 9 || month === 11){
            if(day < 1 || day > 30){
                return false
            }
        }
        // высокосный февраль (номер года делится на 4)
        if(month === 2 && year % 4 === 0){
            if(day < 1 || day > 29){
                return false
            }
        }
        // невысокосный февраль
        if(month === 2 && year % 4 !== 0){
            if(day < 1 || day > 28){
                return false
            }
        }
        return true
     }

     checkIsPhone(){
        if(this.str.length !== 19){
            return false
        }
        let arr = this.str.split(' ')
        if(arr.length !== 3){
            return false
        }
        if(arr[0] !== '+38'){
            return false
        }
        if(arr[1][0] !== '(' || arr[1][4] !== ')' || arr[1].length !== 5){
            return false
        }
        if(Number(arr[1].slice(1, 4)) == NaN){
            return false
        }
        if(arr[2].length !== 9){
            return false
        }
        let randomNumbers = arr[2].split('-')
        if(randomNumbers.length !== 3 || randomNumbers[0].length !== 3 || randomNumbers[1].length !== 2 || randomNumbers[2].length !== 2){
            return false
        }
        if(Number(randomNumbers[0]) == NaN || Number(randomNumbers[1]) == NaN || Number(randomNumbers[2]) == NaN){
            return false
        }
        return true
     }
}

const checkEmail = new Validator('848belval848@gmail.com')
checkEmail.checkIsEmail()

const checkDomain = new Validator('google.com')
checkDomain.checkIsDomain()

const checkDate = new Validator('29.02.2015')
checkDate.checkIsDate()

const checkPhone = new Validator('+38 (066) 937-99-92')
checkPhone.checkIsPhone()