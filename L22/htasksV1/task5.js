//Вывести в консоль пирамиду. Переменная указывает количество строк из которых построится пирамида.
//Пирамида должна строится в одинаковом визуально виде между собой, но строго учитывая кол-во строк.

function pyramid(n) {
    for (let row = 1; row < n + 1; row++){
        let line =''
        for (let column = 1; column < 2 * n; column++) {
            if (column > n - row && column < n + row) {
                line += '#'
            } else {
                line += '-'
            }
        }
            console.log(line)
    }
}

pyramid(6)