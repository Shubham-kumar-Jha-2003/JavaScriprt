// ConversionsOperations 

let score = "33";

// let name = "Shubham";

// console.log(typeof score)
// console.log(typeof (score));

// console.log(typeof(name));

let valueInNumber = Number(score);
// console.log(valueInNumber)
// console.log(typeof valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = "Shubham";

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "String" => true


let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof(stringNumber));


// *************************** Operations ***********************************

let value = 3;
let negvalue = -value;

// console.log(negvalue);

// ArithMetic basic operations

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 / 2)
// console.log(2 ** 3)
// console.log(3 % 2)


let str1 = "hello"
let str2 = " Shubham"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(typeof("1" + 2));
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(typeof("1" + 2 + 2));
// console.log(typeof(1 + 2 + "2"));
// node 01_basics/03_conversionsOperations.js

// This is very bad practice => Not prefered
// console.log(+"")
// console.log(+true);

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;
// console.log(num1, num2, num3);

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);