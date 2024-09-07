//object literals

const mySym = Symbol("Harsha");
const jsUser = {
    name: "Harshada",
    // mySym: "Harshu", //it is works like string
    [mySym]: "Harshu", //now it is use as Symbol
    age: 23,
    location: "Pune",
    email: "charsha11@gmail.com",
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

console.log(jsUser[mySym]);
console.log(typeof jsUser.mySym);

jsUser.email = "sanket@gmail.com"
Object.freeze(jsUser);
jsUser.email = "vaishali@gmail.com"
console.log(jsUser);

 