let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.map((i) => {
        if (i%3===0) {
                console.log('FizBuz')
        } else if (i%2 === 0) {
                console.log('Fiz')
        } else if(i%2!=0) {
                console.log('Buz')
        }
})