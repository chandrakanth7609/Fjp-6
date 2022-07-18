console.log("welcome to java script");
console.log("chandu chadukora");
//variable
let a=10;
console.log(a);
let char="kiran";
console.log(char);
let str="these two are brothers";
console.log(str);
let bool=true;
console.log(bool);
//loops
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
for(let i=1;i<=10;i++){

console.log(i);
}
let count=10;
while(count>-5){
    console.log(count);
    count--;
}
//isPrime
let n=89;
let isPrime=true;
for(let i=2;i*i<=n;i++){
    if(n%i==0){
        isPrime=false;
    }
}
if(isPrime==true){
    console.log("number is prime");
}else{
    console.log("number is not prime");

}
