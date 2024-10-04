const accountId = 1234 // for constant
let accountEmail = "mohit@gmail.com" //use let only
var accountPassword = "123456" //var is not use in nowdays because issue in block scope and functional scope 
accountCity = "jaipur"
let accountState; //output is undefine 
// accountId = 2 not allow thats why its not change

accountEmail = "mgm.com"
accountPassword = "232323"
accountCity = "bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])