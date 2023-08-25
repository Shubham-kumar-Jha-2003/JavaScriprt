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

// console.log(userLoggInMessage())

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 300, 580, 800, 2000));


const user = {
    username: "Shubham",
    Price: 199
}

function handleObject(anyobject) {

    console.log(`username is ${anyobject.username} and price is ${anyobject.Price}`);
}

// handleObject(user);

handleObject({
    username: "Afsha",
    Price: 399
})

const myNewArray = [200, 100, 300, 600];

function returnSecondValue(getArray) {

    return getArray[2];

}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 100, 500, 504]));

// Yeh mera dimag ha

// const myNewArray = [200, 300, 100, 600];

// function array (myNewArray) {
//     console.log(`${myNewArray}`)
// }


// array([200, 300, 400])
