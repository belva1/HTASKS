function getArray() {
    let amount = 9
    let value = 3
    let result = []
    for (let i = 1; i <= amount; i += value) {
        let newArray = [i, i + 1, i + 2]
        result.push(newArray)
    }
    return result
}

console.log(getArray())