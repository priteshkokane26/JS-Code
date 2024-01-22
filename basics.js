const accountId = 122344;
let accountEmail = 'pritesh@gmail.com';
var accountPassword = "1234"; //var is not used currently
accountCity = "Pune"; //this is also used
let accountState ; //this will give undefined

/*
 prefer not to use the var because of issue inblock scope and functional scope
 concole.table([]); this will print the all elements in the table
 */

//accountId = 23; not allowed
accountEmail = "ravina@gmail.com";
accountPassword = "12345";
accountCity = "Banglore";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
