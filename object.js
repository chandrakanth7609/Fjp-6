// empty object

let obj={};
console.log(obj);

//create  a object
let objChandu={
    Name:"chandu",
    "Age":"22",
    "phoneNo":"7702180472",
    lastname : "sirusala"

};
console.log(objChandu);
let capAmerica={
    Name:"chandu",
    "Age":"22",
    friends:["hari","praveen","kapil"],
    phoneNo:7702180472,
    address:{                       //nested object
        city:"shabad",
        state:"Telangana"
    },
    sayHi:function(){
        console.log("cap america says hii");
    }
}
console.log(capAmerica);
console.log(capAmerica.Age);
console.log(capAmerica.Name);
console.log(capAmerica.address);
console.log(capAmerica.phoneNo);
console.log(capAmerica.friends);
console.log(capAmerica.sayHi);

//call from say hii
capAmerica.sayHi();                        // function call
console.log(capAmerica.address.state);

console.log("object before update : ",capAmerica)
// add a new key to object
capAmerica.Movies = ['Avengers','Civil War','Endgame'];
console.log("object after update : ",capAmerica);

//delete a key 
delete capAmerica.Movies;

capAmerica.isAvenger = true;

capAmerica.address.state = 'New York'
console.log(capAmerica);

//second method to access a key

console.log(capAmerica.Name);
console.log(capAmerica['Name']);
console.log(capAmerica['address']['city'])