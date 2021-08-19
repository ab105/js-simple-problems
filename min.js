//task 3 : find smallest number (20-3 module er)


function findsmallestFromThree(firstOne, secondOne, thirdOne){
    if(firstOne < secondOne && firstOne < thirdOne){
        return firstOne;
    }
    else if( secondOne < firstOne && secondOne < thirdOne){
        return secondOne;
    }
    else{
        return thirdOne;
    }
}

const minOfThree = findsmallestFromThree(230,210,300);
console.log(minOfThree);