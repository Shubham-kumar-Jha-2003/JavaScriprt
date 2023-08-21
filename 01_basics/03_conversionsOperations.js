// ConversionsOperations 

let score = "33";

// let name = "Shubham";

console.log(typeof score)
console.log(typeof (score));

// console.log(typeof(name));

let valueInNumber = Number(score);
console.log(valueInNumber)
console.log(typeof valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = "Shubham";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "String" => true


let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));