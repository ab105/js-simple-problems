/*
function fibonacciSeries(num){
    const fibo = [0, 1];
    for(let i = 2; i<=num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

const fibonacci = fibonacciSeries('akash');
console.log(fibonacci);
*/


function fibonacciSeries(num){
    if(typeof num != 'number'){
        return 'please give a number';
    }
    if(num < 2){
        return 'please give a number greater than 2';
    }
    const fibo = [0, 1];
    for(let i = 2; i<=num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

const fibonacci = fibonacciSeries(3);
console.log(fibonacci);