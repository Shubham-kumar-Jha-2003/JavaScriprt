// truththy and falsy 

const userEmail = []

if(userEmail) {

    console.log("Got user email  ")
} else {
    console.log("Don't have user email ")
}


// falsy value

// false , 0, -0, "", NaN, BIGINT 0n, null, undefined 

// truthy value

// "0", " " "false", [] {} function(){}

if(userEmail.length === 0) {
    console.log('Array is empty');
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0) {
    console.log("Object is empty")
}

// Nullish Coalescing Operator(??) null undefined

let val1 = 5 ?? 10;

// val1 = null ?? 3;
// val1 =  undefined ?? 18;
// val1 = null ?? 10 ?? 20

// Ternary operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80")


console.log(val1)


