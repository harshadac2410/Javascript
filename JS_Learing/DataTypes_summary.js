// how data get stored in memory and how you;re going to access that data, 
// based on that there are 2 types of data types ==> 1.Primitive 2.Non-primitive

//1.Primitive data types :: 7 types ==> String,Number,Boolean,null,undefined,Symbol

const score = 100
const scoreValue = 100.3
let userEmail;

// const id = Symbol('123')
// const id2 = Symbol('123')

// console.log(id == id2); //false

//2.Non-primitive (Reference) data types :: Array,Objects,Functions
const fruits = ["Mango","Orange","Grape","Apple"];
let myObj = {
    name : "Harsha",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World!!");
}
myFunction(); 
console.log(typeof myFunction); //function

console.log(typeof Symbol); //function

//return type of Reference type data type is "function"


