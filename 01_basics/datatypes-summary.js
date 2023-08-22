// Primitive Data types

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;

const scoreValue = 100.3;

const isLoogedIn = false;

const bigNumber = 333748374973n;
const outsideTemp = null;

let userEmail;
// console.log(userEmail);

let id = Symbol('123');

let anotherId = Symbol('123');
// console.log(id === anotherId);

// Reference (Non Primitives)

// Arrays, objects, Functions 

const heros = ["Shaktiman", "naggraj", "doga"];

let Student = {
    name: "Shubham",
    rollNumber: 5432,
    
}

const myFunction = function() {
    console.log("Hello Shubham");
}

// myFunction();


// console.log(typeof bigNumber);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitives), heap (Non-primitives / Reference )

let myYotubename = "ShubhamKumarjha";

let anotherName = myYotubename;

// console.log(myYotubename);
// console.log(anotherName);


anotherName = "ChaiaurCode";

console.log(myYotubename);
console.log(anotherName);

let userOne = {
    email: "user@wwwgoogle.com",
    upi: "user@ybl",
}

let userTwo = userOne;

userTwo.email = "shubhamkumarjha855@gmail.com";
console.log(userOne)
console.log(userTwo);
