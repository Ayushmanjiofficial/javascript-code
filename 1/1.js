// Variables
const accountId = 144553  // not change after declear
// accountId = 2 // not allowed
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"  // This also declear variable but Dont use it
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// Alowed
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

// For print accountId value in console
console.log(accountId);


// This is use for printing multiple variables in form of table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])