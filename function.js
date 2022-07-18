//functions withiut parameter and return type

function sayhello(){
    console.log("Hello from functions");
}
sayhello();

//function with parameter
function sum(num1,num2){
    let addition=num1+num2
        console.log("addition of two numbers:"+addition)
}
sum(10,30)

//function with return type
function multiply(num1,num2){
    return num1*num2;
}
console.log("multiplication of two numbers:"+multiply(5,10))

//functions are the first class citizen in java script
let a=function sub(num1,num2){
    return num1-num2;
}
console.log(a(10,2));
// IIFE -> immediately invoke function expression
(function(){
    console.log("Hello from IIFE");
})();

// IIFE with parameter
(function(num1,num2){
    console.log(num1/num2);
})(50,5);
