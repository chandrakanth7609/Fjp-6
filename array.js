//arrays
//empty array
let arr=[];
console.log(arr);

//array with elements
let eleArr =[1,2,3,4,5,"hello iam a string",false,'c',7.24];
console.log(eleArr);

// 0 based indexing
console.log("elements of 4th index:"+eleArr[4]);
console.log("elements of 0th index:"+eleArr[0]);
eleArr[3]="nothing";
console.log(eleArr);

//arrays method
//1.push
console.log("array before push"+eleArr);
eleArr.push("chandu is good boy!")
console.log("array after push"+eleArr);

    // push is using to add an item in array at the last
//2.pop
console.log("array before pop",eleArr);
eleArr.pop();
console.log("array after pop",eleArr);

    // pop is using to remove an item in array at the last
//3.shift
console.log("array before shift",eleArr);
eleArr.shift();
console.log("array after shift",eleArr);

    // shift is using to remove an item in array at the first
//4.unshift
console.log("array before unshift",eleArr);
eleArr.unshift("newly added an item");
console.log("array after unshift",eleArr);

    // unshift is using to add an item in array at the first


    //length
    let len=eleArr.length;
    console.log(len)