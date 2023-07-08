const employeeArr = [
    {
        id: 1,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 1010,
        workExperience: 10, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 2,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 1200,
        workExperience: 12, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 3,
        name: 'Татьяна',
        surname: 'Коваленко',
        salary: 480,
        workExperience: 3, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 4,
        name: 'Анна',
        surname: 'Кугир',
        salary: 2430,
        workExperience: 20, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'female'
    },
    {
        id: 5,
        name: 'Татьяна',
        surname: 'Капустник',
        salary: 3150,
        workExperience: 30, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 6,
        name: 'Станислав',
        surname: 'Щелоков',
        salary: 1730,
        workExperience: 15, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 7,
        name: 'Денис',
        surname: 'Марченко',
        salary: 5730,
        workExperience: 45, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'male'
    },
    {
        id: 8,
        name: 'Максим',
        surname: 'Меженский',
        salary: 4190,
        workExperience: 39, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 9,
        name: 'Антон',
        surname: 'Завадский',
        salary: 790,
        workExperience: 7, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 10,
        name: 'Инна',
        surname: 'Скакунова',
        salary: 5260,
        workExperience: 49, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 11,
        name: 'Игорь',
        surname: 'Куштым',
        salary: 300,
        workExperience: 1, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
];

// TASK 1
class Employee {
    constructor ({id, name, surname, salary, workExperience, isPrivileges, gender}) {
        this.id = id
        this.name = name
        this.surname = surname
        this.salary = salary
        this.workExperience = workExperience
        this.isPrivileges = isPrivileges
        this.gender = gender
    }

    getFullName () {
        return `${this.name} ${this.surname}`
    }

    get fullInfo() {
        return {
            id: this.id,
            name: this.name,
            surname: this.surname,
            salary: this.salary,
            workExperience: this.workExperience,
            isPrivileges: this.isPrivileges,
            gender: this.gender,
        }
    }

    set fullInfo(fieldsToRename) {
        if(fieldsToRename.id){
            this.id = fieldsToRename.id
        }
        if(fieldsToRename.name){
            this.name = fieldsToRename.name
        }
        if(fieldsToRename.surname){
            this.surname = fieldsToRename.surname
        }
        if(fieldsToRename.salary){
            this.salary = fieldsToRename.salary
        }
        if(fieldsToRename.workExperience){
            this.workExperience = fieldsToRename.workExperience
        }
        if(fieldsToRename.isPrivileges !== undefined){
            this.isPrivileges = fieldsToRename.isPrivileges
        }
        if(fieldsToRename.gender){
            this.gender = fieldsToRename.gender
        }
    }
}


// TASK 3
let createEmployeesFromArr = (arr) => {
    return arr.map((item) => new Employee(item))}
const employeeConstructArr = createEmployeesFromArr(employeeArr)


// TASK 4
const getFullNamesFromArr = (arr) => {
       return arr.map((item) => item.getFullName())
}
const employeeFullNamesArr = getFullNamesFromArr(employeeConstructArr) // contains Employee class objects

// TASK 5
const getMiddleSalary = (arr) => {
       return arr.reduce((acc, item) => acc += item.salary, 0) / arr.length
}

getMiddleSalary(employeeConstructArr)

// TASK 6
const getRandomEmployee = (arr) => {
    let len = arr.length
    let random = Math.random()
    let resultId = Math.ceil(random * len)
    return arr[resultId - 1]
}
getRandomEmployee(employeeConstructArr)

// TASK 7
const employeeObject = new Employee(employeeArr[0])
employeeObject.fullInfo
employeeObject.fullInfo = {name: 'Valeriya', gender: 'female'}
