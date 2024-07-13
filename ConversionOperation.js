let score1 = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber1 = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN ==> Not a Number



let score2 = null

console.log(typeof score); //object
let valueInNumber2 = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); // 0 



let score3 = undefined

console.log(typeof score); //undefined

let valueInNumber3 = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN => Not a Number (type number he hai)

 

let score = true //if false then ==> 0
console.log(typeof score); //boolean
let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //1



let isLoggedIn = ""

let booleanLoggedIn = Boolean(isLoggedIn)
// console.log(booleanLoggedIn);

// when 1 ==> true
// when "Harsha" ==> true
// when "" ==> false

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); //33
console.log(typeof stringNumber); //string
