//ai code er kisu confusion ase;
//shob gulo index element check kore nai = confusion

function largestElement(numbers){
    let largest = numbers[0];
    for(let i=0; i<numbers.length; i++){
       const element = numbers[i];
       if(element > largest){
           largest = element;
       } 
    //    console.log(element); 
    //    largest = Math.max(element);
    }
    return largest;
}

const ages = [12, 30, 35, 20, 10, 18];
const oldest = largestElement(ages);
const oldest2 = largestElement([-12,-3,-17]);
// console.log(oldest);
console.log(oldest2);