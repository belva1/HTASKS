const studentArr = [{
        name: 'Сергей',
        surname: 'Войлов',
        ratingPoint: 1000,
        schoolPoint: 1000,
        course: 2,
    },
    {
        name: 'Татьяна',
        surname: 'Коваленко',
        ratingPoint: 880,
        schoolPoint: 700,
        course: 1,
    },
    {
        name: 'Анна',
        surname: 'Кугир',
        ratingPoint: 1430,
        schoolPoint: 1200,
        course: 3,
    },
    {
        name: 'Станислав',
        surname: 'Щелоков',
        ratingPoint: 1130,
        schoolPoint: 1060,
        course: 2,
    },
    {
        name: 'Денис',
        surname: 'Хрущ',
        ratingPoint: 1000,
        schoolPoint: 990,
        course: 4,
    },
    {
        name: 'Татьяна',
        surname: 'Капустник',
        ratingPoint: 650,
        schoolPoint: 500,
        course: 3,
    },
    {
        name: 'Максим',
        surname: 'Меженский',
        ratingPoint: 990,
        schoolPoint: 1100,
        course: 1,
    },
    {
        name: 'Денис',
        surname: 'Марченко',
        ratingPoint: 570,
        schoolPoint: 1300,
        course: 4,
    },
    {
        name: 'Антон',
        surname: 'Завадский',
        ratingPoint: 1090,
        schoolPoint: 1010,
        course: 3
    },
    {
        name: 'Игорь',
        surname: 'Куштым',
        ratingPoint: 870,
        schoolPoint: 790,
        course: 1,
    },
    {
        name: 'Инна',
        surname: 'Скакунова',
        ratingPoint: 1560,
        schoolPoint: 200,
        course: 2,
    },
];


class Student {
    constructor({name, surname, ratingPoint, schoolPoint, isSelfPayment}, id){
        this.id = id
        this.name = name
        this.surname = name
        this.ratingPoint = ratingPoint
        this.schoolPoint = schoolPoint
        this.isSelfPayment = isSelfPayment
    }

    set selfPayment(value){
        this.isSelfPayment = value
    }
}

const sortedStudentsById = (arr) => {
    return arr.sort((student1, student2) => {
        if(student1.id > student2.id){
            return 1
        }
        if(student1.id < student2.id){
            return -1
        }
        return 0
    })
}

const sortedStudentsByRating = (arr) => {
    return arr.sort((student1, student2) => {
        if (student1.ratingPoint > student2.ratingPoint) {
            return -1
        }
        if (student1.ratingPoint < student2.ratingPoint){
            return 1 // change place
        }
        if (student1.schoolPoint > student2.schoolPoint){
            return -1
        }
        if (student1.schoolPoint < student2.schoolPoint){
            return 1
        }
        return 0
    })
}

// определить
const determinePayment = (arr) => {
    sortedStudentsByRating(arr)
    for(let index in arr) {
        if (arr[index].ratingPoint >= 800 && index < 5) {
            arr[index].selfPayment = false
        } else {
            arr[index].selfPayment = true
        }
    }
    sortedStudentsById(arr)
}




studentsArr = studentArr.map((item, index) => new Student(item, index + 1))
console.log(studentsArr)
determinePayment(studentsArr)
