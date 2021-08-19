var first = 5;
var second = 7;
console.log(first,second);

//first approach
//first way to swap//by using temp variable //temp means temporary
// var temp = first;
// first = second;//ai line a second er value first a chole jabe
// second = temp;
// console.log(first,second);

//second approach
//destructuring
[first,second] = [second,first];
console.log(first,second);