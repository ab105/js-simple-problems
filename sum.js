let sum = 0;
const numbers = [40, 50, 10, 20];
for(let i=0; i<numbers.length; i++){
    const elements = numbers[i];
    // console.log(elements);
    // let sum = 0;
    sum = sum + elements;
    // console.log(sum);
}
console.log(sum);

//funtion diye array er elementc gulor jug means addition korte parbo
function arrayTotal(number){
    var sum = 0;
    for(let i=0; i<number.length; i++){
        const element = number[i];
        sum = sum + element;
    }
    return sum;
}

const total = arrayTotal([35, 45, 50, 10]);
console.log('array total using function',total);