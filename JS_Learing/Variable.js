const accountId = 12468
let accountEmail = "charshada@google.com"
var accountPassword = "98765"
accountCity = "Pune"

// accountId = 2  not allowed since it is a const

accountEmail = "harsha@gmail.com"
accountPassword = "111001"
accountCity = "Bengluru"

console.log(accountId);

/*
prefer not to use war 
because of issue in block scope and functional scope
*/



console.table([accountId,accountEmail,accountPassword,accountCity])