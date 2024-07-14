// console.log(2 > 1); //true

// console.log("2" > 1); //true
//can't compare two different data types not a good practice

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

//reason ==> equality check == and comparisons >,<,>=,<= work differently
//Comparisons convert null to a number,treating it as 0.

console.log(undefined == 0); //false

// Strict check

console.log("2" === 2); //false
