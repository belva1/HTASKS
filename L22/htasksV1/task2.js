//Написать логику нахождения факториала числа 10.

function my_factorial_var(num){
    for(var result = 1; num>1; num--){
        result = result * num
//        console.log(result);
    }
    return result;
}

my_factorial_var(10)


function my_factorial_let(num){
    let result = 1
    for(; num>1; num--){
        result = result * num
//        console.log(result);
    }
    return result;
}

my_factorial_let(10)

