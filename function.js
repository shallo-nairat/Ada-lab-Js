function add (num1,num2){
    const sum=num1+num2;
    console.log({console:sum});
    return{'sum':sum};//return stores without console you wont see it

}
console.log(add(2,3));//
add(4,5);

let student= 'Agnes'//global variable can be accessed anywhere
function item(){
    const names=['Anne','Eunice'];
    console.log({names});
    console.log({inside:student});
// when you create a var in a function you have to call it inside the function
//it can be accessed with the function ..scope

}
item();
console.log({outside:student});

//function expressions are called anonymous

const subtract= function(num1,num2){
    console.log(num1-num2);

}
subtract(20,10);
//Arrow functions
//if you dont write console it means you are returning
//
const multiply=(num1,num2)=>console.log(num1*num2);
multiply(6,9);

//IIFEs you call immediately after a function 
(function(){
    console.log('Hello there');
}) ()
//Hoisting
console.log({person});
var person='human'
console.log('person2...',person);

//let does not allow hoisting
//do not use const use var 

 greet()
function greet(){
   console.log('Hi person')
 }
hello()
 const hello =()=>console.log('This is a greeting');

let a = 'hello';


function greet(){
    console.log(a);
}
