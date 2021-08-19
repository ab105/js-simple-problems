const  business = 350;
const minister = 250;
const army = 600;

//compare two for maximum value

// console.log(Math.max(business,minister));
// if(business > minister){
//     console.log('business person is bigger');
// }
// else{
//     console.log('minister is bigger');
// }



//function

function findLargest(first,second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}

const larger = findLargest(2200,300);
console.log('largest number using function',larger);

//compare three for maximum value
/*
if(business > minister && business >army){
    console.log('minister  is bigger than all');
}
else if(minister > business && minister > army){
    console.log('minister is bigger than all');
}
else{
    console.log('army is bigger than all');
}
*/

var max = Math.max(business,minister,army);//kun value ta boro sheita bole dibe
console.log(max);



//task 1 : create a function that takes three numbers as input parameters and returns you the largest number of the three

function findLargestFromThree(firstOne, secondOne, thirdOne){
    if(firstOne > secondOne && firstOne > thirdOne){
        return firstOne;
    }
    else if( secondOne > firstOne && secondOne > thirdOne){
        return secondOne;
    }
    else{
        return thirdOne;
    }
}

const maxOfThree = findLargestFromThree(230,410,300);
console.log(maxOfThree);