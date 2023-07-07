let arr = [19, 5, 42, 2, 77]

function suma(array){
    let indexMin = 0
    let min = array[0]
    array.map((item, index) => {
        if (item < min) {
            min = item
            indexMin = index
        }
    })

    let secondMin

    if (indexMin == 0) {
        secondMin = array[1]
    } else {
        secondMin = array[0] // 0
    }

    array.map((item, index) => {
        if (index == indexMin){
        } else if (item < secondMin) {
            secondMin = item
        }
    })
    return min + secondMin
}

console.log(suma(arr))