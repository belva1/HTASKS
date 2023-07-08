class Employee {
    constructor (id, name, surname, salary, workExperience, isPrivileges, gender) {
        this.id = id
        this.name = name
        this.surname = surname
        this.salary = salary
        this.workExperience = workExperience
        this.isPrivileges = isPrivileges
        this.gender = gender
    }
}

const employeeObj = new Employee(1, 'Valeriya', 'Belyayeva', 10, 15, false, 'female')
console.log(employeeObj)