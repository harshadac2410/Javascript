const myArray = [1,2,3,4,5,6] 

const myArray2 = new Array(2,3,41,45);

console.log(myArray[1]);


//Array methods

myArray.push(89);
console.log(myArray);
myArray.pop(89);
console.log(myArray);

myArray.unshift(10);
console.log(myArray);
myArray.shift();
console.log(myArray.includes(10));
console.log(myArray.indexOf(10));
console.log(myArray.indexOf(4));

const newArr = myArray.join();
console.log(myArray);
console.log(typeof newArr);

//slice and splice

console.log("A ",myArray);

const myn1 = myArray.slice(1,3);
console.log(myn1);
console.log("B ",myArray);

const myn2 = myArray.splice(1,3);
console.log("C ",myArray);
console.log(myn2);