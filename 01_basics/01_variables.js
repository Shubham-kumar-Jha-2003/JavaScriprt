const accountId = 14453;
let accountName = "shubhamkumarjha@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi"

// accountId = 3; // Not allowed 
console.log(accountId);

// Thease are allowed to change thir value in node enviroment
accountName = "shubhamjha@.com";
accountPassword = "212122";
accountCity = "Hydrabad"
console.table([accountId, accountName, accountPassword, accountCity]);


/*
Prefer not to use var keyword
beacause of issue in block and functional scope.

*/