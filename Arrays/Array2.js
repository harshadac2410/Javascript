const marvel = ['thor','ironman','spiderman'];
const dc = ['superman','flash','batman'];

marvel.push(dc);
console.log(marvel); //add that array as a element of existing array
console.log(marvel[3][0]); 

const all = marvel.concat(dc);
console.log(all); //this will concat the array

const all_heros = [...marvel,...dc]; //spread 
console.log(all_heros);

const int_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_array = int_array.flat(Infinity);
console.log(real_array);


console.log(Array.isArray("Harshada"));
console.log(Array.from("Harshada"));
console.log(Array.from({name:"Harshada"})); //gives empty array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));