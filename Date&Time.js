let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate); //object

let myCreatedDate = new Date(2024,0,23);
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamps = Date.now();
// console.log(myTimeStamps); //times in miliseconds
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

