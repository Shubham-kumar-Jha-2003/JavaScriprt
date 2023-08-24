// node 03_basics/01_functions.js


// Functions In javascript


function sayMyName() {
    console.log('S')
    console.log('h')
    console.log('u')
    console.log('b')
    console.log('h')
    console.log('a')
    console.log('m')
}

// sayMyName();

const addFunction = function addtwoNumber(number1, number2) {
    return number1 + number2;
}

// console.log(addFunction(2,4));


// function add(a,b) {
//     console.log(a + b);
// }

// add(3,4);


const userLoggInMessage = function logginUserMessage(username = "Afsha") {

    if(username === undefined) {
        console.log("Please enter a username");
        return;
    }
    
    return `${username} Just logged in Instagram`;
}

console.log(userLoggInMessage())
